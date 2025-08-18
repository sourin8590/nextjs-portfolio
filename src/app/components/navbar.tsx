"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Education", href: "education" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Achievements", href: "achievements" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Smooth scroll
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  // Track which section is active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% of section should be visible
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <div
        className="mx-auto w-full max-w-6xl flex justify-between items-center px-6 py-3 rounded-2xl
        bg-white/10 dark:bg-gray-900/20 backdrop-blur-3xl shadow-2xl
        border border-white/20 dark:border-gray-700/40"
      >
        {/* Left - Logo */}
        <a
          onClick={() => handleScroll("hero")}
          className="cursor-pointer text-xl sm:text-2xl font-extrabold 
          bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          SG
        </a>

        {/* Center - Nav Links */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className={`cursor-pointer relative font-medium px-2 py-1 transition group 
                ${
                  active === link.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-gray-100"
                }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                ${
                  active === link.href
                    ? "w-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                    : "w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500"
                }`}
              />
              <span
                className="absolute inset-0 rounded-md border border-transparent 
                transition-all duration-300 
                group-hover:border-blue-400/60 group-hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]"
              />
            </button>
          ))}
        </div>

        {/* Right - Hire Me Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleScroll("contact")}
            className="px-4 py-2 rounded-xl font-semibold text-white
            bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg
            hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-100"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mx-auto mt-3 w-full max-w-6xl rounded-2xl 
              bg-white/10 dark:bg-gray-900/20 backdrop-blur-3xl shadow-2xl
              border border-white/20 dark:border-gray-700/40
              px-6 py-6 space-y-4"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                onClick={() => handleScroll(link.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`block w-full text-left font-medium px-2 py-1 relative group
                  ${
                    active === link.href
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-gray-100"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                  ${
                    active === link.href
                      ? "w-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                      : "w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-500"
                  }`}
                />
              </motion.button>
            ))}

            {/* Hire Me inside mobile menu */}
            <motion.button
              onClick={() => handleScroll("contact")}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="w-full px-4 py-2 rounded-xl font-semibold text-white
              bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg
              hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
