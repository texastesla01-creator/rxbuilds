import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5" onClick={() => setMenuOpen(false)}>
          <span className="text-xl font-bold text-primary" data-testid="text-logo">RxBuilds</span>
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase hidden sm:block">LLC</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}
          >
            RxFinance
          </Link>
          <Link
            href="/taxrx"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${location === "/taxrx" ? "text-accent" : "text-muted-foreground"}`}
          >
            TaxRx
            <span className="text-[10px] font-bold bg-accent/10 text-accent px-1.5 py-0.5 rounded-full">SOON</span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm" data-testid="btn-download-nav">
              Download on App Store
            </Button>
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3 shadow-md">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location === "/" ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-primary hover:bg-gray-50"}`}
          >
            RxFinance
          </Link>
          <Link
            href="/taxrx"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location === "/taxrx" ? "text-accent bg-accent/5" : "text-muted-foreground hover:text-accent hover:bg-gray-50"}`}
          >
            TaxRx
            <span className="text-[10px] font-bold bg-accent/10 text-accent px-1.5 py-0.5 rounded-full">SOON</span>
          </Link>
          <div className="pt-2 border-t">
            <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-sm">
                Download on App Store
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
