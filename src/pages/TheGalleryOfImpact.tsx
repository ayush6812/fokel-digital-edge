import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Trophy, Star, Zap, Users, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Assets
import workHomelane from "@/assets/work-homelane.png";
import workSab from "@/assets/work-sab.png";
import genesLogo from "@/assets/clients/genes.png";
import wtcLogo from "@/assets/clients/wtc.png";
import homelane from "@/assets/clients/homelane.png";
import sabProperties from "@/assets/clients/sab-properties.png";

const projects = [
  {
    id: "homelane",
    client: "HomeLane.com",
    logo: homelane,
    image: workHomelane,
    industry: "Home Interior Design / E-Commerce",
    accentColor: "#10B981",
    tags: ["B2B SEO", "Content Marketing", "Growth Strategy"],
    link: "/work/homelane",
    challenge:
      "HomeLane faced fierce competition in India's booming interior design market. Despite a strong offline presence, their organic digital footprint was under-indexed, leaving massive search demand untapped.",
    solution:
      "We built a full-spectrum SEO and content marketing engine—keyword architecture, topical authority clusters, on-page optimization, and conversion-led blog content—all aligned to HomeLane's commercial goals.",
    results: [
      { stat: "98%", label: "Organic Traffic Growth" },
      { stat: "#1", label: "Rankings for Core Keywords" },
      { stat: "3×", label: "Increase in Qualified Leads" },
    ],
    quote:
      "Fokel didn't just improve our SEO—they transformed how we think about content and growth. The results speak for themselves.",
    quotePerson: "Marketing Lead, HomeLane",
  },
  {
    id: "wtc",
    client: "ITA-AITES WTC 2026",
    logo: wtcLogo,
    image: null,
    industry: "Global Events / Engineering",
    accentColor: "#3B82F6",
    tags: ["Event Marketing", "Digital Strategy", "International Branding"],
    link: "/work/wtc-2026",
    challenge:
      "The World Tunnel Congress needed a cohesive digital presence to attract global engineering professionals, sponsors, and delegates to Montréal 2026—across multiple languages and time zones.",
    solution:
      "We crafted a comprehensive international digital strategy encompassing brand identity, multi-channel campaigns, and an immersive event web experience that conveyed the prestige of the world's leading tunnelling conference.",
    results: [
      { stat: "40+", label: "Countries Reached" },
      { stat: "5×", label: "Sponsorship Inquiry Growth" },
      { stat: "60%", label: "Increase in Delegate Registrations" },
    ],
    quote:
      "The team understood the global scale of our event from day one. Their work elevated WTC 2026 beyond our expectations.",
    quotePerson: "Communications Director, ITA-AITES",
  },
  {
    id: "genes",
    client: "Genes Lecoanet Hemant",
    logo: genesLogo,
    image: null,
    industry: "Luxury Fashion / Couture",
    accentColor: "#8B5CF6",
    tags: ["Luxury Marketing", "Social Media", "Performance Campaigns"],
    link: "/work/genes-lecoanet-hemant",
    challenge:
      "One of India's most iconic luxury fashion houses needed to bridge their storied offline heritage with a compelling, modern digital presence that spoke to affluent, style-conscious audiences.",
    solution:
      "We delivered a premium social media storytelling strategy paired with performance marketing—creating aspirational content calendars, high-impact creatives, and precise audience targeting that balanced brand equity with commercial performance.",
    results: [
      { stat: "4×", label: "Social Engagement Growth" },
      { stat: "220%", label: "Return on Ad Spend" },
      { stat: "Top 5", label: "Luxury Fashion Brand in Organic Search" },
    ],
    quote:
      "Fokel understood the nuance of luxury. They didn't just market us—they told our story with the elegance it deserved.",
    quotePerson: "Brand Director, Genes Lecoanet Hemant",
  },
  {
    id: "sab",
    client: "SAB Properties",
    logo: sabProperties,
    image: workSab,
    industry: "Commercial Real Estate / B2B Leasing",
    accentColor: "#06B6D4",
    tags: ["Commercial Real Estate", "B2B Lead Gen", "Web Directory"],
    link: "/work/sab-properties",
    challenge:
      "SAB Properties, a premier Delhi estate agency, relied entirely on referrals and broker networks. They lacked any direct-to-client digital infrastructure to reach high-net-worth individuals and corporate tenants.",
    solution:
      "We architected a direct-to-client commercial property directory platform with an automated B2B leasing pipeline—combining an ultra-premium design language with smart lead qualification and CRM integration.",
    results: [
      { stat: "0→1", label: "From Zero to Full Digital Presence" },
      { stat: "85%", label: "Reduction in Broker Dependency" },
      { stat: "HNW", label: "Direct Client Pipeline Established" },
    ],
    quote:
      "Fokel built exactly what we envisioned—a digital presence that matches the calibre of the properties we represent.",
    quotePerson: "Principal, SAB Properties",
  },
];

const pillars = [
  {
    icon: Trophy,
    title: "Strategic Depth",
    desc: "We don't just design—we think. Every decision is rooted in a deep understanding of your brand, audience, and goals.",
  },
  {
    icon: Star,
    title: "Creative Excellence",
    desc: "Our work is bold, beautiful, and built to stand out. We craft experiences that capture attention and inspire action.",
  },
  {
    icon: Award,
    title: "Award-Winning Standards",
    desc: "We hold ourselves to the highest standards of quality. Our track record of recognition reflects that commitment.",
  },
  {
    icon: Users,
    title: "Partnership, Not Transaction",
    desc: "We're invested in your success. Your growth is our growth, and we go the extra mile to ensure you achieve your vision.",
  },
];

