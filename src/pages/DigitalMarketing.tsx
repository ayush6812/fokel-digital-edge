import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, TrendingUp, Search, Share2, Target, Mail, BarChart2,
  CheckCircle2, Megaphone, ArrowUpRight, MousePointerClick,
  ClipboardList, PenTool, Rocket, BarChart, HeartHandshake,
  Eye, Layers, Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

/* ─────────── data ─────────── */
const stats = [
  { value: "3.5x", label: "Average ROI" },
  { value: "68%", label: "More Organic Traffic" },
  { value: "99+", label: "Campaigns Delivered" },
  { value: "95%", label: "Client Retention" },
];

const benefits = [
  "Dominate organic search with technical SEO and content strategies",
  "Run precision paid ad campaigns on Google, Meta, and LinkedIn",
  "Build audiences that buy through strategic social media marketing",
  "Convert visitors into leads with CRO and landing page optimisation",
  "Track every rupee of spend with attribution and analytics dashboards",
  "Grow email lists and nurture leads with automated email sequences",
];

const services = [
  {
    icon: Search,
    title: "SEO & Content Marketing",
    description: "Comprehensive on-page, off-page, and technical SEO strategies backed by data, paired with content that ranks and converts.",
    tags: ["Technical SEO", "Link Building", "Content Clusters"],
    color: "#E05A28",
  },
  {
    icon: MousePointerClick,
    title: "Performance Marketing",
    description: "ROI-obsessed paid ad campaigns across Google, Meta, LinkedIn, and YouTube — built to generate qualified leads at scale.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
    color: "#3B82F6",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Platform-native content strategies for Instagram, LinkedIn, and X that build authority, engagement, and brand recall.",
    tags: ["Content Strategy", "Reels", "Community"],
    color: "#8B5CF6",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated drip campaigns, nurture sequences, and re-engagement flows that turn cold leads into warm buyers.",
    tags: ["Automation", "Segmentation", "A/B Testing"],
    color: "#10B981",
  },
  {
    icon: Target,
    title: "Conversion Optimisation",
    description: "Landing page design, funnel analysis, and A/B testing to squeeze maximum conversions from your existing traffic.",
    tags: ["Landing Pages", "Heatmaps", "Funnels"],
    color: "#F59E0B",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reporting",
    description: "GA4 setup, custom dashboards, and monthly performance reports that give you a crystal-clear picture of your marketing ROI.",
    tags: ["GA4", "Dashboards", "Attribution"],
    color: "#EF4444",
  },
];

const processSteps = [
  { num: "01", icon: Search, label: "Audit", desc: "We analyse your current digital footprint — traffic, rankings, ads, and social — to find gaps and opportunities." },
  { num: "02", icon: ClipboardList, label: "Strategy", desc: "We build a channel-specific roadmap with KPIs, budget splits, and a 90-day sprint plan tied to your revenue goals." },
  { num: "03", icon: PenTool, label: "Creative", desc: "Ad copy, landing pages, social content, and email sequences — all crafted to convert, not just impress." },
  { num: "04", icon: Rocket, label: "Launch", desc: "Campaigns go live across Google, Meta, LinkedIn, or email with pixel-perfect tracking from day one." },
  { num: "05", icon: BarChart, label: "Optimise", desc: "Weekly analysis of what's working. We kill underperformers and double down on winning creatives and audiences." },
  { num: "06", icon: HeartHandshake, label: "Report", desc: "Monthly performance reviews with full attribution data, spend summaries, and next-quarter strategy adjustments." },
];

const tools = ["Google Ads", "Meta Ads Manager", "SEMrush", "Ahrefs", "HubSpot", "Mailchimp", "GA4", "Hotjar", "Canva Pro", "Klaviyo", "LinkedIn Ads", "YouTube Ads", "Notion", "Looker Studio"];

const whyUs = [
  { icon: Target, title: "Revenue-Tied Strategy", desc: "Every campaign objective is mapped to a revenue metric. We don't celebrate vanity KPIs." },
  { icon: Eye, title: "Full Spend Visibility", desc: "You see exactly where every rupee goes. Weekly spend reports with channel-by-channel attribution." },
  { icon: Zap, title: "Rapid Creative Testing", desc: "We launch multiple ad variants in the first week and scale winners fast using automated rules." },
  { icon: BarChart2, title: "Data-Driven Decisions", desc: "Every optimisation is backed by statistical significance — not gut feel. We let the data lead." },
  { icon: Layers, title: "Full-Funnel Coverage", desc: "From awareness to purchase and re-engagement, we own every stage of your customer journey." },
  { icon: HeartHandshake, title: "Dedicated Account Team", desc: "You get a dedicated strategist, analyst, and creative lead — not a rotating agency junior." },
  { icon: Search, title: "SEO + Paid Synergy", desc: "Our teams work in lockstep so your organic and paid efforts reinforce each other, not compete." },
  { icon: Rocket, title: "No Lock-In Contracts", desc: "Month-to-month engagements with 30-day notice. We earn your business every single month." },
];

