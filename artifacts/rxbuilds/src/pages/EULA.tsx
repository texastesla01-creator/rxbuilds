import React from "react";

export default function EULA() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
      <div className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-foreground mb-8">End User License Agreement (EULA)</h1>
        <p className="text-sm text-muted-foreground mb-8">Last Updated: October 2023</p>

        <p className="text-muted-foreground mb-8">
          Please read this End User License Agreement ("Agreement") carefully before clicking the "I Agree" button, downloading, or using the RxFinance application.
        </p>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">1. Acknowledgment</h2>
          <p className="text-muted-foreground">
            This Agreement is a legal document between you and RxBuilds LLC. By downloading or using the Application, you agree to be bound by the terms and conditions of this Agreement. If you do not agree to the terms, do not download or use the Application.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">2. License Grant</h2>
          <p className="text-muted-foreground">
            RxBuilds LLC grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application strictly in accordance with the terms of this Agreement.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">3. Restrictions</h2>
          <p>You agree not to, and you will not permit others to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application.</li>
            <li>Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Application.</li>
            <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of RxBuilds LLC or its affiliates.</li>
          </ul>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">4. Intellectual Property</h2>
          <p className="text-muted-foreground">
            The Application, including without limitation all copyrights, patents, trademarks, trade secrets and other intellectual property rights are, and shall remain, the sole and exclusive property of RxBuilds LLC.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">5. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground uppercase font-semibold text-sm">
            THE APPLICATION IS PROVIDED TO YOU "AS IS" AND "AS AVAILABLE" AND WITH ALL FAULTS AND DEFECTS WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, RXBUILDS LLC EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">6. Financial Advice Disclaimer</h2>
          <p className="text-muted-foreground">
            The information provided by the Application is for informational purposes only and does not constitute financial, tax, or legal advice. You should consult with a qualified professional before making any financial decisions.
          </p>
        </section>

        <section className="space-y-4 mb-8">
          <h2 className="text-xl font-bold text-foreground">7. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Agreement, please contact us at: <a href="mailto:teslatexas01@gmail.com" className="text-primary hover:underline">teslatexas01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
