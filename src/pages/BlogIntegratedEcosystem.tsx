import { motion } from "framer-motion";
import { ArrowLeft, Quote, Globe, BarChart2, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const BlogIntegratedEcosystem = () => {
  return (
    <>
      <SEO
        title="The Future of Brand Growth | Fokel Blog"
        description="Why an Integrated Digital Ecosystem Beats One-Off Tactics. The brands that win are those that build an integrated digital ecosystem where every element works together to create a seamless, compelling brand experience."
        url="https://www.fokelworks.com/blog/integrated-ecosystem"
      />
      <div className="bg-background min-h-screen text-foreground">
        {/* Fixed nav */}
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center">
            <Link
              to="/#blog"
              className="group flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors uppercase tracking-wider"
            >
              <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              Back to Blog
            </Link>
          </div>
        </motion.div>

        <article className="pt-40 pb-24">

          {/* ── Hero ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">Digital Growth</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">June 30, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">8 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The Future of Brand Growth: Why an Integrated Digital Ecosystem Beats One-Off Tactics
            </h1>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20"
            >
              <img
                src="/blog-ecosystem-hero.jpg"
                alt="The Broken Maze vs The Unified Path — silos confuse, integration connects"
                className="w-full h-full object-cover bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Integration Strategy</span>
              </div>
            </motion.div>

            {/* Intro */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              The digital landscape has fundamentally shifted. Your audience no longer follows a linear path from discovery to purchase — they move fluidly between search engines, social platforms, and AI-driven tools like ChatGPT.
            </p>
            <p className="text-xl font-semibold text-foreground mb-16">
              The brands that win are those that build an integrated digital ecosystem where every element works together.
            </p>
          </motion.div>

          {/* ── Section 1: Fragmented vs Integrated — image RIGHT, text LEFT ── */}
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
              {/* Image right */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/40 aspect-[4/3]">
                  <img
                    src="/blog-ecosystem-social.jpg"
                    alt="Fragmented silos vs integrated channels"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Shift</span>
                  </div>
                </div>
              </div>
              {/* Text left */}
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  From Fragmented to Integrated
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    A fragmented approach — a website built by one team, SEO managed by another, and social media handled separately — creates inconsistency. Your brand voice shifts across channels. Your messaging fails to build a cohesive narrative.
                  </p>
                  <p>
                    And your audience, encountering these disjointed touchpoints, struggles to form a clear, compelling picture of what your brand stands for. An integrated ecosystem ensures that from a customer's first interaction to their final purchase, every touchpoint reinforces your brand's story.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Pull Quote ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative border-l-4 border-accent pl-8 py-6">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-accent bg-background" />
              <p className="text-2xl md:text-3xl font-semibold text-foreground leading-snug italic">
                "Whether a customer reads a blog post, watches a video, or sees a social media ad — they should experience the same consistent, powerful brand message."
              </p>
            </div>
          </motion.div>

          {/* ── 4 Pillars — grid cards ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">
              The Four Pillars of a Unified Ecosystem
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Layers, num: "01", title: "A Unified Brand Narrative", body: "A compelling, authentic story that defines your brand's purpose, values, and promise — acting as the guiding light for all digital activities." },
                { icon: Globe, num: "02", title: "Search & Social Intelligence", body: "Combining traditional SEO with social search, ensuring your brand is visible wherever your audience is looking — including AI platforms like ChatGPT." },
                { icon: BarChart2, num: "03", title: "Performance Marketing with Purpose", body: "Paid advertising designed to amplify your brand narrative and drive specific outcomes — not just chasing short-term clicks." },
                { icon: Cpu, num: "04", title: "Data-Driven Decision Making", body: "Data from all touchpoints — website, social, ads — giving you a holistic view of the customer journey to optimize and personalize constantly." },
              ].map(({ icon: Icon, num, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Ghost number */}
                  <div className="absolute -bottom-2 -right-2 text-8xl font-black text-border/[0.08] select-none pointer-events-none leading-none">
                    {num}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Collage: social + growth images + stat ── */}
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Tall left image */}
              <div className="col-span-2 md:col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-border/40 aspect-square md:aspect-auto">
                <img
                  src="/blog-ecosystem-social.jpg"
                  alt="Social media connectivity"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs text-white/80 font-medium">
                  An integrated brand shows up consistently across every platform.
                </p>
              </div>
              {/* Top right image */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/40 aspect-video">
                <img
                  src="/blog-ecosystem-growth.jpg"
                  alt="Growth chart"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
              </div>
              {/* Stat card */}
              <div className="rounded-2xl bg-accent p-6 flex flex-col justify-center text-white shadow-xl shadow-accent/20">
                <div className="text-5xl font-black mb-2">∞</div>
                <p className="text-sm font-medium text-white/80">compound growth effect when all channels are in sync</p>
              </div>
              {/* Bottom right image */}
              <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-xl border border-border/40 aspect-video">
                <img
                  src="/blog-ecosystem-growth.jpg"
                  alt="Digital holographic growth chart showing upward trend"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs text-white/80 font-medium">
                  When every channel works in sync, the compound effect on growth becomes unmistakable.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Closing — image LEFT, text RIGHT ── */}
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
              {/* Image left */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/40 aspect-[4/3]">
                  <img
                    src="/blog-ecosystem-hero.jpg"
                    alt="Fokel integrated approach"
                    className="w-full h-full object-cover bg-white"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Fokel Approach
                  </div>
                </div>
              </div>
              {/* Text right */}
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  The Fokel Approach: Bringing Your Brand into Focus
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    At Fokel, we believe that true brand growth comes from this integrated ecosystem approach. We don't just build websites or run campaigns — we partner with you to develop a unified digital strategy that aligns your brand narrative, search and social presence, and performance marketing into a cohesive, powerful system.
                  </p>
                  <p>
                    We use data to inform every decision, ensuring that your digital presence is not just active, but effective.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CTA ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8 md:p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl text-foreground font-bold mb-4">Ready to Build Your Digital Ecosystem?</h3>
              <p className="text-muted-foreground mb-6">
                The future of brand growth lies in integration, not fragmentation. If you're ready to move beyond isolated tactics, let's talk.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground font-medium rounded-full hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogIntegratedEcosystem;
