import { projects } from "@/contents/projects";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            <div>
                {
                    project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tech}
                        </span>
                    ))
                }

            </div>
            <div>
                <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 mt-4">
                    <FaGithub className="w-5 h-5" /> <span>Code</span>
                </Link>
                <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 mt-4">
                    <FiExternalLink className="w-5 h-5" /> <span>Live Demo</span>
                </Link>
            </div>
          </article>
        ))}
      </div>

      
    </section>
  );
}

export default Projects;
