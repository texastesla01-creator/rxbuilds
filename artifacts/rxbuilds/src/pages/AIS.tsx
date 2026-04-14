import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  CheckCircle2, ShieldCheck, Brain, Clock, BookOpen, Wifi,
  Zap, AlertTriangle, Star, ChevronRight, Activity, Stethoscope,
  FlaskConical, FileText
} from "lucide-react";
import appScreenshot from "@assets/Untitled_design_(34)_1776125718374.png";
import screenPatientDark from "@assets/Untitled_design_(17)_1776125811964.png";
import screenPatientLight from "@assets/Untitled_design_(21)_1776125800252.png";
import screenEVT from "@assets/Untitled_design_(19)_1776125804335.png";
import screenPlan from "@assets/Untitled_design_(18)_1776125807060.png";
import screenRefs from "@assets/Untitled_design_(22)_1776125797417.png";

const APPSTORE_URL = "https://apps.apple.com/us/app/ais-decision-tool-2026/id6760186011";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

const coreFeatures = [
  {
    icon: ShieldCheck,
    title: "IV Thrombolysis Eligibility",
    desc: "Evaluates absolute and relative contraindications, time windows, and dosing for alteplase and tenecteplase.",
  },
  {
    icon: Activity,
    title: "Endovascular Thrombectomy",
    desc: "LVO criteria, ASPECTS thresholds, imaging requirements, and extended time window assessment.",
  },
  {
    icon: Clock,
    title: "Extended Window Protocols",
    desc: "EXTEND penumbra criteria (4.5–9 h), wake-up stroke, and unknown-onset protocols (WAKE-UP trial).",
  },
  {
    icon: FileText,
    title: "ASPECTS Integration",
    desc: "Structured ASPECTS scoring with absolute and relative contraindication screening built in.",
  },
  {
    icon: CheckCircle2,
    title: "Integrated Management Checklist",
    desc: "Auto-generated treatment plan summary covering IVT and EVT eligibility in a single view.",
  },
  {
    icon: BookOpen,
    title: "Reference Library",
    desc: "Guideline sections, landmark trials (DAWN, DEFUSE-3, EXTEND, WAKE-UP), and dosing protocols.",
  },
  {
    icon: Wifi,
    title: "Fully Offline Core",
    desc: "All core clinical decision support features work without an internet connection — ready at the bedside.",
  },
  {
    icon: FlaskConical,
    title: "Dosing Reference",
    desc: "Weight-based alteplase and TNK dosing with clinical parameters pre-loaded.",
  },
];

const evidence = ["DAWN", "DEFUSE-3", "EXTEND", "WAKE-UP", "2026 Stroke Guidelines"];

