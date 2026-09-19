import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const approaches = [
  {
    number: "01",
    title: "MISSION-DRIVEN",
    content: "We partner with visionary companies..."
  },
  {
    number: "02",
    title: "FAST EXECUTION",
    content: "Speed is a feature. We deploy rapid iterations and integrate feedback cycles instantly. We don't just build, we launch and learn at the speed of thought, ensuring market readiness before competitors even start."
  },
  {
    number: "03",
    title: "AWARD-WINNING QUALITY",
    content: "Our work speaks for itself..."
  },
  {
    number: "04",
    title: "AUTONOMOUS AUTOMATION",
    content: "AI-driven workflows..."
  }
];

const About = () => {
  const [open, setOpen] = useState(1);

  return (
    <section id="about" className="bg-background border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-24">
        
        <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest mb-8 block">
          01. OUR APPROACH
        </span>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-8">
              BOLD IDEAS, <br/>
              <span className="text-accent">DISRUPTIVE <br/>EXECUTION.</span>
            </h2>
            
            <p className="text-white/70 font-medium text-lg leading-relaxed mb-6">
              We're a team of product engineers, designers, and growth experts building software, marketing campaigns, and brand experiences that turn category-defining ideas into market realities. 
            </p>
            <p className="text-white/70 font-medium text-lg leading-relaxed mb-12">
              Our core belief? Fast execution beats perfection. Slow execution kills great ideas. The market moves fast, and your execution speed needs to match it. We build it, and we build it fast.
            </p>
          </div>
          
          {/* Right Column - Accordion */}
          <div className="flex flex-col border-t border-white/10">
            {approaches.map((item, idx) => (
              <div key={idx} className="border-b border-white/10">
                <div 
                  className="py-8 flex items-center justify-between cursor-pointer group hover:bg-white/5 px-4 transition-colors"
                  onClick={() => setOpen(idx)}
                >
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white flex items-center gap-6">
                    <span className="text-accent">{item.number}.</span> {item.title}
                  </h3>
                  <div className="text-accent">
                    {open === idx ? <Minus strokeWidth={3} className="w-6 h-6" /> : <Plus strokeWidth={3} className="w-6 h-6" />}
                  </div>
                </div>
                
                {open === idx && (
                  <div className="pb-8 pr-12 pl-[4.5rem] md:pl-[5.5rem] px-4">
                    <p className="text-white/70 font-medium text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
