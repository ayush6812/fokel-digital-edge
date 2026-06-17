import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { DepthText } from "@/components/ui/DepthText";

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    subtitle: "Drive Growth",
    description:
      "Performance-driven campaigns that deliver measurable ROI. From SEO to social media, we engineer digital experiences that convert browsers into loyal customers.",
    tags: ["SEO", "Paid Ads", "Social Media", "Analytics"],
  },
  {
    number: "02",
    title: "Web Design & Development",
    subtitle: "Build Experiences",
    description:
      "Pixel-perfect websites that marry aesthetic excellence with functional brilliance. Every interaction crafted to engage, every page designed to convert.",
    tags: ["UI/UX", "React", "Performance", "CMS"],
  },
  {
    number: "03",
    title: "Digital Strategy",
    subtitle: "Define Direction",
    description:
      "Data-informed roadmaps that align your digital presence with business objectives. We transform market insights into actionable growth strategies.",
    tags: ["Consulting", "Research", "Roadmapping", "KPIs"],
  },
  {
    number: "04",
    title: "Brand Identity",
    subtitle: "Tell Your Story",
    description:
      "Comprehensive brand systems that capture essence and inspire connection. From visual identity to messaging frameworks, we build brands that resonate.",
    tags: ["Logo", "Typography", "Visual System", "Messaging"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 lg:py-36 bg-secondary overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="section-label">What We Do</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20"
        >
          <h2 className="heading-section text-foreground max-w-xl">
            Crafting digital experiences that{" "}
            <DepthText
              text="transform"
              className="text-accent inline-block font-semibold"
              glowColor="rgba(255, 107, 20, 0.45)"
            />{" "}
            brands
          </h2>
          <p className="text-muted-foreground max-w-md lg:text-right">
            We combine strategic thinking with creative excellence to deliver results that exceed expectations.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="relative">
          {/* Top border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-px bg-border origin-left"
          />

          {services.map((service, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.35 + i * 0.09,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Hover fill background */}
                <motion.div
                  className="absolute inset-0 bg-foreground pointer-events-none"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: isHovered ? 1 : 0 }}
                  style={{ originY: "bottom" }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                />

                <div className="relative z-10 grid grid-cols-12 items-center gap-4 lg:gap-8 py-7 lg:py-8 cursor-default">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <motion.span
                      animate={{ color: isHovered ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))" }}
                      transition={{ duration: 0.25 }}
                      className="text-xs font-mono tracking-widest"
                    >
                      {service.number}
                    </motion.span>
                  </div>

                  {/* Subtitle (hidden on mobile) */}
                  <div className="hidden lg:block col-span-2">
                    <motion.span
                      animate={{ color: isHovered ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))" }}
                      transition={{ duration: 0.25 }}
                      className="text-xs font-medium tracking-[0.2em] uppercase"
                    >
                      {service.subtitle}
                    </motion.span>
                  </div>

                  {/* Title */}
                  <div className="col-span-7 lg:col-span-4">
                    <motion.h3
                      animate={{ color: isHovered ? "hsl(var(--secondary))" : "hsl(var(--foreground))" }}
                      transition={{ duration: 0.25 }}
                      className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <div className="hidden lg:block col-span-3">
                    <motion.p
                      animate={{ color: isHovered ? "hsl(var(--secondary) / 0.7)" : "hsl(var(--muted-foreground))" }}
                      transition={{ duration: 0.25 }}
                      className="text-sm leading-relaxed"
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* Tags */}
                  <div className="col-span-3 lg:col-span-2 flex flex-wrap justify-end gap-1.5">
                    {service.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        animate={{
                          backgroundColor: isHovered ? "hsl(var(--accent) / 0.15)" : "hsl(var(--border))",
                          color: isHovered ? "hsl(var(--accent))" : "hsl(var(--muted-foreground))",
                          borderColor: isHovered ? "hsl(var(--accent) / 0.4)" : "transparent",
                        }}
                        transition={{ duration: 0.25 }}
                        className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded-full border"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex col-span-12 lg:col-span-0 justify-end absolute right-0 top-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        x: isHovered ? 0 : -8,
                        color: "hsl(var(--accent))",
                      }}
                      transition={{ duration: 0.25 }}
                      className="text-accent text-lg font-light mr-2"
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Bottom border */}
                <div className="h-px bg-border relative z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
