import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Compass, Map, Lightbulb, TrendingUp, Users, LineChart,
  CheckCircle2, Crosshair, ArrowUpRight, Globe,
  Search, PenTool, BarChart3, Rocket, HeartHandshake,
  Target, Eye, Layers, Zap, FileText
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─────────── data ─────────── */
const stats = [
  { value: "120+", label: "Strategies Built" },
  { value: "40%", label: "Avg. Revenue Growth" },
  { value: "6mo", label: "Time to Results" },
  { value: "98%", label: "Client Satisfaction" },
];

const benefits = [
  "Identify your most profitable market segments and buyer personas",
  "Map your competitive landscape and find whitespace opportunities",
  "Build a 12-month digital roadmap aligned to revenue goals",
  "Define KPIs and success metrics before a single rupee is spent",
  "Align your internal teams around a unified brand narrative",
  "Audit existing digital assets and identify quick-win optimisations",
];

const services = [
  {
    icon: Map,
    title: "Market Positioning",
    description: "Define your unique value proposition and carve out a distinctive position in a crowded market that makes you the obvious choice.",
    color: "#E05A28",
  },
  {
    icon: Users,
    title: "Audience Research",
    description: "Deep-dive qualitative and quantitative research to understand exactly who your buyers are, what they need, and where they spend time.",
    color: "#8B5CF6",
  },
  {
    icon: LineChart,
    title: "Growth Roadmapping",
    description: "Structured 12-month digital growth plans with quarterly milestones, channel priorities, budget allocations, and measurable KPIs.",
    color: "#3B82F6",
  },
  {
    icon: Crosshair,
    title: "Competitive Analysis",
    description: "Systematic audits of competitor strategies, content, SEO, and ads — exposing the gaps your brand can exploit immediately.",
    color: "#10B981",
  },
  {
    icon: Lightbulb,
    title: "Brand Architecture",
    description: "Define your brand's voice, messaging hierarchy, and visual language so every touchpoint communicates a consistent, compelling story.",
    color: "#F59E0B",
  },
  {
    icon: Globe,
    title: "Channel Strategy",
    description: "Data-backed recommendations on which platforms, formats, and channels will deliver the highest ROI for your specific business model.",
    color: "#EF4444",
  },
];

const processSteps = [
  { num: "01", icon: Search, label: "Discovery", desc: "We conduct stakeholder interviews, brand audits, and market scans to understand where you are and where the opportunity lies." },
  { num: "02", icon: Users, label: "Audience", desc: "We build precise buyer personas from real data — search behaviour, social signals, and customer interviews." },
  { num: "03", icon: Crosshair, label: "Competitive Audit", desc: "We reverse-engineer your top competitors' digital strategies to expose gaps and underserved market positions." },
  { num: "04", icon: Map, label: "Roadmap", desc: "A 12-month growth roadmap with quarterly OKRs, channel priorities, and budget frameworks lands in your inbox." },
  { num: "05", icon: FileText, label: "Alignment", desc: "We present and workshop the strategy with your team to ensure every stakeholder is aligned before execution begins." },
  { num: "06", icon: Rocket, label: "Execution Handoff", desc: "We either execute the strategy ourselves or hand it off to your internal team with full documentation and training." },
];

const tools = ["Google Analytics", "SEMrush", "Ahrefs", "SimilarWeb", "SparkToro", "Hotjar", "Figma", "Notion", "Miro", "Looker Studio", "HubSpot CRM", "LinkedIn Sales Nav", "Typeform", "Tableau"];

const whyUs = [
  { icon: Target, title: "Business-First Thinking", desc: "Strategy starts with your revenue model, not a generic digital playbook. Every recommendation is business-cased." },
  { icon: Eye, title: "Transparent Deliverables", desc: "You own every document, framework, and presentation we create. No black boxes, no vendor lock-in." },
  { icon: Lightbulb, title: "Research-Led Insights", desc: "We use primary research, competitive intelligence, and real data — not assumptions — to build your strategy." },
  { icon: Zap, title: "Speed to Clarity", desc: "Our structured sprint process delivers a full strategic roadmap in as little as 3 weeks." },
  { icon: Layers, title: "Cross-Functional Alignment", desc: "We facilitate workshops that align your marketing, sales, and leadership teams around a single direction." },
  { icon: HeartHandshake, title: "Execution Support", desc: "Strategy delivery doesn't end at the presentation. We stay on to support execution and course-correct in real time." },
  { icon: BarChart3, title: "KPI-Driven Roadmaps", desc: "Every initiative on your roadmap is tied to a measurable KPI so you always know what success looks like." },
  { icon: Globe, title: "Market Expansion Ready", desc: "We factor in new market entry, product launches, and geographic expansion from day one of the strategy." },
];

