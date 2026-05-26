'use client'

import { blogs } from '@/contents/blog'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer, cardHoverSmall } from '../utils/animations'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

export default function Blogs() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  // Tutup lightbox pas tekan Escape
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
              <div
                className="mb-4 w-full h-40 relative cursor-pointer group"
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
              <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">
                {blog.title}
              </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
          </motion.article>
        ))}
      </motion.div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)} // klik backdrop = tutup
          >
            {/* Backdrop blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            {/* Gambar container */}
            <motion.div
              className="relative z-10 max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // cegah klik gambar nutup popup
            >
              <div className="relative w-full" style={{ maxHeight: '85vh' }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="object-contain rounded-lg shadow-2xl max-h-[85vh] w-auto mx-auto"
                  style={{ maxHeight: '85vh' }}
                />
              </div>

              {/* Caption */}
              <p className="text-center text-white/80 text-sm mt-3">{selectedImage.alt}</p>
            </motion.div>

            {/* Tombol tutup */}
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
    </div>
  )
}