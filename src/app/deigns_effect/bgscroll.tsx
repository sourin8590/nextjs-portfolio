"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const CUBES = 80; // Number of cubes floating

type CubeData = {
  x: number;
  y: number;
  z: number;
  size: number;
  floatSpeed: number;
};

export default function BackgroundEffect() {
  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Map to parallax range
  const rotateX = useTransform(springY, [-200, 200], [10, -10]);
  const rotateY = useTransform(springX, [-200, 200], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate scattered cubes safely
  const [cubes, setCubes] = useState<CubeData[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return; // guard for SSR

    const generated = Array.from({ length: CUBES }, () => ({
      x: (Math.random() - 0.5) * window.innerWidth * 1.5,
      y: (Math.random() - 0.5) * window.innerHeight * 1.5,
      z: (Math.random() - 0.5) * 800,
      size: 12 + Math.random() * 20,
      floatSpeed: 6 + Math.random() * 6,
    }));

    setCubes(generated);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center"
      style={{ perspective: 1200, rotateX, rotateY }}
    >
      {cubes.map((cube, i) => (
        <FloatingCube key={i} {...cube} />
      ))}
    </motion.div>
  );
}

function FloatingCube({ x, y, z, size, floatSpeed }: CubeData) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        x,
        y,
        z,
        transformStyle: "preserve-3d",
      }}
      animate={{
        y: [y, y + 40, y],
        x: [x, x + 20, x],
      }}
      transition={{
        repeat: Infinity,
        duration: floatSpeed,
        ease: "easeInOut",
      }}
    >
      <div
        className="rounded-lg border"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(145deg, rgba(40,40,40,0.6), rgba(0,0,0,0.9))`,
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow:
            "0px 8px 16px rgba(0,0,0,0.6), inset -1px -1px 4px rgba(0,0,0,0.7), inset 1px 1px 4px rgba(255,255,255,0.05)",
        }}
      />
    </motion.div>
  );
}
