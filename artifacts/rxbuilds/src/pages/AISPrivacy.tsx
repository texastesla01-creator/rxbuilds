import React from "react";
import { Link } from "wouter";

export default function AISPrivacy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">AIS Decision Tool 2026 — Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: April 2026</p>

        <p className="text-muted-foreground mb-8">
          This Privacy Policy describes how the AIS Decision Tool 2026 ("the App", "we", "us") handles information when you use our iOS application. We take your privacy seriously and have designed this App to collect as little data as possible.
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p className="text-muted-foreground">The App does not require you to create an account or provide any personal information to use it.</p>
          <p className="text-muted-foreground">The only data processed is:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Subscription status</strong> — managed by RevenueCat, a third-party subscription platform. RevenueCat assigns an anonymous identifier to your device to track your purchase and entitlements. No name, email, or personally identifiable information is associated with this identifier.</li>
            <li><strong>Clinical inputs</strong> — values you enter into the tool (NIHSS scores, timestamps, imaging parameters, etc.) exist only in your device's memory for the duration of the session. They are never stored persistently.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">1a. AI-Powered Features &amp; Data Transmission</h3>
          <p className="text-muted-foreground">
            AIS Decision Tool 2026 includes AI-powered clinical decision support features. These features provide guideline-based reasoning support for acute ischemic stroke management.
          </p>

          <h4 className="font-semibold text-foreground">What Data Is Transmitted to Anthropic</h4>
          <p className="text-muted-foreground">When you use AI features, the following clinical parameters may be temporarily transmitted to Anthropic's API solely to generate your decision support response:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>NIHSS scores and neurological exam parameters</li>
            <li>Onset time, last known well timestamp, and treatment window calculations</li>
            <li>Imaging parameters (ASPECTS, vessel occlusion data, perfusion parameters)</li>
            <li>Treatment eligibility inputs (inclusion/exclusion criteria)</li>
            <li>Questions you type into the AI clinical assistant</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-900 font-semibold text-sm">IMPORTANT: Do not enter any patient-identifying information (name, date of birth, MRN, SSN, or any HIPAA-protected identifiers) into the App. The App is designed for de-identified clinical parameter input only.</p>
          </div>

          <h4 className="font-semibold text-foreground">How Anthropic Handles This Data</h4>
          <p className="text-muted-foreground">
            Anthropic retains API inputs and outputs for up to 30 days for trust and safety review purposes, after which the data is permanently deleted. Model training on user data has been explicitly disabled. Your clinical inputs are <strong>not</strong> used to train or improve Anthropic's AI models.
          </p>
          <p className="text-muted-foreground">
            Anthropic's full privacy policy: <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>
          </p>

          <h4 className="font-semibold text-foreground">HIPAA Notice</h4>
          <p className="text-muted-foreground">
            AIS Decision Tool 2026 is <strong>not a HIPAA-covered entity</strong> and does not operate under a Business Associate Agreement (BAA) with Anthropic. Users must ensure that no protected health information (PHI) is entered into the App. Use de-identified clinical parameters only when using AI features.
          </p>

          <h4 className="font-semibold text-foreground">AI Clinical Disclaimer</h4>
          <blockquote className="border-l-4 border-cyan-400 pl-4 italic text-muted-foreground">
            "This is clinical decision support only. All treatment decisions must be made by a licensed physician based on complete clinical assessment. Not a substitute for medical judgment."
          </blockquote>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. How We Use Information</h2>
          <p className="text-muted-foreground">We use the anonymous subscription identifier solely to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Verify whether you have an active subscription or free trial</li>
            <li>Restore purchases across devices linked to the same Apple ID</li>
          </ul>
          <p className="text-muted-foreground">We do not use any information for advertising, profiling, or analytics.</p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Data Sharing</h2>
          <p className="text-muted-foreground">We do not sell, trade, or share your information with third parties, except:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Anthropic</strong> — processes AI feature queries on our behalf. Data retained up to 30 days. Model training disabled. See <a href="https://anthropic.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">anthropic.com/privacy</a>.</li>
            <li><strong>RevenueCat</strong> — processes subscription transactions on our behalf. See <a href="https://revenuecat.com/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">revenuecat.com/privacy</a>.</li>
            <li><strong>Apple</strong> — handles all payment processing through the App Store. See <a href="https://apple.com/legal/privacy" target="_blank" rel="noreferrer" className="text-primary hover:underline">apple.com/legal/privacy</a>.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. Health &amp; Clinical Data</h2>
          <p className="text-muted-foreground">
            The App does not access, collect, or store any data from Apple Health (HealthKit). Clinical parameters entered into the App are used solely for on-device decision support calculations and AI query processing as described in Section 1a.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Children's Privacy</h2>
          <p className="text-muted-foreground">
            This App is intended for licensed healthcare professionals. It is not directed at children under the age of 13, and we do not knowingly collect information from children.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Data Retention</h2>
          <p className="text-muted-foreground">
            Because no personal data is collected or stored by the App, there is nothing to retain or delete. RevenueCat retains anonymous purchase records per their own retention policy. To request deletion of RevenueCat data, contact them directly at <a href="mailto:privacy@revenuecat.com" className="text-primary hover:underline">privacy@revenuecat.com</a>.
          </p>
          <p className="text-muted-foreground">
            Anthropic retains API inputs and outputs for up to 30 days for safety review, after which data is permanently deleted.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Security</h2>
          <p className="text-muted-foreground">
            All network communication between the App and third-party services (RevenueCat, Anthropic) is encrypted via TLS. Clinical data transmitted to Anthropic's API is encrypted in transit and subject to Anthropic's security practices.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date. Continued use of the App after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Contact</h2>
          <p className="text-muted-foreground">
            If you have questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:texastesla01@gmail.com" className="text-primary hover:underline">texastesla01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>AIS Decision Tool 2026 © 2026. For licensed clinicians only.</p>
          <Link href="/ais-terms" className="text-primary hover:underline">Terms of Use →</Link>
        </div>
      </div>
    </div>
  );
}
