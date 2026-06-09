import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Compass,
  ShieldCheck,
  Terminal,
  ArrowRight,
  MessageSquare,
  Contact,
  Gamepad,
} from "lucide-react";

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20have%20a%20question%20about%20your%20lounge%20timings%20and%20location!";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Cinematic Cyber Ambient Flares */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Futuristic HUD Title Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase shadow-lg"
        >
          <Gamepad className="h-3.5 w-3.5 text-[#22d3ee] animate-pulse" />
          ESTABLISH SECURE LINK
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          CONTACT THE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.15)] pe-3">
            CONTROL ROOM
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest max-w-xl mx-auto"
        >
          "Initialize communication channels or plan your physical deployment to
          our high-performance gaming room."
        </motion.p>
      </div>

      {/* Contact Grid: Details (Left) / Map Tactical Radar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT COLUMN: TACTICAL LINKS & INFO CARDS */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          {/* Main Secure Contact Call-out */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-[2rem] border border-white/5 bg-[#111111]/45 backdrop-blur-md relative overflow-hidden group flex flex-col justify-between"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
            }}
          >
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#22d3ee] uppercase block">
                // DIRECT FREQUENCY
              </span>
              <h3 className="text-2xl font-black italic text-white uppercase">
                COMMUNICATION CHANNELS
              </h3>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Send a direct secure frequency over WhatsApp to book slots,
                customize sim wheel timers, or query our current gaming titles
                list.
              </p>
            </div>

            <div className="pt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="relative w-full inline-flex items-center justify-center gap-3 group px-6 py-4 text-xs font-bold tracking-[0.25em] text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 active:scale-[0.98]"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                }}
              >
                <MessageSquare className="h-4 w-4 fill-slate-950 text-transparent" />
                CHAT ON WHATSAPP
                <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/10" />
          </motion.div>

          {/* Quick HUD Metrics (Timing, Geolocation, Instagram Status) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Phone Card */}
            <div className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 font-mono flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-cyan-950/40 text-cyan-400 border border-cyan-500/20">
                <Phone className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 uppercase block">
                  PHONE LINE
                </span>
                <span className="text-xs text-white font-bold tracking-widest">
                  +91 8181818181
                </span>
              </div>
            </div>

            {/* 2. Timing Card */}
            <div className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 font-mono flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-amber-950/40 text-amber-400 border border-amber-500/20">
                <Clock className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 uppercase block">
                  TIMING STATUS
                </span>
                <span className="text-xs text-white font-bold tracking-widest">
                  09:00 AM - 12:30 AM
                </span>
              </div>
            </div>

            {/* 3. Address Coming Soon Card */}
            <div className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 font-mono flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-fuchsia-950/40 text-fuchsia-400 border border-fuchsia-500/20">
                <MapPin className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 uppercase block">
                  DEESA RADAR
                </span>
                <span className="text-xs text-fuchsia-400 font-bold tracking-widest uppercase">
                  ADDRESS COMING SOON
                </span>
              </div>
            </div>

            {/* 4. Instagram Status Card */}
            <div className="p-5 rounded-2xl border border-white/5 bg-slate-900/30 font-mono flex gap-4 items-center">
              <div className="p-3 rounded-xl bg-rose-950/40 text-rose-400 border border-rose-500/20">
                <Instagram className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="text-[9px] text-slate-500 uppercase block">
                  INSTAGRAM NET
                </span>
                <span className="text-xs text-rose-400 font-bold tracking-widest uppercase">
                  LAUNCHING LATER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RADAR MAP COORDINATE MATRIX (Exactly matching sci-fi layout guidelines) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 relative h-[400px] lg:h-auto min-h-[350px] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-slate-950"
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
          }}
        >
          {/* Cyberpunk Grid/Map Image Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1200"
              alt="Cyber Radar Mapping Backdrop"
              className="w-full h-full object-cover brightness-[0.25] saturate-[1.1] scale-105 pointer-events-none"
            />
            {/* Tech grid scanning line overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,transparent_60%)] z-10" />
          </div>

          {/* Interactive Scanning HUD Targeting Reticle */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 text-center pointer-events-none">
            {/* Spinning Tactical Radar Overlay */}
            <div className="relative w-48 h-48 border border-cyan-500/10 rounded-full flex items-center justify-center mb-6">
              <div
                className="absolute w-36 h-36 border border-dashed border-cyan-500/20 rounded-full animate-spin"
                style={{ animationDuration: "12s" }}
              />
              <div className="absolute w-24 h-24 border border-cyan-400/25 rounded-full" />
              <Compass className="absolute h-8 w-8 text-cyan-400 animate-pulse" />

              {/* Corner Targeting notches */}
              <div className="absolute w-3 h-3 border-t-2 border-l-2 border-cyan-400 top-2 left-2" />
              <div className="absolute w-3 h-3 border-t-2 border-r-2 border-cyan-400 top-2 right-2" />
              <div className="absolute w-3 h-3 border-b-2 border-l-2 border-cyan-400 bottom-2 left-2" />
              <div className="absolute w-3 h-3 border-b-2 border-r-2 border-cyan-400 bottom-2 right-2" />
            </div>

            {/* Coordinating status descriptions */}
            <div className="space-y-2 max-w-sm relative z-20">
              <span className="text-[10px] font-mono tracking-widest text-[#fb7185] uppercase block">
                🚨 DETECTING COORDINATES...
              </span>
              <h4 className="text-xl font-black italic text-white uppercase tracking-wider">
                EXACT GEOLOCATION PENDING
              </h4>
              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                "Our physical base in Deesa is currently aligning. Exact
                location, routing nodes, and interactive Google Map parameters
                will update automatically soon."
              </p>
            </div>
          </div>

          {/* Tactical Diagnostic HUD labels */}
          <div className="absolute top-6 left-6 z-20 font-mono text-[9px] text-slate-500 select-none hidden sm:block">
            LAT: 24.2635&deg; N <br />
            LON: 72.1816&deg; E <br />
            SYS_STATUS: CALIBRATING_
          </div>

          <div className="absolute bottom-6 right-6 z-20 font-mono text-[9px] text-slate-500 select-none flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            SECURE LINK 100%
          </div>

          {/* Border Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
