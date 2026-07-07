import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Lightbulb, Globe, Sparkles, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroImg from "@/assets/process-launch.jpg";

const BlogBrandIdentity = () => {
  return (
    <>
      <SEO
        title="Brand Identity for Startups: What to Get Right Before You Spend on Ads | Fokel"
        description="Running ads without a brand is like pouring water into a leaking bucket. Here's what Indian startups must build first — and why brand identity is the highest-ROI investment you'll ever make."
        keywords="brand identity startup India, startup branding guide, brand strategy India, how to build a brand India, branding agency India"
        url="https://www.fokelworks.com/blog/brand-identity-startups"
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
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">Brand Strategy</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">July 07, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">6 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Brand Identity for Startups: What to Get Right Before You Spend on Ads
            </h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20"
            >
              <img
                src={heroImg}
                alt="Brand identity design for Indian startups"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Every week, a founder somewhere in India is launching Google Ads on a product with a generic logo, a cluttered website, and a name that sounds like five other companies. The ads run. The clicks come. Nothing converts. They blame the ads. The real problem is the brand.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why Brand Identity Is a Growth Multiplier</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Brand identity isn't your logo. It's the complete system of visual, verbal, and emotional signals that tell a customer — instantly — who you are, who you're for, and why you're different from the dozen other options in their browser. A strong brand identity doesn't just make you look good. It makes every rupee you spend on marketing work harder.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl border border-border my-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Lightbulb className="text-accent w-6 h-6" /> The $1 vs $10 Principle
              </h3>
              <p className="text-base text-muted-foreground mb-0">
                Research from Nielsen consistently shows that a strong brand can reduce the cost of customer acquisition by 50% or more. When people recognise and trust your brand, your ad CTR rises, your conversion rate rises, and your word-of-mouth referrals compound. ₹1 spent on brand building can generate ₹10+ in reduced acquisition costs over time.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The 5 Brand Identity Elements Every Startup Needs</h2>

            <div className="space-y-10 mt-8 mb-12">
              {[
                {
                  icon: <Globe className="w-6 h-6 text-accent" />,
                  title: "1. A Memorable Name With Room to Grow",
                  desc: "Your name should be easy to pronounce, easy to spell, and easy to Google. Avoid initials (ABC Pvt Ltd), category descriptors (Best Printing Solutions), and names so specific they trap you in one product. Think Fokel, Swiggy, Zepto — short, memorable, searchable."
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-accent" />,
                  title: "2. A Logo System — Not Just a Logo",
                  desc: "You need a primary logo, a secondary compact version (for app icons and favicons), and a symbol or monogram version. These three variants ensure your brand looks sharp on everything from a billboard to a WhatsApp DP. A single logo designed for business cards will not work across all touchpoints."
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-accent" />,
                  title: "3. A Brand Colour System",
                  desc: "Choose 1 primary colour, 1 secondary colour, and 2 neutrals. Define their exact HEX, RGB, and CMYK values. Consistency across your website, social media, packaging, and sales materials is what builds recognition — and recognition is what converts browsers into buyers."
                },
                {
                  icon: <Lightbulb className="w-6 h-6 text-accent" />,
                  title: "4. Brand Voice & Tone Guidelines",
                  desc: "Are you authoritative or conversational? Playful or premium? Formal or irreverent? Write 3 sentences describing your brand's voice, and 5 example phrases you would and wouldn't say. This single document ensures every piece of content — from Instagram captions to investor decks — sounds like the same human."
                },
                {
                  icon: <Globe className="w-6 h-6 text-accent" />,
                  title: "5. A Positioning Statement",
                  desc: "Fill in this template: 'For [specific customer], [brand name] is the [category] that [unique benefit] because [proof point].' This positioning statement is the strategic foundation of everything. Without it, your marketing will always feel scattered."
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-3 rounded-full h-fit shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Red Flags That Signal a Brand Isn't Ready for Ads</h2>
            <ul className="list-none space-y-3 mt-6 mb-10 p-0">
              {[
                "Your logo looks different on your website vs. your business card vs. your Instagram profile.",
                "You struggle to describe what makes you different from your top competitor in one sentence.",
                "Your landing page has no clear hero statement and buries the value proposition below the fold.",
                "Your social media switches between formal press-release language and casual emojis with no consistency.",
                "Your pricing page doesn't inspire enough trust to justify your actual price point.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-16 text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Build a Brand That Compounds Over Time</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fokel specialises in brand identity for ambitious Indian startups and growing businesses. We build the visual and strategic foundation that makes every future marketing investment more effective. See our work with <Link to="/work/22workspace" className="text-accent hover:underline">22workspace</Link> and <Link to="/work/genes-lecoanet-hemant" className="text-accent hover:underline">Genes Lecoanet Hemant</Link>.
              </p>
              <Link
                to="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all hover:bg-accent/90"
              >
                Start Your Brand Project
              </Link>
            </div>
          </div>
        </article>

        {/* Read Next Section */}
        <div className="border-t border-border bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/blog/strategic-partner" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Strategy</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">Why Your Brand Needs a Strategic Digital Partner, Not Just a Vendor</h4>
                </div>
              </Link>
              <Link to="/blog/b2b-lead-generation-autopilot" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">B2B Growth</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">How to Build a B2B Lead Generation System That Runs on Autopilot</h4>
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

export default BlogBrandIdentity;
