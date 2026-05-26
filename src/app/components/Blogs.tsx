'use client'

import { blogs } from '@/contents/blogs'
import React, { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  cardHoverSmall
} from '../utils/animations'
import Image from 'next/image'

const Blogs = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedImage(null)
  }, [])

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage, handleKeyDown])

  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        {...fadeInDown}
      >
        Certification
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              <div
                className="mb-4 w-full h-40 relative cursor-zoom-in group"
                onClick={() => setSelectedImage({ src: blog.image!, alt: blog.title })}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-md transition-colors duration-300 flex items-center justify-center">
                  
                </div>
              </div>
            )}

            {/* Judul tanpa link */}
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {blog.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        {...fadeInUp}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="/blogs"
          className="bg-primary inline-block text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300"
        >
          View all Certification
        </Link>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              className="relative z-10 max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="object-contain rounded-lg shadow-2xl max-h-[85vh] w-auto mx-auto"
                style={{ maxHeight: '85vh' }}
              />
              <p className="text-center text-white/80 text-sm mt-3">{selectedImage.alt}</p>
            </motion.div>

            <button
              className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blogs