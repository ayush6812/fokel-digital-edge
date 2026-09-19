import { ArrowRight } from "lucide-react";
import workHomelane from "@/assets/work-homelane.png";
import workWtc from "@/assets/work-wtc.png";
import workGenes from "@/assets/work-genes.png";

const approaches = [
  {
    number: "01",
    title: "LEAD THROUGH HIGH-PERFORMING CRAFT",
    description: "We build outside the templates. Our digital products merge aesthetic mastery with high-performance engineering.",
    link: "EXPLORE METHODOLOGY",
    image: workHomelane,
    span: "md:col-span-8",
  },
  {
    number: "02",
    title: "ENGINEERED FOR VELOCITY",
    description: "Modular architectures for rapid iteration and continuous deployment.",
    link: "EXPLORE ENGINEERING",
    image: workWtc,
    span: "md:col-span-4",
  },
  {
    number: "03",
    title: "INTELLIGENCE BUILT-IN",
    description: "Agentic workflows and autonomous logic. We build software that thinks.",
    link: "EXPLORE AI",
    image: workGenes,
    span: "md:col-span-12",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              METHODOLOGY
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.9] text-white">
              INVENTING <br/> <span className="text-accent italic pr-4">VELOCITY</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm font-medium leading-relaxed">
            We don't just build websites. We architect growth engines designed to dominate markets. Speed, precision, and aesthetics.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {approaches.map((item, index) => (
            <div 
              key={item.number} 
              className={`group relative overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent/50 transition-all duration-500 ${item.span} flex flex-col`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="p-8 md:p-12 z-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-5xl font-black text-white/10 group-hover:text-accent/20 transition-colors">
                    {item.number}
                  </span>
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-black transition-all duration-300">
                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                  </button>
                </div>
                
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-none text-white mb-6">
                  {item.title}
                </h3>
                
                <p className="text-white/50 font-medium text-lg leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Decorative Image Mask */}
              <div className={`relative w-full overflow-hidden ${item.span === 'md:col-span-12' ? 'h-64 md:h-96' : 'h-48 md:h-72 mt-auto'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
