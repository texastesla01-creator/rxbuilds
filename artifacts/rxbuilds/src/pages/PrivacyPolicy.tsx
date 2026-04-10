import React from "react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">RxFinance Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <p className="text-muted-foreground mb-8">
          RxBuilds LLC ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use the RxFinance mobile application.
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Data We Collect</h2>
          <p className="text-muted-foreground">RxFinance collects only what you choose to enter:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Income and expense amounts you enter manually</li>
            <li>Receipt images you choose to scan using AI features</li>
            <li>Subscription status managed by RevenueCat (your Apple ID purchase receipt and entitlement status)</li>
          </ul>
          <p className="text-muted-foreground">We do not collect your name, email address, Social Security number, or any government-issued identification.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. Local Storage — No RxBuilds Servers</h2>
          <p className="text-muted-foreground">
            All financial data you enter is stored exclusively on your device using local app storage. RxBuilds LLC does not operate any servers or cloud databases. Your financial data never leaves your device except when you actively use AI features (see Section 4).
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To calculate tax estimates and financial summaries within the app</li>
            <li>To verify your subscription status and unlock Pro features</li>
            <li>To generate AI responses when you actively use AI features</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. AI Features and Anthropic</h2>

          <h3 className="text-lg font-semibold text-foreground">4.1 What Is Transmitted</h3>
          <p className="text-muted-foreground">
            When you use AI-powered Pro features, the following data is temporarily transmitted to Anthropic's Claude API solely to generate your response:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Your physician specialty and employment type</li>
            <li>Income totals (W-2 and/or 1099)</li>
            <li>Expense categories and totals</li>
            <li>Filing status, state, and age</li>
            <li>Images of receipts you choose to scan</li>
            <li>Questions you type into the AI assistant</li>
          </ul>
          <p className="text-muted-foreground">This transmission occurs only when you actively use an AI feature. No data is transmitted in the background.</p>

          <h3 className="text-lg font-semibold text-foreground">4.2 No RxBuilds Server Involvement</h3>
          <p className="text-muted-foreground">
            Data is transmitted directly from your device to Anthropic's API. It does not pass through any RxBuilds server because we do not operate any servers. RxBuilds LLC never sees, stores, or has access to this transmitted data.
          </p>

          <h3 className="text-lg font-semibold text-foreground">4.3 Anthropic Data Retention</h3>
          <p className="text-muted-foreground">
            RxBuilds LLC is not currently enrolled in Anthropic's Zero Data Retention program. Per Anthropic's standard API terms, inputs and outputs may be retained by Anthropic for up to 30 days for trust and safety review purposes only.
          </p>
          <p className="text-muted-foreground">
            This data is <strong>NOT</strong> used to train Anthropic's AI models. We have explicitly disabled user feedback and model training preferences in our Anthropic API account settings.
          </p>
          <p className="text-muted-foreground">
            Anthropic's Privacy Policy is available at:{" "}
            <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Third Party Services</h2>
          <p className="text-muted-foreground">The following third party services are used by RxFinance:</p>

          <h3 className="text-lg font-semibold text-foreground">5.1 Anthropic Claude API</h3>
          <p className="text-muted-foreground">
            Used for AI-powered Pro features. Data handling described in Section 4.{" "}
            <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Privacy Policy</a>
          </p>

          <h3 className="text-lg font-semibold text-foreground">5.2 RevenueCat</h3>
          <p className="text-muted-foreground">
            Used to manage in-app subscriptions and purchase verification. RevenueCat may collect your Apple ID purchase receipt and subscription status.{" "}
            <a href="https://revenuecat.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Privacy Policy</a>
          </p>

          <h3 className="text-lg font-semibold text-foreground">5.3 Apple App Store / StoreKit</h3>
          <p className="text-muted-foreground">
            All payments are processed by Apple. Apple's Privacy Policy governs payment data.{" "}
            <a href="https://apple.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">Privacy Policy</a>
          </p>

          <p className="text-muted-foreground">We do not use any advertising networks, analytics platforms, or data brokers.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Data Sharing and Sales</h2>
          <p className="text-muted-foreground">RxBuilds LLC does not:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Sell your personal or financial data to any third party</li>
            <li>Share your data with advertisers or marketing companies</li>
            <li>Rent or transfer your data to data brokers</li>
            <li>Use your data for any purpose other than operating the App</li>
          </ul>
          <p className="text-muted-foreground">
            The only data sharing that occurs is the transmission to Anthropic's API described in Section 4, which happens at your direction when you use AI features.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Children's Privacy</h2>
          <p className="text-muted-foreground">
            RxFinance is designed for adult healthcare professionals and is not directed at children under 13. We do not knowingly collect any data from children under 13.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Security</h2>
          <p className="text-muted-foreground">
            Because we operate no servers, there is no RxBuilds database that could be breached. Your financial data security depends on your device's security settings (passcode, Face ID, Touch ID).
          </p>
          <p className="text-muted-foreground">
            We recommend keeping your device software up to date and using a strong passcode to protect your locally stored data.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the effective date at the top of this document. Continued use of the App after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">10. Your Rights</h2>
          <p className="text-muted-foreground">Since all your financial data is stored locally on your device, you have full control over it at all times. You can:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>View all your data within the App at any time</li>
            <li>Delete all your data by uninstalling the App</li>
            <li>Export your data using the App's share features</li>
          </ul>
          <p className="text-muted-foreground">
            For questions about data transmitted to Anthropic, contact Anthropic directly at{" "}
            <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">11. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:teslatexas01@gmail.com" className="text-primary hover:underline">teslatexas01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 RxFinance. All rights reserved.</p>
          <Link href="/eula" className="text-primary hover:underline">End User License Agreement →</Link>
        </div>
      </div>
    </div>
  );
}
