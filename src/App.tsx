import { useCallback } from "react";
import { motion } from "framer-motion";
import {
  Gamepad,
  SunMedium,
  Sparkles,
  ShieldCheck,
  Gift,
  Trophy,
  Users,
  Sparkles as SparkleIcon,
  MapPin,
  Clock,
  Smartphone,
  Star,
  CheckCircle,
} from "lucide-react";
import Navbar from "./components/Navbar";
import GameHero from "./components/GameHero";
import GameNavbar from "./components/Navbar";

import React, { useState, useEffect } from "react";

import {
  Gamepad2,
  MessageSquare,
  Calendar,
  Play,
  Compass,
  Layers,
} from "lucide-react";
import Footer from "./components/Footer";
import BookSlot from "./components/SlotBook";
import CustomCursor from "./components/CustomCursor";
import QuickActions from "./components/QuickActions";
import AboutSection from "./components/About";
import GamingSetup from "./components/GamingSetup";
import PriceTable from "./components/PriceTable";

// Interfaces for typing safety and resolving TypeScript errors
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

interface GameNavbarProps {
  scrolled: boolean;
  activeNav: string;
  setActiveNav?: (val: string) => void;
  onNotify?: (msg: string) => void;
}

interface GameHeroProps {
  currentBgIndex: number;
  setCurrentBgIndex?: (idx: number) => void;
  onNotify?: (msg: string) => void;
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

interface FooterProps {
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

const whatsappLink =
  "https://wa.me/918181818181?text=Hi%20Elite%20Lounge%2C%20I%20want%20to%20book%20a%20gaming%20slot.%0A%0AName%3A%0AGaming%20Setup%3A%0ADate%3A%0ATime%3A%0ANumber%20of%20Players%3A";

const actionCards = [
  { label: "Book a Gaming Slot", icon: Gamepad },
  { label: "Buy Membership", icon: Gift },
  { label: "Contact on WhatsApp", icon: Smartphone },
  { label: "Join Tournaments", icon: Trophy },
  { label: "Visit With Friends", icon: Users },
];

const features = [
  {
    title: "Premium Gaming Setup",
    description: "PS5, Racing Wheel, VR and next-level gear.",
  },
  {
    title: "Comfortable Sofa Seating",
    description: "Relaxed lounge seating for your squad.",
  },
  {
    title: "Snacks & Soft Drinks",
    description: "Quick bites, refreshments, and energy boosts.",
  },
  {
    title: "Friends Group Gaming",
    description: "Book with friends and celebrate together.",
  },
  {
    title: "Open 9 AM to 12:30 AM",
    description: "Long gaming hours for all-day action.",
  },
];

const gamingSetups = [
  {
    title: "PS5 Gaming",
    details: ["Standard Price Rs. 120 / Hour", "Launch Access Rs. 130 / Hour"],
    highlight: "Best console experience",
    badge: "Standard Price",
  },
  {
    title: "Racing Wheel",
    details: ["Regular Rs. 200 / Hour", "Opening Offer Rs. 130 / Hour"],
    highlight: "High-speed realism",
    discount: true,
  },
  {
    title: "VR Gaming",
    details: ["Regular Rs. 200 / Hour", "Opening Offer Rs. 130 / Hour"],
    highlight: "Immersive virtual action",
    discount: true,
  },
  {
    title: "PC Gaming",
    details: ["Coming Soon"],
    highlight: "Premium PC lineup arriving soon",
    comingSoon: true,
  },
];

const membershipPlans = [
  {
    type: "PS5 Membership",
    name: "PS5 Pass",
    price: "Rs. 3,300",
    features: [
      "40 hours PS5 gaming",
      "Flexible usage",
      "Premium lounge access",
    ],
  },
  {
    type: "PS5 Membership",
    name: "PS5 Pro Pass",
    price: "Rs. 7,000",
    features: [
      "100 hours play",
      "Best value for PS5 lovers",
      "Priority booking",
    ],
  },
  {
    type: "All Access Membership",
    name: "All Access Pass",
    price: "Rs. 5,000",
    features: [
      "PS5 + Racing Wheel + VR",
      "Premium sofa seating",
      "Flexible sessions",
    ],
  },
  {
    type: "All Access Membership",
    name: "All Access Elite Pass",
    price: "Rs. 10,100",
    features: ["Most Popular", "Best value", "Priority booking"],
    popular: true,
  },
];

const tournamentCards = [
  { title: "FIFA Tournament", icon: Trophy },
  { title: "Cricket Gaming Tournament", icon: Sparkles },
  { title: "Racing Challenge", icon: Star },
  { title: "Tekken / Fighting Games", icon: ShieldCheck },
];

const galleryCards = [
  "PS5 Setup",
  "Racing Wheel Setup",
  "VR Arena",
  "Sofa Lounge",
  "Snacks & Drinks",
  "Friends Gaming",
];

function App() {
  // Navigation & Scroll State
  const [activeNav, setActiveNav] = useState("GAME");
  const [scrolled, setScrolled] = useState(false);

  // Background Slider State
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Booking Setup State
  const [selectedRig, setSelectedRig] = useState<GamingRig | null>(
    GAMING_RIGS[0],
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("14:00");
  const [hours, setHours] = useState(2);
  const [players, setPlayers] = useState(2);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  // Track window scroll for header transform
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set today's date on initial mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setBookingDate(today);
  }, []);

