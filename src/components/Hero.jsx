import {motion} from 'framer-motion'

import { styles } from '../style'
import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='realtive w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40
          violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'> Yun Qiang</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a self-taught web developer who loves exploring new technologies. Passionate and driven, I'm always looking for ways to improve and push the boundaries of what's possible in web development.
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className='absolute -bottom-24 xs:-bottom-16 w-full flex justify-center items-center'>
        <Footer />
        <a href="#about">
          <div className='xs:w-[35px] xs:h-[64px] w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start xs:p-2 p-1'>
            <motion.div
              animate={{
              y:[0,34,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="xs:py-4 -bottom-full xs:bottom-0 xs:text-xs text-[10px] xs:left-[40%]" style={{ fontFamily: "Arial", position: "absolute", width: "100%"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-gray-400 text-center md:text-left mb-2 md:mb-0">
          This website is inspired by{" "}
          <a
            href="https://www.youtube.com/c/javascriptmastery"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            Master JavaScript
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Hero