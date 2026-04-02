import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-primary" data-testid="text-logo">RxBuilds</span>
        </Link>
        <div className="flex items-center space-x-4">
          <a href="https://apps.apple.com/us/app/rxfinance/id6760018360" target="_blank" rel="noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-sm" data-testid="btn-download-nav">
              Download on App Store
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
