import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StoryInNumbers from "@/components/StoryInNumbers";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Testimonials from "@/components/Testimonials";
import JourneyEndsHere from "@/components/JourneyEndsHere";
import FAQ from "@/components/FAQ";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NeuralNetworkCanvas from "@/components/ui/NeuralNetworkCanvas";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Preloader from "@/components/Preloader";

const Index = () => {
  return (
    <>
      <Preloader />
      <SEO
        title="Fokel — Digital Studio | We Bring Your Brand Into Focus"
        description="Fokel is a digital studio that brings your business into market focus with bold, disruptive strategies. We specialize in digital marketing, web design, SEO, and branding that drives measurable results for B2B companies."
        keywords="digital marketing agency, web design company, SEO services, branding agency, social media marketing, digital strategy, B2B marketing, brand identity"
        url="https://www.fokelworks.com"
        type="website"
      />
      <div className="bg-[#111111] min-h-screen relative text-white antialiased overflow-x-hidden">
        <div className="global-noise" />
        <GlassLensCursor />
        
        {/* Master Container - No longer artificially boxing in the content */}
        <div className="w-full flex flex-col">
          {/* Navbar */}
          <Navbar />
          
          {/* Hero - Full Bleed Mattis Style */}
          <Hero />

          <Marquee />

          {/* About - Full Bleed Split Screen */}
          <About />

          {/* Services (Now above FeaturedWork) */}
          <Services />

          {/* FeaturedWork - Full Bleed Cinematic */}
          <FeaturedWork />
          <StoryInNumbers />
          <HowWeWork />
          <Testimonials />
          
          {/* Color Block Separator */}
          <div className="w-full bg-orange-600 border-y border-black py-4 md:py-6 overflow-hidden relative z-20 flex">
            <div className="animate-marquee flex min-w-max items-center">
              <div className="flex gap-16 items-center px-8 font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black">
                <span>RESULTS SPEAK LOUDER THAN WORDS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>REAL CLIENTS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PROVEN ROI</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>RESULTS SPEAK LOUDER THAN WORDS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>REAL CLIENTS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PROVEN ROI</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
              <div className="flex gap-16 items-center px-8 font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black" aria-hidden="true">
                <span>RESULTS SPEAK LOUDER THAN WORDS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>REAL CLIENTS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PROVEN ROI</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>RESULTS SPEAK LOUDER THAN WORDS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>REAL CLIENTS</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span>PROVEN ROI</span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
            </div>
          </div>

          <BlogSection />
          <Newsletter />
          <FAQ />
          <Contact />
          <Footer />
        </div>
        
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Index;
