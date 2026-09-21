import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white w-full py-32 md:py-48 px-4 relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-mono text-[10px] md:text-xs text-[#FF4500] uppercase tracking-widest block mb-8 font-bold">
          [ FAST TRACK ]
        </span>
        
        <h2 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase tracking-tighter leading-[0.85] mb-16" style={{ fontFamily: "var(--font-heading)" }}>
          LET'S <br/> TALK.
        </h2>

        {/* The Frictionless Form */}
        <form className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-2 bg-[#111] p-2 rounded-full border border-white/10 focus-within:border-[#FF4500] focus-within:shadow-[0_0_30px_0_rgba(255,69,0,0.2)] transition-all duration-500">
          <input 
            type="text" 
            placeholder="Enter your email or phone number..." 
            className="w-full bg-transparent border-none outline-none text-white px-8 py-6 text-lg md:text-xl placeholder:text-white/30"
            required
          />
          <button 
            type="submit" 
            className="bg-[#FF4500] text-white px-8 md:px-10 py-6 rounded-full font-black uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors w-full md:w-auto flex-shrink-0"
          >
            REQUEST A CALLBACK
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-24 flex flex-col items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 font-bold">
            OR REACH US DIRECTLY AT
          </p>
          <a href="mailto:hello@fokelstudio.com" className="text-xl md:text-3xl font-bold tracking-tight hover:text-[#FF4500] transition-colors relative group">
            hello@fokelstudio.com
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#FF4500] transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
