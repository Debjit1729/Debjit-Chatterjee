import React from 'react'
import {PROJECTS} from "../constants"
import Card from './Card' 
import {motion} from "framer-motion"


const containerVarients = {
  hidden: {opacity: 0, y: -20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4
    },
  }
}

const itemVarients = {
  hidden: {opacity: 0, y: 0.8},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5
    },
  }
}

const Project = () => {
  return (
    <div id='projects'>
        <motion.h2
        initial= "hidden"
        whileInView= "visible"
        variants= {containerVarients}
        className='mt-20 text-center text-4xl font-semibold'>Projects
        </motion.h2>
        <motion.div
        initial= "hidden"
        whileInView= "visible"
        variants= {containerVarients}
        className='flex flex-wrap justify-center py-8'>
           {PROJECTS.map((project, index) =>(
                <motion.div
                variants={itemVarients}
                key={index}>
                    <Card image={project.image}
                        title={project.title}
                        subtitle={project.subtitle}
                        link={project.link} />
                </motion.div>
           ))} 
        </motion.div>
    </div>
  )
}

export default Project
