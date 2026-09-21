import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Fokel's team delivered a stunning website that perfectly captures our brand ethos. Their technical expertise and design sensibility are truly world-class.",
    name: "RAHUL SHARMA",
    role: "CEO, INVENTERON",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop"
  },
  {
    quote: "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience.",
    name: "PRIYA MENON",
    role: "MARKETING HEAD, ONSURITY",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop"
  },
  {
    quote: "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online.",
    name: "ANKIT VERMA",
    role: "FOUNDER, HMO ARCHITECTS",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop"
  },
  {
    quote: "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months.",
    name: "SNEHA KAPOOR",
    role: "DIRECTOR OF GROWTH",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop"
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
    <section className="bg-[#f0f0f0] text-black w-full min-h-screen py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Header & Quote */}
        <div className="flex flex-col h-full justify-between min-h-[60vh] lg:min-h-[80vh]">
          
          {/* Header */}
          <div>
            <h2 className="text-[clamp(4.5rem,10vw,12rem)] font-black uppercase tracking-tighter leading-[0.85] text-black" style={{ fontFamily: "var(--font-heading)" }}>
              PROVEN <br />
              RESULTS.
            </h2>
          </div>

          {/* Quote Block */}
          <div className="mt-24 md:mt-auto relative w-full max-w-2xl">
            {/* SVG Quote Icon */}
            <svg className="w-20 h-20 md:w-32 md:h-32 text-black/10 mb-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.2] text-black/90">
                  "{t.quote}"
                </p>
                
                <div className="flex flex-col items-end mt-12 text-right">
                  <span className="font-bold text-lg md:text-xl">{t.name}</span>
                  <span className="text-black/50 text-sm md:text-base font-medium mt-1">{t.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>

        {/* RIGHT COLUMN: Description & Image */}
        <div className="flex flex-col h-full lg:min-h-[80vh]">
          
          {/* Top Bar: Text & Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs">
              <span className="opacity-50">WE LET THE</span> RESULTS SPEAK. <span className="opacity-50">BUT SOMETIMES THE PEOPLE BEHIND THEM HAVE</span> SOMETHING TO ADD.
            </p>
            
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Portrait Image Block */}
          <div className="w-full aspect-square md:aspect-[4/5] bg-black/5 relative mt-auto p-4 md:p-8 lg:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative"
              >
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover grayscale absolute inset-0"
                />
                {/* Film grain noise overlay */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")', backgroundSize: '100px' }} />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
