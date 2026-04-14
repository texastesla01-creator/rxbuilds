import React from "react";
import { Link } from "wouter";

export default function AISTerms() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-2">AIS Decision Tool 2026 — Terms of Use</h1>
        <p className="text-sm text-muted-foreground mb-4">Last updated: April 2026</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-red-800 text-base mb-2">IMPORTANT — MEDICAL DISCLAIMER</p>
          <p className="text-red-700 text-sm leading-relaxed">
            This application is a clinical decision support tool intended solely for use by licensed healthcare professionals. It is not a substitute for professional medical judgment, diagnosis, or treatment. All clinical decisions must be made by a qualified clinician in the context of the individual patient.
          </p>
        </div>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By downloading, installing, or using AIS Decision Tool 2026 ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the App.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. Intended Users</h2>
          <p className="text-muted-foreground">
            The App is intended for use by licensed healthcare professionals, including but not limited to physicians, nurse practitioners, and other qualified clinicians trained in the management of acute ischemic stroke. Use by unlicensed individuals is not permitted.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. No Medical Advice</h2>
          <p className="text-muted-foreground">The App provides evidence-based clinical decision support based on published guidelines and landmark clinical trials. It does not constitute medical advice. The information presented:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Supplements but does not replace clinical judgment</li>
            <li>Must be interpreted in the context of the individual patient's full clinical picture</li>
            <li>Is based on guidelines current at the time of publication and may not reflect the most recent evidence</li>
            <li>Does not account for all clinical scenarios, contraindications, or institutional protocols</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. Limitation of Liability</h2>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE DEVELOPERS OF AIS DECISION TOOL 2026 SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Use or inability to use the App</li>
            <li>Clinical decisions made in reliance on the App's output</li>
            <li>Errors, inaccuracies, or omissions in the content</li>
            <li>Patient outcomes</li>
          </ul>
          <p className="text-muted-foreground font-semibold">
            You assume full responsibility for all clinical decisions made using or informed by this App.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Subscription and Billing</h2>
          <p className="text-muted-foreground">Access to full App features requires a paid subscription:</p>
          <div className="bg-gray-50 border rounded-xl p-5 my-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="font-semibold text-foreground w-48 flex-shrink-0">Free trial:</span> 3 days for new subscribers</li>
              <li className="flex items-start gap-2"><span className="font-semibold text-foreground w-48 flex-shrink-0">Monthly subscription:</span> $2.99/month after trial</li>
              <li className="flex items-start gap-2"><span className="font-semibold text-foreground w-48 flex-shrink-0">Billing:</span> Charged to your Apple ID at purchase confirmation</li>
              <li className="flex items-start gap-2"><span className="font-semibold text-foreground w-48 flex-shrink-0">Renewal:</span> Automatically renews unless cancelled 24+ hours before period end</li>
              <li className="flex items-start gap-2"><span className="font-semibold text-foreground w-48 flex-shrink-0">Cancellation:</span> Settings → Apple ID → Subscriptions</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content within the App, including but not limited to decision algorithms, text, icons, and design, is the property of the App's developers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without express written permission.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Accuracy of Information</h2>
          <p className="text-muted-foreground">
            While we strive to ensure the accuracy of all clinical content, medical guidelines evolve over time. The App is based on the 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke and associated landmark trials. Users are responsible for staying current with evolving evidence and institutional guidelines.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">8. Modifications to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these Terms of Use at any time. Continued use of the App after changes constitutes acceptance of the revised terms. We will update the date at the top of this page when changes are made.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">9. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms of Use are governed by the laws of the State of Texas, United States, without regard to conflict of law principles.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">10. Contact</h2>
          <p className="text-muted-foreground">
            For questions about these Terms of Use, contact us at:{" "}
            <a href="mailto:texastesla01@gmail.com" className="text-primary hover:underline">texastesla01@gmail.com</a>
          </p>
        </section>

        <div className="border-t pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>AIS Decision Tool 2026 © 2026. For licensed clinicians only.</p>
          <Link href="/ais-privacy" className="text-primary hover:underline">← Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
