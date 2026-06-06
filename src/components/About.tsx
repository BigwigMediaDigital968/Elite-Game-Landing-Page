import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Tv,
  Coffee,
  Users,
  Clock,
  ArrowRight,
  Info,
} from "lucide-react";

interface FeatureCard {
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  icon: React.ComponentType<any>;
  badge: string;
}

const FEATURE_CARDS: FeatureCard[] = [
  {
    title: "PREMIUM SETUP",
    subtitle: "High-spec custom console decks & 4K displays.",
    image: "/setup-image.png",
    gradient: "from-cyan-500/80 via-blue-600/50 to-slate-950",
    icon: Gamepad2,
    badge: "ULTRA SPEED",
  },
  {
    title: "COMFORT SEATING",
    subtitle: "Plush, ergonomic sofa layouts for continuous comfort.",
    image: "/seating-image.png",
    gradient: "from-fuchsia-500/80 via-purple-600/50 to-slate-950",
    icon: Tv,
    badge: "MAX ERGONOMICS",
  },
  {
    title: "SNACKS & FUEL",
    subtitle: "Stay fueled with premium soft drinks and local snacks.",
    image: "/snacks-image.png",
    gradient: "from-amber-500/80 via-orange-600/50 to-slate-950",
    icon: Coffee,
    badge: "RECHARGE STATION",
  },
  {
    title: "SQUAD MULTIPLAYER",
    subtitle: "Co-op environments structured for friends & rivals.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
    gradient: "from-emerald-500/80 via-teal-600/50 to-slate-950",
    icon: Users,
    badge: "CO-OP REALM",
  },
  {
    title: "OPEN LATE",
    subtitle: "Calibrated for long campaigns. Open 9 AM to 12:30 AM.",
    image: "/late-image.png",
    gradient: "from-rose-500/80 via-red-600/50 to-slate-950",
    icon: Clock,
    badge: "9 AM - 12:30 AM",
  },
];

const MINI_SPEC_TAGS = [
  "NEXT-LEVEL VR",
  "CO-OP MULTIPLAYER",
  "PRO SIM RACING",
  "LAG-FREE SPEEDS",
  "SQUAD TOURNEYS",
  "CHILL VIBES",
];

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A";

export default function AboutSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 mx-auto z-10 overflow-hidden">
      {/* Full Background Image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/about-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-20 bg-slate-950/50" />

      {/* Cyan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Optional Grid Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
      `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mx-auto max-w-7xl">
        {/* Left-side Command Deck (Matching layout from image_0239ca.jpg) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-1">
            <span className="text-xs uppercase font-mono tracking-[0.4em] text-cyan-400 font-bold block">
              // CENTRAL SECTOR INTEL
            </span>
            <h2 className="text-4xl md:text-5xl font-black italic tracking-wide uppercase text-white leading-tight">
              YOUR PREMIUM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 pe-5">
                GAMING COCKPIT
              </span>{" "}
              <br />
              IN DEESA
            </h2>
          </div>

          <p className="text-xs text-slate-300 font-mono uppercase tracking-[0.12em] leading-relaxed max-w-lg border-l-2 border-white/10 pl-4">
            ELITE LOUNGE HARNESSES UNCOMPROMISING SPEED, COMFORT, AND SQUAD
            ENERGY. Calibrated for hyper-fluid sim racing wheel configurations,
            room-scale VR spaces, and premium multi-console tournaments. Formed
            for casual players, run by competitive hearts.
          </p>

          {/* Chamfered/Angled Primary Action Buttons matching reference screen */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-2 group px-6 py-3.5 text-xs font-bold tracking-[0.2em] text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 active:scale-95"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              RESERVE RIGS NOW
              <ArrowRight className="h-3 w-3" />
            </a>

            <a
              href="#pricing"
              className="relative inline-flex items-center justify-center gap-2 group px-6 py-3.5 text-xs font-bold tracking-[0.2em] text-cyan-400 hover:text-white transition-all duration-300"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <div className="absolute inset-0 bg-cyan-400/20 transition-all duration-300" />
              <div
                className="absolute inset-[1.5px] bg-slate-950"
                style={{
                  clipPath:
                    "polygon(11px 0, 100% 0, 100% calc(100% - 11px), calc(100% - 11px) 100%, 0 100%, 0 11px)",
                }}
              />
              <span className="relative z-10">VIEW RATES</span>
            </a>
          </div>

          {/* Matrix of Spec/Bevel Tags below primary buttons */}
          <div className="pt-4 space-y-2 border-t border-white/5">
            <span className="text-[10px] font-mono tracking-widest text-slate-500 block uppercase">
              // STATION SYSTEMS INTEGRATED:
            </span>
            <div className="flex flex-wrap gap-2">
              {MINI_SPEC_TAGS.map((tag) => (
                <div
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/50 border border-white/5 text-[9px] font-mono tracking-wider text-slate-400 hover:text-cyan-300 hover:border-cyan-500/20 transition duration-300 cursor-pointer"
                  style={{
                    clipPath:
                      "polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right-side Interactive Swipeable Slider Deck */}
        <div className="lg:col-span-7 relative w-full overflow-hidden select-none">
          {/* Visual swipe helper indicator */}
          <div className="flex justify-between items-center mb-4 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1">
              <Info className="h-3 w-3 text-cyan-400" /> ELITE LOUNGE FEATURES
            </span>
            <span className="animate-pulse">SWIPE TO EXPLORE →</span>
          </div>

          {/* Scroll wrapper styled with hidden scrollbars, snap alignments and fluid momentum scrolling */}
          <div className="overflow-x-auto overflow-y-hidden p-2 scrollbar-none snap-x snap-mandatory scroll-smooth flex gap-6 w-full">
            {FEATURE_CARDS.map(
              ({ title, subtitle, image, gradient, icon: Icon, badge }) => (
                <motion.div
                  key={title}
                  className="w-[280px] sm:w-[320px] h-[400px] relative flex flex-col justify-between overflow-hidden p-6 group shrink-0 snap-start"
                  style={{
                    // Clipped top-right corner exactly like Magicthecraft reference cards
                    clipPath:
                      "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                  }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Dynamic background layers with parallax zoom effect */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                    />
                    {/* Gradient blending overlays for neon shadows */}
                    <div
                    //   className={`absolute inset-0 bg-gradient-to-t ${gradient} mix-blend-multiply opacity-0`}
                    />
                    {/* <div className="absolute inset-0 bg-slate-950/45 group-hover:opacity-50 transition-opacity duration-300" /> */}
                  </div>

                  {/* Card Header Tag */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2.5 py-1 bg-slate-950/80 border border-white/10 rounded text-slate-300">
                      {badge}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 text-cyan-400">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Card Bottom / Hover Command Indicator */}
                  <div className="relative z-10 space-y-2">
                    <h3 className="text-xl font-black tracking-wide text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono leading-relaxed opacity-90">
                      {subtitle}
                    </p>

                    {/* Mint/Staking styled CTA from image_0239ca.jpg */}
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-bold text-cyan-400 group-hover:text-white transition-colors duration-300">
                      <span className="uppercase tracking-widest font-mono">
                        SYS CALIBRATED
                      </span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>

                  {/* Cyberpunk framing overlay */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
                </motion.div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
