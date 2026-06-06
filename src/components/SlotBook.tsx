import {
  Calendar,
  Clock,
  Compass,
  Gamepad2,
  Layers,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

interface GamingRig {
  id: string;
  name: string;
  type: string;
  status: string;
  badge: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  color: string;
  disabled?: boolean;
}

interface BookSlotProps {
  selectedRig: GamingRig | null;
  setSelectedRig?: (rig: GamingRig) => void;
  bookingDate: string;
  setBookingDate?: (date: string) => void;
  bookingTime: string;
  setBookingTime?: (time: string) => void;
  hours: number;
  setHours?: (hours: number) => void;
  players: number;
  setPlayers?: (players: number) => void;
  totalPrice: number;
  generateDynamicWhatsAppLink?: () => string;
  onNotify?: (msg: string) => void;
}

// Predefined rigs matching Elite Lounge's specifications
const GAMING_RIGS: GamingRig[] = [
  {
    id: "ps5",
    name: "PS5 Dual Rig",
    type: "Console Gaming",
    status: "Available",
    badge: "Special Opening Offer",
    description:
      "Equipped with dual DualSense controllers, 4K HDR projection, and comfortable beanbags & sofas.",
    features: ["Co-op Ready", "120Hz Output", "Latest Releases"],
    icon: Gamepad2,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "racing",
    name: "Pro Racing Wheel Cockpit",
    type: "Simulation",
    status: "Available",
    badge: "Ultra Immersive",
    description:
      "Thrustmaster racing wheel with force feedback, peddle sets, and bucket-style racing seats.",
    features: ["Force Feedback", "F1 & GT Classics", "Bucket Seat Layout"],
    icon: Compass,
    color: "from-amber-500 to-orange-400",
  },
  {
    id: "vr",
    name: "Oculus VR Space",
    type: "Virtual Reality",
    status: "Limited Slots",
    badge: "Next-Gen Tech",
    description:
      "Room-scale boundary with Quest series headsets, loaded with Beat Saber, Superhot, and custom titles.",
    features: ["Room-Scale Area", "Motion Controls", "Live Feed Display"],
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "pc",
    name: "PC Battle Station",
    type: "PC Esports",
    status: "Coming Soon",
    badge: "Under Construction",
    description:
      "RTX Series graphics, high-refresh rate esports monitors, and mechanical gaming accessories.",
    features: [
      "RTX Graphic Rigs",
      "Mechanical Keyboards",
      "Competitive Catalog",
    ],
    icon: Layers,
    color: "from-emerald-500 to-teal-400",
    disabled: true,
  },
];

export default function BookSlot({
  selectedRig,
  setSelectedRig,
  bookingDate,
  setBookingDate,
  bookingTime,
  setBookingTime,
  hours,
  setHours,
  players,
  setPlayers,
  totalPrice,
  generateDynamicWhatsAppLink,
  onNotify,
}: BookSlotProps) {
  return (
    <section
      id="rig-configurator"
      className="relative py-16 lg:py-24 border-t border-white/5 bg-slate-950/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold">
              TACTICAL HARDWARE ARSENAL
            </p>
            <h2 className="text-3xl md:text-5xl font-black italic tracking-wide uppercase mt-2 text-white">
              SELECT YOUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                PLAYSTATION
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md font-mono">
            [SYSTEMS RUNNING OPTIMALLY]. Tap any station configuration below to
            configure hours, inspect live specifications, and initialize slot
            validation.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rig cards - Left Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GAMING_RIGS.map((rig) => {
              const IconComponent = rig.icon;
              const isSelected = selectedRig?.id === rig.id;

              return (
                <motion.div
                  key={rig.id}
                  onClick={() => {
                    if (!rig.disabled) {
                      setSelectedRig?.(rig);
                      onNotify?.(`Initialized system profile: ${rig.name}`);
                    } else {
                      onNotify?.(
                        `Station status: Pending installation. Hardware is offline.`,
                      );
                    }
                  }}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 text-left ${
                    rig.disabled
                      ? "opacity-55 cursor-not-allowed bg-slate-950/20 border-white/5"
                      : isSelected
                        ? "bg-gradient-to-b from-slate-900 to-slate-950 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.15)] cursor-pointer"
                        : "bg-slate-900/50 border-white/5 hover:border-cyan-400/40 hover:bg-slate-900/80 cursor-pointer"
                  }`}
                  whileHover={!rig.disabled ? { y: -4 } : {}}
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border ${
                        rig.disabled
                          ? "border-slate-500/30 text-slate-400 bg-slate-900"
                          : isSelected
                            ? "border-cyan-400/30 text-cyan-300 bg-cyan-950/60"
                            : "border-emerald-400/20 text-emerald-400 bg-emerald-950/40"
                      }`}
                    >
                      {rig.status}
                    </span>
                    <span className="text-[10px] text-slate-500 tracking-wider font-mono">
                      {rig.type}
                    </span>
                  </div>

                  <div className="flex gap-4 items-start mb-4">
                    <div
                      className={`p-3 rounded-xl bg-slate-950 border ${
                        isSelected
                          ? "border-cyan-400/40 text-cyan-400"
                          : "border-white/5 text-slate-400"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white tracking-wide text-lg leading-tight">
                        {rig.name}
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono mt-0.5">
                        {rig.badge}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {rig.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {rig.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-950/80 text-slate-300 px-2 py-0.5 rounded border border-white/5 font-mono"
                      >
                        // {feature}
                      </span>
                    ))}
                  </div>

                  {isSelected && (
                    <>
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 rounded-tr-xl" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 rounded-bl-xl" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400 rounded-br-xl" />
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Configurator Terminal Panel - Right Column */}
          <div id="booking-matrix" className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 blur-xl pointer-events-none rounded-3xl" />

            <div className="relative bg-slate-900/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="font-mono text-xs uppercase text-cyan-400 tracking-widest font-bold">
                    SLOT BOOKING MATRIX
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  ID: {selectedRig?.id?.toUpperCase() || "N/A"}-SYSTEM-V3
                </span>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-2">
                    SYSTEM TARGET:
                  </label>
                  <div className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-cyan-400/20">
                    <div className="p-2.5 rounded-lg bg-cyan-950/50 text-cyan-400">
                      <Gamepad2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-wide uppercase">
                        {selectedRig?.name || "No selection"}
                      </p>
                      <p className="text-[10px] text-cyan-400 font-mono">
                        {selectedRig?.type || "N/A"} &bull; Rs. 130 / Hour
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1.5">
                      <Calendar className="h-3 w-3 inline mr-1 text-cyan-400" />{" "}
                      DATE:
                    </label>
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate?.(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400 block mb-1.5">
                      <Clock className="h-3 w-3 inline mr-1 text-cyan-400" />{" "}
                      TIME SLOT:
                    </label>
                    <input
                      type="time"
                      value={bookingTime}
                      onChange={(e) => setBookingTime?.(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                      <Clock className="h-3 w-3 inline mr-1 text-cyan-400" />{" "}
                      DURATION (HOURS):
                    </label>
                    <span className="text-sm font-black text-cyan-400 font-mono">
                      {hours} Hour(s)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    value={hours}
                    onChange={(e) => setHours?.(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
                    <span>1 HR</span>
                    <span>2 HR</span>
                    <span>3 HR</span>
                    <span>4 HR</span>
                    <span>5 HR</span>
                    <span>6 HR max</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                      <Users className="h-3 w-3 inline mr-1 text-cyan-400" />{" "}
                      PLAYERS COUNTER:
                    </label>
                    <span className="text-sm font-black text-cyan-400 font-mono">
                      {players} Player(s)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    value={players}
                    onChange={(e) => setPlayers?.(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
                    <span>1 PLAYER</span>
                    <span>2 PLAYERS</span>
                    <span>3 PLAYERS</span>
                    <span>4 PLAYERS</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-white/5 space-y-2 mt-4 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/40 animate-pulse" />

                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>OPENING OFFER RATE</span>
                    <span>Rs. 130 / Hr</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>CALCULATED DURATION</span>
                    <span>{hours} Hours</span>
                  </div>
                  <div className="border-t border-dashed border-white/10 pt-2 flex justify-between items-end">
                    <span className="text-xs text-white font-bold tracking-wider uppercase">
                      TOTAL ESTIMATED FEES
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-cyan-400 tracking-tight font-mono">
                        Rs. {totalPrice}
                      </span>
                      <span className="block text-[8px] text-slate-500 font-mono uppercase">
                        No booking fee applied
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={generateDynamicWhatsAppLink?.() || "#"}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    onNotify?.(
                      "Opening WhatsApp node to validate secure booking reservation.",
                    )
                  }
                  className="relative w-full inline-flex items-center justify-center gap-3 group px-6 py-4 text-xs font-bold tracking-[0.2em] text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 active:scale-[0.98] mt-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-slate-950 text-transparent" />
                  BOOK SLOT ON WHATSAPP
                </a>

                <p className="text-[10px] text-center text-slate-500 font-mono leading-relaxed mt-1">
                  System generates a configured reservation code automatically.
                  Send to connect with our coordinator.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
