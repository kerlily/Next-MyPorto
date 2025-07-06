"use client";

import { motion } from "framer-motion";
import {
  fadeInDown,
  fadeInUp,
  staggerContainer,
  scaleIn,
  cardHoverSmall,
} from "../utils/animations";
import { FaCode, FaLaptopCode, FaCogs } from "react-icons/fa";
import { FaCodeMerge, FaToolbox } from "react-icons/fa6";

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
          I&apos;m a passionate Full Stack Developer with expertise in building
          modern web applications. With a strong foundation in both frontend and
          backend technologies.
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
          {[
            {
              icon: <FaCode className="h-8 w-8 text-primary mb-4" />,
              title: "Frontend",
              items: [
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Bootstrap",
                "HTML5 / CSS3",
              ],
            },
            {
              icon: <FaLaptopCode className="h-8 w-8 text-primary mb-4" />,
              title: "Backend",
              items: ["Node.js", "Express", "MongoDB", "MySQL"],
            },
            {
              icon: <FaCodeMerge className="h-8 w-8 text-primary mb-4" />,
              title: "Programming Languages",
              items: ["JavaScript", "PHP", "Python", "Java"],
            },
            {
              icon: <FaCogs className="h-8 w-8 text-primary mb-4" />,
              title: "Frameworks",
              items: ["Laravel", "CodeIgniter"],
            },
            {
              icon: <FaToolbox className="h-8 w-8 text-primary mb-4" />,
              title: "Tools & Others",
              items: ["Git / GitHub", "Postman", "Construct 3 & 2", 'Unity'],
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
              variants={fadeInUp}
              {...cardHoverSmall}
            >
              <motion.div {...scaleIn}>{skill.icon}</motion.div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <ul className="text-secondary space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
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
              title: "Independent Study Full Stack Developer",
              company: "NFAcademy • February 2025 - July 2025",
              desc: [
      "Developed a full-stack Book Sales application using Laravel and React with complete authentication features.",
      "Led a team project to build an AI-powered chatbot integrated into a full-stack website.",
      "Successfully passed the national certification exam (BNSP) in Junior Web Developer."
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
                {job.desc.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
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
              Bachelor’s Degree in Informatics Engineering (Ongoing)

            </h3>
            <p className="text-primary mb-2">Institute Widya Pratama • 2022 - present</p>
            <p className="text-secondary">
              Currently pursuing a Bachelor`s degree in Informatics Engineering at Institute Widya Pratama, with a focus on software engineering and web development.

            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-6"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-2">
              Exchange Student Program 
            </h3>
            <p className="text-primary mb-2">Universitas Hassanuddin • February 2024 - July 2024</p>
            <p className="text-secondary">
              Exchange student participating in one semester of the Informatics Engineering program at Universitas Hassanuddin, Makassar, Indonesia. Focused on 3D modeling and game development.

            </p>
          </motion.div>
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md mt-6"
            variants={fadeInUp}
          >
            <h3 className="text-xl font-semibold mb-2">
              High School Diploma
            </h3>
            <p className="text-primary mb-2">SMA Negeri 2 Batang • 2019 - 2022</p>
            <p className="text-secondary">
              Graduated with honors, with a focus on Mathematics and Physics. Active member of the English Club and Cinematography Club.

            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
