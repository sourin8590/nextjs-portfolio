"use client";

import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      school: "Ramkrishna Mahato Government Engineering College",
      year: "2021 – 2025",
      details:
        "Focused on Full-Stack Development, Machine Learning, and DSA. Active in hackathons and coding contests.",
    },
    {
      degree: "Higher Secondary (Science)",
      school: "Raniganj High School",
      year: "2018 – 2020",
      details:
        "Majored in Physics, Chemistry, and Mathematics.",
    },
    {
      degree: "Secondary Education",
      school: "Raniganj High School",
      year: "2018",
      details:
        "Strong foundation in mathematics and logical problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-100 text-center mb-16"
        >
          My <span className="text-purple-400">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-500/40 ml-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mb-12 ml-6 relative"
            >
              {/* Dot */}
              <span className="absolute -left-[38px] top-2 w-6 h-6 rounded-full bg-purple-500 border-4 border-gray-900 shadow-[0_0_15px_rgba(168,85,247,0.7)]" />

              {/* Card */}
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-purple-400 font-medium">{edu.school}</p>
                <p className="text-gray-400 text-sm mb-3">{edu.year}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
