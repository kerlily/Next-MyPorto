'use client'

import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa' 

import { motion } from 'framer-motion'
import { scaleIn } from '../utils/animations'

const Hero = () => {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w3xll mx-auto text-center'>
            <motion.div
            {...scaleIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col items-center mb-4'>

            <Image src="/profile.avif" alt="profile" width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'/>
            </motion.div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6'>Hello, Im <span className='text-primary'>Farhan</span></h1>

            <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Full Stack Web Developer | 2D Animator</p>

            <div className='flex justify-center space-x-4 mb-8'>
                <Link href="https://github.com/farhanporto" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '>
                    <FaGithub/>
                </Link>
                <Link href="https://github.com/farhanporto" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '>
                    <FaLinkedinIn/>
                </Link>
                <Link href="https://github.com/farhanporto" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300 '>
                    <FaInstagram/>
                </Link>
            </div>

            <div className='flex flex-col md:flex-row  justify-center gap-4'>
                <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300'>View Project</Link>

                <Link href="/projects" className='bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:text-gray-800 hover:bg-gray-300 transition-colors duration-300'>Contact me</Link>
            </div>
        </div>
    </section>
  )
}

export default Hero