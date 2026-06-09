import React from "react";
import { motion } from "framer-motion";
import { Zap, MessageSquare, ArrowRight, Sparkles, Clock } from "lucide-react";

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20claim%20the%20Opening%20Offer%20of%20Rs.%20130%2FHour%20for%20my%20next%20session!";

export default function OfferSection() {
  return (
    <section className="relative py-14 px-4 max-w-7xl mx-auto z-10 overflow-hidden">
      {/* Interactive Floating Particles for ambient high-tech feeling */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Main Beveled Promotional Banner Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-[500px] md:h-[450px] flex flex-col justify-center items-center overflow-hidden p-6 sm:p-12 text-center rounded-[3rem] border border-white/10 shadow-2xl"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
        }}
      >
        {/* Animated Parallax Zoom Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.5, 0.75, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full h-full bg-cover bg-center filter saturate-[1.2]"
            style={{
              backgroundImage: `url('/offer-bg.png')`,
            }}
          />
        </div>

        {/* Banner Content Layout */}
        <div className="relative z-20 max-w-3xl space-y-6">
          {/* Opening offer header badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs text-cyan-300 font-bold uppercase tracking-widest font-mono"
          >
            <Sparkles className="h-3.5 w-3.5 animate-spin" />
            OPENING OFFER ACTIVE
          </motion.div>

          <div className="space-y-3">
            <h2 className="text-sm font-mono tracking-[0.4em] text-slate-400 uppercase">
              // LIMITED EDITION PROTOCOL
            </h2>

            {/* Gigantic Neon Central Pricing Text */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-white select-none">
              EVERYTHING AT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_35px_rgba(34,211,238,0.5)] pe-3">
                RS. 130 / HOUR
              </span>
            </h1>
          </div>

          {/* Subtitle Badge */}
          <p className="text-base md:text-lg text-slate-300 font-mono tracking-wider max-w-xl mx-auto flex items-center justify-center gap-2">
            <Clock className="h-5 w-5 text-fuchsia-400 animate-pulse" />
            <span className="uppercase font-bold text-fuchsia-400">
              1 Month Launch Offer Only
            </span>
          </p>

          {/* CTA Action Button */}
          <div className="pt-4 flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-3 group px-8 py-4 text-sm font-bold tracking-[0.2em] text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <MessageSquare className="h-4.5 w-4.5 fill-slate-950 text-transparent" />
              CLAIM OFFER ON WHATSAPP
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Cyberpunk corner bracket overlays */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
      </motion.div>
    </section>
  );
}
