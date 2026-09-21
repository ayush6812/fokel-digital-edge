import React from "react";
import { Link } from "react-router-dom";

import workHomelane from "@/assets/work-homelane.png";
import workWtc from "@/assets/work-wtc.png";
import workGenes from "@/assets/work-genes.png";
import workSab from "@/assets/work-sab-collage.jpg";
import work22Workspace from "@/assets/work-22workspace-real.jpg";

const projects = [
  {
    image: workHomelane,
    title: "HOMELANE.COM",
    link: "/work/homelane",
    className: "col-span-1 md:col-span-6 lg:col-span-8",
  },
  {
    image: workSab,
    title: "SAB PROPERTIES",
    link: "/work/sab-properties",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: workWtc,
    title: "WORLD TUNNEL CONGRESS",
    link: "/work/wtc-2026",
    className: "col-span-1 md:col-span-6 lg:col-span-4",
  },
  {
    image: work22Workspace,
    title: "22WORKSPACE",
    link: "/work/22workspace",
    className: "col-span-1 md:col-span-6 lg:col-span-8",
  }
];

const FeaturedWork = () => {
  return (
    <section id="work" className="bg-black">
      
      {/* Massive White Header Block */}
      <div className="bg-white w-full py-24 md:py-32 flex justify-center items-center">
        <h2 className="text-[15vw] leading-none font-black uppercase tracking-tighter text-black text-center px-4" style={{ fontFamily: "var(--font-heading)" }}>
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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
                  <span className="text-white text-2xl md:text-4xl font-black uppercase tracking-tighter">
                    {project.title}
                  </span>
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
