import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 2023</p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>
            RxBuilds LLC ("we", "our", or "us") collects information to provide better services to our users. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and professional credentials.</li>
            <li><strong>Financial Information:</strong> Income entries, estimated tax data, and retirement contribution data entered into the RxFinance application.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our application, including features accessed and time spent.</li>
            <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers for analytics and troubleshooting.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. How We Use Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>To provide, maintain, and improve the RxFinance application.</li>
            <li>To calculate financial estimates and generate insights.</li>
            <li>To communicate with you regarding updates, security alerts, and support messages.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Data Security</h2>
          <p className="text-muted-foreground">
            We implement industry-standard security measures to protect your personal and financial information. Data transmitted between your device and our servers is encrypted using SSL/TLS. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. Third-Party Services</h2>
          <p className="text-muted-foreground">
            We may use third-party analytics and cloud hosting services. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Your Rights</h2>
          <p className="text-muted-foreground">
            You have the right to access, update, or delete your personal information. You may also request a copy of the data we hold about you. To exercise these rights, please contact us at the email provided below.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:teslatexas01@gmail.com" className="text-primary hover:underline">teslatexas01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
