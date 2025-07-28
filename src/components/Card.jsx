// import React from 'react'

// const Card = ({image, title, subtitle, link}) => {
//   return (
//     <a href={link} className='m-2 block max-w-72 overflow-hidden rounded-lg'>
//         <div className='relative'>
//             <img className='w-full' src={image} alt={title} />
//             <div className='flex flex-col justify-between p-4 text-white'>
//                 <h2 className='mb-2 text-2xl font-bold'>{title}</h2>
//                 <p className='mb-4 text-sm font-medium'>{subtitle}</p>
//             </div>
//         </div>
//     </a>
//   )
// }

// export default Card


import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ image, title, subtitle, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="m-2 block max-w-72 overflow-hidden  rounded-3xl"
    >
      <div className="relative">
        {/* Only the image is animated */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />

        <div className="p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default Card
