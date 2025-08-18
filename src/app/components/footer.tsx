"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 sm:px-10 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Logo & Thank You Text */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
            SG
          </h1>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Thank you for visiting my portfolio! <br /> Let's build something amazing together 🚀
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={20} />, href: "https://github.com/sourin8590" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/sourin-ghanty" },
            { icon: <Twitter size={20} />, href: "https://x.com/sourin_123" },
            { icon: <Instagram size={20} />, href: "https://instagram.com/sourin__ghanty" },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              className="p-3 rounded-full border border-white/20 text-white flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
