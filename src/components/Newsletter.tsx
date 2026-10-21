import { ArrowUpRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section id="newsletter" className="bg-[#FF4500] text-white w-full flex flex-col md:flex-row relative z-10 overflow-hidden">
      {/* Left Side: Copy */}
      <div className="w-full md:w-1/2 py-12 md:py-16 px-8 md:px-12 flex flex-col justify-center">
        {/* Removed Intelligence Delivered text per user request */}
        <div className="mt-auto">
          <h2 className="text-[clamp(4rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            STAY <br/>
            SHARP.
          </h2>
          <p className="font-bold text-sm md:text-base uppercase tracking-widest max-w-sm leading-relaxed text-white/90">
            GET THE LATEST NEWS AND UPDATES DELIVERED STRAIGHT TO YOUR INBOX.
          </p>
        </div>

      </div>

      {/* Right Side: Form & Visuals */}
      <div className="w-full md:w-1/2 py-12 md:py-16 px-8 md:px-12 bg-[#FF4500] md:border-l border-white/20 flex flex-col justify-center relative overflow-hidden">
        
        {/* Massive watermark graphic */}
        <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-10">
          <svg width="400" height="400" viewBox="0 0 100 100" className="w-[150%] h-auto">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-md ml-auto">
          <form className="flex flex-col gap-8 w-full">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="ENTER YOUR EMAIL" 
                className="w-full bg-transparent border-b-2 border-white/30 pb-4 text-2xl md:text-3xl font-black text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/30 placeholder:font-black tracking-tighter uppercase"
                style={{ fontFamily: "var(--font-heading)" }}
              />
            </div>
            
            <button className="flex items-center gap-3 bg-white text-[#FF4500] px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors w-fit group">
              Subscribe
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Newsletter;
