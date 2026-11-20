import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects, type FeaturedProject } from "./featured-work/projects";
import WorkHeader from "./featured-work/WorkHeader";

// Selected Work — a simple 2×2 grid with one twist: on desktop, hovering a project widens it
// while its row-mate narrows, and the image fades from black-and-white into colour.
const gridProjects = featuredProjects.filter((p) => p.link !== "/work/wtc-2026").slice(0, 4);
const rows = [gridProjects.slice(0, 2), gridProjects.slice(2, 4)];

const GridCard = ({
  project,
  index,
  grow,
  onEnter,
}: {
  project: FeaturedProject;
  index: number;
  grow: number;
  onEnter: () => void;
}) => (
  <motion.div
    onMouseEnter={onEnter}
    initial={false}
    animate={{ flexGrow: grow }}
    transition={{ type: "spring", stiffness: 160, damping: 24 }}
    className="md:basis-0 min-w-0"
  >
    <Link to={project.link} className="group block">
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[52vh] md:min-h-[380px] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover md:grayscale md:brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700"
        />
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-black/40 md:scale-0 group-hover:scale-100 transition-transform duration-500">
          <ArrowUpRight className="w-6 h-6" strokeWidth={2.5} />
        </span>
      </div>

      <div className="pt-6 flex items-start justify-between gap-6 border-t border-white/10 mt-6">
        <div className="min-w-0">
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-3 truncate group-hover:text-accent transition-colors duration-500"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </h3>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-md line-clamp-2 group-hover:text-white/80 transition-colors duration-500">
            {project.description}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-white/40 pt-2 hidden sm:block">{project.category}</span>
      </div>
    </Link>
  </motion.div>
);

const FeaturedWork = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="work" className="bg-[#111111] text-white py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <WorkHeader count={gridProjects.length} className="mb-16 md:mb-24" />

        <div className="flex flex-col gap-16 md:gap-20" onMouseLeave={() => setHovered(null)}>
          {rows.map((row, r) => (
            <div key={r} className="flex flex-col md:flex-row gap-12 md:gap-8">
              {row.map((project, c) => {
                const index = r * 2 + c;
                const rowHovered = hovered !== null && Math.floor(hovered / 2) === r;
                const grow = !rowHovered ? 1 : hovered === index ? 1.6 : 1;
                return <GridCard key={project.link} project={project} index={index} grow={grow} onEnter={() => setHovered(index)} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
