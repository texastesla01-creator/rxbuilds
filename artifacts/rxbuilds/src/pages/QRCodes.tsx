import React from "react";
import { QRCodeSVG } from "qrcode.react";

const apps = [
  {
    name: "RxFinance",
    tagline: "Income & tax tracking for physicians",
    url: "https://apps.apple.com/us/app/rxfinance/id6760018360",
    color: "#0066CC",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "text-blue-700 bg-blue-100",
  },
  {
    name: "TaxRx",
    tagline: "Tax intelligence for the self-employed",
    url: "https://apps.apple.com/us/app/taxrx/id6761803370",
    color: "#14B8A6",
    bg: "bg-teal-50",
    border: "border-teal-100",
    badge: "text-teal-700 bg-teal-100",
  },
  {
    name: "LipidIQ",
    tagline: "Clinical lipid decision support",
    url: "https://apps.apple.com/us/app/lipidiq/id6760669194",
    color: "#3b82f6",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    badge: "text-indigo-700 bg-indigo-100",
  },
];

export default function QRCodes() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-foreground mb-3">Download Our Apps</h1>
          <p className="text-lg text-muted-foreground">Scan a QR code with your iPhone camera to download directly from the App Store.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.name}
              className={`${app.bg} ${app.border} border rounded-2xl p-8 flex flex-col items-center text-center shadow-sm`}
            >
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 ${app.badge}`}>
                iOS App
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-1">{app.name}</h2>
              <p className="text-sm text-muted-foreground mb-7">{app.tagline}</p>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                <QRCodeSVG
                  value={app.url}
                  size={180}
                  fgColor={app.color}
                  bgColor="#ffffff"
                  level="M"
                  includeMargin={false}
                />
              </div>

              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-black text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-gray-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-12">
          All apps are available exclusively on iOS. Scan with your iPhone camera — no additional app required.
        </p>
      </div>
    </div>
  );
}
