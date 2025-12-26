
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { BannerProvider } from "./contexts/BannerContext";
import { SupabaseProvider } from "./contexts/SupabaseContext";
import Index from "./pages/Index";
import ForTalent from "./pages/ForTalent";
import ForStartups from "./pages/ForStartups";
import Outsourcing from "./pages/Outsourcing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResumeReview from "./pages/ResumeReview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use HashRouter for static hosting compatibility (GitHub Pages, Squarespace)
const App = () => (
  <QueryClientProvider client={queryClient}>
    <SupabaseProvider>
    <BannerProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-talent" element={<ForTalent />} />
            <Route path="/for-startups" element={<ForStartups />} />
            <Route path="/outsourcing" element={<Outsourcing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume-review" element={<ResumeReview />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </BannerProvider>
    </SupabaseProvider>
  </QueryClientProvider>
);

export default App;
