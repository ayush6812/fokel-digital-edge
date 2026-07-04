import { motion } from "framer-motion";
import { ArrowLeft, Quote, TrendingUp, Users, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";

const BlogStrategicPartner = () => {
  return (
    <>
      <SEO
        title="Why Your Brand Needs a Strategic Digital Partner | Fokel Blog"
        description="In today's hyper-competitive digital landscape, the brands that truly break through the noise are those that find a partner, not just a vendor."
        url="https://www.fokelworks.com/blog/strategic-partner"
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
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">Strategy</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">June 25, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">6 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Why Your Brand Needs a Strategic Digital Partner, Not Just a Vendor
            </h1>

            {/* Hero image — full bleed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20"
            >
              <img
                src="/blog-strat-chart.jpg"
                alt="Strategic business growth — climbing the bar chart to reach the top"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs font-bold uppercase tracking-widest text-white/70">Strategic Growth</span>
              </div>
            </motion.div>

            {/* Intro */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              In today's hyper-competitive digital landscape, it's tempting to view your online presence through a checklist: a website, some social media posts, a few ads. But this fragmented approach rarely yields the transformative results ambitious brands are looking for.
            </p>
            <p className="text-xl font-semibold text-foreground mb-16">
              The brands that truly break through the noise are those that find a partner, not just a vendor.
            </p>
          </motion.div>

          {/* ── Section 1: The Problem — image RIGHT, text LEFT ── */}
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
                    src="/blog-strat-social.jpg"
                    alt="Fragmented vendor approach"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">The Problem</span>
                  </div>
                </div>
              </div>
              {/* Text left */}
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  The Problem with a "Vendor" Mentality
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    A vendor fulfills a task. You ask for a new website, they build it. You ask for an SEO audit, they deliver a report. The relationship is transactional, and the work, while perhaps functional, often exists in a silo. It doesn't connect to a bigger picture.
                  </p>
                  <p>
                    This approach results in content that is "off-brand" or "off target" for your long-term objectives, leading to inconsistent brand voice and a failure to build a compelling narrative. You end up with a collection of digital assets rather than a cohesive, powerful digital presence.
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
                "The most effective agencies find the niche in your market and scale your brand intelligently — they don't just execute tasks."
              </p>
            </div>
          </motion.div>

          {/* ── Section 2: The Philosophy — image LEFT, text RIGHT ── */}
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
                    src="/blog-strat-workshop.jpg"
                    alt="Strategy workshop session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Partner Philosophy
                  </div>
                </div>
              </div>
              {/* Text right */}
              <div className="w-full md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  Embracing a "Partner" Philosophy
                </h2>
                <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                  <p>
                    The agencies that achieve the best results act as strategic partners. They look beyond the immediate task to understand your business goals, your audience, and your competitive landscape.
                  </p>
                  <p>
                    This philosophy of partnership is central to how we operate at Fokel. We don't just execute; we immerse ourselves in your brand — becoming an extension of your team, not a contractor you manage from a distance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── What a Partner Delivers — 4 stat cards ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-foreground">
              What a True Digital Partner Delivers
            </h2>

            {/* Grid of 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                { icon: Target, title: "Strategy as the Foundation", body: "A data-informed roadmap that aligns every aspect of your digital presence with your core business objectives — not just a new website." },
                { icon: Users, title: "A Unified Brand Experience", body: "A consistent brand voice across all channels, building a narrative around your brand that resonates with your audience at every touchpoint." },
                { icon: Zap, title: "Proactive Thinking", body: "A partner brings fresh ideas, spots emerging trends, and helps you pivot when necessary — not waiting to be told what to do next." },
                { icon: TrendingUp, title: "Measurable Growth", body: "Beyond vanity metrics — focusing on traffic, leads, and conversion rates. Consistent content drives 67% more monthly leads." },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </motion.div>
              ))}
            </div>

            {/* 5th point inline */}
            <div className="p-6 rounded-2xl border border-border/30 bg-muted/30 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <span className="text-accent font-black text-lg">5</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">Long-Term Relationship, Long-Term Success</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The vendor relationship ends when the project is over. A partnership is an ongoing journey — collaborating to create a narrative around your brand, increasing audience interactions, and adjusting strategies over time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Collage: analytics image + stat pull ── */}
          <motion.div
            className="max-w-6xl mx-auto px-6 lg:px-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Large image left */}
              <div className="md:col-span-3 relative rounded-2xl overflow-hidden aspect-[16/9] shadow-xl border border-border/40">
                <img
                  src="/blog-strat-dash.jpg"
                  alt="A strategic partner translates complex data into actionable insights"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs text-white/70 font-medium leading-snug">
                  A strategic partner translates complex data into actionable insights that drive real growth.
                </p>
              </div>
              {/* Stat cards right */}
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex-1 rounded-2xl bg-accent p-6 flex flex-col justify-center text-white shadow-xl shadow-accent/20">
                  <div className="text-5xl font-black mb-2">67%</div>
                  <p className="text-sm font-medium text-white/80">more monthly leads from companies that publish consistent blog content</p>
                </div>
                <div className="flex-1 rounded-2xl bg-card border border-border/50 p-6 flex flex-col justify-center">
                  <div className="text-5xl font-black text-foreground mb-2">3×</div>
                  <p className="text-sm font-medium text-muted-foreground">more ROI from integrated strategy vs. isolated one-off campaigns</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Closing ── */}
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Bringing Your Brand into Focus</h2>
            <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-6">
              <p>
                At Fokel, our goal is to transform ambitious brands into undisputed market leaders. This isn't about delivering a project; it's about building a partnership rooted in strategic thinking, creative excellence, and a relentless drive for measurable results.
              </p>
              <p>
                We bring your brand into focus by integrating every aspect of our work — from web design to SEO to brand identity — into a unified strategy. It's this holistic, partner-driven approach that turns ambitious brands into market leaders.
              </p>
              <p className="text-foreground font-semibold">
                So, as you evaluate your digital presence, ask yourself: are you simply hiring a vendor to check boxes, or are you finding a partner to help you build something extraordinary?
              </p>
            </div>

            {/* CTA block */}
            <div className="mt-12 p-8 md:p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl text-foreground font-bold mb-4">Ready to bring your brand into focus?</h3>
              <p className="text-muted-foreground mb-6">
                Let's talk about how a strategic partnership with Fokel can unlock your next phase of growth.
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

export default BlogStrategicPartner;
