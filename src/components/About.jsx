import Tilt from 'react-tilt'

import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc/index'

const About = () => {
  return (
    <>
      <motion.div variants={ textVariant()}>
        <p className={styles.sectionSubText }>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I have experience in developing web applications and servers using languages such as JavaScript and TypeScript, and technologies such as Node.js and Spring. I have also worked with tools such as Docker, NoSQL/SQL databases, cloud platforms such as GCP and Azure, and CI/CD tools such as Jenkins.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => {
            return <ServiceCard key={index} index={index} title={service.title} icon={service.icon }></ServiceCard>
          })
        }
      </div>
    </>
  )
}

const ServiceCard = ({index, title, icon}) => {

  return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly"
          >
            <img src={icon} alt={title}
              className="w-16 h-16 object-contain" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
  )
}

export default SectionWrapper(About,"about")