import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white w-full py-32 md:py-48 px-6 md:px-12 relative z-10 overflow-hidden flex flex-col items-center min-h-screen">
      
      {/* Background Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        
        <div className="flex items-center justify-between mb-16 md:mb-24 border-b border-white/10 pb-8">
          <span className="font-mono text-xs md:text-sm text-[#FF4500] uppercase tracking-widest font-bold">
            [ INITIATE SEQUENCE ]
          </span>
          <img src="/src/assets/logo-white.png" alt="Fokel" className="w-10 opacity-30" />
        </div>
        
        {/* Narrative Form */}
        <form className="w-full">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.6] md:leading-[1.8] tracking-tight">
            Hello Fokel, my name is 
            <input 
              type="text" 
              placeholder="Your Name" 
              className="inline-block bg-transparent border-b-4 border-white/20 focus:border-[#FF4500] focus:outline-none text-center min-w-[200px] md:min-w-[300px] mx-2 md:mx-6 text-[#FF4500] placeholder:text-white/20 transition-colors"
              required
            />
            and I represent 
            <input 
              type="text" 
              placeholder="Your Brand" 
              className="inline-block bg-transparent border-b-4 border-white/20 focus:border-[#FF4500] focus:outline-none text-center min-w-[200px] md:min-w-[300px] mx-2 md:mx-6 mt-4 md:mt-0 text-[#FF4500] placeholder:text-white/20 transition-colors"
              required
            />. 
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            I am looking to build 
            <select 
              className="inline-block bg-transparent border-b-4 border-white/20 focus:border-[#FF4500] focus:outline-none text-center min-w-[250px] md:min-w-[400px] mx-2 md:mx-6 mt-4 lg:mt-0 text-[#FF4500] appearance-none cursor-pointer transition-colors"
              required
              defaultValue=""
            >
              <option value="" disabled className="text-white/20 bg-black">Select project type...</option>
              <option value="website" className="text-white bg-black">a high-performance website</option>
              <option value="app" className="text-white bg-black">a custom web application</option>
              <option value="marketing" className="text-white bg-black">an aggressive marketing system</option>
              <option value="other" className="text-white bg-black">a custom digital solution</option>
            </select>.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            You can reach me at 
            <input 
              type="email" 
              placeholder="Email Address" 
              className="inline-block bg-transparent border-b-4 border-white/20 focus:border-[#FF4500] focus:outline-none text-center min-w-[250px] md:min-w-[400px] mx-2 md:mx-6 mt-4 lg:mt-0 text-[#FF4500] placeholder:text-white/20 transition-colors"
              required
            />
            to discuss this further.
          </h2>
          
          <div className="mt-24 flex flex-col sm:flex-row items-center gap-8 border-t border-white/10 pt-16">
            <button 
              type="submit" 
              className="bg-[#FF4500] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto shadow-[0_0_0_0_rgba(255,69,0,0)] hover:shadow-[0_0_40px_0_rgba(255,69,0,0.6)] hover:scale-105"
            >
              TRANSMIT MESSAGE
              <ArrowUpRight className="w-6 h-6" />
            </button>
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/40 font-bold text-center sm:text-left leading-relaxed max-w-xs">
              SECURE & ENCRYPTED. NO SALES PITCHES. JUST A CLEAR NEXT STEP.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
