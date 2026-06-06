import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad,
  Disc,
  Glasses,
  CheckCircle2,
  TrendingDown,
  Sparkles,
  ArrowRight,
  Zap,
  DollarSign,
} from "lucide-react";

interface PricingItem {
  id: string;
  title: string;
  category: string;
  regularPrice: string;
  offerPrice: string;
  period: string;
  perks: string[];
  icon: React.ComponentType<any>;
  glowColor: string;
  badge: string;
  accentClass: string;
}

const PRICING_DATA: PricingItem[] = [
  {
    id: "ps5",
    title: "PS5 CO-OP DECK",
    category: "Console Arena",
    regularPrice: "Rs. 120",
    offerPrice: "Rs. 130",
    period: "Hour",
    badge: "1 Month Opening Promo",
    glowColor: "shadow-cyan-500/20 hover:border-cyan-400/40 border-cyan-500/10",
    accentClass: "text-cyan-400 border-cyan-400/20 bg-cyan-950/20",
    icon: Gamepad,
    perks: [
      "Access to dual DualSense rigs",
      "Co-op local multiplayer ready",
      "Full 4K high-refresh projection",
      "Premium couch & beanbag comfort",
    ],
  },
  {
    id: "racing",
    title: "SIM RACING WHEEL",
    category: "Pro Simulator",
    regularPrice: "Rs. 200",
    offerPrice: "Rs. 130",
    period: "Hour",
    badge: "Massive 35% Discount",
    glowColor:
      "shadow-amber-500/20 hover:border-amber-400/40 border-amber-500/10",
    accentClass: "text-amber-400 border-amber-400/20 bg-amber-950/20",
    icon: Disc,
    perks: [
      "Thrustmaster Force Feedback",
      "Pro pedal sets & paddle shifters",
      "Bucket seat ergonomic cockpit",
      "Loaded with F1 & GT classics",
    ],
  },
  {
    id: "vr",
    title: "OCULUS VR SYSTEM",
    category: "Virtual Reality",
    regularPrice: "Rs. 200",
    offerPrice: "Rs. 130",
    period: "Hour",
    badge: "Special Opening Rate",
    glowColor:
      "shadow-fuchsia-500/20 hover:border-fuchsia-400/40 border-fuchsia-500/10",
    accentClass: "text-fuchsia-400 border-fuchsia-400/20 bg-fuchsia-950/20",
    icon: Glasses,
    perks: [
      "Oculus/Meta Quest boundary setup",
      "Room-scale high fidelity motion space",
      "Full catalog of VR titles included",
      "Live spectator feed display panel",
    ],
  },
];

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A";

export default function PriceTable() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Background Cyber Glow Elements */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Panel */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
          Exclusive Launch Window
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          LAUNCH{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.15)] pe-3">
            PRICING MATRIX
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-slate-400 font-mono uppercase tracking-[0.1em]"
        >
          "For 1 month only, enjoy special opening prices at Elite Lounge. Gear
          up and lock in."
        </motion.p>
      </div>

      {/* Pricing comparative table deck */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_DATA.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredCard === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 rounded-[2.5rem] border bg-slate-900/45 backdrop-blur-md shadow-2xl transition-all duration-500 ${item.glowColor}`}
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
              }}
            >
              {/* Dynamic top-edge scan lines on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    exit={{ opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 h-[1.5px] w-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Card top banner */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className={`text-[9px] font-mono tracking-[0.2em] uppercase font-bold px-3 py-1 rounded border ${item.accentClass}`}
                  >
                    {item.category}
                  </span>
                  <div
                    className={`p-3 rounded-2xl bg-slate-950/80 border border-white/5 ${item.accentClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase block">
                    // {item.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black italic text-white tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* Comparative pricing interface */}
                <div className="py-6 border-y border-dashed border-white/10 flex justify-between items-center">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-slate-500 tracking-wider block uppercase">
                      Regular Rate
                    </span>
                    <span className="text-slate-400 font-mono font-bold line-through text-sm">
                      {item.regularPrice}/{item.period}
                    </span>
                  </div>

                  {/* Glowing custom dynamic value tag */}
                  <div className="text-right flex items-center gap-2">
                    <TrendingDown className="h-5 w-5 text-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-cyan-400 tracking-tight font-mono">
                        {item.offerPrice}
                      </span>
                      <span className="text-[9px] text-slate-500 font-mono block uppercase">
                        / {item.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Perks parameters checklist */}
                <div className="pt-6 space-y-3">
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase block">
                    Included Specs:
                  </span>
                  <ul className="space-y-2.5">
                    {item.perks.map((perk, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 items-start text-xs font-mono text-slate-300"
                      >
                        <CheckCircle2 className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bevelled Button */}
              <div className="pt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-full inline-flex items-center justify-center gap-3 group px-6 py-4 text-xs font-bold tracking-[0.2em] text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 active:scale-[0.98] shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                  style={{
                    clipPath:
                      "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                  }}
                >
                  <DollarSign className="h-4 w-4 fill-slate-950 text-transparent" />
                  BOOK NOW ON WHATSAPP
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Edge Bracket Overlays */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/10 group-hover:border-cyan-400/55 transition-colors" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white/10 group-hover:border-cyan-400/55 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white/10 group-hover:border-cyan-400/55 transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-400/55 transition-colors" />
            </motion.div>
          );
        })}
      </div>

      {/* Micro-table metadata logs below card stack */}
      <div className="mt-12 p-4 rounded-2xl border border-white/5 bg-slate-950/40 text-center text-[10px] font-mono text-slate-500 uppercase tracking-widest max-w-xl mx-auto">
        // SYSTEM LOGS: Launch promotions are valid for 30 cycles only from
        opening date. Standard charges resume post-event.
      </div>
    </section>
  );
}
