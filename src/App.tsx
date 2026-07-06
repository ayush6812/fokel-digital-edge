import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import HomelaneCaseStudy from "./pages/HomelaneCaseStudy";
import WtcCaseStudy from "./pages/WtcCaseStudy";
import GenesLecoanetCaseStudy from "./pages/GenesLecoanetCaseStudy";
import SabPropertiesCaseStudy from "./pages/SabPropertiesCaseStudy";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogStrategicPartner from "./pages/BlogStrategicPartner";
import BlogIntegratedEcosystem from "./pages/BlogIntegratedEcosystem";
import BuiltForImpact from "./pages/BuiltForImpact";
import TheExecutionEngine from "./pages/TheExecutionEngine";
import TheGalleryOfImpact from "./pages/TheGalleryOfImpact";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/work/homelane" element={<HomelaneCaseStudy />} />
            <Route path="/work/wtc-2026" element={<WtcCaseStudy />} />
            <Route path="/work/genes-lecoanet-hemant" element={<GenesLecoanetCaseStudy />} />
            <Route path="/work/sab-properties" element={<SabPropertiesCaseStudy />} />
            <Route path="/blog/strategic-partner" element={<BlogStrategicPartner />} />
            <Route path="/blog/integrated-ecosystem" element={<BlogIntegratedEcosystem />} />
            <Route path="/built-for-impact" element={<BuiltForImpact />} />
            <Route path="/the-execution-engine" element={<TheExecutionEngine />} />
            <Route path="/the-gallery-of-impact" element={<TheGalleryOfImpact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;