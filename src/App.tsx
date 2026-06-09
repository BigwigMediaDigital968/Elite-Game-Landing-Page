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
import SectionReveal from "./components/SectionReveal";
import MembershipPlan from "./components/MembershipPlan";
import OfferSection from "./components/OfferSection";
import TournamentSection from "./components/TournamentSection";
import GroupBooking from "./components/Groupbooking";
import EliteLoungeShow from "./components/EliteLoungeShow";
import EliteLoungeGallery from "./components/EliteLoungeShow";
import RulesSection from "./components/Rules";
import ContactSection from "./components/Contact";

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

function App() {
  // Navigation & Scroll State
  const [activeNav, setActiveNav] = useState("GAME");
  const [scrolled, setScrolled] = useState(false);

  // Booking Setup State
  const [selectedRig, setSelectedRig] = useState<GamingRig | null>(
    GAMING_RIGS[0],
  );
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("14:00");
  const [hours, setHours] = useState(2);
  const [players, setPlayers] = useState(2);

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

  return (
    <div className="relative overflow-hidden text-slate-100">
      <CustomCursor />
      <GameNavbar
        scrolled={scrolled}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />

      <SectionReveal>
        <GameHero />
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <AboutSection />
      </SectionReveal>

      <SectionReveal delay={0.15}>
        <GamingSetup />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <PriceTable />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <MembershipPlan />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <OfferSection />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <TournamentSection />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <GroupBooking />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <EliteLoungeGallery />
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <RulesSection />
      </SectionReveal>

      <SectionReveal delay={0.2}>
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
        />
      </SectionReveal>

      <SectionReveal delay={0.3}>
        <ContactSection />
      </SectionReveal>

      <Footer />
    </div>
  );
}

export default App;
