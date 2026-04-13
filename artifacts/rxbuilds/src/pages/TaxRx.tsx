import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calculator, TrendingUp, BarChart3, GitCompare, Sun, Moon } from "lucide-react";

// Dark mode screenshots
import darkTax from "@assets/IMG_2901_1775699944673.jpeg";
import dark401k from "@assets/IMG_2902_1775699944673.jpeg";
import darkPL from "@assets/IMG_2903_1775699944673.jpeg";
import darkSettings from "@assets/IMG_2894_1775699944673.jpeg";

// Light mode screenshots
import lightEntry from "@assets/IMG_2896_1775699944673.jpeg";
import lightTax from "@assets/IMG_2898_1775699944673.jpeg";
import light401k from "@assets/IMG_2899_1775699944673.png";
import lightPL from "@assets/IMG_2900_1775699944673.jpeg";
import lightSettings from "@assets/IMG_2895_1775699944673.jpeg";

const PhoneFrame = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-[260px] md:w-[280px] bg-[#111] rounded-[42px] shadow-2xl overflow-hidden border-[7px] border-[#111] flex-shrink-0 snap-center">
    <div className="absolute top-0 inset-x-0 h-5 bg-[#111] z-20 rounded-b-3xl mx-14 pointer-events-none"></div>
    <img
      src={src}
      alt={alt}
      className="w-full h-auto block"
      loading="lazy"
    />
  </div>
);

export default function TaxRx() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkScreenshots = [
    { id: "dark-tax",      src: darkTax,      alt: "Tax Breakdown — dark mode" },
    { id: "dark-401k",     src: dark401k,     alt: "401k & Expenses — dark mode" },
    { id: "dark-pl",       src: darkPL,       alt: "Profit & Loss — dark mode" },
    { id: "dark-settings", src: darkSettings, alt: "Settings — dark mode" },
  ];

  const lightScreenshots = [
    { id: "light-entry",    src: lightEntry,    alt: "Command Center — light mode" },
    { id: "light-tax",      src: lightTax,      alt: "Tax Breakdown — light mode" },
    { id: "light-401k",     src: light401k,     alt: "401k & Expenses — light mode" },
    { id: "light-pl",       src: lightPL,       alt: "Profit & Loss — light mode" },
    { id: "light-settings", src: lightSettings, alt: "Settings — light mode" },
  ];

  const screenshots = isDarkMode ? darkScreenshots : lightScreenshots;

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-white to-primary/5 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-2">
                  Now on the App Store
                </div>
                <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
                  Tax<span className="text-accent">Rx</span>
                </h1>
                <p className="text-xl font-semibold text-primary">Tax intelligence for the self-employed.</p>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl leading-relaxed">
                  Purpose-built for 1099 freelancers and S-Corp owner-operators. Stop guessing your tax bill — let TaxRx do the math.
                </p>
              </div>

              {/* App Store Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/taxrx/id6761803370"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-black text-white rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors shadow-lg"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs leading-none mb-0.5">Download on the</div>
                    <div className="text-sm font-semibold leading-none">App Store</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> iOS Exclusive
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> Free 3-Day Trial
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 border-y">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Simple, transparent pricing.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-lg font-medium text-foreground">
              <span className="text-primary font-bold">3 Days Free</span> / then $9.99/month
            </div>
            <span className="text-muted-foreground text-sm">or</span>
            <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-accent/30 text-lg font-medium text-foreground">
              <span className="text-accent font-bold">$99.99/year</span>
              <span className="ml-2 text-sm text-muted-foreground line-through">$119.88</span>
              <span className="ml-2 text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">Save 17%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Everything a self-employed professional needs
            </h2>
            <p className="text-lg text-muted-foreground">
              From quarterly taxes to retirement planning — TaxRx covers the full financial picture for 1099 freelancers and S-Corp owners.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Calculator className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Self-Employment Tax Calculator</h3>
              <p className="text-muted-foreground">
                Instantly compute your SE tax liability for both 1099 independent contractors and S-Corp owner-operators. Know what you owe before it's due.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Solo 401(k) Contribution Optimizer</h3>
              <p className="text-muted-foreground">
                Maximize your retirement contributions with smart calculations for both employee and employer limits — tailored to your exact net income.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Monthly Income & Expense Tracker</h3>
              <p className="text-muted-foreground">
                Log income and expenses month by month with a built-in P&L analysis. Always know your net profit and where your money is going.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <GitCompare className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">S-Corp vs. 1099 Strategy Comparison</h3>
              <p className="text-muted-foreground">
                Run a side-by-side analysis of your tax burden under different entity structures. Make the entity decision with data, not guesswork.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="py-24 bg-gray-50 border-y overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">See TaxRx in action</h2>
              <p className="text-lg text-muted-foreground">Clean, detailed screens built for the self-employed. Light and dark modes included.</p>
            </div>
            <div className="flex items-center space-x-3 bg-white p-2 rounded-full shadow-sm border border-gray-200">
              <Sun className={`h-4 w-4 ${!isDarkMode ? "text-primary" : "text-gray-400"}`} />
              <button
                role="switch"
                aria-checked={isDarkMode}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isDarkMode ? "bg-primary" : "bg-gray-200"}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${isDarkMode ? "translate-x-6" : "translate-x-1"}`} />
              </button>
              <Moon className={`h-4 w-4 ${isDarkMode ? "text-primary" : "text-gray-400"}`} />
            </div>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
              {screenshots.map((shot, i) => (
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
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-white border-y">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Built for the self-employed professional
            </h2>
            <p className="text-lg text-muted-foreground">
              If your income doesn't come with a W-2, TaxRx was made for you.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
                1099 Freelancers
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Track multiple client income streams",
                  "Calculate quarterly estimated taxes",
                  "Maximize deductible business expenses",
                  "Optimize solo 401(k) contributions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-accent/30 p-8">
              <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold text-accent mb-4">
                S-Corp Owner-Operators
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Compare S-Corp vs. 1099 tax savings",
                  "Calculate reasonable salary vs. distributions",
                  "Track payroll taxes and deductions",
                  "Model retirement contribution strategies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links Section */}
      <section className="py-16 bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
          <div className="flex items-center justify-center gap-6 text-sm">
            <Link
              href="/taxrx-privacy"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/taxrx-terms"
              className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-accent text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            TaxRx is live on the App Store.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start your free 3-day trial today. No guessing — just your numbers.
          </p>
          <a
            href="https://apps.apple.com/us/app/taxrx/id6761803370"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-white text-accent rounded-xl px-8 py-4 text-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-accent" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

    </div>
  );
}
