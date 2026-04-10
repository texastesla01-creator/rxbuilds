import React from "react";
import { Link } from "wouter";

export default function EULA() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">RxFinance End User License Agreement</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

        <p className="text-muted-foreground mb-8">
          This End User License Agreement ("Agreement") is a legal agreement between you ("User") and RxFinance ("Company", "we", "us", or "our") governing your use of the RxFinance mobile application ("App"). By downloading, installing, or using the App, you agree to be bound by this Agreement.
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. License Grant</h2>
          <p className="text-muted-foreground">
            Subject to the terms of this Agreement and your active subscription, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use the App on devices you own or control, solely for your personal, non-commercial financial management purposes.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. Subscription Terms</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Access to premium features requires an active paid subscription ($9.99/month or $99.99/year).</li>
            <li>A 3-day free trial is available for new subscribers. Your subscription will automatically renew unless canceled at least 24 hours before the end of the trial or current billing period.</li>
            <li>Subscriptions are managed through your Apple ID. You may cancel at any time via your device's subscription settings.</li>
            <li>No refunds are provided for partial subscription periods, except where required by applicable law.</li>
            <li>We reserve the right to modify pricing with advance notice. Continued use after a price change constitutes acceptance.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Restrictions</h2>
          <p className="text-muted-foreground">You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Copy, modify, distribute, sell, or lease any part of the App</li>
            <li>Reverse engineer or attempt to extract the source code of the App</li>
            <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
            <li>Share your account credentials with others</li>
            <li>Use the App to store or transmit malicious code</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. AI Features</h2>

          <h3 className="text-lg font-semibold text-foreground">4.1 AI Service Provider</h3>
          <p className="text-muted-foreground">
            RxFinance uses Anthropic's Claude AI to power Pro features including the AI Financial Assistant, Receipt Scanner, Deduction Coach, Solo 401(k) Optimizer, Paycheck Analyzer, Safe Harbor Alerts, and Year-End Summary. Your use of AI features is also subject to Anthropic's Terms of Service at{" "}
            <a href="https://anthropic.com/terms" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/terms</a>.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.2 No Server Infrastructure</h3>
          <p className="text-muted-foreground">
            RxBuilds LLC does not operate any servers or databases. Your financial data never touches our infrastructure — it lives only on your device and is transmitted directly to Anthropic's API when you use AI features. There is no RxBuilds server that could be hacked or breached.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.3 Anthropic Data Retention</h3>
          <p className="text-muted-foreground">
            RxBuilds LLC is not currently enrolled in Anthropic's Zero Data Retention program. Per Anthropic's standard API terms, inputs and outputs may be retained by Anthropic for up to 30 days for trust and safety review. This data is <strong>NOT</strong> used to train AI models per our account settings.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.4 Opting Out of AI Features</h3>
          <p className="text-muted-foreground">
            AI features are optional and require a Pro subscription. If you prefer not to transmit any data to Anthropic, simply do not use the AI features. All core features work entirely offline with no data transmission.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.5 AI Limitations</h3>
          <p className="text-muted-foreground">
            AI responses are automatically generated and may contain errors. The assistant is restricted to physician finance and tax topics only. Always verify AI-generated information with a qualified professional.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Financial Disclaimer</h2>
          <p className="text-muted-foreground">
            RxFinance is a financial management and organizational tool. It is not a substitute for professional tax, legal, or financial advice. All tax estimates, projections, and calculations provided by the App are for informational purposes only. We strongly recommend consulting a qualified tax professional or CPA for advice specific to your situation. We are not liable for any financial decisions made based on information provided by the App.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Privacy</h2>
          <p className="text-muted-foreground">
            Your use of the App is also governed by our{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>,
            which is incorporated into this Agreement by reference.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Disclaimers and Limitation of Liability</h2>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. RXBUILDS LLC MAKES NO WARRANTIES REGARDING ACCURACY, COMPLETENESS, OR FITNESS FOR A PARTICULAR PURPOSE.
          </p>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, RXBUILDS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES INCLUDING TAX PENALTIES, UNDERPAYMENTS, LOST PROFITS, OR DATA LOSS.
          </p>
          <p className="text-muted-foreground">
            Our total liability shall not exceed the amount you paid for the App in the twelve months preceding any claim.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content, features, code, design, and branding within RxFinance are the exclusive property of RxBuilds LLC. You are granted a limited, non-exclusive, non-transferable license to use the App for personal financial tracking only.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Termination</h2>
          <p className="text-muted-foreground">
            We reserve the right to suspend or terminate your access for violation of these Terms. Upon termination, your locally stored data remains on your device. No data is retained on our servers because we do not operate any servers.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">10. Governing Law</h2>
          <p className="text-muted-foreground">
            This Agreement shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">11. Changes to This Agreement</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify this Agreement at any time. We will notify you of material changes by updating the date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated Agreement.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">12. Contact</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Agreement, please contact us at:{" "}
            <a href="mailto:teslatexas01@gmail.com" className="text-primary hover:underline">teslatexas01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 RxFinance. All rights reserved.</p>
          <Link href="/privacy-policy" className="text-primary hover:underline">← Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
