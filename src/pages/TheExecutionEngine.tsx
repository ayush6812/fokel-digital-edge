import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Zap, Map, Layers, Rocket, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    label: "Ignite",
    title: "Initial Brief & Insight",
    tagline: "Speed starts with clarity.",
    icon: Zap,
    color: "from-amber-500/20 to-transparent",
    accentColor: "#F59E0B",
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
    color: "from-blue-500/20 to-transparent",
    accentColor: "#3B82F6",
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
    tagline: "This is where speed meets sophistication.",
    icon: Layers,
    color: "from-violet-500/20 to-transparent",
    accentColor: "#8B5CF6",
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
    color: "from-accent/20 to-transparent",
    accentColor: "#E05A28",
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.03em] mb-10 font-heading"
          >
            The{" "}
            <span className="text-accent italic">Execution</span>
            <br />
            Engine.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 font-medium">
              We build for impact—not just for the sake of being busy. In a world where speed often comes at the expense of quality, we've engineered a workflow that refuses to compromise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Fast execution" isn't just a claim we make; it's a promise we keep—built on a streamlined, agile process that turns your vision into reality with precision, purpose, and pace.
            </p>
          </motion.div>
        </section>

        {/* ── Steps ── */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-12 relative"
              >
                {/* Connector line */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-[59px] top-24 bottom-[-100px] w-[2px] bg-border/40 z-0" />
                )}

                {/* Step badge */}
                <div className="flex flex-col items-start relative z-10">
                  <div
                    className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full flex items-center justify-center border-4 border-background mb-4 relative overflow-hidden"
                    style={{ background: `hsl(var(--secondary))` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color}`}
                    />
                    <step.icon
                      className="w-8 h-8 md:w-11 md:h-11 relative z-10"
                      style={{ color: step.accentColor }}
                    />
                  </div>
                  <span
                    className="font-bold text-xl md:text-2xl font-mono tracking-widest pl-2"
                    style={{ color: step.accentColor }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-6 relative z-10">
                  {/* Label pill */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border"
                    style={{
                      color: step.accentColor,
                      borderColor: `${step.accentColor}40`,
                      background: `${step.accentColor}12`,
                    }}
                  >
                    <step.icon className="w-3 h-3" />
                    {step.label}
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg text-accent font-semibold italic mb-6">
                    {step.tagline}
                  </p>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-8 whitespace-pre-line">
                    {step.intro}
                  </p>

                  {/* Expect + Result card */}
                  <div className="bg-secondary/50 rounded-3xl p-6 md:p-10 border border-border/50">
                    <div className="mb-8">
                      <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-5 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        What you can expect
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {step.expect.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2
                              className="w-5 h-5 mt-0.5 shrink-0"
                              style={{ color: step.accentColor }}
                            />
                            <span className="text-muted-foreground leading-relaxed text-base">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-border/40 pt-6">
                      <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        The result
                      </h3>
                      <p className="text-foreground/90 font-medium leading-relaxed text-base">
                        {step.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 bg-accent rounded-full" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
                The Difference
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading">
              Why our workflow{" "}
              <span className="text-accent italic">works</span>.
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
                className="bg-secondary/50 border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col gap-5 hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
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
            className="bg-primary text-primary-foreground rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-8">
                <Zap className="w-4 h-4" />
                Ready to accelerate?
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 font-heading text-balance">
                Ready to see our speed in action?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl text-balance">
                Now that you understand how we work, let's talk about how our workflow can accelerate your project and bring your brand into focus—faster than you thought possible.
              </p>
              <Link
                to="/#contact"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4 shadow-xl shadow-accent/20 hover:scale-105 transition-transform"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TheExecutionEngine;
