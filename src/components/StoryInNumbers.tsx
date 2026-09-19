import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "20+", label: "CLIENT PROJECTS DELIVERED" },
  { value: "100%", label: "CLIENT RETENTION RATE" },
  { value: "5+", label: "INDUSTRIES SERVED" },
  { value: "2.5x", label: "AVERAGE ROAS" }
];

const AnimatedNumber = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      filter: "blur(5px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex"
    >
      {text.split("").map((char, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const StoryInNumbers = () => {
  return (
    <section className="bg-background py-16">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Sleek, structured thin bar to match brutalist layout */}
        <div className="flex flex-col lg:flex-row w-full border border-white/10 bg-[#0a0a0a]">
          {metrics.map((metric, i) => (
            <div 
              key={i} 
              className="flex-1 flex items-baseline justify-center lg:justify-start gap-4 py-6 px-8 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 hover:bg-white/5 transition-colors group"
            >
              <span className="text-4xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-colors duration-300 w-20">
                <AnimatedNumber text={metric.value} />
              </span>
              <span className="font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-widest leading-tight max-w-[120px]">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StoryInNumbers;