/* ─────────── Hero Graphic — marketing dashboard ─────────── */
const HeroGraphic = () => {
  const bars = [40, 65, 45, 80, 60, 95, 72];
  return (
    <div className="relative w-full min-h-[380px] flex items-center justify-center">
      {/* Dashboard card */}
      <motion.div
        className="relative w-full max-w-sm bg-background/10 backdrop-blur-md border border-foreground/15 rounded-2xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-foreground/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-foreground/70 tracking-wider uppercase">Campaign Dashboard</span>
          </div>
          <span className="text-[10px] text-green-400 font-semibold bg-green-400/15 px-2 py-0.5 rounded-full">● Live</span>
        </div>

        <div className="p-5 space-y-5">
          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Impressions", value: "2.4M", delta: "+22%" },
              { label: "Conversions", value: "4,821", delta: "+38%" },
            ].map((m, i) => (
              <div key={i} className="bg-foreground/5 border border-foreground/10 rounded-xl p-3">
                <p className="text-[10px] text-foreground/50 uppercase tracking-widest mb-1">{m.label}</p>
                <p className="text-xl font-black text-foreground leading-none">{m.value}</p>
                <p className="text-[10px] text-green-400 font-semibold mt-1">{m.delta}</p>
              </div>
            ))}
          </div>

          {/* Bar chart */}
          <div>
            <p className="text-[10px] text-foreground/40 uppercase tracking-widest mb-3">Weekly Reach</p>
            <div className="flex items-end gap-1.5 h-16">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{ background: i === bars.length - 1 ? "hsl(var(--accent))" : "hsl(var(--primary-foreground)/0.2)" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                  style={{ height: `${h}%`, background: i === bars.length - 1 ? "hsl(var(--accent))" : "hsl(var(--primary-foreground)/0.2)", transformOrigin: "bottom" }}
                />
              ))}
            </div>
          </div>

          {/* Channel list */}
          <div className="space-y-2">
            {[
              { name: "Google Ads", pct: 78, color: "#4285F4" },
              { name: "Meta Ads", pct: 64, color: "#1877F2" },
              { name: "Organic SEO", pct: 91, color: "#E05A28" },
            ].map((ch, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[10px] text-foreground/50 w-20 shrink-0">{ch.name}</span>
                <div className="flex-1 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: ch.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${ch.pct}%` }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <span className="text-[10px] font-bold text-foreground/60 w-6">{ch.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        className="absolute -top-2 -right-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="text-[10px] text-muted-foreground">CPC</p>
        <p className="text-lg font-black text-accent">₹12.4</p>
      </motion.div>
      <motion.div
        className="absolute -bottom-2 -left-4 bg-background/90 backdrop-blur-sm border border-border/60 rounded-xl px-4 py-2.5 shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <p className="text-[10px] text-muted-foreground">Avg. ROAS</p>
        <p className="text-lg font-black text-foreground">3.7x</p>
      </motion.div>
    </div>
  );
};

/* ─────────── page ─────────── */
const DigitalMarketing = () => {
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
        title="Digital Marketing | Fokel — Performance-Driven Growth for Ambitious Brands"
        description="Fokel runs data-driven digital marketing campaigns — SEO, PPC, social media, and email — that deliver measurable ROI and turn traffic into loyal customers."
        keywords="digital marketing, SEO, Google Ads, social media marketing, performance marketing, content marketing, Fokel"
        url="https://www.fokelworks.com/services/digital-marketing"
      />
      <Navbar />

      <main className="overflow-hidden">
        {/* ── HERO ── */}
        <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-accent/6 blur-[140px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
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
                <Megaphone className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">Performance Marketing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.02] tracking-[-0.03em] text-foreground mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Marketing That{" "}
                <span className="text-accent italic">Drives</span>
                <br />
                Real Revenue
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-lg text-foreground/65 max-w-md leading-relaxed mb-10"
              >
                Performance-driven campaigns that deliver measurable ROI. From SEO to social media, we engineer digital experiences that convert browsers into loyal customers.
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
                  Grow My Business
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 text-foreground/70 border border-foreground/20 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors"
                >
                  See Our Services
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
                  More Than Just{" "}
                  <span className="text-accent">Impressions</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isValueInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md"
                >
                  Great marketing isn't about vanity metrics — it's about building a sustainable engine of growth. Every campaign we run is tied to revenue outcomes, not just traffic or likes.
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

              <div className="relative h-full min-h-[400px] flex items-center justify-center">
                {/* Decorative background for widgets */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent rounded-full blur-3xl opacity-50" />
                
                {/* Floating Widgets */}
                <div className="relative w-full h-full max-w-md mx-auto flex flex-col gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30, y: 20 }}
                      animate={isValueInView ? { opacity: 1, x: i % 2 !== 0 ? 30 : 0, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.15, type: "spring", stiffness: 100 }}
                      className={`relative flex items-center justify-between p-6 rounded-2xl border border-border/50 bg-background shadow-xl backdrop-blur-md ${
                        i % 2 !== 0 ? "ml-auto border-accent/20 bg-accent/5" : "mr-auto"
                      } w-4/5 z-${30 - i * 10}`}
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold tracking-[0.18em] uppercase text-muted-foreground">{stat.label}</span>
                        <div className="flex items-end gap-3 mt-1">
                          <span className="text-4xl lg:text-5xl font-black leading-none tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            {stat.value}
                          </span>
                          <span className="text-accent text-sm font-semibold mb-1 flex items-center">
                            <TrendingUp className="w-3.5 h-3.5 mr-1" /> +24%
                          </span>
                        </div>
                      </div>
                      
                      {/* Mini sparkline graphic */}
                      <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="opacity-70">
                        <path d="M0 25 Q 10 20, 20 25 T 40 15 T 60 5" stroke="currentColor" className={i % 2 !== 0 ? "text-accent" : "text-muted-foreground"} strokeWidth="2" strokeLinecap="round" fill="none" />
                        <circle cx="60" cy="5" r="3" fill="currentColor" className={i % 2 !== 0 ? "text-accent" : "text-muted-foreground"} />
                      </svg>
                    </motion.div>
                  ))}
                </div>
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
                Full-Funnel Marketing Solutions
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-muted-foreground text-base max-w-lg mx-auto"
              >
                We cover every touchpoint of your customer's journey — from first impression to repeat purchase.
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
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-background/60 text-muted-foreground border border-border/50">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GROWTH FUNNEL ── */}
        <section ref={processRef} className="py-24 lg:py-36 bg-background overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/15 mb-6">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">The Growth Framework</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Full-Funnel Architecture
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={isProcessInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="text-foreground/50 text-base max-w-lg mx-auto">
                We build integrated campaigns that capture attention at the top, nurture trust in the middle, and drive measurable revenue at the bottom.
              </motion.p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-6">
              {[
                { 
                  stage: "Top of Funnel", title: "Awareness & Acquisition", 
                  desc: "Capturing highly qualified traffic through intent-based search and disruptive social advertising.",
                  metrics: ["Impressions", "CTR", "CPC"], width: "w-full", color: "bg-foreground/5 border-foreground/15" 
                },
                { 
                  stage: "Middle of Funnel", title: "Nurture & Consideration", 
                  desc: "Building trust and brand preference through targeted retargeting, email sequences, and high-value content.",
                  metrics: ["Engagement", "Time on Site", "Opt-ins"], width: "w-[85%] mx-auto", color: "bg-foreground/10 border-foreground/25" 
                },
                { 
                  stage: "Bottom of Funnel", title: "Conversion & Retention", 
                  desc: "Eliminating friction and driving action with high-converting landing pages, offers, and loyalty loops.",
                  metrics: ["CPA", "ROAS", "LTV"], width: "w-[70%] mx-auto", color: "bg-accent/20 border-accent/40 shadow-[0_0_40px_rgba(224,90,40,0.15)]" 
                }
              ].map((layer, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                  className={`${layer.width} ${layer.color} border rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left relative overflow-hidden backdrop-blur-sm`}
                >
                  <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                  
                  <div className="md:w-1/3 shrink-0 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-foreground/10 pb-6 md:pb-0 md:pr-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/40 mb-3">{layer.stage}</span>
                    <h3 className="text-xl font-bold text-foreground mb-4">{layer.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-auto">
                      {layer.metrics.map(m => (
                        <span key={m} className="text-[9px] font-semibold tracking-wider uppercase px-2 py-1 rounded bg-black/20 text-foreground/60">{m}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex items-center">
                    <p className="text-sm md:text-base text-foreground/60 leading-relaxed">
                      {layer.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS MARQUEE ── */}
        <div className="bg-background border-y border-foreground/10 py-5 overflow-hidden">
          <p className="text-center text-[10px] font-semibold tracking-[0.3em] uppercase text-foreground/30 mb-4">Platforms & Tools We Master</p>
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
                Marketing with{" "}<span className="text-accent italic">Measurable Impact</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={isWhyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.15 }} className="text-foreground/50 text-base max-w-lg mx-auto">
                We're not an agency that hides behind impressions and reach. Every metric we report connects back to your bottom line.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isWhyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }} className="group p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-accent/30 hover:bg-foreground/8 transition-all duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-blue-600/10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 p-10 md:p-16 flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold mb-6">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Ready to grow?
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Let's build your<br />
                  <span className="text-accent italic">growth engine</span> today
                </h2>
              </div>
              <div className="shrink-0 flex flex-col gap-4">
                <p className="text-foreground/60 text-sm max-w-xs">Get a free marketing audit and discover exactly where your biggest growth opportunities are hiding.</p>
                <Link
                  to="/#contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Get Free Audit
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

export default DigitalMarketing;
