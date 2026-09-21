import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Fokel's team delivered a stunning website that perfectly captures our brand ethos. Their technical expertise and design sensibility are truly world-class.",
    name: "RAHUL SHARMA",
    role: "CEO, INVENTERON",
  },
  {
    quote: "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience.",
    name: "PRIYA MENON",
    role: "MARKETING HEAD, ONSURITY",
  },
  {
    quote: "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online.",
    name: "ANKIT VERMA",
    role: "FOUNDER, HMO ARCHITECTS",
  },
  {
    quote: "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months.",
    name: "SNEHA KAPOOR",
    role: "DIRECTOR OF GROWTH",
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <section className="bg-[#f0f0f0] text-black w-full py-16 md:py-20 relative z-10 overflow-hidden flex flex-col justify-center border-t border-black/5">
      
      {/* Film grain noise overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.35] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")', backgroundSize: '100px' }} 
      />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-10">
        
        {/* LEFT COLUMN: Header */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="font-mono text-xs md:text-sm text-orange-600 uppercase tracking-widest font-bold mb-6 block">
            [ 05. TESTIMONIALS ]
          </span>
          <h2 className="text-[clamp(4.5rem,8vw,12rem)] font-black uppercase tracking-tighter leading-[0.85] text-black" style={{ fontFamily: "var(--font-heading)" }}>
            PROVEN <br />
            RESULTS.
          </h2>
        </div>

        {/* RIGHT COLUMN: Quote & Controls */}
        <div className="lg:col-span-7 flex flex-col">
          
          {/* Top Bar: Navigation */}
          <div className="flex justify-end items-center mb-16 md:mb-24 border-b border-black/10 pb-8">
            
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Quote Block */}
          <div className="relative w-full mt-auto">
            {/* SVG Quote Icon */}
            <svg className="w-16 h-16 md:w-24 md:h-24 text-black/10 mb-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col"
              >
                <p className="text-2xl md:text-4xl lg:text-[3rem] font-medium tracking-normal leading-[1.5] text-black/90">
                  "{t.quote}"
                </p>
                
                <div className="flex flex-col mt-12 md:mt-16 pt-8 border-t border-black/5">
                  <span className="font-bold text-xl md:text-2xl tracking-tight uppercase">{t.name}</span>
                  <span className="text-orange-600 font-mono text-xs uppercase tracking-widest mt-1 font-bold">{t.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
