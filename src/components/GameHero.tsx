import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";

interface GameHeroProps {
  currentBgIndex: number;
  setCurrentBgIndex?: (idx: number) => void;
  onNotify?: (msg: string) => void;
}

// High-fidelity background images for the auto-sliding ambient display
const HERO_BACKGROUNDS: string[] = [
  "/multiplayer-image.png", // Esports Arena Glow
  "/gaming-hero.png", // Cyberpunk Neon Alley/Setup
  "/gaming-hero-image.png", // Anime Style Glowing Setup
];

/* =========================================================================
   2. GameHero Component
   ========================================================================= */
function GameHero({ onNotify }: GameHeroProps) {
  return (
    <section id="home" className="relative py-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 relative">
          {/* Visual Crosshair/Targeting UI */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 border border-cyan-500/5 rounded-full pointer-events-none flex items-center justify-center">
            <div className="w-24 h-24 border border-dashed border-cyan-500/10 rounded-full" />
            <div className="absolute w-2 h-[1px] bg-cyan-400/40 left-0" />
            <div className="absolute w-2 h-[1px] bg-cyan-400/40 right-0" />
            <div className="absolute h-2 w-[1px] bg-cyan-400/40 top-0" />
            <div className="absolute h-2 w-[1px] bg-cyan-400/40 bottom-0" />
          </div>

          {/* Opening Offer Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/85 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] text-xs text-cyan-300 tracking-wider relative group cursor-pointer overflow-hidden backdrop-blur-md"
            onClick={() =>
              onNotify?.("Opening rates valid through this month!")
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold uppercase tracking-[0.1em] text-slate-300">
              1 Month Opening Offer - Everything at Rs. 130 / Hour
            </span>
          </motion.div>

          {/* Hero Titles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-cyan-400 font-bold block mb-2">
              Elite Lounge
            </span>
            <h1 className="text-5xl md:text-6xl font-black italic tracking-wider uppercase leading-none select-none">
              <span className="text-white drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] block">
                Game. Chill.
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)] block mt-1">
                Compete. Repeat.
              </span>
            </h1>
          </motion.div>

          {/* Styled custom Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-base text-slate-400 max-w-2xl font-mono uppercase tracking-[0.15em] leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-white/5 backdrop-blur-md"
          >
            "Deesa’s premium gaming lounge for PS5, Racing Wheel, VR Gaming,
            comfortable sofa seating, snacks, soft drinks, and next-level gaming
            vibes. ."
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
          >
            <a
              href="#booking-matrix"
              className="relative inline-flex items-center justify-center gap-3 group px-8 py-4 text-sm font-bold tracking-[0.25em] text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)] uppercase"
              style={{
                clipPath:
                  "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
              }}
            >
              <Play className="h-4 w-4 fill-slate-950 text-transparent" />
              Book Gaming Slot
            </a>

            <a
              href="#rig-configurator"
              className="relative inline-flex items-center justify-center gap-3 group px-8 py-4 text-sm font-bold tracking-[0.25em] text-cyan-400 hover:text-white transition-all duration-300"
              style={{
                clipPath:
                  "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
              }}
            >
              <div className="absolute inset-0 bg-cyan-400/30 transition-all duration-300" />
              <div
                className="absolute inset-[1.5px] bg-slate-950"
                style={{
                  clipPath:
                    "polygon(13px 0, 100% 0, 100% calc(100% - 13px), calc(100% - 13px) 100%, 0 100%, 0 13px)",
                }}
              />
              <span className="relative z-10 uppercase">View Membership</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  // Navigation & Scroll State
  const [scrolled, setScrolled] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto cycling background slider
  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % HERO_BACKGROUNDS.length,
      );
    }, 3000);
    return () => clearInterval(bgTimer);
  }, []);

  const triggerMockNotification = (message: string) => {
    setNotificationMsg(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Ambience Container */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBgIndex}
              initial={{ opacity: 0.4, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${HERO_BACKGROUNDS[currentBgIndex]})`,
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
        </div>
      </div>

      {/* Floating System Notifications */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-4 md:right-10 z-50 max-w-sm w-full bg-slate-900/95 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.2)] rounded-xl p-4 backdrop-blur-md flex gap-3 items-start"
          >
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm tracking-wide">
                SYSTEM OVERRIDE
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {notificationMsg}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Hero Sub-component */}
      <GameHero
        currentBgIndex={currentBgIndex}
        setCurrentBgIndex={setCurrentBgIndex}
        onNotify={triggerMockNotification}
      />

      {/* Extra Interactive Vibes Segment */}
      {/* <section className="relative py-16 lg:py-24 overflow-hidden border-t border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold">
              LIFESTYLE MATRIX
            </span>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-wide uppercase mt-2 text-white">
              BEYOND THE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-red-500">
                GAMING DECK
              </span>
            </h2>
            <p className="text-slate-400 text-sm font-mono mt-4">
              Premium seating configurations, snacks, carbonated fuel cells, and
              chill zones designed for competitive groups and casual squads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-cyan-400/20 hover:bg-slate-900/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-wide uppercase">
                  Plush Social Spaces
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono mt-2">
                  Plush, high-grade couches structured specifically for local
                  multiplayer, spectators, and maximum ergonomic relaxation.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-fuchsia-400/20 hover:bg-slate-900/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-950/50 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 group-hover:scale-105 transition-all">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-wide uppercase">
                  Consumable Re-fuel Station
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono mt-2">
                  Stay hydrated and charged. High-octane soft drinks, carbonated
                  fuels, packed chips, and local bite-sized snack items always
                  in stock.
                </p>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl flex flex-col gap-4 hover:border-emerald-400/20 hover:bg-slate-900/60 transition group">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-all">
                <Layers className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-wide uppercase">
                  Ranked Community Events
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-mono mt-2">
                  Monthly mini-bracket tournaments, co-op challenges, and local
                  leaderboards featuring premium prizes for Deesa's finest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
