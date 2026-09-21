import React from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "WEB DESIGN & DEV",
    description: "Pixel-perfect websites that marry aesthetic excellence with functional brilliance. Every interaction crafted to engage, every page designed to convert.",
    tags: ["UI/UX", "REACT", "PERFORMANCE", "CMS"]
  },
  {
    number: "02",
    title: "AI AGENTS",
    description: "Custom AI agents designed to automate workflows, engage customers, and scale operations seamlessly, unlocking new levels of efficiency.",
    tags: ["AUTOMATION", "LLMS", "CHATBOTS", "INTEGRATION"]
  },
  {
    number: "03",
    title: "DIGITAL MARKETING",
    description: "Performance-driven campaigns that deliver measurable ROI. From SEO to social media, we engineer digital experiences that convert browsers into loyal customers.",
    tags: ["SEO", "PAID ADS", "SOCIAL MEDIA", "ANALYTICS"]
  },
  {
    number: "04",
    title: "DIGITAL STRATEGY",
    description: "Data-informed roadmaps that align your digital presence with business objectives. We transform market insights into actionable growth strategies.",
    tags: ["CONSULTING", "RESEARCH", "ROADMAPPING", "KPIS"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32 overflow-hidden border-b border-white/10">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop" 
          alt="Services Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest mb-6 block">
            [ 02. WHAT WE DO ]
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-white">
            SERVICES
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, idx) => (
            <div key={idx} className="group flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 py-12 border-t border-white/10 cursor-pointer hover:bg-white/5 px-4 transition-colors">
              
              {/* Left: Number */}
              <div className="w-12 lg:w-16 shrink-0">
                <span className="font-mono text-accent text-sm md:text-base">
                  {service.number}
                </span>
              </div>

              {/* Middle: Title */}
              <div className="flex-1 flex items-center gap-4">
                <h3 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black uppercase tracking-tighter text-white leading-none">
                  {service.title}
                </h3>
                <ArrowUpRight strokeWidth={3} className="w-8 h-8 md:w-12 md:h-12 text-accent opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 -translate-y-2" />
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
