import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Testimonials = () => {
  return (
    <section className="bg-[#f0f0f0] text-black w-full py-24 md:py-32 relative z-10 overflow-hidden border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="font-mono text-xs md:text-sm text-orange-600 uppercase tracking-widest font-bold mb-4 block">
            [ 05. TESTIMONIALS ]
          </span>
          <h2 className="text-[clamp(4rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
            PROVEN <br className="hidden md:block" />
            RESULTS.
          </h2>
        </div>

        {/* Interactive Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl p-8 md:p-12 border border-black/5 hover:border-orange-500/30 overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(234,88,12,0.1)] hover:-translate-y-2 flex flex-col justify-between min-h-[350px]"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.3] text-black/90 group-hover:text-black transition-colors duration-500">
                  {t.quote}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-black/5 relative z-10 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="font-black text-lg md:text-xl uppercase tracking-tighter">{t.name}</span>
                  <span className="text-orange-600 font-mono text-[10px] md:text-xs uppercase tracking-widest mt-1 font-bold">{t.role}</span>
                </div>
                
                {/* Decorative element that animates on hover */}
                <div className="w-12 h-12 rounded-full bg-[#f0f0f0] group-hover:bg-orange-500 flex items-center justify-center transition-colors duration-500">
                  <div className="w-4 h-4 bg-black/10 group-hover:bg-white rounded-full transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
