import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "./projects";

// "Selected Work." header for the home page Selected Work section
const WorkHeader = ({ className = "", count = featuredProjects.length }: { className?: string; count?: number }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end ${className}`}>
    <div className="lg:col-span-8">
      <span className="font-mono text-xs md:text-sm text-accent uppercase tracking-widest font-bold block mb-6">
        Selected Work — ({String(count).padStart(2, "0")})
      </span>
      <h2
        className="text-[clamp(4rem,11vw,10rem)] font-black uppercase tracking-tighter leading-[0.85]"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Selected <br />
        Work<span className="text-accent">.</span>
      </h2>
    </div>
    <div className="lg:col-span-4 flex flex-col gap-8 lg:pb-3">
      <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-[2] text-white/50">
        From a Y Combinator-backed EdTech to India's leading interior brand.{" "}
        <span className="text-white/90">Every project is live and running.</span>
      </p>
      <Link
        to="/the-gallery-of-impact"
        className="group inline-flex items-center justify-center gap-4 border border-white/20 hover:border-white hover:bg-white hover:text-black px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 self-start"
      >
        <span>View All Projects</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
);

export default WorkHeader;
