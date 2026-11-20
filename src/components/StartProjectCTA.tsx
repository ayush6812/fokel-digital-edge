import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Compact orange "Start a Project" band in the home page style,
// used at the bottom of case studies and the Gallery of Impact.
const StartProjectCTA = ({ label = "Have a project in mind?" }: { label?: string }) => (
  <section className="bg-accent text-white w-full">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/80 mb-3">Fokel Digital Studio</p>
        <h2
          className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {label}
        </h2>
      </div>
      <Link
        to="/#contact"
        className="group inline-flex items-center justify-center gap-4 bg-black text-white px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black self-start md:self-auto shrink-0"
      >
        <span>Start a Project</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
);

export default StartProjectCTA;
