"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center mx-auto"
      >
        {/* Left - Profile Image */}
        <div className="flex justify-center w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <Image
              src="/about-img.avif"
              alt="Sourin Ghanty"
              fill
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </div>

        {/* Right - About Text */}
        <div className="w-full text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
            I’m <span className="text-white font-semibold">Sourin Ghanty</span>,
            a passionate{" "}
            <span className="text-purple-400">Full-Stack Developer</span> and{" "}
            <span className="text-blue-400">Machine Learning Enthusiast</span>.
            I love crafting beautiful user experiences, building scalable apps,
            and experimenting with intelligent systems.
          </p>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
            With expertise in <span className="text-white">MERN stack</span>,{" "}
            <span className="text-white">NextJs</span>, and{" "}
            <span className="text-white">ML models</span>, I aim to bridge
            creativity with technology, delivering impactful solutions 🚀
          </p>

          {/* Highlight Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white">10+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white">2+</h3>
              <p className="text-gray-400 text-sm">Years Coding Exp.</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-bold text-white">2</h3>
              <p className="text-gray-400 text-sm">Hackathons</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
