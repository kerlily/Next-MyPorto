'use client'

import { blogs } from '@/contents/blog'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../utils/animations'
import Image from 'next/image'
export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Certification
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {blogs.map((blog) => (
         <motion.article
                     key={blog.title}
                     className="bg-gray-100 dark:bg-dark/50 rounded-lg shadow-md p-6"
                     variants={fadeInUp}
                     {...cardHoverSmall}
                   >
                     
                    {blog.image && (
                                   <div className="mb-4 w-full h-40 relative">
                                     <Image
                                       src={blog.image}
                                       alt={blog.title}
                                       fill
                                       className="object-cover rounded-md"
                                       sizes="(max-width: 768px) 100vw, 33vw"
                                     />
                                   </div>
                                 )}
                                 <a href={blog.slug}
                                   target="_blank"
                                   rel="noopener noreferrer">
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">{blog.title}</h3>
                        </a>
                                 <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                                
                   </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
