import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Search, PenTool, Code, Rocket, CheckCircle2, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import imgDiscover from "@/assets/process-discover.jpg";
import imgStrategize from "@/assets/process-strategize.jpg";
import imgBuild from "@/assets/process-build.jpg";
import imgLaunch from "@/assets/process-launch.jpg";

/* ─────────── data ─────────── */
const steps = [
  {
    num: "01",
    label: "Discover & Align",
    icon: Search,
    img: imgDiscover,
    imgAlt: "Two hands reaching toward each other symbolising discovery and alignment",
    imgCaption: "The moment connection begins.",
    imgSide: "right" as const,
    color: "#3B82F6",
    headline: "Every great project starts with understanding.",
    subheadline: "We listen first, then lead.",
    body: "This first phase is all about listening, asking the right questions, and getting to the heart of your purpose. We dive deep into your business, your audience, and your goals. We review existing materials and consult with key stakeholders to understand your core mission.",
    expect: [
      "We'll challenge you to think about what you want to achieve.",
      "You'll see us turn your goals and insights into a clear, strategic foundation.",
      "We want to know your vision to help bring it into focus.",
    ],
  },
  {
    num: "02",
    label: "Strategize & Design",
    icon: PenTool,
    img: imgStrategize,
    imgAlt: "A whiteboard covered in colourful sticky notes during a strategy session",
    imgCaption: "Ideas take shape before pixels do.",
    imgSide: "left" as const,
    color: "#F59E0B",
    headline: "We translate your mission into a tangible digital experience.",
    subheadline: "Bold thinking, collaborative crafting.",
    body: "We brainstorm, sketch, and design. This involves defining your brand's voice and feel, creating wireframes, and crafting visual concepts that are both authentic and impactful. It's a collaborative and iterative process where we refine ideas until they resonate.",
    expect: [
      "You'll see your brand come to life through initial concepts.",
      "We'll show you early drafts and designs, keeping you on the right track.",
      "Your feedback shapes the creative journey—every step of the way.",
    ],
  },
  {
    num: "03",
    label: "Build & Refine",
    icon: Code,
    img: imgBuild,
    imgAlt: "Hands reaching through a laptop screen in a creative studio setting",
    imgCaption: "Where ideas become reality.",
    imgSide: "right" as const,
    color: "#8B5CF6",
    headline: "Designs become a fully functional, polished digital experience.",
    subheadline: "Quality and precision at every pixel.",
    body: "Our team builds and develops the project, carefully crafting every element to align with the strategy. We load content, integrate features, and ensure everything works flawlessly. A crucial part of this stage is rigorous testing to guarantee a seamless user experience.",
    expect: [
      "Clear communication about timelines and milestones.",
      "Opportunities to review work and ensure it meets your expectations.",
      "Complete transparency—no surprises, ever.",
    ],
  },
  {
    num: "04",
    label: "Launch & Support",
    icon: Rocket,
    img: imgLaunch,
    imgAlt: "A modern, bright open-plan office representing ongoing professional support",
    imgCaption: "The launch is just the beginning.",
    imgSide: "left" as const,
    color: "#E05A28",
    headline: "We're committed to your long-term success.",
    subheadline: "A partner in it for the long haul.",
    body: "We handle the final launch with care, ensuring a smooth and successful deployment. After launch, we don't disappear. We provide training, support, and ongoing maintenance to keep your digital presence performing at its best.",
    expect: [
      "You'll have a partner who is invested in your brand's future.",
      "We'll equip you with the knowledge and tools to manage your platform.",
      "Ongoing support as your brand continues to evolve.",
    ],
  },
];

