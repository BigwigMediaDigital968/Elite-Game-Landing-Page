import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad,
  Disc,
  Glasses,
  Monitor,
  ArrowRight,
  Zap,
  TrendingDown,
} from "lucide-react";

interface SetupCard {
  id: string;
  title: string;
  regularPrice: string;
  offerPrice: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  color: string;
  isComingSoon?: boolean;
}

const SETUPS: SetupCard[] = [
  {
    id: "ps5",
    title: "PS5 GAMING",
    regularPrice: "Rs. 120/hr",
    offerPrice: "Rs. 130/hr",
    description:
      "Experience ultra-high-speed SSD, deeper immersion with support for haptic feedback and 4K gaming.",
    icon: Gamepad,
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
    color: "cyan",
  },
  {
    id: "racing",
    title: "RACING WHEEL",
    regularPrice: "Rs. 200/hr",
    offerPrice: "Rs. 130/hr",
    description:
      "Feel the force feedback and precision handling on our professional-grade simulator cockpits.",
    icon: Disc,
    image:
      "https://images.unsplash.com/photo-1595935736128-db1f0a261263?auto=format&fit=crop&q=80&w=800",
    color: "amber",
  },
  {
    id: "vr",
    title: "VR GAMING",
    regularPrice: "Rs. 200/hr",
    offerPrice: "Rs. 130/hr",
    description:
      "Step inside the game with Oculus-powered room-scale VR. Beyond 360°—this is total immersion.",
    icon: Glasses,
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    color: "fuchsia",
  },
  {
    id: "pc",
    title: "PC BATTLESTATION",
    regularPrice: "Coming Soon",
    offerPrice: "Coming Soon",
    description:
      "Ultra-refresh rate monitors and mechanical peripherals are currently being calibrated for launch.",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&q=80&w=800",
    color: "emerald",
    isComingSoon: true,
  },
];

export default function GamingSetup() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      {/* SECTION BACKGROUND LAYER (BOUNDED TO THIS SECTION ONLY) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
        style={{
          backgroundImage: `url('/gaming-hero-image-1.png')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase"
          >
            <Zap className="h-3 w-3 animate-pulse" />
            System Inventory
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
          >
            CHOOSE YOUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 pe-3">
              BATTLE RIG
            </span>
          </motion.h2>
        </div>

        {/* 2x2 Grid (Desktop) / Horizontal Snap Carousel (Mobile) */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-2 gap-6 pb-10 scrollbar-none snap-x snap-mandatory lg:overflow-visible">
          {SETUPS.map((setup, index) => (
            <motion.div
              key={setup.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="relative min-w-[85vw] md:min-w-[30vw] snap-center group flex flex-col justify-end overflow-hidden h-[350px] border border-white/5 hover:border-indigo-400 bg-slate-900/40 backdrop-blur-md shadow-2xl"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              {/* Background Rig Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={setup.image}
                  alt={setup.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
              </div>

              {/* Pricing Tags */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                {!setup.isComingSoon ? (
                  <>
                    <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg">
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        Regular:
                      </span>
                      <span className="text-xs font-bold text-white line-through opacity-50">
                        {setup.regularPrice}
                      </span>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2 bg-cyan-400 border border-cyan-300 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      <TrendingDown className="h-4 w-4 text-slate-950" />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black text-slate-950 uppercase leading-none">
                          Opening Offer
                        </span>
                        <span className="text-lg font-black text-slate-950 leading-tight">
                          {setup.offerPrice}
                        </span>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <div className="bg-emerald-500 border border-emerald-300 px-4 py-2 rounded-xl">
                    <span className="text-sm font-black text-slate-950 uppercase">
                      COMMING SOON...
                    </span>
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-2xl bg-slate-950/80 border border-white/10 text-${setup.color}-400`}
                  >
                    <setup.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black italic text-white tracking-wide">
                    {setup.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 font-mono leading-relaxed max-w-md">
                  {setup.description}
                </p>

                {!setup.isComingSoon && (
                  <a
                    href="https://wa.me/918181818181"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-cyan-400 group-hover:text-white transition-colors uppercase"
                  >
                    Initialize Connection{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                )}
              </div>

              {/* Tactical Corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
              <div className="absolute bottom-10 left-0 w-8 h-8 border-b border-l border-white/20" />
            </motion.div>
          ))}
        </div>

        {/* Carousel Visual Progress Indicator (Mobile Only) */}
        <div className="flex lg:hidden justify-center gap-2 mt-4">
          {SETUPS.map((_, i) => (
            <div
              key={i}
              className="h-1 w-8 rounded-full bg-slate-800 overflow-hidden"
            >
              <div className="h-full w-0 bg-cyan-400 group-active:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Edge Light Strips */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent pointer-events-none" />
    </section>
  );
}
