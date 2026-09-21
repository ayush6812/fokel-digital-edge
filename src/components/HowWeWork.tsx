import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HowWeWork = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const points = [
    {
      title: "Mission Driven",
      desc: "We partner with ambitious brands to build purpose-led digital experiences that create lasting market impact.",
      color: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500"
    },
    {
      title: "Award Winning",
      desc: "Recognized for pushing the boundaries of digital design and uncompromising engineering excellence.",
      color: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500"
    },
    {
      title: "Fast Execution",
      desc: "Engineered for velocity. We deploy scalable solutions rapidly without compromising on precision.",
      color: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-emerald-400"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#050505] text-white w-full py-16 md:py-20 relative overflow-hidden z-10 border-t border-white/10">
      
      {/* Background Noise & Colored Glows */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none z-0" />
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="flex flex-col">
            <span className="font-mono text-xs md:text-sm text-orange-500 uppercase tracking-widest font-bold mb-4">
              [ 04. HOW WE WORK ]
            </span>
            <h2 
              className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.9]" 
              style={{ fontFamily: "var(--font-heading)" }}
            >
              INVENTING <br className="hidden md:block" />
              VELOCITY.
            </h2>
          </div>
          
          <p className="text-white/50 max-w-xs font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed lg:pb-2">
            WE DON'T JUST BUILD WEBSITES. WE ARCHITECT GROWTH ENGINES DESIGNED TO DOMINATE MARKETS. <br/><br/><span className="text-orange-400 font-bold">SPEED, PRECISION, AND AESTHETICS.</span>
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Parallax Image Container */}
          <div className="lg:col-span-5 relative w-full h-[40vh] md:h-[45vh] lg:h-[55vh] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_0_50px_rgba(249,115,22,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
            <motion.img 
              style={{ y }}
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
              alt="Advanced Tech Architecture" 
              className="absolute -top-[15%] left-0 w-full h-[130%] object-cover grayscale mix-blend-luminosity brightness-[0.7] group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
            />
            
            <div className="absolute bottom-4 left-4 z-20">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white uppercase tracking-widest group-hover:border-orange-500/50 transition-colors duration-500">
                MODULAR ARCHITECTURES
              </div>
            </div>
          </div>

          {/* Interactive Points */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div 
              className="flex flex-col w-full border-t border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {points.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-8 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500 cursor-default relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="font-mono text-xl md:text-2xl font-bold text-white/20 transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <div className="flex flex-col gap-1.5 z-10">
                    <h4 className={`text-xl md:text-2xl font-black uppercase tracking-tighter transition-all duration-500 ${item.color}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {item.title}
                    </h4>
                    <p className="text-white/50 text-xs md:text-sm font-medium leading-snug max-w-md group-hover:text-white/90 transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HowWeWork;
