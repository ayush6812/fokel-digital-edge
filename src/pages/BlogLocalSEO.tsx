import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MapPin, Star, TrendingUp, Search } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroImg from "@/assets/process-discover.jpg";

const BlogLocalSEO = () => {
  return (
    <>
      <SEO
        title="Local SEO for Service Businesses in Delhi: A Step-by-Step Guide | Fokel"
        description="If you run a service business in Delhi NCR and you're not showing up in 'near me' searches, you're losing customers daily. Here's how to fix it — step by step."
        keywords="local SEO Delhi, local SEO India, Google Business Profile Delhi, near me SEO India, local search marketing Delhi NCR"
        url="https://www.fokelworks.com/blog/local-seo-delhi-guide"
        type="article"
      />
      <div className="bg-background min-h-screen text-foreground">
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center">
            <Link to="/#blog" className="group flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors uppercase tracking-wider">
              <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.2 }}><ArrowLeft className="w-4 h-4" /></motion.span>
              Back to Blog
            </Link>
          </div>
        </motion.div>

        <article className="pt-40 pb-24">
          <motion.div className="max-w-4xl mx-auto px-6 lg:px-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">Local SEO</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">July 07, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Local SEO for Service Businesses in Delhi: A Step-by-Step Guide
            </h1>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20">
              <img src={heroImg} alt="Local SEO strategy for Delhi service businesses" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Over 76% of people who perform a "near me" search on their phone visit a business within 24 hours. In a city like Delhi, where millions of service searches happen daily — from "interior designer in Defence Colony" to "CA firm in Connaught Place" — your Local SEO ranking is the difference between a full calendar and an empty one.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">What Is Local SEO — And Why Delhi Businesses Underinvest in It</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Local SEO is the process of optimising your online presence so that Google shows your business to people searching for your services in your specific geographic area. Unlike national SEO, the competition is finite — you're only competing with other businesses in your area. Yet most Delhi businesses invest nothing in it, making it the highest ROI channel most are ignoring.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl border border-border my-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-accent w-6 h-6" /> The Local Pack Dominates
              </h3>
              <p className="text-base text-muted-foreground mb-0">
                When someone searches "digital agency in Delhi", the top results are not organic website listings — they're the Google Maps "Local Pack" showing 3 businesses with ratings, photos, and directions. These 3 positions receive over 60% of all clicks. If you're not in the Local Pack, you're invisible to most searchers.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The 6-Step Local SEO Playbook for Delhi Businesses</h2>
            <div className="space-y-10 mt-8 mb-12">
              {[
                { icon: <MapPin />, step: "1", title: "Claim & Fully Optimise Your Google Business Profile", desc: "This is Step Zero. Go to business.google.com. Verify your business. Fill in every single field: category, description (500 characters, use your keywords), services, opening hours, photos (minimum 20 high-quality photos), and your exact address. Businesses with complete profiles get 7× more clicks." },
                { icon: <Star />, step: "2", title: "Build a Consistent Review Velocity", desc: "Google's local algorithm heavily weights the number and recency of reviews. Set up an automated WhatsApp message that goes to every client after a project closes, asking them to leave a Google review. Aim for 2–3 new reviews per month. Respond to every review — positive and negative." },
                { icon: <Search />, step: "3", title: "Create Location-Specific Landing Pages", desc: "If you serve multiple areas across Delhi NCR, create a dedicated page for each. E.g., '/interior-designer-south-delhi', '/interior-designer-gurgaon'. Each page should have unique content about that location — not just a copy-paste with the area name swapped." },
                { icon: <TrendingUp />, step: "4", title: "Build Local Citations & NAP Consistency", desc: "A 'citation' is any online mention of your business name, address, and phone number (NAP). List your business on JustDial, IndiaMart, Sulekha, Yelp, and industry-specific directories. Critically, ensure your NAP is IDENTICAL across every listing — even minor inconsistencies (Road vs Rd, Mobile vs Ph) dilute your local authority." },
                { icon: <MapPin />, step: "5", title: "Publish Locally Relevant Content", desc: "Write blog posts targeting local searches: 'Best coworking spaces in East of Kailash', 'Guide to opening a restaurant in Hauz Khas Village'. This signals deep local relevance to Google and captures long-tail search traffic that aggregators don't touch." },
                { icon: <Star />, step: "6", title: "Earn Local Backlinks", desc: "Get mentioned and linked by local Delhi publications, neighbourhood Facebook groups, local business associations, and Chamber of Commerce websites. A single backlink from a Delhi-specific domain carries far more local authority than a generic national link." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-black text-lg">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-16 text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Dominate Local Search in Delhi</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fokel is a Delhi-based agency that specialises in local SEO for service businesses across Delhi NCR. We've helped brands like <Link to="/work/22workspace" className="text-accent hover:underline">22workspace</Link> rank #1 for their target local keywords.
              </p>
              <Link to="/#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all hover:bg-accent/90">
                Get a Local SEO Audit
              </Link>
            </div>
          </div>
        </article>

        <div className="border-t border-border bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/work/22workspace" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Case Study</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">22workspace: Tripling Coworking Enquiries in Delhi</h4>
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

export default BlogLocalSEO;
