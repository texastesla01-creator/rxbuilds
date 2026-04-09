import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Activity, Calculator, BookOpen, ChevronDown, Heart, Shield,
  Zap, Users, GraduationCap, Star, ArrowRight, CheckCircle, Sun, Moon
} from "lucide-react";

// Dark mode screenshots
import darkPrevent from "@assets/IMG_2933_1775745060054.jpeg";
import darkPrimary from "@assets/IMG_2936_1775745060053.jpeg";
import darkSecondary from "@assets/IMG_2939_1775745060053.jpeg";
import darkLLT from "@assets/IMG_2940_1775745060053.jpeg";

// Light mode screenshots
import lightPrevent from "@assets/IMG_2934_1775745060054.jpeg";
import lightPrimary from "@assets/IMG_2935_1775745060054.jpeg";
import lightSecondary from "@assets/IMG_2937_1775745060054.jpeg";
import lightLLT from "@assets/IMG_2941_1775745060053.jpeg";

const APP_STORE_URL = "https://apps.apple.com/us/app/lipidiq/id6760669194";
const SUPPORT_URL = "https://lipid-navigator.replit.app/support";
const PRIVACY_URL = "https://lipid-navigator.replit.app/privacy";

const PhoneFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-[240px] md:w-[260px] rounded-[42px] shadow-2xl overflow-hidden border-[7px] border-[#1a1a2e] flex-shrink-0 snap-center"
    style={{ backgroundColor: "#1a1a2e" }}>
    <div className="absolute top-0 inset-x-0 h-5 z-20 rounded-b-3xl mx-14 pointer-events-none" style={{ backgroundColor: "#1a1a2e" }}></div>
    <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
  </div>
);

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const TABS = [
  {
    id: "cardiologist",
    label: "Cardiologist",
    icon: Heart,
    features: [
      "ASCVD risk stratification with risk-enhancer overlay",
      "High-intensity statin selection for secondary prevention",
      "LDL-C target tracking per 2024 ACC/AHA thresholds",
      "Ezetimibe & PCSK9 inhibitor add-on decision logic",
      "Triglyceride management: fibrate, omega-3 protocols",
      "Complex polypharmacy drug-interaction checker",
    ],
  },
  {
    id: "primarycare",
    label: "Primary Care",
    icon: Users,
    features: [
      "Screening frequency recommendations by age & risk",
      "First-line statin initiation decision tree",
      "Patient-friendly risk explanation templates",
      "Monitoring intervals for LFTs and CK",
      "Statin intolerance: alternative regimen pathways",
      "Diabetes + dyslipidemia co-management guidance",
    ],
  },
  {
    id: "trainee",
    label: "Trainee / Student",
    icon: GraduationCap,
    features: [
      "Step-by-step guideline walkthroughs",
      "Pooled Cohort Equations explained visually",
      "Risk category definitions with clinical examples",
      "Statin intensity comparison tables",
      "Quick-reference lipid panel interpretation",
      "Board-review-style clinical decision scenarios",
    ],
  },
];

const GUIDELINES = [
  "2024 ACC/AHA", "ESC/EAS 2023", "NLA 2023", "ADA Standards 2024",
  "USPSTF", "IAS 2023", "AACE/ACE", "PCNA",
];

const FEATURES = [
  {
    icon: Calculator,
    title: "ASCVD Risk Engine",
    desc: "Pooled Cohort Equations with risk-enhancing factor overlay. Calculates 10-year and lifetime risk, factoring in coronary calcium scores, ABI, hsCRP, and family history.",
    color: "#3b82f6",
  },
  {
    icon: Activity,
    title: "Statin Protocol Guide",
    desc: "Evidence-based statin intensity selection for primary and secondary prevention. Includes drug interactions, myopathy risk stratification, and monitoring intervals.",
    color: "#06b6d4",
  },
  {
    icon: BookOpen,
    title: "LDL-C Target Calculator",
    desc: "Risk-stratified LDL-C goals drawn directly from 2024 ACC/AHA guidelines. Shows current LDL vs target and recommended intensification steps.",
    color: "#8b5cf6",
  },
];

const STAT_CHIPS = [
  { value: "2024", label: "Guidelines" },
  { value: "8+", label: "Modules" },
  { value: "Free", label: "No Subscription" },
  { value: "iOS", label: "App Store" },
];

const DARK_SHOTS = [
  { id: "dark-prevent",   src: darkPrevent,   alt: "PREVENT Calculator — dark" },
  { id: "dark-primary",   src: darkPrimary,   alt: "Primary Prevention — dark" },
  { id: "dark-secondary", src: darkSecondary, alt: "Secondary Prevention — dark" },
  { id: "dark-llt",       src: darkLLT,       alt: "LLT Reference — dark" },
];

