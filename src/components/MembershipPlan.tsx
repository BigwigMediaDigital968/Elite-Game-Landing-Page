import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gamepad2,
  Zap,
  Crown,
  Check,
  ArrowRight,
  Clock,
  Layers,
} from "lucide-react";

interface Plan {
  type: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  accent: string;
  glow: string;
  icon: React.ComponentType<any>;
}

const PLANS: Plan[] = [
  {
    type: "PS5 Membership",
    name: "40 Hours PS5 Pass",
    price: "3,300",
    features: [
      "40 hours PS5 gaming",
      "Flexible usage",
      "Premium lounge access",
    ],
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-950/20",
    glow: "shadow-cyan-500/10 hover:border-cyan-400/40",
    icon: Gamepad2,
  },
  {
    type: "PS5 Membership",
    name: "100 Hours PS5 Pro Pass",
    price: "7,000",
    features: [
      "Best value for PS5 lovers",
      "Flexible timing",
      "Premium lounge access",
    ],
    accent: "text-blue-400 border-blue-500/20 bg-blue-950/20",
    glow: "shadow-blue-500/10 hover:border-blue-400/40",
    icon: Zap,
  },
  {
    type: "All Access Membership",
    name: "40 Hours All Access Pass",
    price: "5,000",
    features: [
      "PS5 + Racing Wheel + VR access",
      "Premium sofa seating",
      "Multiverse gaming access",
    ],
    accent: "text-fuchsia-400 border-fuchsia-500/20 bg-fuchsia-950/20",
    glow: "shadow-fuchsia-500/10 hover:border-fuchsia-400/40",
    icon: Layers,
  },
  {
    type: "All Access Membership",
    name: "100 Hours All Access Elite Pass",
    price: "10,100",
    isPopular: true,
    features: [
      "Most Popular & Best Value",
      "Priority booking",
      "Full PS5 + Wheel + VR",
    ],
    accent: "text-amber-400 border-amber-500/20 bg-amber-950/30",
    glow: "shadow-amber-500/20 hover:border-amber-400/60",
    icon: Crown,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function MembershipPlan() {
  return (
    <section
      id="membership"
      className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase"
        >
          <ShieldCheck className="h-3 w-3 text-cyan-400" />
          Membership Plans
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white"
        >
          Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 pe-3">
            Premium
          </span>
          gaming pass cards
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-400 text-sm font-mono uppercase tracking-widest"
        >
          Unlock priority access and calibrated rates for long-term campaigns.
        </motion.p>
      </div>

      {/* Grid Layout: 2x2 Desktop, 1x1 Mobile */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className={`group relative overflow-hidden border bg-slate-900/40 backdrop-blur-xl p-8 transition-all duration-500 ${plan.glow}`}
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
            }}
          >
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
              <plan.icon size={180} />
            </div>

            {/* Top Row: Type & Badge */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-mono font-bold tracking-widest uppercase ${plan.accent.split(" ")[0]}`}
                >
                  // {plan.type}
                </span>
                <h3 className="text-2xl font-black italic text-white tracking-wide uppercase">
                  {plan.name}
                </h3>
              </div>
              {plan.isPopular && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                >
                  Most Popular
                </motion.div>
              )}
            </div>

            {/* Price Block */}
            <div className="mb-8 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 font-mono text-lg">Rs.</span>
                <span className="text-5xl font-black text-white tracking-tighter">
                  {plan.price}
                </span>
              </div>
              <p className="text-slate-500 text-[10px] font-mono mt-1 uppercase tracking-widest">
                One-time protocol fee
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-10 relative z-10">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
                Key Features:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-xs text-slate-300 font-medium"
                  >
                    <div className={`p-1 rounded-md border ${plan.accent}`}>
                      <Check className="h-3 w-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA & Decorative Meter */}
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <a
                href={`https://wa.me/918181818181?text=Hi%20Elite%20Lounge,%20I%20want%20to%20subscribe%20to%20the%20${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noreferrer"
                className={`relative w-full sm:w-auto inline-flex items-center justify-center gap-3 group px-8 py-4 text-xs font-bold tracking-[0.2em] text-slate-950 transition-all duration-300 ${plan.isPopular ? "bg-amber-400 hover:bg-amber-300" : "bg-white hover:bg-slate-200"}`}
                style={{
                  clipPath:
                    "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                }}
              >
                UPGRADE NOW
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex-grow w-full space-y-2">
                <div className="flex justify-between text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                  <span>Usage Capacity</span>
                  <span
                    className={
                      plan.isPopular ? "text-amber-400" : "text-cyan-400"
                    }
                  >
                    {plan.name.includes("100") ? "100%" : "40%"}
                  </span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: plan.name.includes("100") ? "100%" : "40%",
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${plan.isPopular ? "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.4)]" : "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]"}`}
                  />
                </div>
              </div>
            </div>

            {/* Tactical Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-white/30 transition-colors" />
            <div className="absolute bottom-10 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-white/30 transition-colors" />
          </motion.div>
        ))}
      </motion.div>

      {/* Membership Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          // All plans are non-transferable and subject to lounge protocols.
          Valid until hours depleted.
        </p>
      </motion.div>
    </section>
  );
}
