'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa' 

import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../utils/animations'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
      <div className='max-w-3xl mx-auto text-center'>

        {/* Profile Image */}
        <motion.div
          {...scaleIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col items-center mb-4'
        >
           <Image src="/profile.avif" alt="profile" width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-4xl md:text-6xl font-bold mb-6'
        >
          Hello, I&apos;m <span className='text-primary'>Farhan</span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'
        >
          Junior Web Developer
        </motion.p>

        {/* Social Icons */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='flex justify-center space-x-4 mb-8'
        >
          <Link href="https://github.com/kerlily" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-farhan-1b2659310/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
            <FaLinkedinIn />
          </Link>
          <Link href="https://www.instagram.com/pahhun_/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
            <FaInstagram />
          </Link>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 1 }}
          className='flex flex-col md:flex-row justify-center gap-4'
        >
          <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300'>
            View Project
          </Link>

          <Link href="/contact" className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors duration-300'>
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
