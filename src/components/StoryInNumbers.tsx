import React from "react";
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
  const isInView = useInView(ref, { once: true });
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="inline-flex overflow-hidden"
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
    <section className="bg-accent w-full py-10 md:py-12">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-4">
              <h3 className="text-5xl md:text-6xl lg:text-[6rem] font-black text-white leading-none tracking-tighter">
                <AnimatedNumber text={metric.value} />
              </h3>
              <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/80 max-w-[150px] leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryInNumbers;
