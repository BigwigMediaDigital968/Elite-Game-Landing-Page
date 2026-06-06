"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    document.querySelectorAll("button,a").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);

      document.querySelectorAll("button,a").forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Diamond */}
      <motion.div
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: clicked ? 0.85 : hovered ? 1.35 : 1,
          rotate: hovered ? 90 : 45,
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 25,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
      >
        <div
          className="h-5 w-5 border border-cyan-400/80 backdrop-blur-sm"
          style={{
            transform: "rotate(45deg)",
            boxShadow:
              "0 0 10px rgba(0,217,255,.4), 0 0 30px rgba(0,217,255,.25)",
            background: "rgba(0,217,255,.04)",
          }}
        />
      </motion.div>

      {/* Center Core */}
      <motion.div
        animate={{
          x: position.x - 3,
          y: position.y - 3,
          scale: clicked ? 0.6 : hovered ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[10000]"
      >
        <div
          className="h-1 w-1 rounded-full bg-cyan-300"
          style={{
            boxShadow: "0 0 8px #00d9ff, 0 0 18px #00d9ff, 0 0 35px #00d9ff",
          }}
        />
      </motion.div>

      {/* Trailing Glow */}
      <motion.div
        animate={{
          x: position.x - 24,
          y: position.y - 24,
        }}
        transition={{
          duration: 0.22,
          ease: "easeOut",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
      >
        <div
          className="h-12 w-12 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,217,255,.18) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
      </motion.div>
    </>
  );
}
