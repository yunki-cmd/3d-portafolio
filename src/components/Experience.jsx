import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { experiences } from '../constants'

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExpeerienceCard key={index} experience={experience} />
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

const ExpeerienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{
        borderRigth: '7px solid #232631'
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.date}</h3>
        <p className='text-secondary text-[16px] font-semibold'>{experience.company_name}</p>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => {
            return <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          })}

        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export default SectionWrapper(Experience, 'work')