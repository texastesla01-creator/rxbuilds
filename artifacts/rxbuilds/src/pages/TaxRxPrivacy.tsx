import React from "react";
import { Link } from "wouter";

export default function TaxRxPrivacy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">TaxRx Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Overview</h2>
          <p className="text-muted-foreground">
            TaxRx ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how the TaxRx mobile application handles your information. TaxRx is a frontend-only application — there is no backend server, no user accounts, and no data stored on our servers.
          </p>
          <p className="text-muted-foreground">
            The only exception is AI-powered Pro features, which temporarily transmit limited data to Anthropic's API to generate your response. This is described in full in Section 5 below.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. Information We Collect</h2>
          <p className="text-muted-foreground">
            For all core tax tracking features, TaxRx does not collect, transmit, or share any personal information. All data you enter — including income figures, expense breakdowns, entity type, filing status, and age — is stored exclusively on your device using Apple's secure local storage (AsyncStorage).
          </p>
          <p className="text-muted-foreground">We do not collect:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Names, email addresses, or contact information</li>
            <li>Financial account numbers or tax identification numbers</li>
            <li>Location data</li>
            <li>Device identifiers or usage analytics</li>
            <li>Crash reports or diagnostic data sent to our servers</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Local Data Storage</h2>
          <p className="text-muted-foreground">All app data is saved locally on your device under the following storage keys:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><code className="text-sm bg-gray-100 px-1 rounded">@taxrx_profile</code> — your entity type, filing status, and personal settings</li>
            <li><code className="text-sm bg-gray-100 px-1 rounded">@taxrx_entry_1099_v2</code> — 1099 income and expense entries</li>
            <li><code className="text-sm bg-gray-100 px-1 rounded">@taxrx_entry_scorp_v2</code> — S-Corp income and expense entries</li>
            <li><code className="text-sm bg-gray-100 px-1 rounded">@taxrx_theme</code> — your appearance preference (dark/light mode)</li>
          </ul>
          <p className="text-muted-foreground">This data is never transmitted off your device by core features. Uninstalling the app permanently deletes all stored data.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. PDF Exports</h2>
          <p className="text-muted-foreground">
            When you export a PDF report, the file is generated entirely on-device and saved to your local files. We do not receive a copy of any exported report.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. AI-Powered Features &amp; Data Transmission</h2>
          <p className="text-muted-foreground">
            TaxRx Pro includes AI-powered features that require temporarily transmitting certain data to Anthropic's API. This is the only instance where any data leaves your device.
          </p>

          <h3 className="text-lg font-semibold text-foreground">What Data Is Transmitted</h3>
          <p className="text-muted-foreground">When you use AI features, the following is sent to Anthropic's API to generate your response:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Your stated occupation and entity type (1099 or S-Corp)</li>
            <li>Filing status and age range</li>
            <li>Year-to-date income totals and expense category summaries (not itemized transactions)</li>
            <li>Receipt images you choose to scan</li>
            <li>Questions and messages you type into the AI Tax Assistant</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">How Anthropic Handles Your Data</h3>
          <p className="text-muted-foreground">
            Anthropic retains API inputs and outputs for up to 30 days for trust and safety review purposes, after which the data is permanently deleted. This retention applies only to the Claude API and not to Claude.ai or other Anthropic consumer products.
          </p>
          <p className="text-muted-foreground">
            We have disabled model training on user data per Anthropic's API console settings. Your data is <strong>not</strong> used to train or improve Anthropic's AI models.
          </p>
          <p className="text-muted-foreground">
            Anthropic's full privacy policy is available at:{" "}
            <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>
          </p>

          <h3 className="text-lg font-semibold text-foreground">AI Features Are Opt-In</h3>
          <p className="text-muted-foreground">
            AI features are only available to Pro subscribers and are only activated when you explicitly use them (opening the AI chat, tapping scan receipt, etc.). Simply using the core tax tracking features does not transmit any data off your device.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Subscriptions &amp; Payments</h2>
          <p className="text-muted-foreground">TaxRx offers a 3-day free trial followed by a paid subscription:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Monthly plan: $9.99 / month</li>
            <li>Annual plan: $99.99 / year (save ~17%)</li>
          </ul>
          <p className="text-muted-foreground">
            Subscription payments are processed by Apple via the App Store. We do not receive or store your payment card details. Apple's privacy policy governs all payment processing. You may manage or cancel your subscription at any time in your device's App Store subscription settings.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Third-Party Services</h2>
          <p className="text-muted-foreground">TaxRx uses the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Apple App Store</strong> — subscription billing and payment processing. Governed by Apple's privacy policy.</li>
            <li><strong>Anthropic (Claude API)</strong> — AI features only, for Pro subscribers who explicitly activate them. See Section 5 for full details.</li>
          </ul>
          <p className="text-muted-foreground">TaxRx does not integrate with any analytics, advertising, or tracking services. The app does not display ads.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Children's Privacy</h2>
          <p className="text-muted-foreground">
            TaxRx is not directed at children under the age of 13. We do not knowingly collect information from children.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the app after changes constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">10. Contact</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:texastesla01@gmail.com" className="text-primary hover:underline">texastesla01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>TaxRx — Tax intelligence for the self-employed</p>
          <Link href="/taxrx-terms" className="text-primary hover:underline">Terms of Use &amp; EULA →</Link>
        </div>
      </div>
    </div>
  );
}
