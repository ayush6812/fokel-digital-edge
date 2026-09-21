import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full flex flex-col md:flex-row relative z-10">
      
      {/* Left Side: The Work (Form) */}
      <div className="w-full md:w-[60%] bg-black text-white p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-center">
        
        {/* Visible Noise for texture */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-60" />
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-12" style={{ fontFamily: "var(--font-heading)" }}>
            START A PROJECT.
          </h2>

          <form className="flex flex-col gap-8">
            
            <div className="relative group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2 group-focus-within:text-[#FF4500] transition-colors">
                Name
              </label>
              <input 
                type="text" 
                placeholder="Alex Johnson" 
                className="w-full bg-transparent border-b border-white/20 pb-3 text-lg md:text-xl text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20"
                required
              />
            </div>

            <div className="relative group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2 group-focus-within:text-[#FF4500] transition-colors">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="alex@brand.com" 
                className="w-full bg-transparent border-b border-white/20 pb-3 text-lg md:text-xl text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20"
                required
              />
            </div>

            <div className="relative group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2 group-focus-within:text-[#FF4500] transition-colors">
                Project Type
              </label>
              <div className="relative">
                <select 
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-lg md:text-xl text-white focus:outline-none focus:border-[#FF4500] transition-colors appearance-none cursor-pointer"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-white/20 bg-black">Select an option...</option>
                  <option value="website" className="text-white bg-black">Web Design & Development</option>
                  <option value="app" className="text-white bg-black">Custom Application</option>
                  <option value="marketing" className="text-white bg-black">Digital Marketing</option>
                  <option value="other" className="text-white bg-black">Other Inquiry</option>
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30 group-focus-within:text-[#FF4500] transition-colors">
                  ▼
                </div>
              </div>
            </div>

            <div className="relative group">
              <label className="font-mono text-[10px] uppercase tracking-widest text-white/50 block mb-2 group-focus-within:text-[#FF4500] transition-colors">
                Message
              </label>
              <textarea 
                placeholder="Tell us about your goals..." 
                rows={3}
                className="w-full bg-transparent border-b border-white/20 pb-3 text-lg md:text-xl text-white focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 resize-none"
                required
              />
            </div>

          </form>
        </div>
      </div>

      {/* Right Side: The Action (Highlight Zone) */}
      <div className="w-full md:w-[40%] bg-[#FF4500] text-black p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        
        <div className="mt-4 md:mt-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            LET'S <br/> TALK.
          </h2>
          
          <button 
            type="submit" 
            className="group flex items-center justify-between w-full bg-black text-white px-6 py-5 hover:bg-white hover:text-black transition-colors duration-300"
          >
            <span className="font-black uppercase tracking-widest text-base md:text-lg">
              REQUEST A CALLBACK
            </span>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        <div className="mt-16 md:mt-24 border-t border-black/20 pt-8">
          <p className="font-mono text-[10px] uppercase tracking-widest font-bold mb-4 opacity-60">
            OR REACH US DIRECTLY
          </p>
          <a href="mailto:info@fokelworks.com" className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity flex items-center gap-4 break-words">
            info@fokelworks.com
            <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
        
      </div>

    </section>
  );
};

export default Contact;
