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
    tags: ["SEO", "Performance Marketing"],
    description: "Driving organic growth and maximizing ROI through targeted performance marketing campaigns.",
    link: "/work/homelane",
    className: "col-span-1 md:col-span-6 lg:col-span-8",
  },
  {
    image: workSab,
    title: "SAB PROPERTIES",
    tags: ["Web Dev", "UI/UX", "SEO"],
    description: "A complete digital transformation redefining the property discovery experience.",
    link: "/work/sab-properties",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: workWtc,
    title: "WORLD TUNNEL CONGRESS",
    tags: ["Web Design", "Digital Strategy"],
    description: "Designing a world-class digital platform for a premier global engineering event.",
    link: "/work/wtc-2026",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: work22Workspace,
    title: "22WORKSPACE",
    tags: ["Branding", "Web Dev"],
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
              <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black">
                {/* Image - Highlights on hover instead of blurring */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 group-hover:brightness-110"
                />
                
                {/* Overlay on hover - Gradient for text readability, no blur on the whole image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 md:p-10 pointer-events-none">
                  
                  {/* Top: Bubbles & Arrow */}
                  <div className="flex items-start justify-between">
                    {/* Bubbles */}
                    <div className="flex flex-wrap gap-2 max-w-[70%] transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white px-4 py-2 border border-white/20 rounded-full bg-black/40 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Arrow at top right */}
                    <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-accent text-white flex items-center justify-center transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-xl shadow-black/50 pointer-events-auto">
                      <ArrowUpRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Bottom: Title, Description */}
                  <div className="flex items-end justify-between">
                    <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-3 leading-none drop-shadow-lg">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-lg line-clamp-2 drop-shadow-md">
                        {project.description}
                      </p>
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
