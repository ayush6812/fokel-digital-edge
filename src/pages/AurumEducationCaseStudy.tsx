import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, Search, Video, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import aurumEducationLogo from "@/assets/clients/aurum-education.svg";
import aurumBanner from "@/assets/clients/Aurum Education banner.png";
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

const ACCENT = "#D4AF37";

const AurumEducationCaseStudy = () => {
  return (
    <>
      <SEO
        title="Aurum Education — EdTech Student Acquisition Case Study | Fokel"
        description="How Fokel helped Aurum Education achieve 220% more student enquiries, #1 local SEO rankings for key courses, and 4× social follower growth through premium brand and content strategy."
        keywords="Aurum Education case study, EdTech digital marketing India, student acquisition funnel, coaching centre SEO, education marketing agency"
        url="https://www.fokelworks.com/work/aurum-education"
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
                Aurum Education
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Premium Coaching & Education Consultancy — Automating Student Acquisition in the Digital-First EdTech Era
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
            style={{ background: `linear-gradient(135deg, ${ACCENT}15 0%, #1a1508 50%, ${ACCENT}08 100%)` }}
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, ${ACCENT} 1px, transparent 1px), radial-gradient(circle at 75% 75%, ${ACCENT} 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <img src={aurumEducationLogo} alt="Aurum Education logo" className="h-20 md:h-28 opacity-90" />
              <div className="flex gap-3 flex-wrap justify-center">
                {["EdTech Marketing", "Student Acquisition", "Content Strategy"].map((tag) => (
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
              { label: "Client", value: "Aurum Education" },
              { label: "Services", value: "Brand Identity, SEO Content Marketing, YouTube Strategy, Admissions Landing Pages, Social Media" },
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
                A Premium Education Brand Lost in the Digital Noise
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="flex items-end">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Aurum Education is a premium coaching and education consultancy with a strong track record of academic outcomes. However, in the rapidly evolving digital-first EdTech landscape, their student acquisition model was fundamentally broken. Their enrolment funnels were entirely manual and referral-dependent, their brand positioning was unclear against well-funded digital competitors, and their organic discoverability across search engines was near-zero. Despite genuine quality in delivery, they were invisible to the very students and parents actively searching for premium coaching solutions. The opportunity was significant — and so was the urgency to act.
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
                Premium Brand + Automated Student Acquisition Engine
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Premium Brand Identity",
                  desc: "Crafted a compelling brand identity that positioned Aurum as a trusted, aspirational academic partner — balancing academic credibility with warm, student-centric communication that resonated with both students and their parents.",
                  num: "01",
                },
                {
                  icon: FileText,
                  title: "SEO-Led Content Strategy",
                  desc: "Built a comprehensive content marketing programme — from keyword-targeted blog articles and FAQs to course-specific landing pages — systematically capturing high-intent search traffic from students actively researching their academic options.",
                  num: "02",
                },
                {
                  icon: Video,
                  title: "YouTube Channel Strategy",
                  desc: "Developed a consistent YouTube presence strategy featuring educational content, faculty introductions, and student success stories — establishing Aurum as an authority voice in their key academic disciplines.",
                  num: "03",
                },
                {
                  icon: Search,
                  title: "High-Converting Admissions System",
                  desc: "Built high-converting admissions landing pages with streamlined inquiry flows, social proof elements, and automated follow-up sequences — transforming the enrolment funnel from entirely manual to largely automated.",
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
              { stat: "220%", label: "Increase in Student Enquiries", value: 220, suffix: "%", prefix: "" },
              { stat: "#1", label: "Local SEO Rankings for Key Courses", display: "#1" },
              { stat: "4×", label: "Social Follower Growth", value: 4, suffix: "×", prefix: "" },
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
                  className="relative p-8 rounded-2xl border bg-secondary/30 hover:border-accent/30 transition-colors duration-300 text-center group"
                  style={{ borderColor: `${ACCENT}20` }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
                  />
                  <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: ACCENT }}>
                    {(item as { display?: string }).display ? (item as { display?: string }).display : (
                      <>
                        {parsed.prefix}
                        <AnimatedCounter value={parsed.num} suffix={parsed.suffix} />
                      </>
                    )}
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
              "Fokel transformed how students find and trust Aurum. Our enrolments are at an all-time high, and our brand finally reflects the quality of education we deliver."
            </p>
            <cite className="text-sm font-bold not-italic uppercase tracking-widest" style={{ color: ACCENT }}>
              — Director, Aurum Education
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

export default AurumEducationCaseStudy;
