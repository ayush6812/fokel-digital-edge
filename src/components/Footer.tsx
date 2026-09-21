import { ArrowUpRight } from "lucide-react";
import { CanvasLogoGrid } from "./CanvasLogoGrid";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden z-10 w-full min-h-[60vh] flex flex-col justify-end">
      
      {/* Interactive Physics Canvas Background */}
      <CanvasLogoGrid />
      
      {/* Foreground Content - Pointer events none on wrapper so mouse reaches canvas, 
          pointer events auto on links so they are clickable */}
      <div className="relative z-10 w-full p-8 md:p-12 lg:p-24 pointer-events-none">
        
        {/* Minimal Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
          
          <div className="md:col-span-1 pointer-events-auto">
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
            <p className="text-white/50 font-medium text-xs leading-relaxed max-w-[200px]">
              A premier digital studio focusing on high-performing design and custom engineering.
            </p>
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

          <div className="pointer-events-auto text-left md:text-right flex flex-col justify-between">
            <div>
              <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6 opacity-50">LOCATION</h4>
              <p className="font-bold uppercase tracking-tight text-base text-white/80 leading-relaxed">
                NEW DELHI, INDIA <br />
                GLOBAL REACH
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
