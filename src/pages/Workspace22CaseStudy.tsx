import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, Building2, TrendingUp, Users, Search, Target, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import workspace22Logo from "@/assets/clients/22workspacenew.png";
import workImage from "@/assets/clients/22workspacebanner.jpeg";
import SEO from "@/components/SEO";
import NeuralNetworkCanvas from "@/components/ui/NeuralNetworkCanvas";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const displayValue = useTransform(springValue, (v) => Math.floor(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (v) => setDisplay(v));
    return () => unsubscribe();
  }, [displayValue]);

  return <span ref={ref}>{display}{suffix}</span>;
};

const parseStatValue = (value: string): { num: number; suffix: string; prefix: string } => {
  const match = value.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (match) {
    return { prefix: match[1], num: parseFloat(match[2]), suffix: match[3] };
  }
  return { prefix: "", num: 0, suffix: value };
};

const ACCENT = "#FF6B00";

const Workspace22CaseStudy = () => {
  return (
    <>
      <SEO
        title="22workspace Coworking — Digital Marketing Case Study | Fokel"
        description="How Fokel tripled online enquiries and grew occupancy 60% for 22workspace, Delhi's premium coworking brand, through brand identity, targeted lead gen, and local SEO."
        keywords="22workspace case study, coworking marketing Delhi, flexible workspace lead generation, coworking brand identity, Delhi coworking digital marketing"
        url="https://www.fokelworks.com/work/22workspace"
        type="article"
      />
      <div className="dark bg-background min-h-screen overflow-hidden text-foreground">
        <NeuralNetworkCanvas />
        <GlassLensCursor />
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <Link
              to="/the-gallery-of-impact"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-[2px]"
                style={{ background: ACCENT }}
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm font-medium tracking-[0.3em] uppercase"
                style={{ color: ACCENT }}
              >
                Case Study
              </motion.p>
            </div>

            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.02em] text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                22workspace
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Premium Coworking & Managed Workspaces in Central Delhi — Built for Startups, SMEs & Corporate Teams
            </motion.p>
          </div>
        </section>

        {/* Hero Image */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-24"
        >
          <div className="aspect-[16/9] overflow-hidden bg-secondary rounded-2xl relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="w-full h-full"
            >
              <img
                src={workImage}
                alt="22workspace coworking space"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Logo overlay */}
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 overflow-hidden">
              <img src={workspace22Logo} alt="22workspace logo" className="h-8 scale-[1.3]" />
            </div>
          </div>
        </motion.section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { label: "Client", value: "22workspace" },
              { label: "Services", value: "Brand Identity, Web Design, Digital Marketing, SEO, Lead Generation Campaigns" },
              { label: "Timeline", value: "2024 — Ongoing" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <p className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: ACCENT }}>
                  {item.label}
                </p>
                <p className="text-foreground font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <p className="text-sm font-semibold uppercase tracking-wider mb-6" style={{ color: ACCENT }}>
                The Background
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                A Premium Coworking Brand With No Digital Voice
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex items-end">
              <p className="text-muted-foreground leading-relaxed text-lg">
                22workspace is a premium coworking and managed workspace brand operating in the heart of Central Delhi. With beautifully designed interiors, enterprise-grade infrastructure, and a carefully curated community of founders and professionals, 22workspace had everything it needed to be the city's premier flexible workspace — except a digital presence that matched its calibre. Their online footprint was fragmented, their brand narrative inconsistent, and their enquiry pipeline entirely dependent on walk-ins and word-of-mouth referrals. In a rapidly growing flexible workspace market attracting startups, SMEs, and corporate teams, this gap was costing them significant occupancy and revenue.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution */}
        <section className="bg-secondary py-24 mb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="h-[2px]"
                style={{ background: ACCENT }}
              />
              <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
                Our Approach
              </p>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-foreground tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Full-Stack Digital Brand Engine — Web, Social & Lead Gen
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Brand Identity & Web Presence",
                  desc: "We redesigned their entire web presence from the ground up — a modern, visually premium site that communicated their workspace quality, community ethos, and key differentiators with clarity and confidence.",
                  num: "01",
                },
                {
                  icon: Megaphone,
                  title: "Compelling Brand Narrative",
                  desc: "We crafted a brand story that resonated with both individual founders and enterprise teams — positioning 22workspace as the address of ambition in Central Delhi.",
                  num: "02",
                },
                {
                  icon: Target,
                  title: "Targeted Lead Generation",
                  desc: "Deployed hyper-targeted Meta and Google campaigns with custom landing pages built for conversions, speaking directly to startup founders, SME decision-makers, and corporate real estate managers.",
                  num: "03",
                },
                {
                  icon: Search,
                  title: "Local SEO Domination",
                  desc: "Built a comprehensive local SEO strategy targeting high-intent coworking and managed office space searches, achieving Top 3 rankings across key Delhi search terms within months.",
                  num: "04",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative p-6 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${ACCENT}20`, color: ACCENT }}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase mb-2 block" style={{ color: ACCENT }}>
                        {item.num}
                      </span>
                      <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="flex items-center gap-4 mb-12">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[2px]"
              style={{ background: ACCENT }}
            />
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: ACCENT }}>
              The Results
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { stat: "3×", label: "Increase in Online Enquiries", icon: TrendingUp, value: "3", suffix: "×", prefix: "" },
              { stat: "60%", label: "Occupancy Rate Growth", icon: Users, value: "60", suffix: "%", prefix: "" },
              { stat: "Top 3", label: "Local SEO Rankings in Delhi", icon: Search, value: "3", suffix: "", prefix: "Top " },
            ].map((item, i) => {
              const parsed = parseStatValue(item.stat);
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="relative p-8 rounded-2xl border border-border/50 bg-secondary/30 hover:border-accent/30 transition-colors duration-300 text-center group"
                  style={{ borderColor: `${ACCENT}20` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
                  />
                  <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: ACCENT }}>
                    {parsed.prefix}
                    <AnimatedCounter value={parsed.num} suffix={parsed.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Quote */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="relative rounded-3xl p-10 md:p-16 border overflow-hidden"
            style={{ background: `${ACCENT}08`, borderColor: `${ACCENT}30` }}
          >
            <div className="absolute top-8 left-10 text-8xl font-black leading-none select-none pointer-events-none opacity-10" style={{ color: ACCENT }}>
              "
            </div>
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 relative z-10 max-w-4xl">
              "Fokel gave 22workspace the digital identity it always deserved. Our enquiries tripled within months—results we couldn't have imagined before."
            </p>
            <cite className="text-sm font-bold not-italic uppercase tracking-widest" style={{ color: ACCENT }}>
              — Founder, 22workspace
            </cite>
          </motion.blockquote>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="bg-primary text-primary-foreground rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest font-bold mb-4 text-accent">Ready to grow?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's build your brand's next chapter together.
              </h2>
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Workspace22CaseStudy;
