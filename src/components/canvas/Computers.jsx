import {Suspense,useEffect, useState} from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader.jsx'



const Computers = ({ ismobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      {/* se añade un focu y se setea la position */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={ismobile?0.7: 0.75 }
        position={ismobile ? [0,-5,-2.2] :[0, -4.15, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  )
}

const ComputersCanvas = () => {

   // se añade la funcionalidad para version de tipo mobile(responsive)
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
 
     /* una consulta de medios que se activará cuando el ancho de la ventana del navegador sea menor o igual a 500 píxeles, y luego utiliza el objeto MediaQueryList resultante para comprobar si la consulta se cumple actualmente. */
 
     const mediaQueary = window.matchMedia('(max-width:870px')
     
     // se devuleve tru o false
     setIsMobile(mediaQueary.matches)
 
     const handlerMediaQuearyChange = (event) => {
       setIsMobile(event.matches)
     }
 
     mediaQueary.addEventListener('change', handlerMediaQuearyChange)
 
     return () => {
       mediaQueary.removeEventListener('change',handlerMediaQuearyChange)
     }
 
   }, [])
  
  return (
    <Canvas frameloop='demand'
      shadows
      camera={
      { position: [20, 3, 5], fov: 25 }
    }
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
          <Computers ismobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas