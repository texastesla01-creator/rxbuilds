import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Stethoscope, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-to-b from-blue-50/40 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show"
            className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-5">
            Physician-Founded · Clinical AI · Medical Fintech
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Clinical tools and financial software built by physicians, for physicians.
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded by a board-certified vascular neurologist and stroke program director. Every product solves a problem we've lived firsthand — from stroke care to physician finance.
          </motion.p>
        </div>
      </section>

      {/* ── Product Grid ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-6">

          {/* RxFinance — Featured full-width card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0066CC] to-[#004fa3] rounded-3xl p-8 md:p-12 text-white grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 rounded-full px-3 py-1">iOS App</span>
                <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Featured</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">RxFinance</h2>
              <p className="text-white/80 text-lg mb-5 max-w-2xl">
                Income tracking and tax optimization for 1099 physicians. Built around the exact financial life of independent medical practice.
              </p>
              <ul className="grid sm:grid-cols-3 gap-3 mb-7">
                {[
                  "1099 income tracking across facilities",
                  "Solo 401(k) contribution calculator",
                  "Quarterly estimated tax optimizer",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-white/50 flex-shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 items-center">
                <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
                  <Button className="bg-white text-[#0066CC] hover:bg-gray-100 font-semibold">
                    Try Free for 3 Days <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/rxfinance">
                  <span className="text-white/60 hover:text-white text-sm underline underline-offset-2 cursor-pointer transition-colors">
                    View details →
                  </span>
                </Link>
              </div>
              <p className="text-white/40 text-xs mt-2">$9.99/mo after trial</p>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <DollarSign className="h-28 w-28 text-white/10" />
            </div>
          </motion.div>

          {/* 3-column row: TaxRx · AIS · LipidIQ */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* TaxRx */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.1}
              className="bg-teal-50 border border-teal-100 rounded-3xl p-7 flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-100 rounded-full px-3 py-1 mb-4 self-start">
                iOS App
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-2">TaxRx</h2>
              <p className="text-muted-foreground text-sm mb-4">Tax intelligence for the self-employed physician.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["1099 & W-2 income parsing", "Quarterly payment tracker", "Deduction optimizer"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/us/app/taxrx/id6761803370" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full border-teal-200 text-teal-700 hover:bg-teal-50/50">
                  Download on App Store
                </Button>
              </a>
            </motion.div>

            {/* AIS Decision Tool */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.2}
              className="bg-cyan-50 border border-cyan-100 rounded-3xl p-7 flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-100 rounded-full px-3 py-1 mb-4 self-start">
                iOS App
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-2">AIS Decision Tool 2026</h2>
              <p className="text-muted-foreground text-sm mb-4">Acute ischemic stroke clinical decision support.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["IVT & EVT eligibility in seconds", "Extended time window protocols", "Works offline at the bedside"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/us/app/ais-decision-tool-2026/id6760186011" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full border-cyan-200 text-cyan-700 hover:bg-cyan-50/50">
                  Download on App Store
                </Button>
              </a>
            </motion.div>

            {/* LipidIQ */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.3}
              className="bg-indigo-50 border border-indigo-100 rounded-3xl p-7 flex flex-col">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-700 bg-indigo-100 rounded-full px-3 py-1 mb-4 self-start">
                iOS App
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-2">LipidIQ</h2>
              <p className="text-muted-foreground text-sm mb-4">Clinical lipid management decision support.</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["ASCVD risk calculation", "Statin & non-statin therapy guidance", "LDL goal achievement tracking"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 text-indigo-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a href="https://apps.apple.com/us/app/lipidiq/id6760669194" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full border-indigo-200 text-indigo-700 hover:bg-indigo-50/50">
                  Download on App Store
                </Button>
              </a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Founder Story ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#080d18]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0f1629] border border-white/10 p-10 md:p-14 flex flex-col lg:flex-row gap-12 items-start"
          >
            <div className="flex-1 space-y-7">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                "I got tired of software that wasn't built for me."
              </h2>
              <div className="w-12 h-0.5 bg-primary rounded-full" />
              <p className="text-white/80 leading-[1.85] text-[17px]">
                As a physician, I couldn't find a single tool that understood my financial life. QuickBooks was built for small businesses. Tax apps didn't know what a solo 401(k) was. Stroke decision tools were buried in PDFs from 2019. I was duct-taping spreadsheets together at midnight after a shift.
              </p>
              <p className="text-white/80 leading-[1.85] text-[17px]">
                Then AI changed what was possible. For the first time, a physician with no formal engineering background could describe exactly the software they needed — and build it. Not a workaround. Not a generic tool with a medical skin on it. The exact tool, built around the exact workflow.
              </p>
              <p className="text-white/80 leading-[1.85] text-[17px]">
                That's what RxBuilds is. Every app in this portfolio started as a personal problem I couldn't find a solution for. If you're a physician who's felt the same frustration — these were built for you.
              </p>
            </div>
            <div className="flex-shrink-0 flex flex-col items-center gap-5 lg:pt-4">
              <div className="h-24 w-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-xl">
                <Stethoscope className="h-10 w-10 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-white font-semibold text-sm">Founder</p>
                <p className="text-white/50 text-xs mt-1 tracking-widest uppercase">RxBuilds LLC</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Vascular Neurology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
