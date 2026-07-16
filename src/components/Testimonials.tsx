import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Fokel transformed our digital presence completely. Their strategic approach to branding and marketing delivered results that exceeded our expectations. We've seen a 3x increase in qualified leads.",
    name: "Rahul Sharma",
    role: "CEO, Inventeron Technologies",
    initials: "RS",
  },
  {
    quote:
      "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience. The ROI has been exceptional.",
    name: "Priya Menon",
    role: "Marketing Head, Onsurity",
    initials: "PM",
  },
  {
    quote:
      "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online. They're now our go-to digital partner.",
    name: "Ankit Verma",
    role: "Founder, HMO Architects",
    initials: "AV",
  },
  {
    quote:
      "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months. Highly recommended.",
    name: "Sneha Kapoor",
    role: "Director of Growth, HomeLane",
    initials: "SK",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
};

const AUTO_PLAY_INTERVAL = 6000;

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const paginate = useCallback((newDirection: number) => {
    const newIndex = current + newDirection;
    if (newIndex < 0) {
      setCurrent(testimonials.length - 1);
      setPage([testimonials.length - 1, newDirection]);
    } else if (newIndex >= testimonials.length) {
      setCurrent(0);
      setPage([0, newDirection]);
    } else {
      setCurrent(newIndex);
      setPage([newIndex, newDirection]);
    }
  }, [current]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const slideInterval = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(slideInterval);
  }, [isAutoPlaying, paginate]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-8 bg-accent rounded-full" />
            <p className="section-label tracking-[0.2em]">Client Stories</p>
            <div className="h-[2px] w-8 bg-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl font-heading">
            Voices of <span className="text-accent italic">impact</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className="relative bg-secondary/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 lg:p-20 shadow-2xl border border-white/5 overflow-hidden group">
            
            {/* Elegant large quote watermark */}
            <div className="absolute -top-6 right-8 md:right-16 text-[12rem] md:text-[18rem] leading-none font-serif text-accent/10 pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              &rdquo;
            </div>
            
            {/* Bottom glow accent inside card */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="flex flex-col"
                >
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 mb-8 md:mb-10">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-xl md:text-3xl lg:text-4xl font-medium leading-[1.4] tracking-tight text-foreground/95 text-balance font-heading mb-12">
                    "{testimonials[current].quote}"
                  </p>
                  
                  {/* Author Profile */}
                  <div className="flex items-center gap-5 mt-auto">
                    <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center shadow-lg shadow-accent/20 border border-accent/20">
                      <span className="text-white font-bold text-lg md:text-xl tracking-wider">
                        {testimonials[current].initials}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg md:text-xl font-bold text-foreground tracking-tight">
                        {testimonials[current].name}
                      </p>
                      <p className="text-sm md:text-base text-accent font-medium mt-0.5">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 md:mt-12 px-4 md:px-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-border flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const newDirection = index > current ? 1 : -1;
                    setCurrent(index);
                    setPage([index, newDirection]);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    index === current 
                      ? "bg-accent w-10 shadow-[0_0_10px_rgba(249,115,22,0.4)]" 
                      : "bg-border w-2.5 hover:bg-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
