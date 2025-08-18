"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Trophy, Code, Award } from "lucide-react";

const achievements = [
  {
    title: "LeetCode Rating",
    value: "1764",
    icon: <Code size={28} className="text-purple-400" />,
    description: "High problem-solving skills with consistent practice on algorithms.",
  },
  {
    title: "CodeChef Rating",
    value: "3★ (1626)",
    icon: <Code size={28} className="text-blue-400" />,
    description: "Strong competitive programming background with advanced problem-solving.",
  },
  {
    title: "Hackathons Won",
    value: "2",
    icon: <Trophy size={28} className="text-yellow-400" />,
    description: "Successfully led teams to win multiple college-level hackathons.",
  },
  {
    title: "Certifications",
    value: "AI/ML, Web Dev, DSA",
    icon: <Award size={28} className="text-green-400" />,
    description: "Certified in full-stack development, AI/ML, and data structures.",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="w-full min-h-screen flex flex-col items-center px-6 sm:px-10 py-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-12 text-center"
      >
        My <span className="text-purple-400">Achievements</span>
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000} // slower tilt
              className="w-full"
            >
              <div
                className="w-full h-[320px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl
                  p-6 shadow-xl hover:shadow-[0_25px_50px_rgba(147,51,234,0.3)]
                  transition-transform duration-700 cursor-pointer flex flex-col items-center text-center"
              >
                {/* Circular icon with spinning on hover */}
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-4
                  transition-transform duration-1000 group-hover:rotate-[360deg]">
                  {ach.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white">{ach.title}</h3>
                <p className="text-purple-400 font-bold mt-1">{ach.value}</p>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
