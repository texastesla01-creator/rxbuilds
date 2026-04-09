import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary" data-testid="text-logo">RxBuilds</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}
          >
            RxFinance
          </Link>
          <Link
            href="/taxrx"
            className={`text-sm font-medium transition-colors hover:text-accent ${location === "/taxrx" ? "text-accent" : "text-muted-foreground"}`}
          >
            TaxRx
            <span className="ml-1.5 text-[10px] font-bold bg-accent/10 text-accent px-1.5 py-0.5 rounded-full align-middle">SOON</span>
          </Link>
          <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm" data-testid="btn-download-nav">
              Download on App Store
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
