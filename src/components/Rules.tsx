import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Clock,
  Gamepad2,
  Utensils,
  AlertTriangle,
  Heart,
  Terminal,
  Zap,
} from "lucide-react";

interface RuleItem {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  accentColor: string;
  glowColor: string;
}

const RULES_DATA: RuleItem[] = [
  {
    id: "respect",
    num: "01",
    title: "Respect Equipment",
    description:
      "Treat all high-spec consoles, VR peripherals, and racing rigs with absolute care. Always handle gear as if it were your own.",
    icon: ShieldAlert,
    accentColor: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    glowColor:
      "group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]",
  },
  {
    id: "booking",
    num: "02",
    title: "Booking Sync",
    description:
      "Adhere strictly to your scheduled booking slots. Ensure timely check-ins and handovers so the next squad can drop in on time.",
    icon: Clock,
    accentColor: "text-amber-400 border-amber-500/20 bg-amber-950/20",
    glowColor:
      "group-hover:border-amber-400/40 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
  },
  {
    id: "no-damage",
    num: "03",
    title: "Zero-Damage Protocol",
    description:
      "No rage-quitting or physical stress testing. Avoid dropping, throwing, or hitting controllers, consoles, VR units, or racing wheels.",
    icon: Gamepad2,
    accentColor: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-950/20",
    glowColor:
      "group-hover:border-fuchsia-400/40 group-hover:shadow-[0_0_25px_rgba(217,70,239,0.15)]",
  },
  {
    id: "food",
    num: "04",
    title: "Careful Refreshments",
    description:
      "Keep snacks and soft drinks clear of active hardware zones. Spills or grease on controller interfaces are strictly prohibited.",
    icon: Utensils,
    accentColor: "text-emerald-400 border-emerald-500/20 bg-emerald-950/20",
    glowColor:
      "group-hover:border-emerald-400/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
  },
  {
    id: "charges",
    num: "05",
    title: "Liability & Damages",
    description:
      "Any negligence resulting in physical harm or firmware malfunction to the rigs will subject the client to repair/replacement costs.",
    icon: AlertTriangle,
    accentColor: "text-rose-400 border-rose-500/20 bg-rose-950/20",
    glowColor:
      "group-hover:border-rose-400/40 group-hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]",
  },
  {
    id: "atmosphere",
    num: "06",
    title: "Friendly Atmosphere",
    description:
      "Maintain a clean, toxic-free, and inviting cyber-environment. Celebrate competitive rivalries with high sportsmanship and clean vibes.",
    icon: Heart,
    accentColor: "text-indigo-400 border-indigo-500/20 bg-indigo-950/20",
    glowColor:
      "group-hover:border-indigo-400/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
  },
];

// Double the elements to create a seamless looping track for the marquee
const DOUBLE_RULES_DATA = [...RULES_DATA, ...RULES_DATA];

export default function RulesSection() {
  return (
    <section
      id="rules"
      className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Futuristic HUD Title Header */}
      <div className="text-center max-w-6xl mx-auto mb-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-white/10 text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase shadow-lg"
        >
          <Terminal className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          SYSTEM SAFETY INSTRUCTIONS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          LOUNGE CODE OF{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.15)] pe-3">
            CONDUCT
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-widest max-w-xl mx-auto leading-relaxed"
        >
          "Please verify and commit the active arena rules to your local
          directory before joining co-op or simulator lobbies."
        </motion.p>
      </div>

      {/* Rules Continuous Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-6 mask-gradient">
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
          {DOUBLE_RULES_DATA.map(
            (
              {
                id,
                num,
                title,
                description,
                icon: Icon,
                accentColor,
                glowColor,
              },
              index,
            ) => (
              <div
                key={`${id}-${index}`}
                className={`group relative flex flex-col justify-between p-6 sm:p-8 w-[290px] sm:w-[350px] h-[300px] shrink-0 border border-purple-600/25 bg-[#111111]/45 backdrop-blur-2xl transition-all duration-300 ${glowColor}`}
              >
                {/* Top diagnostic line status */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500">
                    PROTOCOL // {num}
                  </span>
                  <div
                    className={`p-3 rounded-2xl border transition-all duration-300 ${accentColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Rule Content */}
                <div className="space-y-3 relative z-10 flex-grow">
                  <h3 className="text-lg sm:text-xl font-black italic tracking-wide text-white uppercase group-hover:text-cyan-300 transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono leading-relaxed line-clamp-4">
                    {description}
                  </p>
                </div>

                {/* Glowing Accent strip inside the bottom beveled edge */}
                <div className="mt-4 pt-3 border-t border-white/[0.05] flex justify-between items-center text-[9px] font-mono font-bold text-slate-600 group-hover:text-cyan-400/80 transition-colors duration-300">
                  <span className="uppercase tracking-[0.2em]">
                    CALIBRATION OK
                  </span>
                  <Zap className="h-3.5 w-3.5 animate-pulse" />
                </div>

                {/* Decorative Corner Bracket Guides */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-400/50 transition-colors" />
              </div>
            ),
          )}
        </div>
      </div>

      {/* Warning Footer Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 p-4 rounded-2xl border border-rose-500/10 bg-rose-950/5 max-w-xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
        <p className="text-[10px] font-mono text-rose-400 uppercase tracking-widest leading-relaxed">
          🚨 WARNING: Non-compliance with safety codes can compromise lounge
          slot permissions. Admin overrides may apply.
        </p>
      </motion.div>

      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, #000 12%, #000 88%, transparent);
        }
      `}</style>
    </section>
  );
}
