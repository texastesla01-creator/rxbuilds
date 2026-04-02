import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Activity, DollarSign, Download, PieChart, BarChart3, Sun, Moon, Briefcase, FileText, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Mockup Components
const MockupDashboard = ({ isDark }: { isDark: boolean }) => (
  <div className={`w-full h-full flex flex-col p-6 space-y-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Overview</span>
      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
        <span className="text-xs font-bold text-primary">JD</span>
      </div>
    </div>
    <div className={`p-4 rounded-2xl shadow-lg ${isDark ? 'bg-primary' : 'bg-primary text-white'}`}>
      <span className="text-white/80 text-sm">Net Worth</span>
      <div className="text-3xl font-bold mt-1 text-white">$452,890</div>
      <div className="flex items-center mt-4 text-sm text-white/80">
        <Activity className="h-4 w-4 mr-1" /> +12.5% this month
      </div>
    </div>
    <div className="space-y-3">
      <div className="text-sm font-semibold opacity-80">Recent 1099 Income</div>
      {[
        { title: "General Hospital", amount: "+$4,200", date: "Today" },
        { title: "City Clinic", amount: "+$1,850", date: "Yesterday" },
        { title: "Telehealth Consults", amount: "+$950", date: "Oct 12" }
      ].map((item, i) => (
        <div key={i} className={`flex justify-between items-center p-3 rounded-xl shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${isDark ? 'bg-accent/20' : 'bg-accent/10'}`}>
              <DollarSign className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-semibold">{item.title}</div>
              <div className="text-xs opacity-60">{item.date}</div>
            </div>
          </div>
          <span className="text-sm font-bold text-primary">{item.amount}</span>
        </div>
      ))}
    </div>
  </div>
);

const MockupTax = ({ isDark }: { isDark: boolean }) => (
  <div className={`w-full h-full flex flex-col p-6 space-y-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Tax Optimizer</span>
      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
        <FileText className="h-4 w-4 text-primary" />
      </div>
    </div>
    
    <div className={`p-5 rounded-2xl border shadow-sm ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium opacity-80">Q3 Estimated Tax</span>
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Due Sep 15</span>
      </div>
      <div className="text-3xl font-bold mb-1">$12,450</div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-4">
        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
      </div>
      <div className="flex justify-between text-xs mt-2 opacity-60">
        <span>Saved: $8,100</span>
        <span>Goal: $12,450</span>
      </div>
    </div>

    <div className="space-y-3">
      <div className="text-sm font-semibold opacity-80">Deductions</div>
      {[
        { title: "Medical Malpractice", amount: "$3,200", icon: Shield },
        { title: "Continuing Ed", amount: "$1,450", icon: Briefcase },
        { title: "Licensing Fees", amount: "$850", icon: FileText }
      ].map((item, i) => (
        <div key={i} className={`flex justify-between items-center p-3 rounded-xl shadow-sm border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center">
            <div className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${isDark ? 'bg-primary/20' : 'bg-primary/10'}`}>
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="text-sm font-medium">{item.title}</div>
          </div>
          <span className="text-sm font-semibold">{item.amount}</span>
        </div>
      ))}
    </div>
  </div>
);

const Mockup401k = ({ isDark }: { isDark: boolean }) => (
  <div className={`w-full h-full flex flex-col p-6 space-y-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Solo 401(k)</span>
      <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
        <Landmark className="h-4 w-4 text-accent" />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center py-6">
      <div className="relative h-32 w-32">
        <svg viewBox="0 0 100 100" className="h-full w-full transform -rotate-90">
          <circle cx="50" cy="50" r="40" fill="transparent" stroke={isDark ? "#374151" : "#f3f4f6"} strokeWidth="12" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#14B8A6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all duration-1000" />
          <circle cx="50" cy="50" r="40" fill="transparent" stroke="#0066CC" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="188.4" className="transition-all duration-1000" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xs opacity-80">Total</span>
          <span className="text-lg font-bold">$42K</span>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <div className={`p-4 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
            <span className="text-sm font-medium">Employee</span>
          </div>
          <span className="text-sm font-bold">$22,500</span>
        </div>
        <div className="text-xs opacity-60 ml-5">Maxed out for 2024</div>
      </div>
      
      <div className={`p-4 rounded-xl border ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent mr-2"></div>
            <span className="text-sm font-medium">Employer</span>
          </div>
          <span className="text-sm font-bold">$19,500</span>
        </div>
        <div className="text-xs opacity-60 ml-5">Based on $145K net income</div>
      </div>
    </div>
  </div>
);

const MockupIncome = ({ isDark }: { isDark: boolean }) => (
  <div className={`w-full h-full flex flex-col p-6 space-y-6 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold">Income</span>
      <Button size="sm" variant="ghost" className="h-8 px-2">Filter</Button>
    </div>

    <div className="flex items-end gap-2 h-32 pt-4 pb-2 border-b border-gray-200 dark:border-gray-700">
      {[40, 65, 45, 80, 55, 90].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end items-center gap-1">
          <div className="w-full bg-primary/20 dark:bg-primary/30 rounded-t-sm" style={{ height: `${h}%` }}>
            <div className="w-full bg-primary rounded-t-sm" style={{ height: `${h * 0.6}%` }}></div>
          </div>
          <span className="text-[10px] opacity-60">{'JFMAMJ'[i]}</span>
        </div>
      ))}
    </div>

    <div className="space-y-3 pt-2">
      <div className="flex justify-between text-sm">
        <span className="font-semibold opacity-80">YTD Gross</span>
        <span className="font-bold">$218,500</span>
      </div>
      
      <div className="space-y-2 pt-2">
        <div className="text-xs font-semibold opacity-60 uppercase tracking-wider">Top Sources</div>
        {[
          { name: "General Hospital", val: "$125,000", pct: "57%" },
          { name: "City Clinic", val: "$65,000", pct: "30%" },
          { name: "Telehealth", val: "$28,500", pct: "13%" }
        ].map((src, i) => (
          <div key={i} className={`flex items-center justify-between p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <span className="text-sm">{src.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs opacity-60">{src.pct}</span>
              <span className="text-sm font-medium">{src.val}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-[280px] md:w-[300px] h-[580px] md:h-[620px] bg-[#1a1a1a] rounded-[40px] md:rounded-[48px] shadow-2xl overflow-hidden border-[6px] md:border-[8px] border-[#1a1a1a] flex-shrink-0 snap-center">
    <div className="absolute top-0 inset-x-0 h-6 bg-[#1a1a1a] z-20 rounded-b-3xl mx-16"></div>
    <div className="w-full h-full overflow-hidden bg-background">
      {children}
    </div>
  </div>
);


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLearnMore = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const screenshots = [
    { id: 'dashboard', component: <MockupDashboard isDark={isDarkMode} /> },
    { id: 'tax', component: <MockupTax isDark={isDarkMode} /> },
    { id: '401k', component: <Mockup401k isDark={isDarkMode} /> },
    { id: 'income', component: <MockupIncome isDark={isDarkMode} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-2">
                  Physician-Founded Fintech
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl xl:text-6xl/none">
                  Financial clarity for independent physicians.
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl leading-relaxed">
                  Track 1099 income, maximize solo 401(k) contributions, and optimize tax planning with precision. Built by doctors, for doctors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg shadow-md" data-testid="btn-download-hero">
                    Download Free
                    <Download className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-primary/20 text-primary hover:bg-primary/5" onClick={handleLearnMore} data-testid="btn-learn-more">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-accent" /> Secure
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-accent" /> iOS Exclusive
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto lg:mx-0 flex justify-center lg:justify-end"
            >
              {/* iPhone Mockup CSS */}
              <PhoneFrame>
                <MockupDashboard isDark={false} />
              </PhoneFrame>
              
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50 border-y">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Start optimizing your practice today.</h2>
          <div className="inline-block px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-lg font-medium text-foreground">
            <span className="text-primary font-bold">3 Days Free</span> / $9.99 per month
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Precision tools for complex finances</h2>
            <p className="text-lg text-muted-foreground">Everything you need to manage your independent practice income, all in one place.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Income Tracking</h3>
              <p className="text-muted-foreground">Effortlessly track 1099 payments from multiple facilities and identify missing payments.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <PieChart className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Solo 401(k) Manager</h3>
              <p className="text-muted-foreground">Calculate and maximize your employer and employee contributions based on your exact net income.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tax Optimizer</h3>
              <p className="text-muted-foreground">Stay ahead of IRS deadlines with accurate quarterly estimated tax calculations and reminders.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Dashboard</h3>
              <p className="text-muted-foreground">A clean, clinical snapshot of your net worth, upcoming liabilities, and financial health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery Section */}
      <section className="py-24 bg-gray-50 border-y overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">A clinical interface for your finances</h2>
              <p className="text-lg text-muted-foreground">Designed with the precision of a medical chart. No clutter, no distractions.</p>
            </div>
            <div className="flex items-center space-x-3 bg-white p-2 rounded-full shadow-sm border border-gray-200">
              <Sun className={`h-4 w-4 ${!isDarkMode ? 'text-primary' : 'text-gray-400'}`} />
              <Switch 
                checked={isDarkMode} 
                onCheckedChange={setIsDarkMode} 
                data-testid="switch-theme"
              />
              <Moon className={`h-4 w-4 ${isDarkMode ? 'text-primary' : 'text-gray-400'}`} />
            </div>
          </div>

          <div className="relative">
            {/* Scrollable container for mobile/tablet, grid for desktop */}
            <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
              {screenshots.slice(0, isDarkMode ? 4 : 3).map((shot) => (
                <div key={shot.id} className="flex justify-center snap-center shrink-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <PhoneFrame>
                      {shot.component}
                    </PhoneFrame>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white border-y">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">Why generic apps fall short</h2>
            <p className="text-lg text-muted-foreground">Physician income is different. Your software should be too.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="p-4 md:p-6 font-semibold text-muted-foreground w-1/3">Feature</th>
                    <th className="p-4 md:p-6 font-bold text-primary text-center border-x bg-primary/5 w-1/4">RxFinance</th>
                    <th className="p-4 md:p-6 font-semibold text-muted-foreground text-center w-1/5">Generic Apps</th>
                    <th className="p-4 md:p-6 font-semibold text-muted-foreground text-center border-l w-1/5">Accountant</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { name: "Physician-specific tax rules", rx: true, generic: false, accountant: true },
                    { name: "Solo 401(k) tracking", rx: true, generic: false, accountant: true },
                    { name: "Real-time 1099 dashboard", rx: true, generic: true, accountant: false },
                    { name: "Quarterly tax estimates", rx: true, generic: false, accountant: true },
                    { name: "Mobile-first experience", rx: true, generic: true, accountant: false },
                    { name: "Affordable monthly cost", rx: true, generic: true, accountant: false }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="p-4 md:p-6 text-sm md:text-base font-medium">{row.name}</td>
                      <td className="p-4 md:p-6 text-center border-x bg-primary/5">
                        {row.rx ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" /> : <span className="text-gray-300">-</span>}
                      </td>
                      <td className="p-4 md:p-6 text-center">
                        {row.generic ? <CheckCircle2 className="h-5 w-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">-</span>}
                      </td>
                      <td className="p-4 md:p-6 text-center border-l">
                        {row.accountant ? <CheckCircle2 className="h-5 w-5 text-gray-400 mx-auto" /> : <span className="text-gray-300">-</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="text-sm font-bold tracking-wider text-accent uppercase">
                CLINICAL AI · MEDICAL FINTECH
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Built by a physician, for physicians.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  RxFinance was born out of a real problem — managing the financial complexity of independent medical practice while seeing patients full-time.
                </p>
                <p>
                  We built the tool we wished existed: one that understands 1099 income cycles, self-employment tax, and the unique retirement planning options available to physicians.
                </p>
                <p className="font-medium text-foreground">
                  No fluff. No generic advice. Just clarity.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden bg-white flex items-center justify-center border border-gray-200 shadow-sm">
               {/* Abstract clinical/financial graphic */}
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
               <div className="relative z-10 w-3/4 h-3/4 flex flex-col justify-center gap-6 opacity-80">
                 <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full w-3/4 bg-primary rounded-full"></div>
                 </div>
                 <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                   <div className="h-full w-1/2 bg-accent rounded-full"></div>
                 </div>
                 <div className="flex justify-between items-end h-24 mt-8 gap-4">
                   {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                     <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Take control of your financial future
          </h2>
          <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-10 text-xl font-semibold shadow-lg" data-testid="btn-download-bottom">
              Download on App Store
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
