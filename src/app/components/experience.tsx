"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const experiences = [
  {
    role: "Technical Intern",
    company: "Maantic Inc.",
    duration: "Aug 2024 - Dec 2024",
    description:
      "Developed and deployed a Random Forest model for 30-day hospital readmission prediction with 77% accuracy afterhyperparameter tuning.",
  },
  {
    role: "Hackathon Winner",
    company: "College Hackathons",
    duration: "2024 - 2025",
    description:
      "Won 2 hackathons focusing on full-stack apps, AI projects, and team collaboration.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col items-center px-6 sm:px-10 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-12 text-center"
      >
        My <span className="text-purple-400">Experience</span>
      </motion.h2>

      <div className="w-full max-w-4xl flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1000}
              scale={1.05}
              transitionSpeed={600}
              className="w-full"
            >
              <div
                className="w-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl
                  hover:shadow-[0_25px_50px_rgba(147,51,234,0.3)]
                  transition-transform duration-500 cursor-pointer"
              >
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-purple-400 font-medium mt-1">{exp.company}</p>
                <span className="text-gray-500 text-sm">{exp.duration}</span>
                <p className="mt-4 text-gray-300 text-base leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
