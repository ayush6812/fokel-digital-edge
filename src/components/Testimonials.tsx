import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Fokel's team delivered a stunning website that perfectly captures our brand ethos. Their technical expertise and design sensibility are truly world-class.",
    name: "RAHUL SHARMA",
    role: "CEO, INVENTERON TECHNOLOGIES",
  },
  {
    quote: "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience. The ROI has been exceptional.",
    name: "PRIYA MENON",
    role: "MARKETING HEAD, ONSURITY",
  },
  {
    quote: "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online. They're now our go-to digital partner.",
    name: "ANKIT VERMA",
    role: "FOUNDER, HMO ARCHITECTS",
  },
  {
    quote: "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months. Highly recommended.",
    name: "SNEHA KAPOOR",
    role: "DIRECTOR OF GROWTH, HOMELANE",
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

  return (
    <section className="bg-[#f0f0f0] text-black w-full min-h-screen flex flex-col justify-center relative z-10 overflow-hidden py-24 md:py-32 border-t border-black/5">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-24 md:mb-32">
          <span className="font-mono text-xs md:text-sm text-orange-600 uppercase tracking-widest font-bold mb-6 block">
            [ 05. TESTIMONIALS ]
          </span>
          <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
            PROVEN RESULTS.
          </h2>
        </div>

        {/* The Review Block */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          
          {/* Giant Quotation Mark */}
          <span className="text-[15rem] md:text-[25rem] text-black-[0.03] text-black/5 absolute -top-16 md:-top-32 leading-none font-serif select-none pointer-events-none">
            "
          </span>

          <div className="relative min-h-[300px] md:min-h-[250px] flex flex-col justify-center w-full z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full flex flex-col items-center"
              >
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] text-black/90 mb-12 max-w-4xl mx-auto">
                  {testimonials[currentIndex].quote}
                </h3>
                
                <div className="flex flex-col items-center">
                  <span className="font-bold text-xl md:text-2xl uppercase tracking-tighter">{testimonials[currentIndex].name}</span>
                  <span className="text-black/50 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-2 font-bold">{testimonials[currentIndex].role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Interactive Controls */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-16 md:mt-24 z-10 w-full gap-8 md:gap-16">
            
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 hidden md:flex"
            >
              &larr;
            </button>

            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${
                    currentIndex === idx ? "w-12 bg-orange-600" : "w-4 bg-black/10 hover:bg-black/30"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300 hidden md:flex"
            >
              &rarr;
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
