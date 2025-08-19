"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        const err = await res.json();
        toast.error("Failed to send message: " + (err.error || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: <Mail size={24} />, text: "souringhanty.20@gmail.com", color: "from-purple-500 to-pink-500" },
    { icon: <Phone size={24} />, text: "+91 79087 61903", color: "from-blue-400 to-purple-600" },
    { icon: <MapPin size={24} />, text: "Durgapur, West Bengal, India", color: "from-green-400 to-teal-500" },
  ];

  const socialItems = [
    { icon: <Github size={20} />, href: "https://github.com/sourin8590", color: "bg-gray-800/40 hover:bg-gray-700/50" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/sourin-ghanty", color: "bg-blue-600/30 hover:bg-blue-500/40" },
    { icon: <Twitter size={20} />, href: "https://x.com/sourin_123", color: "bg-blue-400/30 hover:bg-blue-300/40" },
    { icon: <Instagram size={20} />, href: "https://instagram.com/sourin__ghanty", color: "bg-pink-500/30 hover:bg-pink-400/40" },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20"
    >
      <Toaster position="top-right" reverseOrder={false} />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-16 text-center tracking-wide"
      >
        Get in <span className="text-purple-400">Touch</span>
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {contactItems.map((item, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 cursor-pointer`}
              whileHover={{ scale: 1.03, boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }}
            >
              <motion.div
                className={`p-4 rounded-full bg-gradient-to-br ${item.color} text-white shadow-lg`}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <p className="text-gray-100 text-lg font-medium break-words">{item.text}</p>
            </motion.div>
          ))}

          {/* Social Buttons */}
          <div className="flex items-center gap-6 mt-8">
            {socialItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                className={`p-4 rounded-full backdrop-blur-xl border border-white/20 shadow-lg text-white ${item.color} flex items-center justify-center`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_12px_36px_rgba(0,0,0,0.25)]"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-gray-100 placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-400 transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-gray-100 placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-400 transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full px-5 py-4 rounded-xl bg-white/5 text-gray-100 placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-400 transition-all duration-300"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
