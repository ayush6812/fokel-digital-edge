import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden z-10 w-full flex flex-col justify-end">
      
      {/* Subtle top glow separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"></div>

      {/* Massive watermark to explicitly mark the footer */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none select-none opacity-5 flex justify-center z-0">
        <h1 className="text-[15vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>
          FOKEL STUDIO
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full p-8 md:p-12 lg:p-24 pointer-events-auto">
        
        {/* Minimal Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 border-t border-white/10 pt-12 mt-24">
          
          <div className="md:col-span-1">
            <div className="group cursor-pointer perspective-1000 w-16 h-16 mb-6">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden">
                  <img src="/src/assets/logo-white.png" alt="Fokel" className="w-full h-full object-contain" />
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <img src="/src/assets/logo-white.png" alt="Fokel" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-auto">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">NAVIGATION</h4>
            <ul className="space-y-2 font-bold uppercase tracking-tight text-base text-white">
              <li><a href="#about" className="hover:text-orange-500 transition-colors">ABOUT</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors">SERVICES</a></li>
              <li><a href="#work" className="hover:text-orange-500 transition-colors">WORK</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition-colors">CONTACT</a></li>
              <li><a href="#blog" className="hover:text-orange-500 transition-colors">BLOG</a></li>
            </ul>
          </div>

          <div className="pointer-events-auto">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">SOCIALS</h4>
            <ul className="space-y-2 font-bold uppercase tracking-tight text-base text-white">
              <li><a href="#" className="hover:text-orange-500 transition-colors">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">LINKEDIN</a></li>
            </ul>
          </div>

          <div className="pointer-events-auto">
            <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">CONNECT</h4>
            <ul className="space-y-2 font-bold uppercase tracking-tight text-base text-white">
              <li><a href="mailto:info@fokelworks.com" className="hover:text-orange-500 transition-colors">EMAIL</a></li>
              <li><a href="tel:+919289539957" className="hover:text-orange-500 transition-colors">+91 92895 39957</a></li>
            </ul>
          </div>

          <div className="pointer-events-auto text-left md:text-right flex flex-col justify-between">
            <div>
              <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">LOCATION</h4>
              <p className="font-bold uppercase tracking-tight text-sm text-white/80 leading-relaxed">
                A77, BASEMENT, A BLOCK, <br />
                EAST OF KAILASH, NEW DELHI, <br />
                DELHI 110065, INDIA
              </p>
            </div>
            
            <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest mt-12 md:mt-0">
              &copy; {new Date().getFullYear()} FOKEL DIGITAL STUDIO.
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
