import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "We launched in two weeks and had paying customers by week three. I've worked with agencies that took months to deliver half of this.",
    name: "Sophie Andersen",
    role: "Co-founder, Vertex Tech",
  },
  {
    quote: "Their engineering speed is unmatched. They built our entire digital ecosystem and completely transformed our user acquisition flow.",
    name: "Marcus Chen",
    role: "CEO, Nexus Dynamics",
  },
  {
    quote: "The perfect balance of aesthetic brilliance and robust architecture. They don't just build websites, they engineer digital products.",
    name: "Elena Rodriguez",
    role: "Head of Product, Shift",
  },
  {
    quote: "Our organic traffic skyrocketed after their technical SEO and platform rebuild. They delivered beyond our highest expectations.",
    name: "James Wallace",
    role: "Marketing Director, Omni Corp",
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
    <section className="bg-[#0a0a0a] text-white w-full py-24 md:py-32 relative z-10 overflow-hidden border-t border-white/5">
      
      {/* Background Tech Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
          alt="Abstract Tech" 
          className="w-full h-full object-cover grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Header & Controls */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-mono text-xs md:text-sm text-orange-500 uppercase tracking-widest font-bold mb-6">
              [ 05. TESTIMONIALS ]
            </span>
            <h2 
              className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.9] mb-8" 
              style={{ fontFamily: "var(--font-heading)" }}
            >
              PROVEN <br />
              <span className="text-white/30">RESULTS.</span>
            </h2>
            <p className="text-white/50 max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed mb-12">
              WE LET THE WORK SPEAK FOR ITSELF. BUT SOMETIMES THE PEOPLE BEHIND THE METRICS HAVE SOMETHING TO ADD.
            </p>

            {/* Pagination Lines */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 transition-all duration-500 ${
                    currentIndex === idx ? "w-12 bg-orange-500" : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Rotating Testimonials */}
          <div className="lg:col-span-7 relative min-h-[400px] md:min-h-[350px] flex items-center">
            
            {/* Massive decorative quote mark */}
            <span className="absolute -top-10 md:-top-20 -left-6 md:-left-12 text-[15rem] md:text-[20rem] text-white/[0.03] font-serif leading-none select-none">
              "
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full"
              >
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] mb-12 text-white/90">
                  "{testimonials[currentIndex].quote}"
                </h3>
                
                <div className="flex items-center gap-6 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-purple-500 flex items-center justify-center font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg tracking-wide uppercase">{testimonials[currentIndex].name}</span>
                    <span className="text-orange-500 font-mono text-[10px] uppercase tracking-widest">{testimonials[currentIndex].role}</span>
                  </div>
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
