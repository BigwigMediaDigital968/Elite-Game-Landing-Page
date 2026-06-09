import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Cake,
  Users,
  Coffee,
  ArrowRight,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface GroupFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  bgClass: string;
  borderClass: string;
}

const GROUP_FEATURES: GroupFeature[] = [
  {
    title: "Birthday Gaming Parties",
    description:
      "Celebrate your leveling-up day with dedicated co-op slots, tournament setups, and customized private bracket matches.",
    icon: Cake,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-950/20",
    borderClass: "border-emerald-500/30",
  },
  {
    title: "Friends & College Squad bookings",
    description:
      "Gather your friends for competitive local lan brackets, private lobbies, and side-by-side couch multiplayer campaigns.",
    icon: Users,
    colorClass: "text-amber-400",
    bgClass: "bg-amber-950/20",
    borderClass: "border-amber-500/30",
  },
  {
    title: "Snacks & Late-Night Sessions",
    description:
      "Stay fully re-fueled with soft drinks, packaged chips, and hot snacks. Keep campaigning late into the night till 12:30 AM.",
    icon: Coffee,
    colorClass: "text-fuchsia-400",
    bgClass: "bg-fuchsia-950/20",
    borderClass: "border-fuchsia-500/30",
  },
];

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20Group%20Gaming%20Slot%20for%20my%20squad.%0A%0AGroup%20Size%3A%0ADate%3A%0ATime%3A%0AOccasion%20(Birthday%2FHangout)%3A";

export default function GroupBooking() {
  return (
    <section className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: Layered Cyber Frame Collage (Matching left side of image_520f27.png) */}
        <div className="lg:col-span-6 relative w-full aspect-square max-w-[500px] mx-auto">
          {/* Main Large Overlay Character Frame with curved corner mask */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden border border-cyan-500/20 bg-slate-900/60 shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-transform duration-500 hover:scale-[1.01]">
            <img
              src="/group-booking.png"
              alt="Friends Gaming Group"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition duration-700 pointer-events-none"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Command Header & Hex Bullet List (Matching right side of image_520f27.png) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          {/* Subtag, Header Icon, and Section Title */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              {/* Emblem icon representing the visual top logo emblem */}
              <div className="relative p-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400">
                <Sparkles className="h-4.5 w-4.5 animate-spin" />
              </div>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-emerald-400 uppercase block">
                # Squad Operations
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black italic tracking-tight text-white uppercase leading-tight">
              GAMING WITH FRIENDS? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 pe-3">
                BOOK A GROUP SLOT
              </span>
            </h2>
          </div>

          {/* List items with hexagonal neon icon containers */}
          <div className="space-y-6">
            {GROUP_FEATURES.map((feat) => {
              const Icon = feat.icon;

              return (
                <div key={feat.title} className="flex gap-4 items-start group">
                  {/* Hexagon Outline Container Wrapper */}
                  <div
                    className={`p-3 rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-105 ${feat.colorClass} ${feat.borderClass} ${feat.bgClass}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Bullet Content */}
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-wide uppercase transition-colors duration-300 group-hover:text-cyan-300">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Group Booking Bevel Action Button */}
          <div className="pt-4 flex justify-start">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center justify-center gap-3 group px-8 py-4 text-xs font-black tracking-[0.2em] text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <MessageSquare className="h-4 w-4 fill-slate-950 text-transparent" />
              BOOK GROUP SESSION ON WHATSAPP
              <ArrowRight className="h-4.5 w-4.5 transform group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
