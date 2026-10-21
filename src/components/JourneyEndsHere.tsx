import { ArrowRight } from "lucide-react";

const JourneyEndsHere = () => {
  return (
    <section className="bg-background py-32 md:py-48 relative overflow-hidden">
      
      {/* Massive typography background watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
        <h2 className="text-[12vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          DIGITAL EXCELLENCE
        </h2>
        <h2 className="text-[12vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none whitespace-nowrap mt-[-2%]">
          DIGITAL EXCELLENCE
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10">
        
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(255,85,0,0.15)]">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          START A PROJECT
        </span>
        
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase tracking-tighter leading-[0.9] text-white mb-12">
          READY TO DOMINATE <br />
          <span className="text-accent italic">YOUR MARKET?</span>
        </h2>

        <p className="text-white/50 font-medium text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
          We partner with ambitious founders and global brands to architect digital products that command authority and drive revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a href="#contact" className="group flex items-center justify-center gap-3 bg-accent text-black px-10 py-5 rounded-full font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(255,85,0,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
            CONTACT US <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#work" className="group flex items-center justify-center gap-3 bg-transparent text-white border border-white/20 px-10 py-5 rounded-full font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10 hover:border-white/50">
            VIEW SHOWREEL
          </a>
        </div>

      </div>
    </section>
  );
};

export default JourneyEndsHere;
