import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Building2, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroImg from "@/assets/exec-ignite.jpg";

const BlogInfrastructureBranding = () => {
  return (
    <>
      <SEO
        title="Why Construction & Infrastructure Firms Need a Digital Brand in 2026 | Fokel"
        description="India's infrastructure sector is worth ₹111 lakh crore. Yet most construction and infrastructure companies have websites built in 2012. Here's why that's costing them government tenders, private contracts, and top talent."
        keywords="construction company digital marketing India, infrastructure firm branding, B2B construction marketing, construction company website India, civil engineering firm digital presence"
        url="https://www.fokelworks.com/blog/infrastructure-branding-india"
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
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">Infrastructure Branding</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">July 07, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Why Construction & Infrastructure Firms Need a Digital Brand in 2026
            </h1>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20">
              <img src={heroImg} alt="Construction and infrastructure company digital branding" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              India's National Infrastructure Pipeline commits ₹111 lakh crore in projects through 2030. Private sector investment is surging. International joint ventures are actively seeking Indian partners. In this environment, your digital brand — or lack of it — is the first qualification filter every decision-maker applies before they even pick up the phone.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">The Tender Room Has Gone Digital</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Government procurement officers, private developers, and international JV partners all conduct extensive online due diligence before shortlisting contractors. A company with a dated website, no project gallery, no LinkedIn presence, and zero case studies is disqualified from consideration before the RFP process even begins — regardless of their actual capabilities.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl border border-border my-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Building2 className="text-accent w-6 h-6" /> The Credibility Gap
              </h3>
              <p className="text-base text-muted-foreground mb-0">
                Two infrastructure firms with identical capabilities go for the same government contract. Firm A has a professional website with project case studies, a LinkedIn page with 2,000 followers, and Google reviews from past clients. Firm B has a 2014 website with a broken contact form. Firm A gets the shortlist call. This is not about being digital-native. It's about being taken seriously.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">What a Strong Digital Brand Does for Infrastructure Companies</h2>
            <div className="space-y-8 mt-8 mb-12">
              {[
                { icon: <Shield />, title: "1. Pre-Qualifies You Before the RFP", desc: "A well-structured website with completed project pages, capacity statements, and safety certifications reduces the buyer's research effort to near zero. They arrive at the RFP meeting already convinced of your credibility — which fundamentally changes the negotiation dynamic." },
                { icon: <Globe />, title: "2. Expands Your Geographic Reach", desc: "Construction firms grow by geography. A strong digital presence means developers in Pune, Hyderabad, or even Dubai can find and vet you without a physical introduction. Your first pan-India or international client could discover you through a Google search at 11pm." },
                { icon: <TrendingUp />, title: "3. Attracts Top Civil Engineering Talent", desc: "The best civil engineers and project managers evaluate potential employers online before applying. A company with a compelling About page, clear values, and visible project portfolio attracts A-grade talent. Firms that are invisible online fill positions from bottom of the applicant pool." },
                { icon: <Building2 />, title: "4. Supports Consortium & JV Partnerships", desc: "International construction firms entering India actively search for local partners online. Your LinkedIn presence, English-language website, and case study portfolio are their first qualification criteria. Without this, you can't access the most lucrative international joint ventures." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-3 rounded-full h-fit shrink-0"><span className="text-accent">{item.icon}</span></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Your Digital Minimum Viable Brand</h2>
            <ul className="list-none space-y-3 mt-6 mb-10 p-0">
              {[
                "A professional website that loads in under 3 seconds on mobile, with clear service categories and a project portfolio.",
                "An active LinkedIn company page updated at least twice per month with project milestones, team achievements, and industry insights.",
                "Google Business Profile verified with your registered address, contact details, and a consistent NAP across all directories.",
                "5–10 detailed project case studies with before/after photos, scope of work, and timeline.",
                "A professional 'About Us' page naming your leadership team, your founding story, and your safety and compliance credentials.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-16 text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Build the Digital Presence Your Projects Deserve</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fokel built digital brands for infrastructure and construction companies including <Link to="/work/prithivi-grid" className="text-accent hover:underline">Prithivi Grid Construction</Link> and <Link to="/work/corporate-buildcon" className="text-accent hover:underline">Corporate Buildcon</Link> — tripling their inbound enquiries.
              </p>
              <Link to="/#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all hover:bg-accent/90">
                Build Your Infrastructure Brand
              </Link>
            </div>
          </div>
        </article>

        <div className="border-t border-border bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/work/prithivi-grid" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Case Study</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">Prithivi Grid: From Zero Digital Presence to Top 5 Industry Rankings</h4>
                </div>
              </Link>
              <Link to="/work/corporate-buildcon" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Case Study</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">Corporate Buildcon: A Complete Construction Brand Built from Zero</h4>
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

export default BlogInfrastructureBranding;
