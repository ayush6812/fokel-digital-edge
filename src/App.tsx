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
import BlogRealEstateSEO from "./pages/BlogRealEstateSEO";
import BlogB2BLeadGen from "./pages/BlogB2BLeadGen";
import BlogBrandIdentity from "./pages/BlogBrandIdentity";
import BlogAIMarketing from "./pages/BlogAIMarketing";
import BlogLocalSEO from "./pages/BlogLocalSEO";
import BlogLuxuryMarketing from "./pages/BlogLuxuryMarketing";
import BlogEdTechMarketing from "./pages/BlogEdTechMarketing";
import BlogInfrastructureBranding from "./pages/BlogInfrastructureBranding";
import BuiltForImpact from "./pages/BuiltForImpact";
import TheExecutionEngine from "./pages/TheExecutionEngine";
import TheGalleryOfImpact from "./pages/TheGalleryOfImpact";
import Workspace22CaseStudy from "./pages/Workspace22CaseStudy";
import CorporateBuildconCaseStudy from "./pages/CorporateBuildconCaseStudy";
import HomesharkCaseStudy from "./pages/HomesharkCaseStudy";
import AurumEducationCaseStudy from "./pages/AurumEducationCaseStudy";
import PrithiviGridCaseStudy from "./pages/PrithiviGridCaseStudy";
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
          <Route path="/blog/real-estate-seo-india" element={<BlogRealEstateSEO />} />
          <Route path="/blog/b2b-lead-generation-autopilot" element={<BlogB2BLeadGen />} />
          <Route path="/blog/brand-identity-startups" element={<BlogBrandIdentity />} />
          <Route path="/blog/ai-agents-marketing-india" element={<BlogAIMarketing />} />
          <Route path="/blog/local-seo-delhi-guide" element={<BlogLocalSEO />} />
          <Route path="/blog/luxury-brand-marketing-india" element={<BlogLuxuryMarketing />} />
          <Route path="/blog/edtech-content-marketing-india" element={<BlogEdTechMarketing />} />
          <Route path="/blog/infrastructure-branding-india" element={<BlogInfrastructureBranding />} />
          <Route path="/built-for-impact" element={<BuiltForImpact />} />
          <Route path="/the-execution-engine" element={<TheExecutionEngine />} />
          <Route path="/the-gallery-of-impact" element={<TheGalleryOfImpact />} />
          <Route path="/work/22workspace" element={<Workspace22CaseStudy />} />
          <Route path="/work/corporate-buildcon" element={<CorporateBuildconCaseStudy />} />
          <Route path="/work/homeshark" element={<HomesharkCaseStudy />} />
          <Route path="/work/aurum-education" element={<AurumEducationCaseStudy />} />
          <Route path="/work/prithivi-grid" element={<PrithiviGridCaseStudy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;