import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import TaxRx from "@/pages/TaxRx";
import LipidIQ from "@/pages/LipidIQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import EULA from "@/pages/EULA";
import TaxRxPrivacy from "@/pages/TaxRxPrivacy";
import TaxRxTerms from "@/pages/TaxRxTerms";
import QRCodes from "@/pages/QRCodes";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  const hideGlobalFooter = location === "/lipidiq";

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/taxrx" component={TaxRx} />
          <Route path="/lipidiq" component={LipidIQ} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/eula" component={EULA} />
          <Route path="/taxrx-privacy" component={TaxRxPrivacy} />
          <Route path="/taxrx-terms" component={TaxRxTerms} />
          <Route path="/qr" component={QRCodes} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!hideGlobalFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
