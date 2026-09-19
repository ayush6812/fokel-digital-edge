import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "WHY YOUR BRAND NEEDS A STRONG DIGITAL PRESENCE, NOT JUST A WEBSITE",
    description: "The era of \"brochureware\" is dead. We explore how leading D2C brands are building scalable ecosystems.",
    link: "/blog/headless-commerce",
    date: "12 OCT",
    category: "STRATEGY",
  },
  {
    title: "THE FUTURE OF B2B E-COMMERCE: HOW AI IS RESHAPING BUYING",
    description: "Automated replenishment, dynamic pricing, and hyper-personalization. How enterprise B2B is changing.",
    link: "/blog/spatial-computing",
    date: "08 OCT",
    category: "E-COMMERCE",
  },
  {
    title: "PROGRAMMATIC SEO & HOW WE ACHIEVED 98% ORGANIC GROWTH",
    description: "A technical breakdown of our scalable content engineering process that bypasses algorithm updates.",
    link: "/blog/synapse-deployment",
    date: "01 OCT",
    category: "GROWTH",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-background py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/5 pb-12 gap-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 font-mono text-[10px] uppercase tracking-widest mb-6">
              INSIGHTS & RESOURCES
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              BEYOND THE <span className="text-accent italic">BRIEF</span>
            </h2>
          </div>
          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 flex items-center gap-2">
            VIEW ALL <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, i) => (
            <Link 
              key={blog.title} 
              to={blog.link}
              className="group relative flex flex-col rounded-[2rem] bg-white/[0.02] border border-white/10 p-8 md:p-10 hover:border-accent/40 transition-colors overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex justify-between items-center mb-12 relative z-10">
                <span className="bg-accent text-black font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {blog.category}
                </span>
                <span className="text-white/40 font-mono text-xs uppercase tracking-widest font-bold group-hover:text-white transition-colors">
                  {blog.date}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white mb-6 group-hover:text-accent transition-colors leading-[1.1] relative z-10">
                {blog.title}
              </h3>
              
              <p className="text-white/50 font-medium leading-relaxed mb-12 relative z-10 flex-grow">
                {blog.description}
              </p>

              <div className="mt-auto relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
