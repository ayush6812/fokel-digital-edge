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
    <section className="bg-[#f0f0f0] text-black w-full min-h-screen flex flex-col md:flex-row relative z-10 overflow-hidden">
      
      {/* Left Side: Header & Tech Image */}
      <div className="w-full md:w-[45%] p-8 md:p-12 lg:p-24 flex flex-col justify-between border-r border-black/5 relative z-20 bg-[#f0f0f0]">
        
        <div className="mb-16 md:mb-0">
          <span className="font-mono text-xs md:text-sm text-orange-600 uppercase tracking-widest font-bold mb-4 block">
            [ 05. TESTIMONIALS ]
          </span>
          <h2 className="text-[clamp(4rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
            PROVEN <br/>
            RESULTS.
          </h2>
        </div>

        {/* Aesthetic Tech Image */}
        <div className="w-full aspect-[4/3] bg-black/5 mt-auto overflow-hidden rounded-2xl relative group shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Aesthetic Circuit Board"
            className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
        </div>

      </div>

      {/* Right Side: Rotating Testimonial */}
      <div className="w-full md:w-[55%] p-8 md:p-12 lg:p-24 flex flex-col justify-center relative bg-white">
        
        <div className="relative min-h-[400px] flex flex-col justify-center z-10 w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex flex-col"
            >
              <h3 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.2] mb-12 text-black/90">
                {testimonials[currentIndex].quote}
              </h3>
              
              <div className="flex flex-col items-start w-full border-l-2 border-orange-500 pl-6 mt-auto">
                <span className="font-bold text-xl md:text-2xl uppercase tracking-tighter">{testimonials[currentIndex].name}</span>
                <span className="text-black/50 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 font-bold">{testimonials[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Interactive Controls */}
        <div className="flex items-center justify-between mt-16 md:mt-24 z-10 max-w-3xl mx-auto w-full border-t border-black/5 pt-8">
          <div className="flex gap-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-500 rounded-full ${
                  currentIndex === idx ? "w-12 bg-orange-600" : "w-3 bg-black/10 hover:bg-black/30"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
            >
              &larr;
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
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
