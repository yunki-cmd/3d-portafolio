import React,{useState, useEffect} from 'react'
import Tilt from 'react-tilt'

import { motion } from 'framer-motion'

import { styles } from '../style'
import { github, webPage } from '../assets'
import { SectionWrapper } from '../hoc/index'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Project lists
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project, index) => {
            return <ProjectCard key={`project-${index}`}
              index={index}
              {...project}
            />
          })
        }

      </div>
    </>
  )
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link, page_web_url }) => {

  const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
 
     /* una consulta de medios que se activará cuando el ancho de la ventana del navegador sea menor o igual a 500 píxeles, y luego utiliza el objeto MediaQueryList resultante para comprobar si la consulta se cumple actualmente. */
 
     const mediaQueary = window.matchMedia('(max-width:550px')
     
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
    <motion.div variants={isMobile ? fadeIn("up", "spring", index * 0.5, 0.75) : ''}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className='absolute inset-0 flex justify-end m-3 card_img_hover'>
          <div onClick={() => {
            window.open(source_code_link, "_blank");
          }}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out delay-100 hover:scale-125'
          >
            <img src={github} alt="github"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          {/* page link */}
          <div onClick={() => {
            window.open(page_web_url, "_blank");
          }}
            className='bg-white border border-black w-10 h-10 mx-2 rounded-full flex justify-center items-center cursor-pointer transition ease-in-out delay-100 hover:scale-125'
          >
            <img src={webPage} alt="github"
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map(tag => {
              return <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            })
          }
        </div>

      </Tilt>
    </motion.div>
  )
}

export default SectionWrapper(Works, 'works')