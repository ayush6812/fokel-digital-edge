import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Bot, Zap, Brain, Workflow, MessageSquare, CheckCircle2,
  Cpu, Settings, BarChart3, Shield, ArrowUpRight, Search, FileText,
  Code2, Rocket, HeartHandshake, Target, Eye, Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─────────── data ─────────── */
const stats = [
  { value: "10x", label: "Faster Workflows" },
  { value: "80%", label: "Task Automation" },
  { value: "24/7", label: "Always On" },
  { value: "3x", label: "Cost Reduction" },
];

const benefits = [
  "Automate repetitive tasks and free up human capital for strategic work",
  "Deploy custom LLM agents trained on your business context",
  "Integrate with your existing CRM, ERP, and communication tools",
  "Engage customers 24/7 with intelligent, context-aware chatbots",
  "Scale operations without proportional headcount increases",
  "Get real-time analytics and performance dashboards for every agent",
];

const services = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Customer-facing chatbots and sales agents that understand context, qualify leads, and close deals autonomously.",
    color: "#E05A28",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "End-to-end process automation agents that handle data entry, routing, approvals, and reporting with zero human touch.",
    color: "#8B5CF6",
  },
  {
    icon: Brain,
    title: "LLM Fine-Tuning",
    description: "Custom large language models trained on your proprietary data to produce on-brand, accurate, and domain-specific outputs.",
    color: "#3B82F6",
  },
  {
    icon: Settings,
    title: "System Integration",
    description: "Agents that bridge your tech stack — Slack, Notion, Salesforce, HubSpot — and orchestrate cross-platform tasks automatically.",
    color: "#10B981",
  },
  {
    icon: BarChart3,
    title: "Analytics Agents",
    description: "Intelligent agents that monitor KPIs, generate reports, surface anomalies, and deliver board-ready insights on demand.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "AI systems built with enterprise-grade data governance, audit trails, and role-based access to keep your business protected.",
    color: "#EF4444",
  },
];

const processSteps = [
  { num: "01", icon: Search, label: "Discovery", desc: "We audit your workflows, map bottlenecks, and define which processes have the highest automation ROI." },
  { num: "02", icon: Brain, label: "Architecture", desc: "We design the agent logic, memory systems, and tool integrations tailored to your stack." },
  { num: "03", icon: Code2, label: "Development", desc: "We build and fine-tune LLMs or agent pipelines using OpenAI, LangChain, and your proprietary data." },
  { num: "04", icon: Settings, label: "Integration", desc: "The agent is wired into your CRM, Slack, email, or ERP — no disruption to your existing workflows." },
  { num: "05", icon: Shield, label: "Testing & QA", desc: "We stress-test edge cases, hallucination risks, and performance benchmarks before anything goes live." },
  { num: "06", icon: Rocket, label: "Deployment", desc: "Live deployment with monitoring dashboards, alerting, and a 30-day hypercare support window." },
];

const tools = ["OpenAI GPT-4", "LangChain", "Pinecone", "Python", "FastAPI", "AWS Lambda", "Zapier", "Slack API", "HubSpot", "Notion API", "Supabase", "Anthropic Claude", "Mistral AI", "n8n"];

const whyUs = [
  { icon: Target, title: "Outcome-First Thinking", desc: "We measure success by time saved and revenue generated — not by how sophisticated the agent is." },
  { icon: Eye, title: "Full Transparency", desc: "Every agent we ship includes monitoring dashboards so you always know exactly what it's doing." },
  { icon: Brain, title: "Proprietary Training", desc: "Agents trained on your own data outperform generic solutions by 3–5x in accuracy and relevance." },
  { icon: Zap, title: "Rapid Deployment", desc: "From kickoff to first live agent in as little as 2 weeks — without disrupting your existing ops." },
  { icon: Layers, title: "Stack-Agnostic", desc: "We integrate with any existing tech stack — Salesforce, HubSpot, SAP, or custom in-house tools." },
  { icon: HeartHandshake, title: "Long-Term Partnership", desc: "We don't disappear after launch. Monthly retainers cover agent tuning, retraining, and new builds." },
  { icon: Shield, title: "Enterprise-Grade Security", desc: "Data is processed in isolated environments with full audit trails and GDPR-compliant storage by default." },
  { icon: BarChart3, title: "ROI Guarantee", desc: "If your agent doesn't save you measurable time in 90 days, we rebuild it — no questions asked." },
];

