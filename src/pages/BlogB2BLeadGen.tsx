import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, BarChart3, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroImg from "@/assets/process-strategize.jpg";

const BlogB2BLeadGen = () => {
  return (
    <>
      <SEO
        title="How to Build a B2B Lead Generation System That Runs on Autopilot | Fokel"
        description="Stop chasing individual leads. Learn how to build a compound B2B lead generation engine using SEO, content, and marketing automation — and make it run without constant manual effort."
        keywords="B2B lead generation India, automated lead generation, B2B digital marketing agency, marketing automation India, inbound marketing India"
        url="https://www.fokelworks.com/blog/b2b-lead-generation-autopilot"
        type="article"
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
          <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">B2B Growth</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">July 07, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">7 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              How to Build a B2B Lead Generation System That Runs on Autopilot
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20"
            >
              <img
                src={heroImg}
                alt="B2B lead generation strategy and automation workflow"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Most B2B businesses in India operate on a feast-or-famine lead cycle — a burst of referrals, then silence. A cold call sprint, then silence again. The fix isn't more effort. It's engineering a system that fills your pipeline while you sleep, speak at conferences, and close the deals already in front of you.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Problem With Manual Lead Hunting</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founder-led sales and cold outreach work — until they don't scale. When your sales team is 100% responsible for generating their own pipeline, two things happen: pipeline consistency drops dramatically, and your best talent spends hours on prospecting instead of closing. The answer is a compounding inbound lead engine.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl border border-border my-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-accent w-6 h-6" /> The Compound Effect of Inbound
              </h3>
              <p className="text-base text-muted-foreground mb-0">
                A blog post published today can generate qualified leads for the next 5 years. A paid ad stops the moment you stop paying. This is the fundamental difference between renting attention (ads) and owning attention (SEO + content). Smart B2B brands do both, but they build the owned asset first.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The 4-Layer Autopilot Lead System</h2>

            <div className="space-y-10 mt-8 mb-12">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Attract: SEO-Optimised Content Hub</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Create a library of long-form content targeting the exact search terms your ideal buyer uses when they have a problem you solve. For a B2B SaaS company, this might be <em>"how to reduce customer churn in SaaS"</em>. For a construction firm, it might be <em>"how to find commercial contractors in Delhi NCR"</em>. Each article is an always-on sales rep.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Convert: High-Value Lead Magnets</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Never ask for contact details in exchange for nothing. Offer a calculator, a checklist, a mini-audit, or a detailed industry report that your target buyer would genuinely pay for. Gated behind a simple form, this converts anonymous traffic into named, qualified leads in your CRM automatically.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nurture: Automated Email Sequences</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not every lead is ready to buy today. Set up a 6–10 email drip sequence that educates, builds trust, and moves leads down the funnel without any manual intervention. Tools like Mailchimp, HubSpot, or even ConvertKit handle this automatically based on what content a lead consumed.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Close: Intent-Based Outreach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Use your CRM to identify leads who have visited your pricing page 3+ times or downloaded multiple resources — these are your hot leads. Trigger a personalised, human-written outreach email at this moment. The difference is, your sales team is now only talking to people who have already shown clear buying intent.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Metrics That Actually Matter</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Stop tracking vanity metrics like page views and social followers. Build your B2B lead machine around these four KPIs:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: <BarChart3 className="w-6 h-6" />, label: "Organic Qualified Leads / Month", desc: "The number of inbound leads who match your ICP — not just total form fills." },
                { icon: <Zap className="w-6 h-6" />, label: "Lead-to-MQL Conversion Rate", desc: "What % of raw leads become Marketing Qualified Leads based on behaviour?" },
                { icon: <TrendingUp className="w-6 h-6" />, label: "Cost Per Qualified Lead (CPQL)", desc: "Total marketing spend divided by qualified leads. Track monthly, optimize quarterly." },
                { icon: <RefreshCw className="w-6 h-6" />, label: "Pipeline Coverage Ratio", desc: "Your total pipeline value vs. quarterly revenue target. Aim for 3:1 minimum." },
              ].map((m, i) => (
                <div key={i} className="bg-muted/20 p-6 rounded-xl border border-border">
                  <div className="text-accent mb-3">{m.icon}</div>
                  <h4 className="font-bold mb-1">{m.label}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">What Most Indian B2B Companies Get Wrong</h2>
            <ul className="list-none space-y-4 mt-6 mb-10 p-0">
              {[
                "They invest in paid ads before building any organic content foundation, burning budget for short-term spikes.",
                "They treat their website as a brochure rather than a 24/7 sales machine with clear CTAs at every stage.",
                "They have no lead nurturing sequence, so cold leads go cold permanently instead of being warmed over 30–60 days.",
                "They track traffic instead of pipeline contribution, making it impossible to justify or scale marketing investment.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-16 text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Lead Machine?</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fokel designs and deploys full-funnel B2B lead generation systems for Indian businesses — combining SEO, content, and automation. See how we helped <Link to="/work/sab-properties" className="text-accent hover:underline">SAB Properties</Link> build an automated B2B leasing pipeline.
              </p>
              <Link
                to="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Get a Free B2B Audit
              </Link>
            </div>
          </div>
        </article>

        {/* Read Next Section */}
        <div className="border-t border-border bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/work/sab-properties" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Case Study</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">SAB Properties: Automated B2B Property Leasing Pipeline</h4>
                </div>
              </Link>
              <Link to="/blog/real-estate-seo-india" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Real Estate SEO</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">The Ultimate SEO Guide for Real Estate Developers in India</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogB2BLeadGen;
