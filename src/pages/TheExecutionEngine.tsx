import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Map, Layers, Rocket, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import imgIgnite from "@/assets/exec-ignite.jpg";
import imgBlueprint from "@/assets/clients/agile strategy .jpg";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row rounded-[2rem] overflow-hidden border border-border/40 bg-secondary/20 backdrop-blur-sm ${
        isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* ── Image column ── */}
      <div className="relative w-full lg:w-[45%] shrink-0 overflow-hidden" style={{ minHeight: "320px" }}>
        <motion.img
          src={step.img}
          alt={step.imgAlt}
          style={{ y: imgY }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

        {/* Blending edge toward text */}
        <div
          className="absolute inset-0"
          style={{
            background: isLeft
              ? "linear-gradient(to right, transparent 60%, hsl(var(--secondary)/0.6) 100%)"
              : "linear-gradient(to left, transparent 60%, hsl(var(--secondary)/0.6) 100%)",
          }}
        />

        {/* Step number watermark */}
        <div
          className="absolute -top-6 -left-4 text-[9rem] font-black leading-none select-none pointer-events-none blur-[1px]"
          style={{ color: `${step.color}18` }}
        >
          {step.num}
        </div>

        {/* Caption chip */}
        <div className="absolute bottom-5 left-5 right-5">
          <div
            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl backdrop-blur-xl border bg-black/50 shadow-xl"
            style={{ borderColor: `${step.color}40` }}
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-black/50" style={{ color: step.color }}>
              <step.icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-medium text-white/90 tracking-wide">{step.imgCaption}</span>
          </div>
        </div>
      </div>

      {/* ── Text column ── */}
      <div className="flex flex-col justify-center px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 flex-1 min-w-0">
        {/* Label row */}
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-black tracking-[0.25em] uppercase font-mono" style={{ color: step.color }}>
            {step.num}
          </span>
          <div className="h-px w-8" style={{ background: `${step.color}60` }} />
          <span
            className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border"
            style={{ color: step.color, borderColor: `${step.color}35`, background: `${step.color}12` }}
          >
            {step.label}
          </span>
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.15] tracking-tight mb-3"
        >
          {step.title}
        </motion.h2>

        {/* Tagline */}
        <p className="text-base font-medium italic mb-5" style={{ color: step.color }}>
          {step.tagline}
        </p>

        {/* Intro body */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6 whitespace-pre-line"
        >
          {step.intro}
        </motion.p>

        {/* What to expect */}
        <div className="bg-background/40 rounded-xl p-5 border border-white/5 mb-5">
          <h3 className="text-[10px] uppercase tracking-widest font-bold mb-3 flex items-center gap-2" style={{ color: step.color }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: step.color }} />
            What to expect
          </h3>
          <ul className="flex flex-col gap-2.5">
            {step.expect.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: step.color }} />
                <span className="text-sm text-foreground/75 leading-snug">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* The Result */}
        <div className="border-l-2 pl-4 py-0.5" style={{ borderColor: step.color }}>
          <h3 className="text-[10px] uppercase tracking-widest font-bold mb-1.5 text-foreground/40">The Result</h3>
          <p className="text-foreground/85 font-medium text-sm md:text-base leading-snug">{step.result}</p>
        </div>
      </div>
    </motion.div>
  );
};

