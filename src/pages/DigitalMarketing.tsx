import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─────────── data ─────────── */
const stats = [
  { value: "3.5x", label: "AVERAGE ROI" },
  { value: "68%", label: "MORE ORGANIC TRAFFIC" },
  { value: "99+", label: "CAMPAIGNS DELIVERED" },
  { value: "95%", label: "CLIENT RETENTION" },
];

const services = [
  {
    num: "01",
    title: "SEO & CONTENT",
    description: "Comprehensive on-page, off-page, and technical SEO strategies backed by data, paired with content that ranks and converts.",
  },
  {
    num: "02",
    title: "PERFORMANCE ADS",
    description: "ROI-obsessed paid ad campaigns across Google, Meta, LinkedIn, and YouTube — built to generate qualified leads at scale.",
  },
  {
    num: "03",
    title: "SOCIAL MEDIA",
    description: "Platform-native content strategies for Instagram, LinkedIn, and X that build authority, engagement, and brand recall.",
  },
  {
    num: "04",
    title: "EMAIL MARKETING",
    description: "Automated drip campaigns, nurture sequences, and re-engagement flows that turn cold leads into warm buyers.",
  },
  {
    num: "05",
    title: "CONVERSION OPT.",
    description: "Landing page design, funnel analysis, and A/B testing to squeeze maximum conversions from your existing traffic.",
  },
  {
    num: "06",
    title: "ANALYTICS",
    description: "GA4 setup, custom dashboards, and monthly performance reports that give you a crystal-clear picture of your marketing ROI.",
  }
];

const processSteps = [
  { num: "01", label: "AUDIT", desc: "We analyse your current digital footprint — traffic, rankings, ads, and social — to find gaps and opportunities." },
  { num: "02", label: "STRATEGY", desc: "We build a channel-specific roadmap with KPIs, budget splits, and a 90-day sprint plan tied to your revenue goals." },
  { num: "03", label: "CREATIVE", desc: "Ad copy, landing pages, social content, and email sequences — all crafted to convert, not just impress." },
  { num: "04", label: "LAUNCH", desc: "Campaigns go live across Google, Meta, LinkedIn, or email with pixel-perfect tracking from day one." },
  { num: "05", label: "OPTIMISE", desc: "Weekly analysis of what's working. We kill underperformers and double down on winning creatives and audiences." },
  { num: "06", label: "REPORT", desc: "Monthly performance reviews with full attribution data, spend summaries, and next-quarter strategy adjustments." },
];

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent/20 selection:text-white">
      <SEO
        title="Digital Marketing | Fokel — ROI-Obsessed Growth Strategies"
        description="Fokel drives measurable growth through technical SEO, performance marketing, and conversion optimisation."
      />

      <Navbar />

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[80vh] flex flex-col justify-end p-8 md:p-12 lg:p-16 border-b border-white/10">
          <div className="max-w-[1200px]">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent mb-6 md:mb-12">
              [ SERVICES / DIGITAL MARKETING ]
            </p>
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              PERFORMANCE <br />
              <span className="text-accent">MARKETING.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed font-medium">
              We drive measurable growth through technical SEO, aggressive paid acquisition, and relentless conversion optimisation.
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
              GROW IT.
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
            READY TO <br/> SCALE?
          </h2>
          <a
            href="/#contact"
            className="group flex items-center gap-4 bg-black text-white px-8 md:px-12 py-5 md:py-6 hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
          >
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">
              START A CAMPAIGN
            </span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
