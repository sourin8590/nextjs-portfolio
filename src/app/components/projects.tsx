"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "A scalable MERN stack platform for online courses with authentication, payment integration, and responsive UI.",
      image: "/project/studynotion-project.png",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sourin8590/E-Learning-frontend",
      demo: "https://elearning-platform-plum.vercel.app/",
    },
    {
      title: "Connectalk",
      description:
        "A real-time chat application that allows users to connect, message instantly, and enjoy smooth, interactive conversations with friends and groups.",
      image: "/project/connectalk-project.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/sourin8590/chat-app-backend",
      demo: "https://connectalk.vercel.app/",
    },
    {
      title: "Hospital Readmission Predictor",
      description:
        "A predictive model that analyzes patient data to estimate the likelihood of hospital readmission within 30 days, helping healthcare providers improve patient care and reduce costs.",
      image: "/project/hospital-readmission-project.png",
      tech: ["Python", "Flask", "ReactJs"],
      github: "https://github.com/sourin8590/Hospital-readmission-prediction-in-30-days",
      demo: "",
    }
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-16"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-xl
                transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.3)]
                cursor-pointer group"
            >
              {/* Overlay gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-3xl"></div>

              {/* Image */}
              <div className="relative w-full h-56 sm:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 z-10 relative">
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-purple-500/20 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600/80 text-white text-sm hover:bg-purple-700/90 transition"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