/* ─────────── animated counter graphic ─────────── */
const HeroGraphic = () => (
  <div className="relative w-full h-full min-h-[380px] flex items-center justify-center">
    {/* Central orb */}
    <motion.div
      className="absolute w-40 h-40 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(224,90,40,0.35) 0%, rgba(224,90,40,0.05) 70%, transparent 100%)" }}
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="relative z-10 w-24 h-24 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center shadow-[0_0_60px_rgba(224,90,40,0.3)]"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <Bot className="w-10 h-10 text-accent" style={{ transform: "rotate(-360deg)" }} />
    </motion.div>

    {/* Orbiting nodes */}
    {[
      { icon: Brain, angle: 0, radius: 110, color: "#8B5CF6", label: "LLM" },
      { icon: Workflow, angle: 72, radius: 130, color: "#3B82F6", label: "Flow" },
      { icon: MessageSquare, angle: 144, radius: 115, color: "#10B981", label: "Chat" },
      { icon: Zap, angle: 216, radius: 125, color: "#F59E0B", label: "Auto" },
      { icon: BarChart3, angle: 288, radius: 108, color: "#EF4444", label: "KPI" },
    ].map(({ icon: Icon, angle, radius, color, label }, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = Math.cos(rad) * radius;
      const y = Math.sin(rad) * radius;
      return (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center gap-1"
          style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border backdrop-blur-sm"
            style={{ background: `${color}18`, borderColor: `${color}40` }}
          >
            <Icon className="w-4 h-4" style={{ color }} />
          </div>
          <span className="text-[9px] font-bold tracking-wider uppercase" style={{ color }}>{label}</span>
        </motion.div>
      );
    })}

    {/* Connecting lines (SVG) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.25 }}>
      {[0, 72, 144, 216, 288].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const radii = [110, 130, 115, 125, 108];
        const x = 50 + (Math.cos(rad) * radii[i]) / 3.8;
        const y = 50 + (Math.sin(rad) * radii[i]) / 3.8;
        return (
          <motion.line
            key={i}
            x1="50%" y1="50%"
            x2={`${x}%`} y2={`${y}%`}
            stroke="#E05A28"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
          />
        );
      })}
    </svg>

    {/* Floating metric cards */}
    <motion.div
      className="absolute top-4 right-0 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <p className="text-[10px] text-muted-foreground font-medium">Tasks Automated</p>
      <p className="text-xl font-black text-accent">12,847</p>
    </motion.div>
    <motion.div
      className="absolute bottom-8 left-0 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <p className="text-[10px] text-muted-foreground font-medium">Response Time</p>
      <p className="text-xl font-black text-foreground">{"< 200ms"}</p>
    </motion.div>
  </div>
);

