import {
  Disc,
  Gamepad2,
  Linkedin,
  MapPin,
  MessageSquare,
  Twitter,
} from "lucide-react";

interface FooterProps {
  onNotify?: (msg: string) => void;
}

const Footer = ({ onNotify }: FooterProps) => {
  return (
    <>
      <footer className="relative bg-slate-950 border-t border-white/5 py-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/5">
            {/* Brand Info */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/90 p-2 shadow-glow">
                  <img
                    src="/logo.png"
                    alt="Elite Lounge Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    Elite Lounge
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-mono">
                Deesa's most optimized esports cyber-room. Harnessing dual 4K
                console gaming setups, mechanical wheel simulator hubs, and
                high-fidelity sensory virtual reality.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                SYSTEM NODES
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-mono">
                <li>
                  <a
                    href="#rig-configurator"
                    className="hover:text-white transition"
                  >
                    // PS5 DECK
                  </a>
                </li>
                <li>
                  <a
                    href="#rig-configurator"
                    className="hover:text-white transition"
                  >
                    // VR COCKPIT
                  </a>
                </li>
                <li>
                  <a
                    href="#rig-configurator"
                    className="hover:text-white transition"
                  >
                    // SIMULATOR CABIN
                  </a>
                </li>
                <li>
                  <a
                    href="#rig-configurator"
                    className="hover:text-white transition"
                  >
                    // COMMUNITY RADAR
                  </a>
                </li>
              </ul>
            </div>

            {/* Map/Location */}
            <div>
              <h4 className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                TACTICAL GEOLOCATION
              </h4>
              <div className="flex gap-2 items-start text-xs text-slate-400 font-mono">
                <MapPin className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  ELITE LOUNGE NODE,
                  <br />
                  Palika Bazaar, Main Hub,
                  <br />
                  Deesa, Gujarat, IN.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Socials & Steps Status Indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-cyan-400 uppercase tracking-widest font-bold">
                FOLLOW ME
              </span>
              <div className="flex gap-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => onNotify?.("Opening Twitter external node.")}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => onNotify?.("Opening LinkedIn external node.")}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/918181818181"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    onNotify?.("Opening secure chat node via WhatsApp.")
                  }
                  className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                >
                  <MessageSquare className="h-4 w-4" />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    onNotify?.("Opening community Discord channel.")
                  }
                  className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 hover:text-cyan-400 transition border border-white/5 text-slate-400"
                >
                  <Disc className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                SYSTEM STATUS
              </span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-6 rounded bg-cyan-400" />
                <div className="h-1.5 w-6 rounded bg-cyan-400/60" />
                <div className="h-1.5 w-6 rounded bg-cyan-400/30" />
                <div className="h-1.5 w-2 rounded bg-fuchsia-500" />
              </div>
            </div>
          </div>

          <div className="text-center text-[10px] text-slate-600 font-mono mt-8 border-t border-white/5 pt-4">
            &copy; 2026 ALICA - ELITE LOUNGE NEXUS. ALL SYSTEMS DEPLOYED SAFELY.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