const impactStats = [
  { icon: TrendingUp, value: "98%", label: "Average Organic Traffic Growth" },
  { icon: Zap, value: "4×", label: "Average ROAS for Clients" },
  { icon: Users, value: "40+", label: "Countries Reached" },
  { icon: Star, value: "100%", label: "Client Retention Rate" },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="group relative bg-secondary/40 border border-border/50 rounded-3xl overflow-hidden hover:border-border transition-all duration-500"
    >
      {/* Project image if available */}
      {project.image && (
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={project.image}
            alt={project.client}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}50`,
                  background: `${project.accentColor}18`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shrink-0 shadow-lg"
              style={{ boxShadow: `0 4px 20px ${project.accentColor}30` }}
            >
              <img
                src={project.logo}
                alt={`${project.client} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">{project.client}</h3>
              <p className="text-sm text-muted-foreground mt-0.5">{project.industry}</p>
            </div>
          </div>
          <Link
            to={project.link}
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center border border-border/50 hover:border-accent/50 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tags if no image */}
        {!project.image && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full border"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}50`,
                  background: `${project.accentColor}18`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Challenge / Solution */}
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2 flex items-center gap-2" style={{ color: project.accentColor }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor }} />
              The Challenge
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-2 flex items-center gap-2" style={{ color: project.accentColor }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.accentColor }} />
              Our Solution
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div
          className="rounded-2xl p-5 mb-6 border"
          style={{
            background: `${project.accentColor}0a`,
            borderColor: `${project.accentColor}30`,
          }}
        >
          <h4 className="text-xs uppercase tracking-widest font-bold mb-4" style={{ color: project.accentColor }}>
            The Results
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {project.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: project.accentColor }}>
                  {r.stat}
                </p>
                <p className="text-xs text-muted-foreground mt-1 leading-tight">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="border-l-2 pl-4" style={{ borderColor: `${project.accentColor}60` }}>
          <p className="text-sm italic text-foreground/80 leading-relaxed mb-2">"{project.quote}"</p>
          <cite className="text-xs text-muted-foreground not-italic font-semibold">— {project.quotePerson}</cite>
        </blockquote>
      </div>
    </motion.div>
  );
};

const TheGalleryOfImpact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="The Gallery of Impact | Fokel Creative Agency"
        description="Award-winning quality that delivers real, measurable results. Explore Fokel's portfolio of work across real estate, fashion, events, and more."
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
            <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Our Work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.03em] mb-10 font-heading"
          >
            The Gallery{" "}
            <br />
            of <span className="text-accent italic">Impact</span>.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6 font-medium">
              We don't just build digital experiences—we craft them with precision, creativity, and an unwavering commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Award-Winning Quality" isn't just a badge we wear; it's the standard we hold ourselves to on every single project, no matter the size or scope. This is what happens when purpose meets precision.
            </p>
          </motion.div>
        </section>

        {/* ── Impact Stats Bar ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/50 border border-border/50 rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-accent mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── What Sets Our Work Apart ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-secondary/40 border border-border/50 rounded-3xl p-8 md:p-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-6 h-6 text-accent" />
              <span className="text-sm uppercase tracking-widest font-bold text-accent">What Sets Our Work Apart</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Excellence is <span className="text-accent italic">non-negotiable</span>.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl">
              Every project we undertake is approached with the same level of dedication, craftsmanship, and attention to detail. Whether we're building a bold new brand identity, designing a high-performance website, or crafting a digital experience that captivates audiences, we never settle for "good enough."
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: "Creativity That Resonates", desc: "We don't follow trends—we set them. Our designs are distinctive, memorable, and deeply aligned with your brand's purpose." },
                { title: "Innovation That Differentiates", desc: "We push boundaries and embrace new technologies to create experiences that stand out in crowded markets." },
                { title: "Impact That Matters", desc: "Our work isn't just about looking good—it's about driving real, measurable results for your business." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-accent rounded-full" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Work that <span className="text-accent italic">moves the needle</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* ── Awards & Recognition ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-accent rounded-full" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Recognition</span>
              <div className="h-[2px] w-8 bg-accent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading mb-4">
              Awards & <span className="text-accent italic">Accolades</span>.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to have our work celebrated by industry leaders and peers. These accolades reflect our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { year: "2025", award: "Best Digital Campaign", category: "Real Estate Marketing" },
              { year: "2025", award: "Excellence in SEO", category: "B2B Growth Strategy" },
              { year: "2024", award: "Top Creative Agency", category: "Luxury Brand Marketing" },
              { year: "2024", award: "Innovation Award", category: "International Events Digital" },
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/40 border border-border/50 rounded-2xl p-6 text-center hover:border-accent/30 transition-colors duration-300 group"
              >
                <Trophy className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-2xl font-black text-accent mb-1">{a.year}</p>
                <p className="font-bold text-sm mb-1">{a.award}</p>
                <p className="text-xs text-muted-foreground">{a.category}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Clients Choose Us ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-8 bg-accent rounded-full" />
              <span className="text-sm font-medium tracking-[0.3em] uppercase text-accent">Why Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
              Why clients <span className="text-accent italic">choose</span> us.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/40 border border-border/50 rounded-2xl p-6 md:p-8 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-base">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary text-primary-foreground rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-transparent to-transparent" />
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/8 blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold mb-8">
                <Trophy className="w-4 h-4" />
                Ready to create something award-worthy?
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8 font-heading text-balance">
                Your brand deserves excellence.
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl text-balance">
                Let's talk about how we can bring your vision to life with the same creativity, innovation, and impact that defines our best work.
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

export default TheGalleryOfImpact;