/* ─────────── page ─────────── */
const AiAgents = () => {
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
        title="AI Agents | Fokel — Intelligent Automation for Modern Businesses"
        description="Fokel builds custom AI agents that automate workflows, engage customers, and scale operations. Deploy LLMs, chatbots, and intelligent automation tailored to your business."
        keywords="AI agents, workflow automation, LLM, chatbot, business automation, artificial intelligence, custom AI, Fokel"
        url="https://www.fokelworks.com/services/ai-agents"
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
          {/* Circuit Board Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(hsl(var(--primary-foreground)/1) 2px, transparent 2px), linear-gradient(90deg, hsl(var(--primary-foreground)/1) 2px, transparent 2px)",
                backgroundSize: "100px 100px",
              }}
            />
            {/* Animated circuit lines */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circuit-h-${i}`}
                className="absolute h-[2px] bg-accent/40"
                style={{ top: `${20 + i * 15}%`, left: 0 }}
                animate={{ width: ["0%", "100%", "0%"], opacity: [0, 1, 0], x: ["0%", "50%", "100%"] }}
                transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "linear", delay: i }}
              />
            ))}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={`circuit-v-${i}`}
                className="absolute w-[2px] bg-purple-500/30"
                style={{ left: `${20 + i * 15}%`, top: 0 }}
                animate={{ height: ["0%", "100%", "0%"], opacity: [0, 1, 0], y: ["0%", "50%", "100%"] }}
                transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 lg:pt-40 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30 mb-8"
              >
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">Intelligent Automation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Build AI That{" "}
                <span className="text-accent italic">Works</span>
                <br />
                While You Sleep
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-lg text-foreground/65 max-w-md leading-relaxed mb-10"
              >
                We design and deploy custom AI agents that automate workflows, engage customers, and scale your operations — without scaling your headcount.
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
                  Start Your AI Journey
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 text-foreground/70 border border-foreground/20 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
                >
                  Explore Capabilities
                </a>
              </motion.div>
            </div>

            {/* Right — Animated graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <HeroGraphic />
            </motion.div>
          </div>
        </section>

        {/* ── VALUE SECTION ── */}
        <section ref={valueRef} className="py-24 lg:py-36 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 mb-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The Paradigm Shift</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold leading-[1.08] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Stop Scaling <span className="text-muted-foreground line-through decoration-red-500/50">Headcount</span>
                <br />Scale Intelligence
              </motion.h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch relative">
              {/* VS Badge */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border border-border/80 flex items-center justify-center shadow-xl hidden lg:flex">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">VS</span>
              </div>

              {/* Before Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isValueInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 lg:p-10 rounded-[2rem] border border-border/40 bg-background/10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[50px]" />
                <h3 className="text-xl font-bold text-muted-foreground mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  </span>
                  The Old Way
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Data Entry & Routing", val: "Manual (Hours)" },
                    { label: "Customer Support", val: "9 to 5 Availability" },
                    { label: "Error Rate", val: "High (Human Error)" },
                    { label: "Cost to Scale", val: "Linear (Hire more)" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-border/40 pb-4">
                      <span className="text-sm text-muted-foreground/70">{item.label}</span>
                      <span className="text-sm font-semibold text-muted-foreground">{item.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* After Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isValueInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-8 lg:p-10 rounded-[2rem] border border-accent/30 bg-background relative overflow-hidden shadow-2xl shadow-accent/5"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-[60px]" />
                <h3 className="text-xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-accent" />
                  </span>
                  The AI Way
                </h3>
                <div className="space-y-6">
                  {[
                    { label: "Data Entry & Routing", val: "Instant (Milliseconds)" },
                    { label: "Customer Support", val: "24/7/365 Autonomous" },
                    { label: "Error Rate", val: "Near Zero" },
                    { label: "Cost to Scale", val: "Marginal (Server costs)" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-foreground/10 pb-4">
                      <span className="text-sm text-foreground/60">{item.label}</span>
                      <span className="text-sm font-bold text-accent">{item.val}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
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
                AI Capabilities We Deploy
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-muted-foreground text-base max-w-lg mx-auto"
              >
                From conversational agents to full process automation, we build AI systems that integrate seamlessly into your existing operations.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                    className="group p-7 rounded-2xl border border-border/60 bg-background hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/15 mb-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Our Process</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                From Concept to Live Agent in 6 Steps
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-foreground/50 text-base max-w-lg mx-auto"
              >
                A structured build process designed for speed, reliability, and zero disruption to your existing operations.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-foreground/10" />
              <motion.div
                className="hidden lg:block absolute top-10 left-0 h-px bg-accent/50"
                initial={{ width: 0 }}
                animate={isProcessInView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                      className="flex flex-col items-center text-center gap-4"
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-foreground/8 border border-foreground/15 flex items-center justify-center group-hover:border-accent/40 transition-colors">
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
          <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-4">Built with the tools that hold up</p>
          <div className="relative flex overflow-hidden">
            <motion.div
              className="flex gap-12 shrink-0"
              animate={{ x: ["-0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/15 mb-6"
              >
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">Why Choose Fokel</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Engineering AI with{" "}
                <span className="text-accent italic">Purpose</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-foreground/50 text-base max-w-lg mx-auto"
              >
                We don't build AI for the sake of it. Every agent we ship is tied to a measurable business outcome.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                    className="group p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-accent/30 hover:bg-foreground/8 transition-all duration-300"
                  >
                    <Icon className="w-6 h-6 text-foreground/30 group-hover:text-accent mb-4 transition-colors duration-300" />
                    <h3 className="text-sm font-bold text-foreground mb-2 leading-snug">{item.title}</h3>
                    <p className="text-xs text-foreground/45 leading-relaxed">{item.desc}</p>
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
                  <Bot className="w-3.5 h-3.5" />
                  Ready to automate?
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Let's build your first<br />
                  <span className="text-accent italic">AI agent</span> together
                </h2>
              </div>
              <div className="shrink-0 flex flex-col gap-4">
                <p className="text-foreground/60 text-sm max-w-xs">Start with one process. See the ROI. Then scale across your entire operation.</p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Schedule a Demo
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

export default AiAgents;
