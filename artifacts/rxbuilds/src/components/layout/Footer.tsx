import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">RxBuilds</h3>
            <p className="text-sm text-muted-foreground">
              CLINICAL AI · MEDICAL FINTECH
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  RxFinance
                </Link>
              </li>
              <li>
                <Link href="/taxrx" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  TaxRx
                </Link>
              </li>
              <li>
                <Link href="/lipidiq" className="text-sm text-muted-foreground hover:text-blue-500 transition-colors">
                  LipidIQ
                </Link>
              </li>
              <li>
                <Link href="/ais" className="text-sm text-muted-foreground hover:text-cyan-500 transition-colors">
                  AIS Decision Tool
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/eula" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-eula">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/taxrx-privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  TaxRx Privacy
                </Link>
              </li>
              <li>
                <Link href="/taxrx-terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  TaxRx Terms
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/qr" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  QR Codes
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2025 RxBuilds LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
