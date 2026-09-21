import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col md:flex-row min-h-[90vh]">
      {/* Left Column - Orange */}
      <div className="w-full md:w-1/2 bg-accent text-white flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12 md:mb-16">
          <span>WHO WE ARE</span>
          <span>A DELHI-BASED AGENCY</span>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-snug mb-12 md:mb-16 max-w-2xl mt-12 md:mt-0">
          A DELHI-BASED CREATIVE AGENCY, FOKEL PARTNERS WITH AMBITIOUS BRANDS ACROSS INDIA TO BUILD DIGITAL PRESENCE THAT COMPOUNDS OVER TIME — COMBINING STRATEGIC BRAND IDENTITY, SEO, PERFORMANCE MARKETING, AND WEB DEVELOPMENT INTO A SINGLE, INTEGRATED GROWTH SYSTEM.
        </p>
        
        <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70">
          FOKEL DIGITAL STUDIO
        </div>
      </div>

      {/* Right Column - Blueprint Background with Huge Orange Text */}
      <div className="w-full md:w-1/2 relative bg-black flex flex-col justify-start p-8 md:p-12 lg:p-16 overflow-hidden min-h-[50vh]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
            alt="Futuristic Computer Tech" 
            className="w-full h-full object-cover grayscale contrast-125 brightness-[0.4] scale-125"
          />
        </div>
        
        <div className="relative z-10 w-full flex justify-end text-right">
          <h2 className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.8] text-accent flex flex-col items-end drop-shadow-2xl">
            <span>BOLD</span>
            <span>IDEAS,</span>
            <span>DISRUPTIVE</span>
            <span>EXECUTION.</span>
          </h2>
        </div>

        {/* Bottom right floating box */}
        <div className="absolute bottom-8 right-8 z-40 hidden md:block max-w-[280px]">
          <div className="bg-[#111111]/90 backdrop-blur-sm text-white p-6 font-mono text-[10px] md:text-xs uppercase tracking-widest border border-white/20 leading-loose text-left">
            Our work doesn't just look good in a presentation. <br/>
            It shows up in your analytics. <br/>
            <span className="text-accent">We don't just create—we execute.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
