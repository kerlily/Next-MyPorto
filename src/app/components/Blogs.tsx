import { blogs } from '@/contents/blogs'
import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaClock } from 'react-icons/fa'


const Blogs = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
            Certification
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                blogs.map((blog) => (
                    <article key={blog.title} className="bg-gray-100 dark:bg-dark/50 rounded-lg shadow-md p-6">
                        <Link href={`/blogs/${blog.slug}`}>{
                            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">{blog.title}</h3>
                                
                            }
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4"> 
                            <span className='flex items-center'>
                                <FaCalendar className='mr-2' />
                                {new Date(blog.date).toLocaleDateString()}
                            </span>  
                            <span className='flex items-center'>
                                <FaClock className='mr-2' />
                                {blog.readTime}
                            </span>
                        </div>
                    </article>
                ))
            }
        </div>

<div className="text-center mt-12 ">
        <Link href="blogs" className="bg-primary inline-block  text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-300">View all Certification</Link>
      </div>
    </section>
  )
}

export default Blogs