const LIGHT_SHOTS = [
  { id: "light-prevent",   src: lightPrevent,   alt: "PREVENT Calculator — light" },
  { id: "light-primary",   src: lightPrimary,   alt: "Primary Prevention — light" },
  { id: "light-secondary", src: lightSecondary, alt: "Secondary Prevention — light" },
  { id: "light-llt",       src: lightLLT,       alt: "LLT Reference — light" },
];

export default function LipidIQ() {
  const [activeTab, setActiveTab] = useState("cardiologist");
  const [isDarkScreenshots, setIsDarkScreenshots] = useState(true);

  const shots = isDarkScreenshots ? DARK_SHOTS : LIGHT_SHOTS;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById("lipidiq-features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#080d18", color: "#f1f5f9", fontFamily: "'Inter', sans-serif" }}
    >

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-32 md:pt-28 md:pb-40">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #3b82f6 0%, transparent 70%)" }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border"
              style={{ borderColor: "rgba(59,130,246,0.4)", color: "#93c5fd", backgroundColor: "rgba(59,130,246,0.08)" }}
            >
              <Zap className="h-3 w-3" /> Clinical Decision Support · iOS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}
          >
            Clinical Lipid
            <br />
            <span style={{ color: "#3b82f6" }}>Intelligence.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Evidence-based lipid management grounded in 2024 ACC/AHA guidelines —
            built for physicians who demand precision at the point of care.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white text-base transition-all hover:scale-105 active:scale-95 min-w-[200px] justify-center"
              style={{ backgroundColor: "#3b82f6", minHeight: "52px", boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white flex-shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download Free
            </a>
            <button
              onClick={scrollToFeatures}
              className="flex items-center gap-2 px-6 py-4 rounded-2xl font-medium text-sm transition-all hover:scale-105 active:scale-95"
              style={{ color: "#94a3b8", border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)", minHeight: "52px" }}
            >
              Explore Features <ChevronDown className="h-4 w-4" />
            </button>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center justify-center gap-2 text-sm mb-20"
            style={{ color: "#64748b" }}
          >
            <span>8 Modules</span>
            <span style={{ color: "#334155" }}>·</span>
            <span>2024 ACC/AHA Guidelines</span>
            <span style={{ color: "#334155" }}>·</span>
            <span style={{ color: "#3b82f6" }}>Free</span>
          </motion.div>

          {/* Phone mockup cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-end justify-center gap-4 md:gap-6"
          >
            {[
              { label: "ASCVD Risk", value: "17.3%", sub: "HIGH RISK", color: "#ef4444", rows: ["LDL-C: 142 mg/dL", "HDL-C: 38 mg/dL", "TG: 210 mg/dL", "→ High-intensity statin"] },
              { label: "Statin Guide", value: "Rx", sub: "ATORVASTATIN 40mg", color: "#3b82f6", rows: ["Intensity: High", "LDL ↓ ~49%", "Monitor: 4–12 wk", "→ Goal LDL < 70"], scale: true },
              { label: "LDL-C Target", value: "<70", sub: "mg/dL GOAL", color: "#22c55e", rows: ["Current: 142 mg/dL", "Gap: 72 mg/dL", "Add Ezetimibe?", "→ Consider PCSK9i"] },
            ].map((card, i) => (
              <div
                key={i}
                className={`flex-1 max-w-[180px] md:max-w-[220px] rounded-3xl overflow-hidden ${card.scale ? "scale-110 z-10" : ""}`}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                  boxShadow: card.scale ? "0 0 60px rgba(59,130,246,0.2)" : "none",
                }}
              >
                {/* Card top bar */}
                <div className="px-4 pt-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: "#64748b" }}>{card.label}</p>
                  <p className="text-3xl font-bold" style={{ color: card.color, fontFamily: "'DM Serif Display', serif" }}>{card.value}</p>
                  <p className="text-[10px] font-bold tracking-widest mt-0.5" style={{ color: card.color + "aa" }}>{card.sub}</p>
                </div>
                <div className="px-4 py-3 space-y-2">
                  {card.rows.map((row, j) => (
                    <p key={j} className="text-xs" style={{ color: row.startsWith("→") ? "#3b82f6" : "#94a3b8" }}>{row}</p>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────── */}
      <section id="lipidiq-features" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Precision tools for every lipid decision
            </h2>
            <p style={{ color: "#94a3b8" }} className="text-lg">
              From first statin prescription to complex PCSK9i decisions — LipidIQ has the clinical logic built in.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {FEATURES.map((feat, i) => (
              <FadeIn key={feat.title} delay={i * 0.1}>
                <div
                  className="h-full p-8 rounded-3xl transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: feat.color + "1a" }}
                  >
                    <feat.icon className="h-6 w-6" style={{ color: feat.color }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{feat.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOT GALLERY ──────────────────────── */}
      <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <FadeIn className="max-w-2xl">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                See LipidIQ in action
              </h2>
              <p style={{ color: "#94a3b8" }}>
                Clean, evidence-grounded screens — in both light and dark mode.
              </p>
            </FadeIn>
            <div
              className="flex items-center gap-3 p-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Sun className={`h-4 w-4 transition-colors ${!isDarkScreenshots ? "text-blue-400" : "text-slate-500"}`} />
              <button
                onClick={() => setIsDarkScreenshots(!isDarkScreenshots)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                style={{ backgroundColor: isDarkScreenshots ? "#3b82f6" : "rgba(255,255,255,0.2)" }}
              >
                <span
                  className="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
                  style={{ transform: isDarkScreenshots ? "translateX(22px)" : "translateX(4px)" }}
                />
              </button>
              <Moon className={`h-4 w-4 transition-colors ${isDarkScreenshots ? "text-blue-400" : "text-slate-500"}`} />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
            {shots.map((shot, i) => (
              <div key={shot.id} className="flex justify-center snap-center shrink-0">
                <motion.div
                  key={shot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <PhoneFrame src={shot.src} alt={shot.alt} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABBED SECTION ──────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "rgba(0,0,0,0.15)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Built for every clinician
            </h2>
            <p style={{ color: "#94a3b8" }} className="text-lg">
              Whether you're a subspecialist, a generalist, or in training — LipidIQ meets you where you are.
            </p>
          </FadeIn>

          {/* Tab buttons */}
          <FadeIn className="flex justify-center mb-10">
            <div
              className="flex p-1 rounded-2xl gap-1"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    minHeight: "44px",
                    backgroundColor: activeTab === tab.id ? "#3b82f6" : "transparent",
                    color: activeTab === tab.id ? "#fff" : "#94a3b8",
                  }}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Tab content */}
          <div className="max-w-2xl mx-auto">
            {TABS.filter((t) => t.id === activeTab).map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className="p-8 rounded-3xl"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(59,130,246,0.2)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <ul className="space-y-4">
                    {tab.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#3b82f6" }} />
                        <span style={{ color: "#cbd5e1" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER STRIP ────────────────────────── */}
      <section className="py-8 border-y" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <Shield className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#64748b" }} />
            <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>
              <span className="font-semibold" style={{ color: "#94a3b8" }}>Clinical Disclaimer: </span>
              LipidIQ is a clinical reference tool intended for use by licensed healthcare professionals.
              It does not replace clinical judgment, physician-patient relationships, or individualized medical decision-making.
              All content is for informational and educational purposes only. Always apply guidelines in the context
              of each patient's unique clinical circumstances. Not FDA cleared or approved.
            </p>
          </div>
        </div>
      </section>

      {/* ── GUIDELINE BADGE ROW ─────────────────────── */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-8">
            <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#64748b" }}>
              Grounded in the world's leading lipid guidelines
            </p>
          </FadeIn>
          <div className="flex overflow-x-auto gap-3 pb-2 no-scrollbar justify-start md:justify-center flex-nowrap">
            {GUIDELINES.map((g) => (
              <span
                key={g}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                style={{
                  backgroundColor: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#93c5fd",
                }}
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ───────────────────────────── */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeIn>
            <div
              className="p-8 md:p-12 rounded-3xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <Star className="h-6 w-6 mb-6" style={{ color: "#3b82f6" }} />
              <blockquote
                className="text-2xl md:text-3xl leading-snug mb-8"
                style={{ fontFamily: "'DM Serif Display', serif", color: "#f1f5f9" }}
              >
                "Every time I started a statin or ordered a lipid panel, I wished I had a tool that did the guideline math for me — instantly, at the bedside. So I built one."
              </blockquote>
              <div className="mb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="pt-6 text-sm font-semibold" style={{ color: "#94a3b8" }}>Board-Certified Vascular Neurologist</p>
                <p className="text-xs tracking-widest uppercase font-bold mt-1" style={{ color: "#3b82f6" }}>RxBuilds LLC · Founder</p>
              </div>
              {/* Stat chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STAT_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    className="text-center p-4 rounded-2xl"
                    style={{ backgroundColor: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)" }}
                  >
                    <p className="text-2xl font-bold mb-1" style={{ color: "#3b82f6", fontFamily: "'DM Serif Display', serif" }}>{chip.value}</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>{chip.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
        />
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Make every lipid decision count.
            </h2>
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
              Download LipidIQ free on the App Store and bring evidence-based lipid management to every patient encounter.
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "#3b82f6",
                boxShadow: "0 0 50px rgba(59,130,246,0.4)",
                minHeight: "60px",
              }}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white flex-shrink-0">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm" style={{ color: "#475569" }}>Free · iOS · No account required</p>
          </FadeIn>
        </div>
      </section>

      {/* ── PAGE FOOTER ─────────────────────────────── */}
      <footer className="py-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)", backgroundColor: "rgba(0,0,0,0.3)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>LipidIQ</p>
              <p className="text-xs mt-1" style={{ color: "#475569" }}>by RxBuilds LLC · © 2025 All rights reserved</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#64748b" }}>
              <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">App Store</a>
              <a href="/" className="hover:text-blue-400 transition-colors">RxBuilds.com</a>
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Support</a>
              <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
