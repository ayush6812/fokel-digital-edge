import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

import workHomelane from "@/assets/work-homelane.png";
import workWtc from "@/assets/work-wtc.png";
import workGenes from "@/assets/work-genes.png";
import workSab from "@/assets/work-sab-collage.jpg";
import work22Workspace from "@/assets/work-22workspace-real.jpg";

const projects = [
  {
    image: workHomelane,
    title: "HOMELANE.COM",
    number: "01",
    description: "Strategic SEO & Content Marketing strategy that delivered 98% organic growth and dominated competitive keywords for India's interior design leader.",
    tags: ["B2B SEO", "GROWTH STRATEGY"],
    link: "/work/homelane",
    className: "lg:col-span-7",
  },
  {
    image: workWtc,
    title: "WORLD TUNNEL CONGRESS",
    number: "02",
    description: "Global digital strategy and event branding for the World Tunnel Congress, driving international visibility and attendee engagement.",
    tags: ["EVENT MARKETING", "DIGITAL STRATEGY"],
    link: "/work/wtc-2026",
    className: "lg:col-span-5",
  },
  {
    image: workSab,
    title: "SAB PROPERTIES",
    number: "03",
    description: "Direct-to-client commercial property directory and automated B2B leasing pipeline for one of Delhi's premier estate agencies.",
    tags: ["REAL ESTATE", "B2B LEAD GEN"],
    link: "/work/sab-properties",
    className: "lg:col-span-5",
  },
  {
    image: work22Workspace,
    title: "22WORKSPACE",
    number: "04",
    description: "Premium co-working and enterprise office space digital strategy, capturing high-intent enterprise clients.",
    tags: ["BRANDING", "REAL ESTATE"],
    link: "/work/22workspace",
    className: "lg:col-span-7",
  }
];

const FeaturedWork = () => {
  return (
    <section id="work" className="bg-background border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-24">
        
        {/* Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest mb-6 block">
            03. FEATURED WORK
          </span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white">
              FEATURED WORK
            </h2>
            <button className="border border-white/10 px-6 py-3 font-mono text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center gap-2">
              VIEW ALL CASE STUDIES <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {projects.map((project) => (
            <Link key={project.title} to={project.link} className={`group cursor-pointer flex flex-col ${project.className}`}>
              
              {/* Image box with small tags on top left */}
              <div className="border border-white/10 p-2 bg-white/5 relative mb-6">
                <div className="absolute top-6 left-6 flex gap-2 z-20">
                  <span className="bg-black text-accent text-[10px] font-mono px-3 py-1 uppercase tracking-widest border border-white/10">
                    VIEW CASE STUDY
                  </span>
                </div>
                <div className="overflow-hidden bg-black relative h-64 md:h-80 lg:h-[480px] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* Tags at bottom of image */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2 z-20">
                    <span className="bg-black/90 backdrop-blur-sm text-accent text-[10px] font-mono px-3 py-1 uppercase tracking-widest border border-white/10">
                      SERVICES:
                    </span>
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-black/80 backdrop-blur-sm text-white text-[10px] font-mono px-3 py-1 uppercase tracking-widest border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title & Play Icon */}
              <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white flex items-center gap-4">
                  <span className="text-accent">{project.number}</span> {project.title}
                </h3>
                <Play className="w-6 h-6 text-white/50 group-hover:text-accent transition-colors shrink-0" />
              </div>

              {/* Description */}
              <p className="text-white/60 font-medium leading-relaxed mb-6 max-w-lg">
                {project.description}
              </p>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedWork;
