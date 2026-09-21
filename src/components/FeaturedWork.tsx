import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import workHomelane from "@/assets/work-homelane.png";
import workWtc from "@/assets/work-wtc.png";
import workSab from "@/assets/work-sab-collage.jpg";
import work22Workspace from "@/assets/work-22workspace-real.jpg";

const projects = [
  {
    image: workHomelane,
    title: "HOMELANE.COM",
    category: "SEO / PERFORMANCE",
    description: "Driving organic growth and maximizing ROI through targeted performance marketing campaigns.",
    link: "/work/homelane",
    className: "col-span-1 md:col-span-6 lg:col-span-8",
  },
  {
    image: workSab,
    title: "SAB PROPERTIES",
    category: "WEB DEV / SEO",
    description: "A complete digital transformation redefining the property discovery experience.",
    link: "/work/sab-properties",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: workWtc,
    title: "WORLD TUNNEL CONGRESS",
    category: "WEB DESIGN / STRATEGY",
    description: "Designing a world-class digital platform for a premier global engineering event.",
    link: "/work/wtc-2026",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: work22Workspace,
    title: "22WORKSPACE",
    category: "BRANDING / WEB DEV",
    description: "Crafting a dynamic brand identity and seamless web experience for modern workspaces.",
    link: "/work/22workspace",
    className: "col-span-1 md:col-span-6 lg:col-span-8",
  }
];

const FeaturedWork = () => {
  return (
    <section id="work" className="bg-black">
      
      {/* Massive White Header Block */}
      <div className="bg-white w-full py-8 md:py-12 flex justify-center items-center border-b border-black/10">
        <h2 className="text-[8vw] leading-[0.9] font-black uppercase tracking-tighter text-black text-center px-4" style={{ fontFamily: "var(--font-heading)" }}>
          SELECTED<br/>WORK.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {projects.map((project, idx) => (
            <Link key={idx} to={project.link} className={`group block relative overflow-hidden ${project.className}`}>
              <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0a0a0a]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-8 md:p-12">
                  
                  {/* Top: Category (SEO / etc) */}
                  <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    [ {project.category} ]
                  </div>
                  
                  {/* Bottom: Title, Description, Arrow */}
                  <div className="flex items-end justify-between">
                    <div className="max-w-[80%] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-md line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default FeaturedWork;
