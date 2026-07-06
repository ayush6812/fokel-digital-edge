import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { ArrowRight, Search, PenTool, Code, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "DISCOVER & ALIGN",
    icon: Search,
    intro: "Every great project starts with understanding. This first phase is all about listening, asking the right questions, and getting to the heart of your purpose.",
    do: "We dive deep into your business, your audience, and your goals. We review existing materials and consult with key stakeholders to understand your core mission.",
    expect: "We'll challenge you to think about what you want to achieve. You'll see us turn your goals and insights into a clear, strategic foundation for the project. We want to know your vision to help bring it into focus."
  },
  {
    num: "02",
    title: "STRATEGIZE & DESIGN",
    icon: PenTool,
    intro: "With a solid foundation in place, we move into the creation phase. This is where we translate your mission into a tangible digital experience.",
    do: "We brainstorm, sketch, and design. This involves defining your brand's voice and feel, creating wireframes, and crafting visual concepts that are both authentic and impactful. It's a collaborative and iterative process where we refine ideas until they resonate.",
    expect: "You'll see your brand come to life through initial concepts. We'll show you early drafts and designs, ensuring we're on the right track. This is your chance to provide feedback and be an active part of the creative journey."
  },
  {
    num: "03",
    title: "BUILD & REFINE",
    icon: Code,
    intro: "This is where we turn designs into a fully functional and polished digital experience, focusing on quality and precision.",
    do: "Our team builds and develops the project, carefully crafting every element to align with the strategy. We load content, integrate features, and ensure everything works flawlessly. A crucial part of this stage is rigorous testing to guarantee a seamless user experience.",
    expect: "We'll maintain clear communication about timelines and milestones. You'll have opportunities to review the work and ensure it meets your expectations. Our goal is to be completely transparent so there are no surprises."
  },
  {
    num: "04",
    title: "LAUNCH & SUPPORT",
    icon: Rocket,
    intro: "The launch is just the beginning. We're committed to your long-term success and are here to support your brand as it grows.",
    do: "We handle the final launch with care, ensuring a smooth and successful deployment. After launch, we don't disappear. We provide training, support, and ongoing maintenance to keep your digital presence performing at its best.",
    expect: "You'll have a partner who is invested in your brand's future. We'll equip you with the knowledge and tools you need to manage your new platform and will be on hand to provide support and cheer you on as your brand continues to evolve."
  }
];

const BuiltForImpact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-white">
      <SEO 
        title="Built for Impact | Fokel Creative Agency" 
        description="Our proven process to bring your brand into focus." 
      />
      <Navbar />

      <main className="pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        {/* Hero */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-8 lg:w-12 bg-accent rounded-full" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Our Process</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.03em] mb-10 font-heading"
          >
            Built for <span className="text-accent italic">Impact</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 font-medium">
              We believe that the best digital experiences are built on a foundation of clarity and purpose. For us, "bringing your brand into focus" isn't just a tagline; it's the goal of our entire process.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              While every project is unique, our proven approach ensures we stay aligned with your mission from the very first conversation to the final launch. Here's how we bring your brand into focus.
            </p>
          </motion.div>
        </section>

        {/* Steps */}
        <section className="px-6 lg:px-12 max-w-5xl mx-auto">
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-12 relative"
              >
                {/* Vertical line for desktop */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-[59px] top-24 bottom-[-100px] w-[2px] bg-border/50 z-0" />
                )}

                <div className="flex flex-col items-start relative z-10">
                  <div className="w-20 h-20 md:w-[120px] md:h-[120px] rounded-full bg-secondary flex items-center justify-center border-4 border-background mb-4 text-accent">
                    <step.icon className="w-8 h-8 md:w-12 md:h-12" />
                  </div>
                  <span className="text-accent font-bold text-xl md:text-2xl font-mono tracking-widest pl-2">
                    {step.num}
                  </span>
                </div>

                <div className="pt-2 md:pt-6 relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-medium">
                    {step.intro}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-8 md:gap-12 bg-secondary/50 rounded-3xl p-6 md:p-10 border border-border/50">
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        What we do
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {step.do}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        What you can expect
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {step.expect}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mt-32 lg:mt-48">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-primary-foreground rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-50" />
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 font-heading text-balance">
                Ready to bring your brand into focus?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl text-balance">
                Now that you understand our process, let's talk about how we can apply it to your project.
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

export default BuiltForImpact;
