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
          
          {/* Aesthetic Divider Between Light Sections */}
          <div className="w-full bg-[#f0f0f0] flex justify-center items-center pt-8 pb-16 relative z-20">
            <div className="w-full max-w-[1600px] h-[1px] bg-black/10 mx-6 md:mx-12 relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#f0f0f0] px-6">
                <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-600" />
                </div>
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
