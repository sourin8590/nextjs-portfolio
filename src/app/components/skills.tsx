"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90, color: "bg-blue-500" },
      { name: "JavaScript / TypeScript", level: 85, color: "bg-yellow-400" },
      { name: "Tailwind CSS", level: 80, color: "bg-cyan-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 85, color: "bg-green-500" },
      { name: "REST APIs", level: 80, color: "bg-emerald-400" },
      { name: "Authentication (JWT, OAuth)", level: 75, color: "bg-teal-400" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", level: 85, color: "bg-emerald-500" },
      { name: "SQL / PostgreSQL", level: 75, color: "bg-indigo-400" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Machine Learning (ML)", level: 70, color: "bg-purple-500" },
      { name: "Data Structures & Algorithms", level: 80, color: "bg-pink-500" },
      { name: "Git / GitHub", level: 85, color: "bg-gray-400" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 w-full"
    >
      <div className="w-[80%]">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-100 text-center mb-16"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h2>

        {/* Full-width Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl hover:shadow-purple-500/20 transition-all w-full"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                {category.title}
              </h3>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-200 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/40 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: idx * 0.2,
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