export default function AIS() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-44">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-sky-50 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-block rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-1 mb-4">
                Clinical Decision Support · iOS
              </span>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                AIS Decision<br />
                <span style={{ color: "#00C8FF" }}>Tool 2026</span>
              </h1>
              <p className="mt-5 text-xl font-semibold text-gray-700">
                Rapid clinical decision support for acute ischemic stroke.
              </p>
              <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Built by a board-certified vascular neurologist and neurohospitalist for point-of-care use. Evaluate IVT and EVT eligibility in seconds — at the bedside.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={APPSTORE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors shadow-lg"
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs leading-none mb-0.5">Download on the</div>
                  <div className="text-sm font-semibold leading-none">App Store</div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2} className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> iOS Exclusive</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> 3-Day Free Trial</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> Works Offline</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-cyan-500" /> 2026 Stroke Guidelines</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── App Screenshot Gallery ─────────────────────────── */}
      <section className="py-20 bg-[#080d18] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Inside the App
          </motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1}
            className="text-2xl md:text-3xl font-bold text-white">
            Every decision, every protocol — at your fingertips
          </motion.h2>
        </div>

        {/* Scrollable phone strip */}
        <div className="flex gap-5 px-8 md:px-16 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {[
            { src: screenPatientLight, label: "Patient Inputs", sub: "Age · NIHSS · Onset time" },
            { src: screenPatientDark, label: "Clinical Scores", sub: "Dark mode — NIHSS · mRS" },
            { src: screenEVT, label: "EVT Eligibility", sub: "Time windows · Class ratings" },
            { src: screenPlan, label: "Management Plan", sub: "Integrated care protocol" },
            { src: appScreenshot, label: "AIS Guidelines AI", sub: "Claude-powered decision support" },
            { src: screenRefs, label: "Evidence Base", sub: "2026 Stroke Guideline + trials" },
          ].map(({ src, label, sub }, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true }} custom={i * 0.08}
              className="flex-none snap-center flex flex-col items-center gap-3">
              <div className="relative w-[180px] md:w-[210px] bg-[#111] rounded-[36px] shadow-2xl overflow-hidden border-[6px] border-[#1a1a2e]">
                <div className="absolute top-0 inset-x-0 h-4 bg-[#111] z-20 rounded-b-3xl mx-10 pointer-events-none" />
                <img src={src} alt={label} className="w-full h-auto block" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Evidence Badge Row ─────────────────────────────── */}
      <section className="py-6 border-y bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <span className="text-gray-400 font-normal">Evidence base:</span>
            {evidence.map((e) => (
              <span key={e} className="bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{e}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Features ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Clinical Features</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Every feature below works fully offline — no internet required at the bedside.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "#e0f9ff" }}>
                  <f.icon className="h-5 w-5" style={{ color: "#00C8FF" }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Assistant Section ───────────────────────────── */}
      <section className="py-24 bg-cyan-50 border-y border-cyan-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#00C8FF22" }}>
                <Brain className="h-5 w-5" style={{ color: "#00C8FF" }} />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">Optional Pro Feature</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Clinical Reasoning Assistant
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ask complex acute ischemic stroke questions and receive evidence-backed answers with guideline citations — including Section, Class of Recommendation, and Level of Evidence.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Zap, label: "Guideline-cited answers", desc: "Every response references current 2026 stroke guidelines." },
                { icon: Stethoscope, label: "Clinician-only scope", desc: "Restricted to acute ischemic stroke management topics." },
                { icon: ShieldCheck, label: "Fully optional", desc: "All core features work without AI — activate only when needed." },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 border border-cyan-100 shadow-sm">
                  <item.icon className="h-5 w-5 mb-3" style={{ color: "#00C8FF" }} />
                  <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Credibility ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#e0f9ff" }}>
                  <Star className="h-5 w-5" style={{ color: "#00C8FF" }} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-cyan-600">Physician-Built</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Built by a stroke neurologist, for stroke clinicians.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                AIS Decision Tool 2026 was designed by a board-certified vascular neurologist and neurohospitalist with direct bedside experience managing acute ischemic stroke.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every decision pathway, contraindication screen, and dosing reference reflects current clinical practice and 2026 stroke guidelines — not generic medical databases.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Board-certified vascular neurologist",
                "Neurohospitalist — point-of-care design",
                "2026 guideline aligned",
                "Built for physicians, neurologists, emergency physicians, and APPs",
                "Not a consumer health app",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "#00C8FF" }} />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────── */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Affordable Pricing</h2>
          <p className="text-lg text-gray-500 mb-10">Less than a cup of coffee. Available instantly on the App Store.</p>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 inline-block w-full max-w-sm mx-auto">
            <div className="text-sm font-bold uppercase tracking-wider text-cyan-600 mb-3">Monthly Subscription</div>
            <div className="text-6xl font-bold text-gray-900 mb-1">$2.99</div>
            <div className="text-gray-500 mb-6">per month</div>
            <div className="space-y-3 text-sm text-left mb-8">
              {["3-day free trial — no charge upfront", "Full access to all core clinical features", "Optional AI reasoning assistant", "Works offline at the bedside", "Cancel anytime in App Store settings"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" style={{ color: "#00C8FF" }} />
                  {f}
                </div>
              ))}
            </div>
            <a
              href={APPSTORE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white rounded-xl px-6 py-3 font-semibold hover:bg-gray-900 transition-colors w-full"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Start Free Trial
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ────────────────────────────────────── */}
      <section className="py-12 bg-amber-50 border-y border-amber-100">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex gap-4">
            <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-amber-900">
              <p className="font-semibold text-base">Clinical Decision Support — Not Medical Advice</p>
              <p>AIS Decision Tool 2026 is intended for use by licensed clinicians only. This app provides clinical decision support based on published guidelines and is not a substitute for professional medical judgment.</p>
              <p>This app is <strong>not HIPAA compliant</strong>. Do not enter patient-identifiable information. All calculations and recommendations are for informational purposes only. Treatment decisions remain the responsibility of the treating clinician.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-24 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0369a1 0%, #0891b2 50%, #06b6d4 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ready at the bedside.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start your free 3-day trial — no charge upfront, cancel anytime.
          </p>
          <a
            href={APPSTORE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white rounded-xl px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            style={{ color: "#0891b2" }}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 flex-shrink-0" style={{ fill: "#0891b2" }} xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ── Page Footer Strip ─────────────────────────────── */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>AIS Decision Tool 2026 — For licensed clinicians only</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/ais-privacy" className="hover:text-gray-700 transition-colors">Privacy Policy</Link>
            <Link href="/ais-terms" className="hover:text-gray-700 transition-colors">Terms of Use</Link>
            <a href="mailto:texastesla01@gmail.com" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </section>

    </div>
  );
}
