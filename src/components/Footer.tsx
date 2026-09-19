import React from 'react';
import { Link } from 'react-router-dom';
import logo from "@/assets/fokel-logo-black.png";

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-white font-black tracking-tighter text-3xl font-heading uppercase mb-6 block">FOKEL</span>
            <p className="text-white/50 font-medium text-sm max-w-sm leading-relaxed">
              We are a premier digital studio focusing on high-performing design, custom engineering, and scalable brand experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6">NAVIGATION</h4>
            <ul className="space-y-4 font-black uppercase tracking-tight text-white/70">
              <li><a href="#services" className="hover:text-accent transition-colors">SERVICES</a></li>
              <li><a href="#work" className="hover:text-accent transition-colors">WORK</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">APPROACH</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">INSIGHTS</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-mono text-[10px] uppercase tracking-widest mb-6">SOCIALS</h4>
            <ul className="space-y-4 font-black uppercase tracking-tight text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">INSTAGRAM</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LINKEDIN</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">TWITTER</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} FOKEL DIGITAL STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
