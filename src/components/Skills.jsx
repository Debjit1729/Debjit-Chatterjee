import React from 'react'
import {SKILLS} from "../constants"
import {motion} from "framer-motion"


const containerVarients = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    },
  }
}

const itemVarients = {
  hidden: {opacity: 0, x: -20},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    },
  }
}

const Skills = () => {
  return (
    <div className='container mx-auto' id="skills">
        <h2 className='mb-12 mt-20 text-center text-4xl font-semibold'>Skills</h2>
        <motion.div
        initial= "hidden"
        whileInView= "visible"
        variants= {containerVarients}
        className='mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20'>
            {SKILLS.map((skill, index) =>(
                <motion.div
                variants={itemVarients}
                key={index} className='mb-8 flex items-center justify-between'>
                    <div className='flex items-center'>
                        {skill.icon}
                        <h3 className='px6 text-xl lg:text-3xl'>{skill.name}
                        </h3>
                    </div>
                    <div className='text-md border-b-2 border-yellow-400 font-semibold lg:text-xl'>
                        <span>{skill.experience}</span>
                    </div>
                </motion.div>
                
                
            ))}
        </motion.div>
      
    </div>
  )
}

export default Skills
