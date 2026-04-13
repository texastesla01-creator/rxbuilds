import React from "react";
import { Link } from "wouter";

export default function TaxRxTerms() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">TaxRx Terms of Use &amp; EULA</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 12, 2026</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Agreement</h2>
          <p className="text-muted-foreground">
            By downloading, installing, or using TaxRx ("the App"), you agree to be bound by these Terms of Use and End User License Agreement ("EULA"). If you do not agree, do not use the App. This agreement is between you and TaxRx ("we", "us"), not with Apple, Inc. Apple is not responsible for the App or its content.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. License Grant</h2>
          <p className="text-muted-foreground">
            Subject to your compliance with these terms, we grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on any Apple-branded device that you own or control, solely for your personal, non-commercial use.
          </p>
          <p className="text-muted-foreground">You may not:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Copy, modify, or distribute the App or its content</li>
            <li>Reverse engineer, decompile, or disassemble the App</li>
            <li>Rent, lease, lend, sell, or sublicense the App</li>
            <li>Remove or alter any proprietary notices or labels</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Free Trial &amp; Subscription</h2>
          <p className="text-muted-foreground">TaxRx offers a 3-day free trial upon first install. After the trial period, continued access requires an active subscription.</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div className="border rounded-xl p-4 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Monthly</div>
              <div className="text-2xl font-bold text-foreground">$9.99</div>
              <div className="text-sm text-muted-foreground">per month</div>
            </div>
            <div className="border rounded-xl p-4 text-center bg-accent/5 border-accent/20">
              <div className="text-xs font-bold uppercase tracking-wider text-accent mb-1">Annual</div>
              <div className="text-2xl font-bold text-foreground">$99.99</div>
              <div className="text-sm text-muted-foreground">per year — save ~17%</div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Your Apple ID account will be charged upon purchase confirmation and at renewal. You may manage or cancel subscriptions in your App Store account settings at any time. No refunds are provided for unused portions of a subscription period unless required by applicable law.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. AI-Powered Features &amp; Data Transmission</h2>
          <p className="text-muted-foreground">
            TaxRx Pro includes AI-powered features powered by Anthropic's Claude AI model. These features include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>AI Tax Assistant</strong> — conversational chat for 1099 and S-Corp tax questions</li>
            <li><strong>Receipt Scanner</strong> — camera image to automatic expense categorization</li>
            <li><strong>Year-End Tax Summary</strong> — AI-generated annual tax overview and optimization tips</li>
            <li><strong>Deduction Coach</strong> — personalized deduction suggestions based on your profile</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">4.1 Data Transmitted to Anthropic</h3>
          <p className="text-muted-foreground">When you use AI features, the following information is temporarily transmitted to Anthropic's API solely to generate your response:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Your stated occupation, entity type (1099 or S-Corp), and filing status</li>
            <li>Year-to-date income totals and expense category summaries</li>
            <li>Receipt images you choose to scan</li>
            <li>Questions and messages you type into the AI chat</li>
          </ul>
          <p className="text-muted-foreground">
            TaxRx does not operate any server or database. All app data is stored locally on your device. RxBuilds LLC does not store, retain, or have access to your financial data.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.2 Anthropic Data Handling</h3>
          <p className="text-muted-foreground">
            Data transmitted to Anthropic is processed under Anthropic's Privacy Policy at{" "}
            <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>.
            We have disabled model training on user data per Anthropic's API console settings. Anthropic retains API inputs and outputs for up to 30 days for trust and safety purposes, after which data is deleted.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.3 AI Limitations &amp; Restrictions</h3>
          <p className="text-muted-foreground">
            The AI assistant is restricted to tax and self-employment finance topics only. It will not respond to questions outside of these topics. AI responses are generated automatically and may contain errors or inaccuracies.
          </p>
          <p className="font-semibold text-foreground">
            IMPORTANT: AI-generated responses do not constitute professional tax advice. Always verify AI output with a licensed CPA or enrolled agent.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.4 AI Disclaimer</h3>
          <p className="text-muted-foreground">Every AI response in TaxRx includes the following disclaimer:</p>
          <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
            "Not tax advice. Consult a licensed CPA or enrolled agent for your specific situation."
          </blockquote>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Not Tax or Financial Advice</h2>
          <p className="text-muted-foreground">
            TaxRx is an educational estimation tool. All calculations, projections, and recommendations generated by the App are for informational purposes only and do not constitute tax, legal, or financial advice. Results are estimates based on the information you provide and current (2025–2026) federal tax rules.
          </p>
          <p className="text-muted-foreground">
            Always consult a licensed CPA, tax attorney, or qualified financial advisor before making tax or business structure decisions. We are not responsible for any tax liabilities, penalties, or financial losses resulting from reliance on the App's output.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE APP WILL BE ERROR-FREE OR UNINTERRUPTED.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Limitation of Liability</h2>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            TO THE FULLEST EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, design, code, and trademarks in the App are owned by or licensed to TaxRx. You receive no ownership rights in the App. Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Termination</h2>
          <p className="text-muted-foreground">
            We may terminate or suspend your access to the App at any time, with or without cause or notice. Upon termination, all licenses granted herein terminate. Provisions that by their nature should survive termination will survive, including disclaimers and limitations of liability.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">10. Apple's Role</h2>
          <p className="text-muted-foreground">
            This EULA is between you and TaxRx, not with Apple. Apple has no obligation to provide any maintenance or support for the App. Apple is not responsible for addressing any claims relating to the App, including product liability claims, consumer protection claims, or intellectual property infringement claims. Apple and its subsidiaries are third-party beneficiaries of this EULA and may enforce it against you.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">11. Governing Law</h2>
          <p className="text-muted-foreground">
            These terms are governed by the laws of the State of Texas, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Texas.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">12. Changes to These Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of the App constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">13. Contact</h2>
          <p className="text-muted-foreground">
            For questions about these terms:{" "}
            <a href="mailto:texastesla01@gmail.com" className="text-primary hover:underline">texastesla01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>TaxRx — Tax intelligence for the self-employed</p>
          <Link href="/taxrx-privacy" className="text-primary hover:underline">← Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