/* ──────────────────────────────────────────────
   CTA Section — Rocket glow + launch animation
────────────────────────────────────────────── */
const CtaSection = () => {
  const navigate = useNavigate();
  const [launching, setLaunching] = useState(false);
  const [launchPath, setLaunchPath] = useState<{ xs: number[]; ys: number[]; rots: number[]; scales: number[]; times: number[] } | null>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const ROCKET_SIZE = 48; // px — flying rocket size

  const handleLaunch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (launching) return;

    // Get rocket icon center on screen
    const rect = rocketRef.current?.getBoundingClientRect();
    const ox = rect ? rect.left + rect.width / 2 : window.innerWidth * 0.78;
    const oy = rect ? rect.top + rect.height / 2 : window.innerHeight * 0.6;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Generate a smooth sweeping arc that cuts across the page and dives to the contact section
    // Start point: rocket button
    const p0 = { x: ox, y: oy };
    // Control point: swoop up and towards the center
    const p1 = { x: vw * 0.5, y: -vh * 0.1 };
    // End point: straight down to the center bottom (contact section)
    const p2 = { x: vw * 0.5, y: vh * 1.2 };
    
    // 120 points for a perfectly smooth Bezier curve
    const pts = Array.from({ length: 121 }, (_, i) => {
      const t = i / 120;
      const mt = 1 - t;
      // Quadratic Bezier formula
      const x = Math.pow(mt, 2) * p0.x + 2 * mt * t * p1.x + Math.pow(t, 2) * p2.x;
      const y = Math.pow(mt, 2) * p0.y + 2 * mt * t * p1.y + Math.pow(t, 2) * p2.y;
      
      // Accelerating scale effect at the very end
      const scale = 1 + (11 * Math.pow(t, 6)); // final scale = 12
      return { x, y, scale };
    });
    
    const half = ROCKET_SIZE / 2;
    const xs = pts.map(p => p.x - half);
    const ys = pts.map(p => p.y - half);
    const scales = pts.map(p => p.scale);
    
    // Smooth cumulative rotation to avoid 360->0 snapping jitter
    const rots: number[] = [];
    let currentRot = 0;
    
    for (let i = 0; i < pts.length; i++) {
      if (i === pts.length - 1) {
        rots.push(currentRot); // Use the same rotation for the final zoom
        continue;
      }
      const pt = pts[i];
      const next = pts[i + 1];
      const dx = next.x - pt.x;
      const dy = next.y - pt.y;
      
      const targetRot = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      
      if (i === 0) {
        currentRot = targetRot;
      } else {
        // Find shortest path to targetRot to avoid wrap-around snapping
        let diff = targetRot - ((currentRot % 360 + 360) % 360);
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        currentRot += diff;
      }
      rots.push(currentRot);
    }

    const numPoints = pts.length;
    // Standard linear time spacing, we will use an ease curve on the motion.div instead
    const times = pts.map((_, i) => i / (numPoints - 1));

    setLaunchPath({ xs, ys, rots, scales, times });
    setLaunching(true);

    // Navigate after animation finishes (1.8 s)
    setTimeout(() => {
      setLaunching(false);
      setLaunchPath(null);
      navigate("/#contact");
    }, 1800);
  };

  return (
    <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-24 lg:mt-32">
      {/* ── Flying rocket during launch ── */}
      <AnimatePresence>
        {launching && launchPath && (
          <motion.div
            key="flying-rocket"
            className="fixed z-[9999] pointer-events-none"
            style={{ left: 0, top: 0, width: ROCKET_SIZE, height: ROCKET_SIZE }}
            initial={{ x: launchPath.xs[0], y: launchPath.ys[0], rotate: launchPath.rots[0], scale: launchPath.scales[0], opacity: 1 }}
            animate={{ x: launchPath.xs, y: launchPath.ys, rotate: launchPath.rots, scale: launchPath.scales, opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 2.6, ease: "linear", times: launchPath.times }}
          >
            {/* Orange glow halo — purely radial gradient, no expensive CSS blur filter */}
            <div
              className="absolute inset-0 rounded-full scale-[4]"
              style={{ background: "radial-gradient(circle, #f97316bb 0%, #f9731155 40%, transparent 70%)" }}
            />
            {/* Inner glow — purely radial gradient */}
            <div
              className="absolute inset-0 rounded-full scale-[2]"
              style={{ background: "radial-gradient(circle, #fbbf2490 0%, transparent 60%)" }}
            />
            {/* Rocket SVG — no drop-shadow filter for max performance during scale */}
            <Rocket
              className="w-full h-full text-orange-400 relative z-10"
            />
          </motion.div>

        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[100px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative z-10 p-8 md:p-16 lg:p-20 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left — text + button */}
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
              <button
                onClick={handleLaunch}
                disabled={launching}
                className="btn-primary inline-flex items-center gap-2 w-fit px-8 py-4 text-lg shadow-xl shadow-accent/20 hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {launching ? "Launching…" : "Start a Project"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right — Rocket visual with orange glow */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
                {/* Orbit rings */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[18%] rounded-full border border-white/15" />

                {/* Pulsing orange glow */}
                <motion.div
                  className="absolute inset-[22%] rounded-full"
                  style={{
                    background: "radial-gradient(circle, #f9731660 0%, #f9731630 55%, transparent 85%)",
                    filter: "blur(28px)",
                  }}
                  animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Second softer glow */}
                <motion.div
                  className="absolute inset-[10%] rounded-full"
                  style={{
                    background: "radial-gradient(circle, #f9731622 0%, transparent 70%)",
                    filter: "blur(40px)",
                  }}
                  animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />

                {/* Rocket button — bigger, clickable */}
                <motion.div
                  ref={rocketRef}
                  whileHover={{ scale: 1.2, y: -8 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                  className="relative z-10 cursor-pointer group"
                  onClick={handleLaunch}
                  style={{ visibility: launching ? "hidden" : "visible" }}
                >
                  {/* Hover bloom */}
                  <div
                    className="absolute -inset-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle, #f9731645 0%, transparent 70%)",
                      filter: "blur(18px)",
                    }}
                  />
                  {/* Static soft glow ring */}
                  <div
                    className="absolute -inset-3 rounded-full blur-lg"
                    style={{ background: "radial-gradient(circle, #f9731638 0%, transparent 70%)" }}
                  />
                  {/* Button circle — bigger */}
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border-2 border-orange-400/50 group-hover:border-orange-400 group-hover:bg-orange-500/25 flex items-center justify-center shadow-2xl shadow-orange-500/20 transition-all duration-300 relative">
                    <Rocket
                      className="w-14 h-14 text-white group-hover:text-orange-300 transition-colors duration-300"
                      style={{ filter: "drop-shadow(0 0 10px #f97316) drop-shadow(0 0 4px #fff)" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
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
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
};

export default TheExecutionEngine;
