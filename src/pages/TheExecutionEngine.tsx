import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Map, Layers, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import imgIgnite from "@/assets/exec-ignite.jpg";
import imgBlueprint from "@/assets/exec-blueprint.jpg";
import imgBuild from "@/assets/exec-build.jpg";
import imgLaunch from "@/assets/exec-launch.jpg";

const steps = [
  {
    num: "01",
    label: "Ignite",
    title: "Initial Brief & Insight",
    tagline: "Speed starts with clarity.",
    icon: Zap,
    img: imgIgnite,
    imgAlt: "Hand holding a glowing network of connected people icons",
    imgCaption: "Connecting ideas at the speed of light.",
    imgSide: "right" as const,
    color: "#F59E0B", // Amber
    intro:
      "The fastest way to get somewhere is to know exactly where you're going. That's why our workflow begins with a focused, high-energy discovery session designed to extract the essential information we need to move forward—fast.\n\nWe don't bog you down with endless questionnaires or drawn-out meetings. Instead, we dive straight into what matters most: your core objectives, your target audience, and your key messages.",
    expect: [
      "A streamlined, no-fluff kickoff that respects your time.",
      "Clear alignment on goals, expectations, and success metrics.",
      "A shared understanding that serves as our North Star for the entire project.",
    ],
    result:
      "We eliminate guesswork, reduce back-and-forth, and set the stage for a workflow that moves with purpose from day one.",
  },
  {
    num: "02",
    label: "Blueprint",
    title: "Agile Strategy & Design",
    tagline: "Turning insights into action.",
    icon: Map,
    img: imgBlueprint,
    imgAlt: "Floating mobile phone UI screens",
    imgCaption: "Rapid wireframing and concepting.",
    imgSide: "left" as const,
    color: "#3B82F6", // Blue
    intro:
      "With a solid foundation in place, we transition seamlessly into the creative phase. But we don't operate in silos or take weeks to deliver a single concept. Instead, we work in rapid, iterative sprints that keep the momentum alive and the ideas flowing.\n\nOur team translates your mission into tangible creative assets—initial concepts, wireframes, mood boards, and visual directions. We present early and often, gathering your feedback in real-time to refine and evolve the work.",
    expect: [
      "Early concept presentations that give you a tangible feel for the direction.",
      "Rapid feedback loops that keep the project moving forward.",
      "A design that is not just beautiful, but deeply rooted in your brand's purpose.",
    ],
    result:
      "We move from strategy to visuals at speed, ensuring the creative vision is locked in and ready for the next phase.",
  },
  {
    num: "03",
    label: "Build & Refine",
    title: "Parallel Workflows",
    tagline: "Where speed meets sophistication.",
    icon: Layers,
    img: imgBuild,
    imgAlt: "Hand pointing at a branching software flowchart",
    imgCaption: "Simultaneous execution.",
    imgSide: "right" as const,
    color: "#8B5CF6", // Violet
    intro:
      "Most agencies work in a linear fashion—design first, then develop. This old-school approach creates bottlenecks, delays, and inefficiencies. We don't operate that way. Our workflow is built on parallel execution, where multiple streams of work happen simultaneously.\n\nWhile our designers are putting the final polish on your visual identity, our developers are already building the technical foundation. While content is being refined, our QA team is preparing testing protocols.",
    expect: [
      "A seamless handoff between design and development teams.",
      "Continuous quality checks at every stage of the build.",
      "Transparency into our progress, with clear milestones and updates.",
    ],
    result:
      "We cut project timelines in half while delivering a product that is robust, polished, and built to last.",
  },
  {
    num: "04",
    label: "Launch & Optimize",
    title: "Final Polish & Deploy",
    tagline: "The finish line is just the beginning.",
    icon: Rocket,
    img: imgLaunch,
    imgAlt: "Finished website running on laptop and mobile with glassmorphism stats",
    imgCaption: "Going live with impact.",
    imgSide: "left" as const,
    color: "#E05A28", // Orange/Accent
    intro:
      "The final stage is all about flawless execution. We bring everything together—design, content, functionality—and put it through rigorous testing to ensure every element performs exactly as intended. We cross every 't,' dot every 'i,' and leave no stone unturned.\n\nWhen we're confident that everything is perfect, we handle the deployment with precision and care. But our commitment doesn't end at launch.",
    expect: [
      "Thorough testing across devices, browsers, and platforms.",
      "A smooth, stress-free launch with minimal disruption.",
      "Ongoing support and training to empower your team.",
    ],
    result:
      "A polished, high-performing digital presence that represents your brand with excellence and grows with you over time.",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Agile by Design",
    desc: "We adapt quickly to changes and feedback without derailing timelines. Flexibility is built into every step.",
  },
  {
    icon: Layers,
    title: "Parallel Execution",
    desc: "We do more in less time by working on multiple fronts simultaneously—no bottlenecks, no wasted days.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Obsessed",
    desc: "Speed means nothing without excellence. We never compromise on standards, no matter the pace.",
  },
  {
    icon: Map,
    title: "Client-Centric",
    desc: "You're not a spectator—you're a partner in the process, every step of the way.",
  },
];

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
      className={`grid lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden border border-border/40 bg-secondary/20 backdrop-blur-sm ${
        isLeft ? "lg:[grid-template-areas:'img_text']" : "lg:[grid-template-areas:'text_img']"
      }`}
      style={{ gridTemplateAreas: undefined }}
    >
      {/* ── Image column ── */}
      <div
        className={`relative min-h-[320px] md:min-h-[500px] overflow-hidden ${
          isLeft ? "lg:order-first" : "lg:order-last"
        }`}
      >
        <motion.img
          src={step.img}
          alt={step.imgAlt}
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover scale-[1.15]"
        />
        {/* Soft radial overlay to ensure caption legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        
        {/* Blending edge */}
        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(to right, transparent 70%, hsl(var(--secondary)/0.5) 100%)"
              : "linear-gradient(to left, transparent 70%, hsl(var(--secondary)/0.5) 100%)",
          }}
        />

        {/* Huge glowing number */}
        <div
          className="absolute -top-10 -left-10 text-[12rem] font-black leading-none select-none pointer-events-none blur-[2px]"
          style={{ color: `${step.color}15` }}
        >
          {step.num}
        </div>

        {/* Caption floating card */}
        <div className="absolute bottom-6 left-6 right-6 lg:left-10 lg:bottom-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl backdrop-blur-xl border bg-black/40 shadow-2xl" style={{ borderColor: `${step.color}40` }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-black/50" style={{ color: step.color }}>
              <step.icon className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-white tracking-wide">
              {step.imgCaption}
            </span>
          </div>
        </div>
      </div>

      {/* ── Text column ── */}
      <div
        className={`flex flex-col justify-center p-8 md:p-12 lg:p-16 ${
          isLeft ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-black tracking-[0.2em] uppercase font-mono" style={{ color: step.color }}>
            {step.num}
          </span>
          <div className="h-px flex-1 max-w-[50px]" style={{ background: `${step.color}60` }} />
          <span
            className="text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border"
            style={{
              color: step.color,
              borderColor: `${step.color}30`,
              background: `${step.color}10`,
            }}
          >
            {step.label}
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4"
        >
          {step.title}
        </motion.h2>
        
        <p className="text-lg md:text-xl font-medium italic mb-6" style={{ color: step.color }}>
          {step.tagline}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 whitespace-pre-line"
        >
          {step.intro}
        </motion.p>

        <div className="bg-background/50 rounded-2xl p-6 border border-white/5 mb-6">
          <h3 className="text-xs uppercase tracking-widest font-bold mb-4 flex items-center gap-2" style={{ color: step.color }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: step.color }} />
            What to expect
          </h3>
          <ul className="flex flex-col gap-3">
            {step.expect.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: step.color }} />
                <span className="text-sm md:text-base text-foreground/80 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="border-l-[3px] pl-5 py-1" style={{ borderColor: step.color }}>
          <h3 className="text-xs uppercase tracking-widest font-bold mb-2 text-foreground/50">The Result</h3>
          <p className="text-foreground/90 font-medium text-base md:text-lg leading-snug">{step.result}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TheExecutionEngine = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <SEO
        title="The Execution Engine | Fokel Creative Agency"
        description="Fast execution without compromise. Discover how our agile, parallel workflow brings your brand into focus—faster than you thought possible."
      />
      <Navbar />

      <main className="pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* ── Hero ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-8 lg:w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
              Our Workflow
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold leading-[1.02] tracking-[-0.035em] font-heading"
            >
              The{" "}
              <span className="text-accent italic">Execution</span>
              <br /> Engine
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-col gap-6"
            >
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium">
                We build for impact—not just for the sake of being busy. 
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                In a world where speed often comes at the expense of quality, we've engineered a workflow that refuses to compromise. "Fast execution" isn't just a claim we make; it's a promise we keep—built on a streamlined, agile process that turns your vision into reality with precision, purpose, and pace.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Steps ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 md:gap-12">
            {steps.map((step, index) => (
              <StepSection key={step.num} step={step} index={index} />
            ))}
          </div>
        </section>

        {/* ── Why Our Workflow Works ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-32 lg:mt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="h-[2px] w-6 bg-accent rounded-full" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
                The Difference
              </span>
              <div className="h-[2px] w-6 bg-accent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading">
              Why our workflow{" "}
              <span className="text-accent italic">works</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-secondary/30 backdrop-blur-sm border border-border/50 rounded-[2rem] p-8 flex flex-col gap-6 hover:bg-secondary/50 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-24 lg:mt-32">
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

            <div className="relative z-10 p-8 md:p-16 lg:p-20 text-primary-foreground">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold mb-6">
                    <Zap className="w-3.5 h-3.5" />
                    Ready to accelerate?
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-heading mb-6 text-balance">
                    Ready to see our speed in action?
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
                    Let's talk about how our workflow can accelerate your project and bring your brand into focus—faster than you thought possible.
                  </p>
                  <Link
                    to="/#contact"
                    className="btn-primary inline-flex items-center gap-2 w-fit px-8 py-4 text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
                  >
                    Start a Project
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                
                {/* Visual element on right for CTA */}
                <div className="hidden lg:flex justify-end">
                  <div className="relative w-full aspect-square max-w-[400px]">
                    <div className="absolute inset-0 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="absolute inset-[20%] rounded-full border border-white/20 flex items-center justify-center">
                        <div className="absolute inset-[25%] rounded-full bg-accent/20 blur-xl animate-pulse" />
                        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl relative z-10">
                          <Rocket className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TheExecutionEngine;
