import React, { useState } from 'react';
import {PROFILE} from "../constants";
import profilePic from "../assets/college.jpg";
import {motion} from "framer-motion"; 




const HeroSection = () => {

  return (
    <>
        <div className='relative flex min-h-screen items-end justify-center' id="hero">
            <motion.img
              src={profilePic}
              alt={PROFILE.name}
              className='absolute inset-0 z-10 h-full w-full object-cover'
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 1}} />
            <motion.div
               className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1}}></motion.div>
            <motion.div
             initial={{opacity: 0}}
             whileInView={{opacity: 1}}
             transition={{duration: 3, delay: 1}}
             className='z-20 mx-auto max-w-3xl px-4 pb-20 text-left sm:text-left'>
                <motion.h1 className='text-3xl font-semibold uppercase tracking-wide sm:text-5xl md:text-6xl lg:text-7xl'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}>
                    {PROFILE.name}
                </motion.h1>
                <motion.p className='pt-4 text-base font-medium sm:text-lg md:text-xl'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 1.5 }}>
                  {PROFILE.info}</motion.p>
                <motion.a className='bg-stone-50 text-stone-900 p-3 lg:p-4 mt-8 inline-block rounded-2xl'
                href={PROFILE.resumeLink}
                download
                rel='noopener noreferrer'
                target='_blank'
                initial={{ opacity: 0, y: 40}}
                whileInView={{ opacity: 0.5, y: 0, scale: 1.1 }}
                transition={{ duration: 1.7, delay: 1.5}}
                whileHover={{scale: 1.2,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                >
                  {PROFILE.resumeLinkText}
                </motion.a>
            </motion.div>
        </div>
    </>
  )
}

export default HeroSection


