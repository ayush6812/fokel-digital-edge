import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─────────── data ─────────── */
const stats = [
  { value: "120+", label: "STRATEGIES BUILT" },
  { value: "40%", label: "AVG. REVENUE GROWTH" },
  { value: "6mo", label: "TIME TO RESULTS" },
  { value: "98%", label: "CLIENT SATISFACTION" },
];

const services = [
  {
    num: "01",
    title: "MARKET POSITIONING",
    description: "Define your unique value proposition and carve out a distinctive position in a crowded market that makes you the obvious choice.",
  },
  {
    num: "02",
    title: "AUDIENCE RESEARCH",
    description: "Deep-dive qualitative and quantitative research to understand exactly who your buyers are, what they need, and where they spend time.",
  },
  {
    num: "03",
    title: "GROWTH ROADMAPS",
    description: "Structured 12-month digital growth plans with quarterly milestones, channel priorities, budget allocations, and measurable KPIs.",
  },
  {
    num: "04",
    title: "COMPETITIVE AUDITS",
    description: "Systematic audits of competitor strategies, content, SEO, and ads — exposing the gaps your brand can exploit immediately.",
  },
  {
    num: "05",
    title: "BRAND ARCHITECTURE",
    description: "Define your brand's voice, messaging hierarchy, and visual language so every touchpoint communicates a consistent, compelling story.",
  },
  {
    num: "06",
    title: "CHANNEL STRATEGY",
    description: "Data-backed recommendations on which platforms, formats, and channels will deliver the highest ROI for your specific business model.",
  }
];

const processSteps = [
  { num: "01", label: "DISCOVERY", desc: "We conduct stakeholder interviews, brand audits, and market scans to understand where you are and where the opportunity lies." },
  { num: "02", label: "AUDIENCE", desc: "We build precise buyer personas from real data — search behaviour, social signals, and customer interviews." },
  { num: "03", label: "COMPETITIVE", desc: "We reverse-engineer your top competitors' digital strategies to expose gaps and underserved market positions." },
  { num: "04", label: "ROADMAP", desc: "A 12-month growth roadmap with quarterly OKRs, channel priorities, and budget frameworks lands in your inbox." },
  { num: "05", label: "ALIGNMENT", desc: "We present and workshop the strategy with your team to ensure every stakeholder is aligned before execution begins." },
  { num: "06", label: "HANDOFF", desc: "We either execute the strategy ourselves or hand it off to your internal team with full documentation and training." },
];

const DigitalStrategy = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/20 selection:text-white">
      <SEO
        title="Digital Strategy | Fokel — Data-Backed Roadmaps for Growth"
        description="Fokel builds comprehensive digital roadmaps, market positioning, and channel strategies to scale your revenue predictably."
      />

      <Navbar />

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[80vh] flex flex-col justify-end p-8 md:p-12 lg:p-16 border-b border-white/10">
          <div className="max-w-[1200px]">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-6 md:mb-12">
              [ SERVICES / DIGITAL STRATEGY ]
            </p>
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              DIGITAL <br />
              <span className="text-accent">STRATEGY.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed font-medium">
              We define your market position, build data-backed roadmaps, and engineer growth engines that generate predictable revenue.
            </p>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-accent w-full py-12 md:py-16 border-b border-black/10">
          <div className="w-full px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
              {stats.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center space-y-4">
                  <h3 className="text-5xl md:text-6xl lg:text-[6rem] font-black text-black leading-none tracking-tighter">
                    {metric.value}
                  </h3>
                  <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-black max-w-[150px] leading-relaxed font-bold">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="w-full bg-black">
          {services.map((service, idx) => (
            <div key={idx} className="w-full border-b border-white/10 flex flex-col md:flex-row group hover:bg-white/5 transition-colors duration-500">
              {/* Left: Number */}
              <div className="w-full md:w-1/4 p-8 md:p-12 lg:p-16 flex items-start border-b md:border-b-0 md:border-r border-white/10">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent">
                  [ {service.num} ]
                </span>
              </div>
              
              {/* Right: Content */}
              <div className="w-full md:w-3/4 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                  {service.title}
                </h3>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* PROCESS SECTION */}
        <section className="w-full bg-white text-black border-b border-black/10">
          <div className="w-full py-16 md:py-24 px-8 md:px-12 lg:px-16 border-b border-black/10">
            <h2 className="text-[8vw] leading-[0.9] font-black uppercase tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              HOW WE <br/>
              PLAN IT.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-8 md:p-12 border-b md:border-b-0 border-r border-black/10 last:border-r-0 hover:bg-black/5 transition-colors">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent block mb-8 font-bold">
                  [ {step.num} ]
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4">
                  {step.label}
                </h3>
                <p className="text-black/60 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="w-full bg-accent text-white py-24 md:py-32 px-8 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center">
          <h2 className="text-[10vw] md:text-[8vw] lg:text-[7rem] leading-[0.8] font-black uppercase tracking-tighter mb-12">
            READY TO <br/> PLAN?
          </h2>
          <a
            href="/#contact"
            className="group flex items-center gap-4 bg-black text-white px-8 md:px-12 py-5 md:py-6 hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
              START A STRATEGY
            </span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DigitalStrategy;
