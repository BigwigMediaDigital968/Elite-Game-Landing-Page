import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, Play, Menu, X } from "lucide-react";

interface GameNavbarProps {
  scrolled: boolean;
  activeNav: string;
  setActiveNav?: (val: string) => void;
  onNotify?: (msg: string) => void;
}

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Pricing", href: "#pricing" },
  { label: "Membership", href: "#membership" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Gallery", href: "#gallery" },
  { label: "Rules", href: "#rules" },
  { label: "Contact", href: "#contact" },
];

export default function GameNavbar({
  scrolled,
  activeNav,
  setActiveNav,
  onNotify,
}: GameNavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: { label: string; href: string }) => {
    setActiveNav?.(item.label);
    setMobileMenuOpen(false);

    const section = document.querySelector(item.href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    onNotify?.(`Connected to ${item.label} interface.`);
  };

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const active = NAV_ITEMS.find(
              (item) => item.href === `#${entry.target.id}`,
            );

            if (active) {
              setActiveNav?.(active.label);
            }
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [setActiveNav]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/95 border-b border-white/5 backdrop-blur-md py-4 shadow-lg shadow-black/40"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand with Logo Image */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => onNotify?.("Elite Interface systems operational.")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur group-hover:bg-cyan-500/35 transition duration-300" />
              <img
                src="/logo-trans.png"
                alt="Alica Elite Lounge Logo"
                className="relative h-11 w-11 object-contain bg-slate-950 rounded-lg border border-cyan-400/30 p-1"
                onError={(e) => {
                  // Fallback to Icon if image fails to load
                  e.currentTarget.style.display = "none";
                  const fallback = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="hidden relative items-center justify-center bg-slate-900 border border-cyan-400/30 text-cyan-400 p-2.5 rounded-lg h-11 w-11">
                <Gamepad2 className="h-5 w-5 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-black text-xl tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 uppercase">
                Elite
              </span>
              <span className="text-[9px] block tracking-[0.3em] text-cyan-400/70 font-semibold -mt-1 uppercase">
                ELITE LOUNGE
              </span>
            </div>
          </div>

          {/* Desktop Sci-Fi Nav Menu */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/50 border border-white/5 px-2 py-1 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 text-xs font-bold tracking-[0.15em] transition-all duration-300 rounded-full uppercase ${
                  activeNav.toLowerCase() === item.label.toLowerCase()
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeNav.toLowerCase() === item.label.toLowerCase() && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-cyan-500/10 border border-cyan-400/20 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Actions Block: WhatsApp Book & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                onNotify?.(
                  "Initializing secure booking interface on WhatsApp...",
                )
              }
              className="relative hidden sm:inline-flex items-center gap-2 group overflow-hidden"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:scale-105" />
              <div
                className="absolute inset-[1px] bg-slate-950 rounded-[inherit]"
                style={{
                  clipPath:
                    "polygon(9px 0, 100% 0, 100% calc(100% - 9px), calc(100% - 9px) 100%, 0 100%, 0 9px)",
                }}
              />
              <div className="relative px-6 py-2.5 flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-cyan-400 group-hover:text-white transition duration-300">
                <Play className="h-3.5 w-3.5 fill-cyan-400 group-hover:fill-white text-transparent" />
                BOOK NOW
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden relative p-2.5 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/30 transition-all"
              aria-label="Toggle Navigation Interface"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-cyan-400" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[76px] z-30 bg-slate-950/95 border-b border-white/5 shadow-2xl backdrop-blur-xl px-6 py-8 flex flex-col gap-5 xl:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-mono tracking-[0.3em] text-cyan-400/70 font-semibold mb-2 uppercase">
                // CENTRAL CORE SYSTEM MENU
              </span>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-bold tracking-[0.1em] uppercase transition duration-300 ${
                    activeNav.toLowerCase() === item.label.toLowerCase()
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="border-t border-white/5 pt-5">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNotify?.("Booking connection verified.");
                }}
                className="w-full relative inline-flex items-center justify-center gap-2 group px-6 py-4 text-xs font-bold tracking-[0.2em] text-slate-950 bg-cyan-400 active:scale-95 transition"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                }}
              >
                <Play className="h-3.5 w-3.5 fill-slate-950 text-transparent" />
                BOOK SLOTS ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
