import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import logoWhite from "@/assets/fokel-logo.png";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "ABOUT", href: "/#about" },
  { label: "SERVICES", href: "/#services" },
  { label: "WORK", href: "/#work" },
  { label: "CONTACT", href: "/#contact" },
  { label: "BLOG", href: "/#blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== "/" && href.startsWith("/#")) {
      // Allow normal navigation if not on the homepage
      return; 
    }

    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80; // h-20
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
      }
    }
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10 h-20 transition-all duration-300">
      <div className="w-full h-full flex items-center justify-between">
        
        {/* Left: Logo Area */}
        <div className="flex items-center h-full px-6 md:px-8">
          <Link to="/" className="flex items-center gap-4 group">
            <img src={logoWhite} alt="Fokel" className="h-7 md:h-8 w-auto group-hover:opacity-80 transition-opacity" />
            <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/50 group-hover:text-white transition-colors">
              FOKEL
            </span>
          </Link>
        </div>

        {/* Middle space - grid separator */}
        <div className="flex-1 h-full hidden lg:block border-l border-white/10"></div>

        {/* Right: Links & CTA */}
        <div className="hidden lg:flex h-full items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="h-full flex items-center px-6 xl:px-8 border-l border-white/10 font-mono text-[9px] xl:text-[10px] uppercase tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="/#contact"
            onClick={(e) => scrollToSection(e, "/#contact")}
            className="h-full flex items-center justify-center gap-3 px-6 xl:px-10 bg-white text-black font-mono text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-colors group border-l border-white/10"
          >
            START PROJECT
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden h-full flex items-center px-6 border-l border-white/10">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-white/70 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a0a0a] border-t border-white/10 absolute top-20 left-0 right-0 w-full flex flex-col"
          >
            <div className="flex flex-col border-b border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="w-full py-6 px-8 border-b border-white/10 font-mono text-xs uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={(e) => scrollToSection(e, "/#contact")}
                className="w-full py-8 px-8 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-between hover:bg-accent hover:text-white transition-colors"
              >
                START PROJECT
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
