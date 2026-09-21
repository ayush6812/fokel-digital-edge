import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/fokel-logo-white.png";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white w-full py-24 md:py-32 px-4 md:px-8 lg:px-12 relative z-10 overflow-hidden">
      
      {/* Background Noise for Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Massive Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-[10px] md:text-xs text-[#FF4500] uppercase tracking-widest block mb-8 font-bold">
            [ INITIATE SEQUENCE ]
          </span>
          <h2 className="text-[clamp(3.5rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
            START A <br/>
            PROJECT.
          </h2>
        </div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          
          {/* BENTO 1: Direct Contact Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            
            <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between h-full group hover:border-white/30 transition-colors">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-8 font-bold">
                  DIRECT LINE
                </h3>
                <a href="mailto:hello@fokelstudio.com" className="text-2xl md:text-3xl font-bold tracking-tight block mb-4 hover:text-[#FF4500] transition-colors flex items-center gap-4">
                  hello@fokelstudio.com
                  <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </a>
                <p className="text-xl md:text-2xl font-medium text-white/80">
                  +91 999 999 9999
                </p>
              </div>
              <div className="mt-16 pt-8 border-t border-white/10">
                <p className="font-mono text-[10px] uppercase tracking-widest leading-loose text-white/50 font-bold">
                  WE USUALLY RESPOND TO ALL DIGITAL ENQUIRIES WITHIN 2 BUSINESS HOURS. NO PITCH DECKS, NO SALES CALLS — JUST A CLEAR NEXT STEP.
                </p>
              </div>
            </div>

            <div className="bg-[#FF4500] p-8 flex items-center justify-between group cursor-pointer overflow-hidden relative">
               <div className="relative z-10">
                 <h4 className="font-black text-2xl uppercase tracking-tighter">BOOK A CALL</h4>
                 <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/60 mt-2">15 MIN DISCOVERY</p>
               </div>
               <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                 <ArrowUpRight className="w-6 h-6 text-white" />
               </div>
               <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            </div>

          </div>

          {/* BENTO 2: The Form (Span 8) */}
          <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 lg:p-16">
             
             <div className="flex justify-between items-end mb-12">
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
                 THE BRIEF.
               </h3>
               <img src="/src/assets/logo-white.png" alt="Fokel" className="w-8 opacity-20" />
             </div>

             <form className="flex flex-col gap-8 md:gap-12 w-full">
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                 <div className="relative group">
                   <input 
                     type="text" 
                     placeholder="Alex Johnson" 
                     className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-xl md:text-2xl text-white font-bold focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 peer"
                   />
                   <span className="absolute top-0 right-0 font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 -translate-y-6 peer-focus:text-[#FF4500] transition-colors">
                     Name
                   </span>
                 </div>

                 <div className="relative group">
                   <input 
                     type="email" 
                     placeholder="example@brand.com" 
                     className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-xl md:text-2xl text-white font-bold focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 peer"
                   />
                   <span className="absolute top-0 right-0 font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 -translate-y-6 peer-focus:text-[#FF4500] transition-colors">
                     Email
                   </span>
                 </div>
               </div>

               <div className="relative group mt-4">
                 <select className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-xl md:text-2xl text-white font-bold focus:outline-none focus:border-[#FF4500] transition-colors appearance-none peer">
                   <option value="website" className="bg-[#111111]">I need a high-performance website</option>
                   <option value="app" className="bg-[#111111]">I need a custom web application</option>
                   <option value="marketing" className="bg-[#111111]">I need aggressive digital marketing</option>
                   <option value="other" className="bg-[#111111]">I have a custom requirement</option>
                 </select>
                 <span className="absolute top-0 right-0 font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 -translate-y-6 peer-focus:text-[#FF4500] transition-colors">
                   Project Type
                 </span>
                 <div className="absolute right-0 bottom-5 pointer-events-none text-white/30">
                   ▼
                 </div>
               </div>

               <div className="relative group mt-4">
                 <textarea 
                   placeholder="Tell us a bit about your goals, timeline, and current challenges..." 
                   rows={3}
                   className="w-full bg-transparent border-b-2 border-white/10 pb-4 text-xl text-white font-medium focus:outline-none focus:border-[#FF4500] transition-colors placeholder:text-white/20 resize-none peer"
                 />
                 <span className="absolute top-0 right-0 font-mono text-[10px] font-bold uppercase tracking-widest text-white/30 -translate-y-6 peer-focus:text-[#FF4500] transition-colors">
                   Details
                 </span>
               </div>

               <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-8">
                 <button type="submit" className="bg-white text-black px-12 py-5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#FF4500] hover:text-white transition-all duration-300 w-full sm:w-auto shadow-[0_0_0_0_rgba(255,69,0,0)] hover:shadow-[0_0_30px_0_rgba(255,69,0,0.5)]">
                   TRANSMIT
                 </button>
                 <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest text-center sm:text-right font-bold">
                   SECURE & ENCRYPTED. <br/>
                   NO SPAM EVER.
                 </p>
               </div>

             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
