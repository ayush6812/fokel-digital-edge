import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";

const projects = [
  {
    image: work1,
    title: "Genes Lecoanet Hemant",
    category: "Social Media Marketing",
    link: "/work/genes-lecoanet-hemant",
  },
  {
    image: work2,
    title: "ITA-AITES WTC 2026",
    category: "Event Marketing & Branding",
    link: "/work/wtc-2026",
  },
  {
    image: work3,
    title: "HMO Architects",
    category: "Digital Strategy & Content",
  },
  {
    image: work4,
    title: "Blue Leopard Media",
    category: "Brand Identity & Web Design",
  },
];

const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          Selected Projects
        </motion.p>
        <div className="flex items-end justify-between mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground"
          >
            Featured Work<span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block text-sm text-muted-foreground tracking-wider uppercase"
          >
            Scroll →
          </motion.p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 lg:px-12 pb-6" style={{ width: "max-content" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}

          {/* View all card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: projects.length * 0.15 }}
            className="flex-shrink-0 w-[280px] md:w-[350px] flex items-center justify-center border border-border bg-secondary"
          >
            <div className="text-center p-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
                View All<br />Case Studies
              </p>
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto">
                <ArrowUpRight className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const Wrapper = project.link ? Link : "div";
  const wrapperProps = project.link ? { to: project.link } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group flex-shrink-0 w-[320px] md:w-[420px] lg:w-[500px] cursor-pointer"
    >
      <Wrapper {...(wrapperProps as any)} className="block">
        <div className="relative overflow-hidden aspect-[4/5] bg-secondary">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
          <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">
            {project.category}
          </p>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default FeaturedWork;
