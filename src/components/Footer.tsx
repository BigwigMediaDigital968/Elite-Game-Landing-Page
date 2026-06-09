import React from "react";
import {
  Gamepad2,
  Linkedin,
  MapPin,
  MessageSquare,
  Twitter,
  Instagram,
  Disc,
  Clock,
  Phone,
} from "lucide-react";

interface FooterProps {
  onNotify?: (msg: string) => void;
}

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A";

const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Pricing", href: "#pricing" },
  { name: "Membership", href: "#membership" },
  { name: "Tournaments", href: "#tournaments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Rules", href: "#rules" },
  { name: "Contact", href: "#contact" },
];

export default function Footer({ onNotify }: FooterProps) {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-16 z-10 overflow-hidden">
      {/* Background neon fog flares for cohesive depth */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-5 text-left">
            <div className="flex items-center gap-4">
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-cyan-400/30 p-2 shadow-lg group cursor-pointer"
                onClick={() =>
                  onNotify?.("Elite Core terminal offline. Node secure.")
                }
              >
                <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl blur group-hover:bg-cyan-500/25 transition duration-300" />
                <img
                  src="/logo-trans.png"
                  alt="Elite Lounge Logo"
                  className="relative h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <Gamepad2 className="hidden relative h-5 w-5 text-cyan-400 animate-pulse" />
              </div>
              <div>
                <p className="text-lg font-black tracking-[0.2em] text-white uppercase leading-none">
                  Elite Lounge
                </p>
                <span className="text-[9px] block tracking-[0.25em] text-cyan-400/80 font-bold uppercase mt-1">
                  Premium Cyber Room
                </span>
              </div>
            </div>

            <p className="text-sm font-black italic text-cyan-400/90 font-mono tracking-wide uppercase">
              // Premium Gaming Lounge Experience in Deesa
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-mono uppercase tracking-[0.1em]">
              Deesa's most optimized esports cyber-room. Harnessing dual 4K
              console gaming setups, mechanical wheel simulator hubs, and
              high-fidelity sensory virtual reality.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-6">
              // SYSTEM NODES
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-mono uppercase tracking-wider">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() =>
                      onNotify?.(
                        `Routing connection to ${link.name.toUpperCase()}...`,
                      )
                    }
                    className="hover:text-cyan-300 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity">
                      &gt;
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Geolocation & Operational Info */}
          <div className="md:col-span-4 text-left space-y-6">
            {/* Address */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                // GEOLOCATION NODE
              </h4>
              <div className="flex gap-3 items-start text-xs text-slate-400 font-mono">
                <MapPin className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed uppercase tracking-wider">
                  ELITE LOUNGE NODE, <br />
                  Palika Bazaar, Main Hub, <br />
                  Deesa, Gujarat, IN.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest">
                // TIMING CAPACITORS
              </h4>
              <div className="flex gap-3 items-start text-xs text-slate-400 font-mono">
                <Clock className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed uppercase tracking-wider">
                  Active daily: 09:00 AM - 12:30 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Steps Status Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-6">
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
            <span className="text-cyan-400 uppercase tracking-widest font-bold">
              FOLLOW CODES
            </span>
            <div className="flex gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  onNotify?.("Redirecting to WhatsApp secure control link...")
                }
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-cyan-950/40 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                aria-label="Contact via WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  onNotify?.("Instagram communication protocol launching soon.")
                }
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-rose-950/40 hover:text-rose-400 transition border border-white/5 text-slate-400"
                aria-label="Instagram Link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-cyan-950/40 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                aria-label="Twitter Link"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-cyan-950/40 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 hover:bg-indigo-950/40 hover:text-indigo-400 transition border border-white/5 text-slate-400"
                aria-label="Discord Link"
              >
                <Disc className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* HUD System Status tracker */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
              SYSTEM STATUS
            </span>
            <div className="flex gap-1.5">
              <div className="h-1.5 w-6 rounded bg-cyan-400 animate-pulse" />
              <div className="h-1.5 w-6 rounded bg-cyan-400/60" />
              <div className="h-1.5 w-6 rounded bg-cyan-400/30" />
              <div className="h-1.5 w-2 rounded bg-fuchsia-500" />
            </div>
          </div>
        </div>

        {/* Legal Copyright Footer */}
        <div className="text-center text-[10px] text-slate-600 font-mono mt-8 border-t border-white/5 pt-6">
          &copy; 2026 Elite Lounge. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
