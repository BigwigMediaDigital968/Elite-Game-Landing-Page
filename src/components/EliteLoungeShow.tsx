"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  Variants,
} from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  alt: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "PS5 Gaming Setup",
    category: "Gaming Zone",
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80",
    alt: "Premium PS5 gaming console setup with high-definition display",
  },
  {
    id: 2,
    title: "Racing Wheel Simulator",
    category: "Sim Racing",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80",
    alt: "Professional racing wheel simulator station with pedals and cockpit",
  },
  {
    id: 3,
    title: "Virtual Reality Zone",
    category: "VR Experience",
    image:
      "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80",
    alt: "Immersive virtual reality gaming experience station",
  },
  {
    id: 4,
    title: "Premium Sofa Seating",
    category: "Lounge Area",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    alt: "Comfortable premium sofa seating in the gaming lounge",
  },
  {
    id: 5,
    title: "Snacks & Drinks Counter",
    category: "Refreshments",
    image:
      "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=800&q=80",
    alt: "Modern snacks and drinks counter with neon lighting",
  },
  {
    id: 6,
    title: "Friends Gaming Together",
    category: "Social Gaming",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80",
    alt: "Group of friends enjoying multiplayer gaming together",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ─── Reduced Motion Hook ──────────────────────────────────────────────────────

function usePrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── Gallery Card ─────────────────────────────────────────────────────────────

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
}

function GalleryCard({ item, index }: GalleryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  // Per-card scroll tracking for reveal animation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 0.3"],
  });

  // Upward wipe: clipPath reveals from bottom to top
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion
      ? ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
      : ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );

  // Scale: 1.25 → 1 as card reveals
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1.25, 1],
  );

  // Blur: 6px → 0px
  const blurValue = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [6, 0],
  );
  const filterValue = useTransform(blurValue, (v: number) => `blur(${v}px)`);

  // Opacity: 0 → 1
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    reducedMotion ? [1, 1, 1] : [0, 0.6, 1],
  );

  // Parallax: image translateY shifts slightly while scrolling
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(
    parallaxProgress,
    [0, 1],
    reducedMotion ? [0, 0] : [20, -20],
  );

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1,
          },
        },
      }}
      className="group relative overflow-hidden cursor-none shadow-2xl"
      style={{ height: "420px" }}
    >
      {/* Wipe reveal wrapper */}
      <motion.div className="absolute inset-0" style={{ clipPath, opacity }}>
        {/* Parallax image wrapper */}
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY, scale: imageScale, filter: filterValue }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay — darkens on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,16,0.92) 0%, rgba(5,5,16,0.4) 50%, rgba(5,5,16,0.0) 100%)",
        }}
        whileHover={
          reducedMotion
            ? {}
            : {
                background:
                  "linear-gradient(to top, rgba(5,5,16,0.97) 0%, rgba(5,5,16,0.65) 55%, rgba(5,5,16,0.15) 100%)",
                transition: { duration: 0.5 },
              }
        }
      />

      {/* Hover: card lifts + glow border */}
      <motion.div
        className="absolute inset-0 rounded-[24px] border border-transparent pointer-events-none"
        whileHover={
          reducedMotion
            ? {}
            : {
                borderColor: "rgba(0,217,255,0.25)",
                boxShadow:
                  "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,217,255,0.1)",
              }
        }
        transition={{ duration: 0.5 }}
      />

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
        {/* Category label */}
        <motion.span
          className="text-[11px] font-button uppercase tracking-[0.2em] mb-2 block"
          style={{
            color: "#00d9ff",
            fontFamily: "var(--font-button, 'Oxanium', sans-serif)",
          }}
          whileHover={reducedMotion ? {} : { y: -4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {item.category}
        </motion.span>

        {/* Title */}
        <motion.h3
          className="text-white font-heading text-xl md:text-2xl font-extrabold tracking-wide leading-tight"
          style={{ fontFamily: "var(--font-heading, 'Orbitron', sans-serif)" }}
          whileHover={reducedMotion ? {} : { y: -4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
        >
          {item.title}
        </motion.h3>
      </div>

      {/* Hover lift for entire card */}
      <motion.div
        className="absolute inset-0 rounded-[24px]"
        whileHover={reducedMotion ? {} : { y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

// ─── Decorative Blobs ─────────────────────────────────────────────────────────

function DecorativeBlobs() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Top-left cyan glow */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Bottom-right magenta glow */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,43,214,1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Center ambient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,255,1) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function EliteLoungeGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isGridInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        background: "transparent",
      }}
      aria-labelledby="gallery-heading"
    >
      <DecorativeBlobs />

      <div
        className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: "1400px" }}
      >
        {/* ── Header ── */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          {/* Eyebrow */}
          <motion.span
            className="inline-block text-xs uppercase tracking-[0.25em] mb-4"
            style={{
              color: "#00d9ff",
              fontFamily: "var(--font-button, 'Oxanium', sans-serif)",
            }}
            variants={headingVariants}
            custom={0}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            Elite Experience
          </motion.span>

          {/* Heading */}
          <motion.h2
            id="gallery-heading"
            className="font-heading font-extrabold text-white uppercase"
            style={{
              fontSize: "clamp(32px, 5vw, 72px)",
              lineHeight: 1.1,
            }}
            variants={headingVariants}
            custom={0.1}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            Elite Lounge{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00d9ff 0%, #8b5cf6 50%, #ff2bd6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Vibes
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-body, 'Rajdhani', sans-serif)",
              maxWidth: "700px",
              margin: "24px auto 0",
            }}
            variants={headingVariants}
            custom={0.2}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
          >
            Experience the ultimate gaming atmosphere with premium consoles,
            racing simulators, immersive VR experiences, comfortable lounge
            seating, and a vibrant social gaming environment.
          </motion.p>
        </div>

        {/* ── Gallery Grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isGridInView ? "visible" : "hidden"}
        >
          {galleryItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
