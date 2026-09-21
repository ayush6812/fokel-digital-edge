import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    number: "01",
    title: "WEB DESIGN & DEV",
    description: "Pixel-perfect websites that marry aesthetic excellence with functional brilliance. Every interaction crafted to engage, every page designed to convert.",
    tags: ["UI/UX", "REACT", "PERFORMANCE", "CMS"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "AI AGENTS",
    description: "Custom AI agents designed to automate workflows, engage customers, and scale operations seamlessly, unlocking new levels of efficiency.",
    tags: ["AUTOMATION", "LLMS", "CHATBOTS", "INTEGRATION"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "DIGITAL MARKETING",
    description: "Performance-driven campaigns that deliver measurable ROI. From SEO to social media, we engineer digital experiences that convert browsers into loyal customers.",
    tags: ["SEO", "PAID ADS", "SOCIAL MEDIA", "ANALYTICS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "DIGITAL STRATEGY",
    description: "Data-informed roadmaps that align your digital presence with business objectives. We transform market insights into actionable growth strategies.",
    tags: ["CONSULTING", "RESEARCH", "ROADMAPPING", "KPIS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

const Services = () => {
  // Default to AI Agents image (index 1) if nothing is hovered,
  // or track the currently hovered item.
  const [hoveredIndex, setHoveredIndex] = useState<number>(1);

  return (
    <section id="services" className="relative bg-black py-16 md:py-24 overflow-hidden border-b border-white/10">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.img 
            key={hoveredIndex}
            src={services[hoveredIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            alt="Services Background" 
            className="w-full h-full object-cover grayscale absolute inset-0"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest mb-4 block">
            [ 02. WHAT WE DO ]
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none text-white">
            SERVICES
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIndex(idx)}
              className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 py-8 md:py-10 border-t border-white/10 cursor-pointer hover:bg-white/5 px-4 transition-colors"
            >
              
              {/* Left: Number */}
              <div className="w-12 lg:w-16 shrink-0">
                <span className="font-mono text-accent text-sm md:text-base">
                  {service.number}
                </span>
              </div>

              {/* Middle: Title */}
              <div className="flex-1 flex items-center gap-4">
                <h3 className="text-3xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter text-white leading-none">
                  {service.title}
                </h3>
                <ArrowUpRight strokeWidth={3} className="w-6 h-6 md:w-8 md:h-8 text-accent opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 -translate-y-2" />
              </div>

              {/* Right: Description & Tags */}
              <div className="flex flex-col lg:items-end gap-6 w-full lg:w-[400px] shrink-0 text-left lg:text-right">
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
                <div className="flex flex-wrap justify-start lg:justify-end gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-white/10"></div>
        </div>

      </div>
    </section>
  );
};

export default Services;
