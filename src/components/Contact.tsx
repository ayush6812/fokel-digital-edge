import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white w-full py-32 md:py-48 px-4 md:px-8 relative z-10 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-mono text-[10px] md:text-xs text-[#FF4500] uppercase tracking-widest block mb-8 font-bold">
            [ INITIATE SEQUENCE ]
          </span>
          <h2 className="text-[clamp(4rem,15vw,12rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
            LET'S <br/> TALK.
          </h2>
        </div>

        {/* The Clean Stack Form */}
        <form className="w-full flex flex-col gap-12 md:gap-16">
          
          <div className="relative group w-full">
            <input 
              type="text" 
              placeholder="YOUR NAME" 
              className="w-full bg-transparent border-b border-white/20 pb-6 text-2xl md:text-5xl font-black uppercase tracking-tighter text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 peer"
              required
            />
          </div>

          <div className="relative group w-full">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-b border-white/20 pb-6 text-2xl md:text-5xl font-black uppercase tracking-tighter text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 peer"
              required
            />
          </div>

          <div className="relative group w-full">
            <select 
              className="w-full bg-transparent border-b border-white/20 pb-6 text-2xl md:text-5xl font-black uppercase tracking-tighter text-white focus:outline-none focus:border-[#FF4500] transition-colors appearance-none cursor-pointer peer"
              required
              defaultValue=""
            >
              <option value="" disabled className="text-white/20 bg-black">PROJECT TYPE</option>
              <option value="website" className="text-white bg-black">WEB DESIGN & DEV</option>
              <option value="app" className="text-white bg-black">CUSTOM APPLICATION</option>
              <option value="marketing" className="text-white bg-black">DIGITAL MARKETING</option>
              <option value="other" className="text-white bg-black">OTHER INQUIRY</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 peer-focus:text-[#FF4500] transition-colors">
              ▼
            </div>
          </div>

          <div className="relative group w-full">
            <textarea 
              placeholder="PROJECT DETAILS" 
              rows={2}
              className="w-full bg-transparent border-b border-white/20 pb-6 text-2xl md:text-5xl font-black uppercase tracking-tighter text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 resize-none peer"
              required
            />
          </div>

          <div className="mt-12 flex flex-col items-center">
            <button 
              type="submit" 
              className="bg-[#FF4500] text-white w-full py-8 md:py-10 font-black text-2xl md:text-4xl uppercase tracking-tighter hover:bg-white hover:text-black transition-all duration-500 shadow-[0_0_0_0_rgba(255,69,0,0)] hover:shadow-[0_0_50px_0_rgba(255,69,0,0.6)] flex items-center justify-center gap-4"
            >
              REQUEST A CALLBACK
              <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/30 font-bold mt-8 text-center">
              SECURE & ENCRYPTED. WE WILL BE IN TOUCH SHORTLY.
            </p>
          </div>

        </form>

      </div>
    </section>
  );
};

export default Contact;
