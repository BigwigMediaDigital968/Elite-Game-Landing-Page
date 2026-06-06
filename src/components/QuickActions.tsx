import React from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  CreditCard,
  MessageSquare,
  Trophy,
  Users,
  ArrowUpRight,
} from "lucide-react";

interface ActionCard {
  label: string;
  icon: React.ComponentType<any>;
  description: string;
  image: string;
  glowColor: string;
  whatsappLink: string;
}

// Tailored custom WhatsApp links for each specific intent
const ACTION_CARDS: ActionCard[] = [
  {
    label: "Book a Gaming Slot",
    icon: Gamepad2,
    description:
      "Secure your high-performance console rig or racing seat instantly.",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=600",
    glowColor: "shadow-cyan-500/20 hover:border-cyan-400/40 text-cyan-400",
    whatsappLink:
      "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A",
  },
  {
    label: "Buy Membership",
    icon: CreditCard,
    description:
      "Unlock elite rates, priority access, and tournament discounts.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
    glowColor:
      "shadow-fuchsia-500/20 hover:border-fuchsia-400/40 text-fuchsia-400",
    whatsappLink:
      "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20am%20interested%20in%20buying%20or%20upgrading%20to%20a%20Premium%20Membership.%20Please%20provide%20pricing%20details.",
  },
  {
    label: "Contact on WhatsApp",
    icon: MessageSquare,
    description: "Have questions? Speak directly to our arena coordinator.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=600",
    glowColor:
      "shadow-emerald-500/20 hover:border-emerald-400/40 text-emerald-400",
    whatsappLink:
      "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20have%20a%20general%20query%20about%20the%20lounge%20facilities%20and%20timings.",
  },
  {
    label: "Join Tournaments",
    icon: Trophy,
    description: "Register for local bracket updates and play with the best.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
    glowColor: "shadow-amber-500/20 hover:border-amber-400/40 text-amber-400",
    whatsappLink:
      "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20register%20for%20the%20upcoming%20gaming%20tournaments.",
  },
  {
    label: "Visit With Friends",
    icon: Users,
    description: "Coordinate co-op campaigns and private party reservations.",
    image:
      "https://images.unsplash.com/photo-1511140531657-3b02eceb7886?auto=format&fit=crop&q=80&w=600",
    glowColor: "shadow-rose-500/20 hover:border-rose-400/40 text-rose-400",
    whatsappLink:
      "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20plan%20a%20visit%20with%20my%20friends.%20Do%20you%20have%20any%20group%20discounts%20available%3F",
  },
];

// Stagger parent variant for animated list entry
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function QuickActions() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Decorative grid section header */}
      <div className="flex flex-col items-start mb-8 border-l-2 border-cyan-400 pl-4">
        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400/80 font-bold uppercase">
          // FAST TRACK REQUISITION
        </span>
        <h2 className="text-xl md:text-2xl font-black italic tracking-wide uppercase text-white">
          QUICK COMMAND PANEL
        </h2>
      </div>

      {/* Staggered Responsive Grid - 5 Columns on large screens */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {ACTION_CARDS.map(
          ({
            label,
            icon: Icon,
            description,
            image,
            glowColor,
            whatsappLink,
          }) => (
            <motion.a
              key={label}
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/60 p-6 text-left shadow-lg backdrop-blur-md transition-all duration-300 cursor-hover click-effect ${glowColor}`}
            >
              {/* Background Image Layer with Zoom & Dimming Overlays */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/50 mix-blend-multiply" />
                <div className="absolute inset-0 bg-slate-950/40 opacity-100 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Top Interactive Row */}
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-inherit transition-colors duration-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300">
                  <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Bottom Descriptive Copy */}
              <div className="relative z-10">
                <h3 className="text-base font-extrabold text-white tracking-wide uppercase leading-snug group-hover:text-cyan-300 transition-colors duration-300">
                  {label}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-mono">
                  {description}
                </p>

                {/* Animated bottom status bar */}
                <div className="mt-4 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </div>

              {/* Tactical grid corner brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-cyan-400/50 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-cyan-400/50 transition-colors" />
            </motion.a>
          ),
        )}
      </motion.div>
    </section>
  );
}
