import React from 'react'
import {ABOUT} from "../constants"
import {motion} from "framer-motion"

// const About = () => {
//   return (
//     <div className='container mx-auto' id='about'>
//       <h2 className='mt-20 text-center text-4xl font-semibold'>
//         About
//       </h2>
//       <h3 className='p-4 text-6xl uppercase lg:text-[8rem]'>
//         {ABOUT.text1}
//       </h3>
//       <p className='mr-24 pl-4 text-lg leading-loose'>
//         {ABOUT.text2}
//       </p>
//     </div>
//   )
// }

const About = () => {
  return (
    <div className='container mx-auto px-4 py-16 text-gray-200' id='about'>
      <motion.h2
       initial={{opacity: 0, y: -60}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 1, delaiy:2}}
       className='text-center text-3xl font-semibold sm:text-4xl'>
        About
      </motion.h2>

      <motion.h3
      initial={{opacity: 0, x: -100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      className='p-4 text-4xl uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem]'>
        {ABOUT.text1}
      </motion.h3>

      <motion.p
      initial={{opacity: 0, x: 100}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 1}}
      className=' mx-auto px-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300'>
        {ABOUT.text2}
      </motion.p>
    </div>
  )
}

export default About
