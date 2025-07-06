'use client'

import { blogs } from '@/contents/blogs'
import Link from 'next/link'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

export default function Blogs() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Certification
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                  {blog.title}
                </Link>
              </h2>

              <p className="text-secondary mb-4">
                {blog.excerpt}
              </p>

              <div className="flex items-center gap-4 text-sm text-secondary">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="h-4 w-4" />
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaClock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
