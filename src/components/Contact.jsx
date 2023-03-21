
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import Earthcanva from './canvas/Earth'
import SectionWrapper from '../hoc/SectionWrapper'
import {githubContact,linkendi} from "../assets/index"


const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <Card />
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}>
        <div
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <Earthcanva />
        </div>
      </motion.div>
    </div>
  )
}

const Card = () => {
  return (
    <div className="bg-gray-800 h-full shadow-lg rounded-lg overflow-hidden flex justify-center items-center text-center">
      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-white">¡Sígueme en mis redes sociales!</h2>
        <p className="text-white text-sm mt-1">Encuéntrame en:</p>
        <div className="flex justify-center items-center mt-2">
          <a href="https://www.linkedin.com/in/tu-perfil-de-LinkedIn/" target="_blank" rel="noopener noreferrer" className="mr-4 text-white hover:text-white">
            <img src={githubContact} alt="github Contact" className='w-9 h-9' />
          </a>
          <a href="https://github.com/tu-perfil-de-GitHub" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white">
            <img src={linkendi} alt="linkendi contact" className='h-9 w-9' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");