import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Gamepad2,
  Disc,
  Zap,
  ArrowRight,
  Sparkles,
  Users,
} from "lucide-react";

interface TournamentCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ComponentType<any>;
  glowColor: string;
  borderColor: string;
  badge: string;
}

const TOURNAMENTS: TournamentCard[] = [
  {
    id: "fifa",
    title: "FIFA TOURNAMENT",
    subtitle:
      "Calibrating pitch configurations, bracket limits, and entry fee updates. Register for early slot announcements.",
    image: "/fifa.png",
    icon: Gamepad2,
    badge: "1v1 SQUAD SETUP",
    borderColor: "border-emerald-500/20 hover:border-emerald-400/40",
    glowColor: "shadow-emerald-500/10",
  },
  {
    id: "cricket",
    title: "CRICKET CHALLENGE",
    subtitle:
      "Quick-fire digital cricket cups are under construction. Prep your timing, strategic overs, and competitive squads.",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=600",
    icon: Zap,
    badge: "MULTIPLAYER TIMING",
    borderColor: "border-cyan-500/20 hover:border-cyan-400/40",
    glowColor: "shadow-cyan-500/10",
  },
  {
    id: "racing",
    title: "RACING CUP",
    subtitle:
      "Simulator time-trial showdowns and drift brackets. Force feedback wheel calibrations and prize pools coming soon.",
    image: "/racing.png",
    icon: Disc,
    badge: "FORCE SIM LOCK",
    borderColor: "border-amber-500/20 hover:border-amber-400/40",
    glowColor: "shadow-amber-500/10",
  },
  {
    id: "tekken",
    title: "TEKKEN FIGHT NIGHT",
    subtitle:
      "Double-elimination arcade brackets, button mappings, and intense arcade local pool details are currently calibrating.",
    image: "/tekken.png",
    icon: Users,
    badge: "2D FIGHTING POOLS",
    borderColor: "border-fuchsia-500/20 hover:border-fuchsia-400/40",
    glowColor: "shadow-fuchsia-500/10",
  },
];

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20join%20the%20Weekend%20Tournament%20Priority%20List%20to%20receive%20updates%20about%20brackets%2C%20games%2C%20dates%2C%20and%20prizes!";

export default function TournamentSection() {
  return (
    <section
      id="tournaments"
      className="relative py-14 px-4 sm:px-6 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Background Neon Flare Shaders */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block"
        >
          # World Class ESports & Gaming Site
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-none"
        >
          WEEKEND TOURNAMENTS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.2)] pe-3">
            COMING SOON
          </span>
        </motion.h2>
      </div>

      {/* 2. Central Interactive Frame Block ("Join The Big Tournaments") */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-5xl mx-auto overflow-hidden bg-slate-900/40 border border-emerald-500/20 hover:border-emerald-500 backdrop-blur-md p-8 md:p-12 mb-16 transition duration-700 shadow-[0_0_40px_rgba(16,185,129,0.05)] flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          // Custom beveled corners mimicking image_5c806b.jpg double outline frame
          clipPath:
            "polygon(0 30px, 30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
        }}
      >
        {/* Left Cutout Gaming Graphic (Parallax avatar fallback) */}
        <div className="hidden md:block w-1/4 h-[320px] overflow-hidden relative border border-[#f00] opacity-80 hover:opacity-100 transition-opacity">
          <img
            src="/game-charecter-1.png"
            alt="Esports Character Left"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Center Panel Description & Metadata */}
        <div className="flex-1 text-center md:max-w-md space-y-6">
          <h3 className="text-3xl font-black italic tracking-wide text-white uppercase leading-tight">
            JOIN THE BIG <br />
            <span className="text-emerald-400">TOURNAMENTS</span>
          </h3>
          <p className="text-xs text-slate-300 font-mono uppercase tracking-widest leading-relaxed">
            "Beyond esports tournaments, include a broader calendar of gaming
            events, conferences, and conventions, and connect with each other."
          </p>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/10 text-[10px] font-mono text-emerald-300 uppercase tracking-widest">
            // Entry fee, dates, and prize pool coming soon
          </div>

          <div className="flex justify-center">
            {/* Bevel Green Action Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-2 group px-8 py-4 text-xs font-black tracking-[0.25em] text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              JOIN TOURNAMENT LIST
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Cutout Gaming Graphic (Parallax avatar fallback) */}
        <div className="hidden md:block w-1/4 h-[320px] overflow-hidden relative border border-red-600 opacity-90 hover:opacity-100 transition-opacity">
          <img
            src="/game-charecter-2.png"
            alt="Esports Character Right"
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Decorative Internal Border Outlines */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400/40" />
      </motion.div>

      {/* 3. Game-Specific Cards Stack (4-Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {TOURNAMENTS.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative flex flex-col justify-between overflow-hidden p-6 border bg-slate-900/30 backdrop-blur-md shadow-xl transition-all duration-300 ${item.borderColor} ${item.glowColor}`}
            >
              <div className="space-y-4">
                {/* Image Backdrop Card Top */}
                <div className="h-[140px] w-full overflow-hidden relative border border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" /> */}

                  <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-white/10 px-2.5 py-1 rounded-md text-[8px] font-mono tracking-widest text-slate-300 uppercase">
                    {item.badge}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-mono tracking-widest text-emerald-400/80 uppercase block">
                    // CALIBRATING
                  </span>
                  <h4 className="text-lg font-black italic tracking-wide text-white uppercase">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {item.subtitle}
                </p>
              </div>

              {/* Instant WhatsApp CTA for Individual Card */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20am%20interested%20in%20the%20upcoming%20${encodeURIComponent(item.title)}.%20Please%20add%20me%20to%20the%20priority%20list!`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-emerald-400 hover:text-white transition-colors uppercase font-mono"
                >
                  <span>Priority RSVP</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 4. Bottom Row Accent Tags (Matching bottom of image_5c806b.jpg) */}
      <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
        {[
          { text: "GAMING SPANNING", color: "text-emerald-400" },
          { text: "ACTION - PACKED", color: "text-emerald-400" },
          { text: "MIND - BENDING", color: "text-emerald-400" },
        ].map((tag, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {/* 4-pointed neon star */}
            <svg
              className={`h-4 w-4 ${tag.color} fill-current animate-pulse`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
            <span className="text-xs font-black tracking-[0.25em] text-white font-mono uppercase">
              {tag.text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
