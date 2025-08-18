// app/page.tsx
"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import BackgroundEffect from "./deigns_effect/bgscroll";
import Hero from "./components/hero";
import About from "./components/about";
import Home from "./home";
import Achievements from "./components/achievement";
import Education from "./components/education";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full overflow-hidden">
      <Navbar/>
      {/* <Home/> */}
      {/* Hero Section */}
      <Hero/>
      {/* About Section */}
      <About/>

      {/* Skills Section */}
      <Skills/>

      {/* Education Section */}
      <Education/>

      {/* Projects Section */}
      <Projects/>

      {/* Experience Section */}
      <Experience/>

      {/* Achievements Section */}
      <Achievements/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </main>
  );
}