  // Auto cycling background slider

  const hourlyRate = 130;
  const totalPrice = hours * hourlyRate;

  const generateDynamicWhatsAppLink = () => {
    const baseText =
      `Hi Elite Lounge, I want to book a gaming slot.\n\n` +
      `👤 Name: [Enter Name Here]\n` +
      `🎮 Gaming Setup: ${selectedRig?.name || "PS5 Dual Rig"}\n` +
      `📅 Date: ${bookingDate}\n` +
      `🕒 Time: ${bookingTime}\n` +
      `⏳ Duration: ${hours} Hour(s)\n` +
      `👥 Number of Players: ${players}\n\n` +
      `Total Estimated Price: Rs. ${totalPrice} (at Rs. 130/Hour)`;

    return `https://wa.me/918181818181?text=${encodeURIComponent(baseText)}`;
  };

  const triggerMockNotification = (message: string) => {
    setNotificationMsg(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  return (
    <div className="relative overflow-hidden text-slate-100">
      <CustomCursor />
      <GameNavbar
        scrolled={scrolled}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onNotify={triggerMockNotification}
      />

      <GameHero />
      <QuickActions />
      <AboutSection />
      <GamingSetup />
      <PriceTable />

      {/* <main className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section
          id="membership"
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Membership Plans
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Premium gaming pass cards for every player.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary rounded-full px-6 py-3 text-sm font-semibold"
              >
                Buy Membership on WhatsApp
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary rounded-full px-6 py-3 text-sm font-semibold"
              >
                Ask About Membership
              </a>
            </div>
          </div>
          <div className="mt-8 grid gap-6 xl:grid-cols-4">
            {membershipPlans.map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`glass-card relative rounded-[2rem] border border-white/10 p-7 shadow-glow ${plan.popular ? "border-cyan-400/30" : ""}`}
              >
                {plan.popular ? (
                  <div className="absolute -top-4 right-4 rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200 shadow-glow">
                    Most Popular
                  </div>
                ) : null}
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                  {plan.type}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-3 text-3xl font-black text-cyan-300">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 text-cyan-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-10 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
              Opening Offer
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Everything at Rs. 130 / Hour
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              One month launch offer only. Secure your premium gaming session in
              Deesa while this special price lasts.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold"
            >
              Claim Offer on WhatsApp
            </a>
          </div>
        </section>

        <section
          id="tournaments"
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Weekend Tournaments Coming Soon
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Gear up for competitive weekend action.
              </h2>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary rounded-full px-6 py-4 text-sm font-semibold"
            >
              Join Tournament List on WhatsApp
            </a>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tournamentCards.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="glass-card rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition"
              >
                <div className="flex items-center gap-3 text-cyan-300">
                  <item.icon className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Entry fee, dates, and prize pool coming soon. Stay ready with
                  your squad.
                </p>
                <span className="mt-5 inline-flex rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 shadow-inner">
                  Coming Soon
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
          id="group-booking"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Gaming With Friends?
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Book a Group Slot for parties and squad sessions.
              </h2>
              <p className="mt-4 text-slate-300 leading-8">
                Perfect for birthday gaming parties, college groups, and
                late-night sessions. Enjoy snacks, soft drinks, premium seating,
                and group booking convenience until 12:30 AM.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold"
              >
                Book Group Session on WhatsApp
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Birthday Gaming Party",
                "College Group Fun",
                "Friends Squad Slot",
                "Late Night Gaming",
              ].map((item) => (
                <div
                  key={item}
                  className="glass-card rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow"
                >
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Elite Lounge Vibes
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                See the premium lounge atmosphere.
              </h2>
            </div>
            <span className="rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-400">
              Placeholder images
            </span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {galleryCards.map((title) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-glow"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,217,255,0.12),transparent_25%)] opacity-80" />
                <div className="relative flex h-52 flex-col justify-end gap-3 rounded-[2rem] bg-slate-900/80 p-6 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{title}</p>
                  <p className="text-sm text-slate-400">
                    Premium lounge preview with neon accents and energetic
                    style.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="rules"
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Rules
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Keep the lounge premium, safe, and ready for everyone.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Respect gaming equipment",
              "Booking time must be followed",
              "No damage to controller, console, VR, or wheel",
              "Food and drinks should be handled carefully",
              "Damage charges may apply",
              "Maintain clean and friendly environment",
            ].map((rule) => (
              <div
                key={rule}
                className="glass-card rounded-[1.8rem] border border-white/10 bg-slate-900/80 p-5"
              >
                <p className="text-sm text-slate-300">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                WhatsApp Booking
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                No long forms. WhatsApp-first booking.
              </h2>
              <ul className="mt-6 space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-cyan-300" />
                  <span>
                    Click Book Now, select setup, share date/time, and confirm
                    your slot on WhatsApp.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-cyan-300" />
                  <span>
                    All CTAs open WhatsApp with a pre-filled booking message.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 text-cyan-300" />
                  <span>
                    Fast, mobile-friendly booking experience for every visitor.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-cyan-400/10 bg-slate-900/80 p-8 text-center shadow-glow">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Step 1
              </p>
              <p className="mt-4 text-4xl font-black text-white">Book Now</p>
              <p className="mt-4 text-slate-400">
                Select PS5, Racing Wheel, or VR, then send your date and time.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Ready to book elite gaming time in Deesa?
              </h2>
              <div className="mt-8 space-y-5 text-slate-300">
                <p>
                  <span className="font-semibold text-white">City:</span> Deesa
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Phone / WhatsApp:
                  </span>{" "}
                  8181818181
                </p>
                <p>
                  <span className="font-semibold text-white">Timing:</span> 9:00
                  AM to 12:30 AM
                </p>
                <p>
                  <span className="font-semibold text-white">Address:</span>{" "}
                  Coming Soon
                </p>
                <p>
                  <span className="font-semibold text-white">Instagram:</span>{" "}
                  Add later
                </p>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-glow">
              <div className="flex items-center gap-4 text-cyan-300">
                <MapPin className="h-6 w-6" />
                <p className="font-semibold text-white">
                  Google Map placeholder
                </p>
              </div>
              <div className="mt-5 rounded-[1.5rem] bg-slate-950/80 p-6 text-sm text-slate-300">
                Exact location will be updated soon. The lounge is set for
                premium gaming experiences in Deesa.
              </div>
            </div>
          </div>
        </section>
      </main> */}

      <BookSlot
        selectedRig={selectedRig}
        setSelectedRig={setSelectedRig}
        bookingDate={bookingDate}
        setBookingDate={setBookingDate}
        bookingTime={bookingTime}
        setBookingTime={setBookingTime}
        hours={hours}
        setHours={setHours}
        players={players}
        setPlayers={setPlayers}
        totalPrice={totalPrice}
        generateDynamicWhatsAppLink={generateDynamicWhatsAppLink}
        onNotify={triggerMockNotification}
      />

      <Footer onNotify={triggerMockNotification} />
    </div>
  );
}

export default App;
