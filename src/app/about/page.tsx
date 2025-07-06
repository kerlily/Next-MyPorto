'use client'

import { motion } from 'framer-motion'
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  scaleIn,
  cardHoverSmall,
} from '../utils/animations'
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}
        transition={{ ...fadeInDown.transition, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* Skills Section */}
      <section className="mb-16">
        <motion.h2 className="section-title" {...fadeInDown}>
          Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[{
            icon: <FaCode className="h-8 w-8 text-primary mb-4" />,
            title: 'Frontend',
            items: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
          }, {
            icon: <FaLaptopCode className="h-8 w-8 text-primary mb-4" />,
            title: 'Backend',
            items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
          }, {
            icon: <FaGraduationCap className="h-8 w-8 text-primary mb-4" />,
            title: 'Tools & Others',
            items: ['Git / GitHub', 'Docker', 'AWS', 'CI/CD'],
          }].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <motion.div {...scaleIn}>
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <ul className="text-secondary space-y-2">
                {skill.items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <motion.h2 className="section-title" {...fadeInDown}>
          Experience
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {[
            {
              title: 'Senior Full Stack Developer',
              company: 'Company Name • 2020 - Present',
              desc: [
                'Led development of multiple web applications using React and Node.js',
                'Implemented CI/CD pipelines reducing deployment time by 50%',
                'Mentored junior developers and conducted code reviews',
              ],
            },
            {
              title: 'Full Stack Developer',
              company: 'Previous Company • 2018 - 2020',
              desc: [
                'Developed and maintained RESTful APIs',
                'Built responsive user interfaces with modern JavaScript frameworks',
                'Optimized database queries improving performance by 40%',
              ],
            },
          ].map((job, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-primary mb-2">{job.company}</p>
              <ul className="text-secondary list-disc list-inside space-y-2">
                {job.desc.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Education Section */}
      <section>
        <motion.h2 className="section-title" {...fadeInDown}>
          Education
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-primary mb-2">University Name • 2014 - 2018</p>
            <p className="text-secondary">
              Graduated with honors. Focused on software engineering and web development.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