/* ─────────── Hero Graphic — strategy roadmap visual ─────────── */
const HeroGraphic = () => {
  const pillars = [
    { label: "Research", value: "Done", color: "#10B981" },
    { label: "Positioning", value: "Active", color: "#E05A28" },
    { label: "Channels", value: "Pending", color: "#6B7280" },
    { label: "Launch", value: "Pending", color: "#6B7280" },
  ];

  return (
    <div className="relative w-full min-h-[380px] flex items-center justify-center">
      {/* Strategy card */}
      <motion.div
        className="relative w-full max-w-sm bg-background/10 backdrop-blur-md border border-foreground/15 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-foreground/10">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-foreground/70 tracking-wider uppercase">Strategic Roadmap</span>
          </div>
          <span className="text-[10px] text-accent font-semibold bg-accent/15 px-2 py-0.5 rounded-full">Q3 2025</span>
        </div>

        <div className="p-5 space-y-4">
          {/* Progress pillars */}
          <div>
            <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-3">Strategy Phases</p>
            <div className="space-y-2.5">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${p.color}20`, border: `1px solid ${p.color}50` }}>
                      {p.value === "Done" ? (
                        <CheckCircle2 className="w-2.5 h-2.5" style={{ color: p.color }} />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.color }} />
                      )}
                    </div>
                    <span className="text-xs font-medium text-foreground/70">{p.label}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ color: p.color, background: `${p.color}15` }}>{p.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-foreground/10" />

          {/* KPI section */}
          <div>
            <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-3">Target KPIs</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Market Share", target: "+12%", color: "#E05A28" },
                { label: "Lead Quality", target: "85%", color: "#8B5CF6" },
                { label: "CAC Reduction", target: "-30%", color: "#10B981" },
                { label: "Brand Recall", target: "2x", color: "#3B82F6" },
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  className="bg-foreground/5 border border-foreground/10 rounded-lg p-2.5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 + i * 0.08 }}
                >
                  <p className="text-[9px] text-foreground/40 mb-1">{kpi.label}</p>
                  <p className="text-base font-black" style={{ color: kpi.color }}>{kpi.target}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Insight strip */}
          <motion.div
            className="bg-accent/10 border border-accent/20 rounded-lg p-3 flex items-start gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <Lightbulb className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <p className="text-[10px] text-foreground/60 leading-relaxed">Competitor gap in LinkedIn B2B content — high-priority channel opportunity identified.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        className="absolute -top-2 -right-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-[10px] text-muted-foreground">Growth Score</p>
        <p className="text-xl font-black text-accent">92/100</p>
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <p className="text-[10px] text-muted-foreground">Opportunities</p>
        <p className="text-xl font-black text-foreground">14 Found</p>
      </motion.div>
    </div>
  );
};

/* ─────────── page ─────────── */
const DigitalStrategy = () => {
  const valueRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const whyRef = useRef(null);
  const isValueInView = useInView(valueRef, { once: true, margin: "-80px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-80px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-80px" });

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <SEO
        title="Digital Strategy | Fokel — Data-Informed Roadmaps for Market Leaders"
        description="Fokel builds digital strategies that align your online presence with real business objectives. Market research, positioning, competitive analysis, and 12-month growth roadmaps."
        keywords="digital strategy, brand strategy, market positioning, competitive analysis, growth roadmap, business strategy, Fokel"
        url="https://www.fokelworks.com/services/digital-strategy"
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full bg-accent/6 blur-[130px]" />
            <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
          </div>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary-foreground)/1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)/1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center w-full">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-8"
              >
                <Compass className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">Define Direction</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Strategy That{" "}
                <span className="text-accent italic">Turns</span>
                <br />
                Vision Into Growth
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-lg text-foreground/65 max-w-md leading-relaxed mb-10"
              >
                Data-informed roadmaps that align your digital presence with business objectives. We transform market insights into actionable growth strategies that your entire team can execute.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Build My Strategy
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 text-foreground/70 border border-foreground/20 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
                >
                  See Our Approach
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <HeroGraphic />
            </motion.div>
          </div>
        </section>

        {/* ── VALUE SECTION ── */}
        <section ref={valueRef} className="py-24 lg:py-36 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-8"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Strategic Value</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  More Than Just a{" "}
                  <span className="text-accent">Presentation</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
                >
                  A real digital strategy is a living document that drives decisions. It's grounded in data, built around your customers, and designed to evolve with the market — not sit in a drawer.
                </motion.p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isValueInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-snug">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="flex flex-col gap-2 p-6 rounded-2xl border border-border/60 hover:border-accent/30 transition-colors bg-background/20"
                  >
                    <span
                      className="text-5xl lg:text-6xl font-black leading-none tracking-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section id="services" ref={servicesRef} className="py-24 lg:py-36 bg-background/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Services</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Strategy Services We Deliver
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-muted-foreground text-base max-w-lg mx-auto"
              >
                End-to-end strategic consulting that gives you the clarity and direction to outmaneuver your competitors and own your market.
              </motion.p>
            </div>

            <div className="flex flex-col gap-8 relative max-w-4xl mx-auto">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-24 p-8 lg:p-12 rounded-3xl border border-border/60 bg-background shadow-xl flex flex-col md:flex-row gap-8 items-start transition-all duration-300"
                    style={{ top: `calc(100px + ${i * 20}px)`, zIndex: i }}
                  >
                    <div
                      className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed max-w-xl">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS TIMELINE ── */}
        <section ref={processRef} className="py-24 lg:py-36 bg-background overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/15 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Process</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Strategy to Execution in 6 Steps
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="text-foreground/50 text-base max-w-lg mx-auto">
                A structured process that turns market complexity into a clear, aligned, and actionable growth plan.
              </motion.p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-foreground/10" />
              <motion.div className="hidden lg:block absolute top-10 left-0 h-px bg-accent/50" initial={{ width: 0 }} animate={isProcessInView ? { width: "100%" } : {}} transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }} />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }} className="flex flex-col items-center text-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-foreground/8 border border-foreground/15 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-foreground/60" />
                        </div>
                        <span className="absolute -top-1 -right-1 text-[10px] font-black text-accent bg-background border border-accent/30 rounded-full w-5 h-5 flex items-center justify-center">{step.num}</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground tracking-wide uppercase mb-2">{step.label}</p>
                        <p className="text-xs text-foreground/45 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOOLS MARQUEE ── */}
        <div className="bg-background border-y border-foreground/10 py-5 overflow-hidden">
          <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-4">Research & Strategy Tools We Use</p>
          <div className="relative flex overflow-hidden">
            <motion.div className="flex gap-12 shrink-0" animate={{ x: ["-0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
              {[...tools, ...tools].map((tool, i) => (
                <span key={i} className="text-sm font-semibold text-foreground/40 hover:text-foreground/70 transition-colors whitespace-nowrap cursor-default">{tool}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── WHY CHOOSE FOKEL ── */}
        <section ref={whyRef} className="py-24 lg:py-36 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isWhyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/15 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Why Choose Fokel</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isWhyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Strategy Built for{" "}<span className="text-accent italic">Real Outcomes</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={isWhyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="text-foreground/50 text-base max-w-lg mx-auto">
                We don't deliver strategy decks that gather dust. We build living roadmaps that your teams can actually execute against.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                // Perfect 4x3 alternating brick pattern (no tall boxes to prevent empty space)
                const spanClass = 
                  i === 0 ? "md:col-span-2 bg-accent/5 border-accent/20" :
                  i === 3 ? "md:col-span-2" :
                  i === 4 ? "md:col-span-2" :
                  i === 7 ? "md:col-span-2 bg-accent/5 border-accent/20" :
                  "col-span-1";
                  
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={isWhyInView ? { opacity: 1, scale: 1 } : {}} 
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.05 }} 
                    className={`group p-8 lg:p-10 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-accent/30 transition-all duration-500 overflow-hidden relative flex flex-col justify-center items-start ${spanClass}`}
                  >
                    <Icon className="w-8 h-8 text-foreground/30 group-hover:text-accent transition-colors duration-500 mb-6 relative z-10" />
                    
                    {/* Decorative radial gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-transparent group-hover:from-accent/5 transition-colors duration-500 pointer-events-none" />

                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{item.title}</h3>
                      <p className="text-[15px] text-foreground/60 leading-relaxed max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-background"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-purple-600/10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Ready for clarity?
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Let's define your<br />
                  <span className="text-accent italic">winning strategy</span>
                </h2>
              </div>
              <div className="shrink-0 flex flex-col gap-4">
                <p className="text-foreground/60 text-sm max-w-xs">Book a complimentary 45-minute strategy session and leave with three actionable insights — guaranteed.</p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Book Strategy Session
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DigitalStrategy;
