import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, TrendingUp, Award, Search, Briefcase, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import prithiviGridLogo from "@/assets/clients/prithivi-grid.svg";
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

const ACCENT = "#E8610A";

const PrithiviGridCaseStudy = () => {
  return (
    <>
      <SEO
        title="Prithivi Grid Construction — Infrastructure Branding Case Study | Fokel"
        description="How Fokel built a commanding corporate digital identity for Prithivi Grid Construction, tripling RFP inquiries and achieving Top 5 industry search rankings from zero presence."
        keywords="Prithivi Grid case study, infrastructure company branding, construction firm digital presence, B2B infrastructure marketing India, corporate identity design"
        url="https://www.fokelworks.com/work/prithivi-grid"
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
                Prithivi Grid
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Infrastructure & Grid Construction — Building Digital Credibility to Win High-Stakes Contracts
            </motion.p>
          </div>
        </section>

        {/* Logo Hero Panel */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-7xl mx-auto px-6 lg:px-12 mb-24"
        >
          <div
            className="aspect-[16/9] overflow-hidden rounded-2xl flex items-center justify-center relative"
            style={{ background: `linear-gradient(135deg, ${ACCENT}15 0%, #120a00 50%, ${ACCENT}08 100%)` }}
          >
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(${ACCENT} 1px, transparent 1px),
                  linear-gradient(90deg, ${ACCENT} 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
            {/* Diagonal accent lines */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, ${ACCENT} 0px, ${ACCENT} 1px, transparent 1px, transparent 80px)`,
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <img src={prithiviGridLogo} alt="Prithivi Grid Construction logo" className="h-20 md:h-28 opacity-90" />
              <div className="flex gap-3 flex-wrap justify-center">
                {["Infrastructure Branding", "Corporate Identity", "Digital Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-4 py-2 rounded-full border backdrop-blur-md"
                    style={{ color: ACCENT, borderColor: `${ACCENT}50`, background: `${ACCENT}18` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          </div>
        </motion.section>

        {/* Overview */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {[
              { label: "Client", value: "Prithivi Grid Construction" },
              { label: "Services", value: "Corporate Digital Identity, Engineering Portfolio Website, Thought Leadership Content, LinkedIn Presence, B2B Strategy" },
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
                Where Engineering Excellence Met Digital Invisibility
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex items-end">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Prithivi Grid Construction is a specialist infrastructure firm operating in one of India's most demanding B2B sectors — grid construction and infrastructure development. In this market, reputation and credibility are not just important; they are the primary currency for winning high-value government and private contracts. Yet despite having the technical capabilities, project delivery record, and engineering expertise to compete at the highest level, Prithivi Grid had no formal digital presence whatsoever. With procurement decisions increasingly beginning with online research and LinkedIn due diligence, this gap was actively costing them contract opportunities and premium partnership consideration. The mandate was unambiguous: build a commanding corporate digital identity that commands boardroom confidence.
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
                A Commanding Corporate Identity That Wins Contracts
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Authoritative Corporate Identity",
                  desc: "Built a commanding corporate brand identity that conveyed technical authority, engineering excellence, and institutional trustworthiness — creating a visual and verbal language appropriate for boardrooms and government procurement.",
                  num: "01",
                },
                {
                  icon: Globe,
                  title: "Engineering Portfolio Website",
                  desc: "Designed and developed an authoritative corporate website showcasing Prithivi Grid's technical capabilities, project portfolio, team credentials, and safety standards — structured to satisfy the due diligence requirements of institutional procurement teams.",
                  num: "02",
                },
                {
                  icon: Briefcase,
                  title: "Thought Leadership Content",
                  desc: "Developed a strategic thought leadership content programme — positioning Prithivi Grid's leadership as informed voices on infrastructure development, grid modernisation, and sustainable construction practices.",
                  num: "03",
                },
                {
                  icon: Award,
                  title: "LinkedIn & B2B Positioning",
                  desc: "Established and grew a credible LinkedIn corporate presence targeted at government bodies, private infrastructure investors, and premium project collaborators — creating a direct digital channel to decision-makers.",
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
              { stat: "0→1", label: "Full Corporate Digital Presence Built", display: "0→1" },
              { stat: "3×", label: "Growth in RFP & Tender Inquiries", value: 3, suffix: "×" },
              { stat: "Top 5", label: "Industry Search Rankings", display: "Top 5" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative p-8 rounded-2xl border bg-secondary/30 hover:border-accent/30 transition-colors duration-300 text-center group"
                style={{ borderColor: `${ACCENT}20` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
                />
                <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: ACCENT }}>
                  {(item as { display?: string }).display ? (item as { display?: string }).display : (
                    <AnimatedCounter value={item.value!} suffix={item.suffix} />
                  )}
                </p>
                <p className="text-sm text-muted-foreground leading-snug">{item.label}</p>
              </motion.div>
            ))}
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
              "In infrastructure, credibility wins contracts. Fokel gave us the digital presence to walk into any boardroom with confidence. Our RFPs have tripled."
            </p>
            <cite className="text-sm font-bold not-italic uppercase tracking-widest" style={{ color: ACCENT }}>
              — Managing Director, Prithivi Grid Construction
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

export default PrithiviGridCaseStudy;
