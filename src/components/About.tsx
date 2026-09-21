import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column - Orange */}
      <div className="w-full md:w-1/2 bg-accent text-white flex flex-col justify-between p-8 md:p-16 lg:p-24">
        <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest mb-16 md:mb-24">
          <span>WHO WE ARE</span>
          <span>A DELHI-BASED AGENCY</span>
        </div>
        
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-snug mb-16 md:mb-24 max-w-2xl">
          A DELHI-BASED CREATIVE AGENCY, FOKEL PARTNERS WITH AMBITIOUS BRANDS ACROSS INDIA TO BUILD DIGITAL PRESENCE THAT COMPOUNDS OVER TIME — COMBINING STRATEGIC BRAND IDENTITY, SEO, PERFORMANCE MARKETING, AND WEB DEVELOPMENT INTO A SINGLE, INTEGRATED GROWTH SYSTEM.
        </p>
        
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70">
          FOKEL DIGITAL STUDIO
        </div>
      </div>

      {/* Right Column - Blueprint Background with Huge Orange Text */}
      <div className="w-full md:w-1/2 relative bg-black flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Futuristic Computer Tech" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 w-full flex justify-end text-right mt-12 md:mt-24">
          <h2 className="text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.8] text-accent flex flex-col items-end">
            <span>BOLD</span>
            <span>IDEAS,</span>
            <span>DISRUPTIVE</span>
            <span>EXECUTION.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