/* ─────────── single step ─────────── */
const StepSection = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const isLeft = step.imgSide === "left";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border/50 bg-secondary/30 ${
        isLeft ? "lg:[grid-template-areas:'img_text']" : "lg:[grid-template-areas:'text_img']"
      }`}
      style={{ gridTemplateAreas: undefined }}
    >
      {/* ── Image column ── */}
      <div
        className={`relative min-h-[320px] md:min-h-[480px] overflow-hidden ${
          isLeft ? "lg:order-first" : "lg:order-last"
        }`}
      >
        <motion.img
          src={step.img}
          alt={step.imgAlt}
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        {/* Gradient overlay so text on top is legible */}
        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(to right, transparent 60%, hsl(var(--secondary)/0.6) 100%), linear-gradient(to bottom, hsl(var(--background)/0.3) 0%, transparent 40%, hsl(var(--background)/0.5) 100%)"
              : "linear-gradient(to left, transparent 60%, hsl(var(--secondary)/0.6) 100%), linear-gradient(to bottom, hsl(var(--background)/0.3) 0%, transparent 40%, hsl(var(--background)/0.5) 100%)",
          }}
        />

        {/* Step number watermark */}
        <div
          className="absolute top-6 left-6 text-8xl font-black leading-none select-none pointer-events-none"
          style={{ color: `${step.color}22` }}
        >
          {step.num}
        </div>

        {/* Caption pill at bottom */}
        <div className="absolute bottom-5 left-5 right-5">
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md border"
            style={{
              color: step.color,
              borderColor: `${step.color}50`,
              background: `${step.color}18`,
            }}
          >
            <step.icon className="w-3 h-3" />
            {step.imgCaption}
          </span>
        </div>
      </div>

      {/* ── Text column ── */}
      <div
        className={`flex flex-col justify-center p-8 md:p-12 lg:p-14 ${
          isLeft ? "lg:order-last" : "lg:order-first"
        }`}
      >
        {/* Label + step */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-black tracking-[0.2em] uppercase font-mono"
            style={{ color: step.color }}
          >
            {step.num}
          </span>
          <div className="h-px flex-1 max-w-[40px]" style={{ background: `${step.color}60` }} />
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border"
            style={{
              color: step.color,
              borderColor: `${step.color}40`,
              background: `${step.color}12`,
            }}
          >
            {step.label}
          </span>
        </div>

        {/* Headlines */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-3"
        >
          {step.headline}
        </motion.h2>
        <p className="text-base font-semibold italic mb-6" style={{ color: step.color }}>
          {step.subheadline}
        </p>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-base mb-8"
        >
          {step.body}
        </motion.p>

        {/* What you can expect */}
        <div>
          <h3
            className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2"
            style={{ color: step.color }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
            What you can expect
          </h3>
          <ul className="flex flex-col gap-3">
            {step.expect.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: step.color }}
                />
                <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────── page ─────────── */
const BuiltForImpact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Built for Impact | Fokel Creative Agency"
        description="Our proven 4-step process to bring your brand into focus—from discovery to launch and beyond."
      />
      <Navbar />

      <main className="pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">

        {/* ── HERO ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-10 bg-accent rounded-full" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Our Process</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-[-0.035em] font-heading">
                Built for{" "}
                <span className="text-accent italic">Impact</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col gap-5"
            >
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                We believe the best digital experiences are built on a foundation of clarity and purpose.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                "Bringing your brand into focus" isn't just a tagline—it's the goal of our entire process. Our proven 4-step approach ensures we stay aligned with your mission from the very first conversation to the final launch, and beyond.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold mt-2">
                <ArrowDown className="w-4 h-4 animate-bounce" />
                <span>Scroll to explore our process</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8">
            {steps.map((step, index) => (
              <StepSection key={step.num} step={step} index={index} />
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-20 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-primary" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 p-8 md:p-14 text-primary-foreground">
              {/* Top: headline + intro side by side */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold mb-6">
                    <Rocket className="w-3.5 h-3.5" />
                    Ready to bring your brand into focus?
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] font-heading">
                    Now that you understand our process, let's make it yours
                  </h2>
                </div>
                <div className="flex flex-col justify-end gap-5">
                  <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed">
                    Let's talk about how we can apply every one of these steps to your project—and bring your brand into focus together.
                  </p>
                  <Link
                    to="/#contact"
                    className="btn-primary inline-flex items-center gap-2 w-fit px-7 py-3.5 shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
                  >
                    Let's Talk
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10 mb-10" />

              {/* 4-step recap grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { num: "01", label: "Discover & Align", blurb: "Deep listening. Strategic foundation." },
                  { num: "02", label: "Strategize & Design", blurb: "Creative direction. Collaborative craft." },
                  { num: "03", label: "Build & Refine", blurb: "Precision builds. Rigorous testing." },
                  { num: "04", label: "Launch & Support", blurb: "Smooth deployment. Long-term partnership." },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-2 hover:bg-white/10 transition-colors duration-300"
                  >
                    <span className="text-xs font-black tracking-[0.18em] text-accent font-mono">{item.num}</span>
                    <h3 className="text-sm font-bold leading-snug">{item.label}</h3>
                    <p className="text-xs text-primary-foreground/55 leading-relaxed">{item.blurb}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BuiltForImpact;
