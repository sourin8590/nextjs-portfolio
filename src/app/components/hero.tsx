"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FileText } from "lucide-react";

export default function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10"
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1.03}
        transitionSpeed={800}
        className="w-full max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/10 dark:bg-black/20 backdrop-blur-2xl
            border border-white/20 rounded-3xl shadow-xl
            p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center"
        >
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-100 mb-4">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
              Sourin Ghanty
            </span>
          </h1>

          {/* Typing Effect */}
          <TypeAnimation
            sequence={[
              "Innovative Full-Stack Developer 💻",
              2000,
              "Passionate React & Node.js Creator ⚡",
              2000,
              "Next.js & Modern Web Specialist ✨",
              2000,
              "AI & Machine Learning Explorer 🤖",
              2000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            className="text-base sm:text-lg lg:text-xl font-medium text-gray-300"
          />

          {/* Short Bio */}
          <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
            Passionate about building scalable web apps, modern UI/UX, and
            exploring intelligent systems. Always eager to learn, innovate, and
            bring ideas to life 🚀
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            <button
              onClick={() => handleScroll("projects")}
              className="px-5 py-2.5 text-sm sm:text-base rounded-lg font-medium
                bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-md
                hover:shadow-[0_0_15px_rgba(156,163,175,0.6)]
                transition-all duration-300 cursor-pointer"
            >
              View My Work
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="px-5 py-2.5 text-sm sm:text-base rounded-lg font-medium
                border border-gray-500/60 text-gray-300 hover:text-white
                hover:bg-gray-700/40 hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]
                transition-all duration-300 cursor-pointer"
            >
              Get in Touch
            </button>

            <a
              href="https://drive.google.com/file/d/1LTjsJ_TFj9iiKhDzrSuxOiLln0SaV4pW/view?usp=sharing"
              target="_blank"
              className="px-5 py-2.5 text-sm sm:text-base rounded-lg font-medium
                flex items-center gap-2
                border border-gray-500/50 text-gray-300
                hover:border-gray-300 hover:text-white hover:bg-gray-700/30
                hover:shadow-[0_0_12px_rgba(255,255,255,0.25)]
                transition-all duration-300"
            >
              <FileText size={18} /> Resume
            </a>
          </div>
        </motion.div>
      </Tilt>
    </section>
  );
}
