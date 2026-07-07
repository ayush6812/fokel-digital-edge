import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background text-foreground overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">Who We Are</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="heading-section text-foreground leading-tight">
              Bold ideas,<br />
              <span className="text-accent">disruptive</span><br />
              execution
            </h2>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
              A Delhi-based creative agency, Fokel partners with ambitious brands across India to build digital presence that compounds over time — combining strategic brand identity, SEO, performance marketing, and web development into a single, integrated growth system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col gap-8"
          >
            <div className="relative pl-6 border-l-2 border-accent/30">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We've spent years in the trenches of Indian digital marketing — navigating everything from luxury fashion to grid construction.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-accent/30">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our work doesn't just look good in a presentation. It shows up in your analytics. We don't just create—we <span className="text-accent font-medium">execute</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
