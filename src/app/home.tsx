import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "./components/hero";
import About from "./components/about";

const Home: React.FC = () => {
  return (
    <main className="main-container">
      <div className="fullpage-section">
        <Hero />
      </div>
      <div className="fullpage-section">
        <About />
      </div>
      <div className="fullpage-section">
        <p>Section 3</p>
      </div>
    </main>
  );
};

export default Home;
