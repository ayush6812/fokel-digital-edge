import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Trophy, Star, Zap, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Assets
import workHomelane from "@/assets/work-homelane.png";
import workSab from "@/assets/work-sab-collage.jpg";
import work22workspace from "@/assets/clients/22workspacebanner.jpeg";
import genesLogo from "@/assets/clients/genes.png";
import genesBanner from "@/assets/clients/Genes-Lecoanet-Hemant_1_mobile.png";
import wtcLogo from "@/assets/clients/wtc.png";
import wtcBanner from "@/assets/clients/WTCbannerimage.jpg";
import homelane from "@/assets/clients/homelane.png";
import sabProperties from "@/assets/clients/sab-properties.png";
import workspace22Logo from "@/assets/clients/22workspacenew.png";
import corporateBuildconLogo from "@/assets/clients/corporate-buildcon.svg";
import corporateBuildconBanner from "@/assets/clients/Coorporate buildcon banner.jpg";
import homesharkLogo from "@/assets/clients/homeshark.svg";
import homesharkBanner from "@/assets/clients/Homesharkbanner.png";
import aurumEducationLogo from "@/assets/clients/aurum-education.svg";
import aurumEducationBanner from "@/assets/clients/Aurum Education banner.png";
import prithiviGridLogo from "@/assets/clients/prithvilogo.png";
import prithiviGridBanner from "@/assets/clients/prithvigridbanner.avif";

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
      { stat: "60%", label: "Organic Traffic Growth" },
      { stat: "#1", label: "Rankings for Core Keywords" },
      { stat: "2.5×", label: "Increase in Qualified Leads" },
    ],
    quote:
      "Fokel didn't just improve our SEO—they transformed how we think about content and growth. The results speak for themselves.",
    quotePerson: "Marketing Lead, HomeLane",
  },
  {
    id: "wtc",
    client: "ITA-AITES WTC 2026",
    logo: wtcLogo,
    image: wtcBanner,
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
      { stat: "2.4×", label: "Sponsorship Inquiry Growth" },
      { stat: "23%", label: "Increase in Delegate Registrations" },
    ],
    quote:
      "The team understood the global scale of our event from day one. Their work elevated WTC 2026 beyond our expectations.",
    quotePerson: "Communications Director, ITA-AITES",
  },
  {
    id: "genes",
    client: "Genes Lecoanet Hemant",
    logo: genesLogo,
    image: genesBanner,
    industry: "Luxury Fashion / Couture",
    accentColor: "#8B5CF6",
    tags: ["Luxury Marketing", "Social Media", "Performance Campaigns"],
    link: "/work/genes-lecoanet-hemant",
    challenge:
      "One of India's most iconic luxury fashion houses needed to bridge their storied offline heritage with a compelling, modern digital presence that spoke to affluent, style-conscious audiences.",
    solution:
      "We delivered a premium social media storytelling strategy paired with performance marketing—creating aspirational content calendars, high-impact creatives, and precise audience targeting that balanced brand equity with commercial performance.",
    results: [
      { stat: "2×", label: "Social Engagement Growth" },
      { stat: "2.8×", label: "Return on Ad Spend" },
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
  {
    id: "22workspace",
    client: "22workspace",
    logo: workspace22Logo,
    image: work22workspace,
    industry: "Coworking / Managed Workspaces",
    accentColor: "#FF6B00",
    tags: ["Brand Identity", "Digital Marketing", "Lead Generation"],
    link: "/work/22workspace",
    challenge:
      "22workspace, a premium coworking brand in Central Delhi, had a strong physical presence but no cohesive digital strategy. Their online footprint was fragmented, limiting their ability to attract startups, SMEs, and corporate clients in a rapidly growing flexible-workspace market.",
    solution:
      "We built a full-stack digital brand engine—redesigning their web presence, crafting a compelling brand narrative, and deploying targeted lead-generation campaigns that spoke directly to their core audience of entrepreneurs and corporate decision-makers.",
    results: [
      { stat: "3×", label: "Increase in Online Enquiries" },
      { stat: "60%", label: "Occupancy Rate Growth" },
      { stat: "Top 3", label: "Local SEO Rankings in Delhi" },
    ],
    quote:
      "Fokel gave 22workspace the digital identity it always deserved. Our enquiries tripled within months—results we couldn't have imagined before.",
    quotePerson: "Founder, 22workspace",
  },
  {
    id: "corporate-buildcon",
    client: "Corporate Buildcon",
    logo: corporateBuildconLogo,
    image: corporateBuildconBanner,
    industry: "Construction / Real Estate Development",
    accentColor: "#4A90D9",
    tags: ["Construction Marketing", "B2B Branding", "Digital Presence"],
    link: "/work/corporate-buildcon",
    challenge:
      "Corporate Buildcon, a growing Delhi-based construction and real estate developer, operated without any meaningful digital infrastructure. Their brand equity was invisible online, costing them high-value contracts and qualified developer partnerships.",
    solution:
      "We established their end-to-end digital brand—from a professional corporate website and portfolio showcasing completed projects, to a targeted B2B outreach strategy designed to attract institutional clients, investors, and premium project collaborations.",
    results: [
      { stat: "0→1", label: "Complete Digital Brand Built" },
      { stat: "40%", label: "Rise in Inbound Project Enquiries" },
      { stat: "2×", label: "Growth in Partnership Pipeline" },
    ],
    quote:
      "We went from invisible to credible in the digital space. Fokel understood the construction industry and built us a brand that commands trust.",
    quotePerson: "Director, Corporate Buildcon",
  },
  {
    id: "homeshark",
    client: "Home Shark",
    logo: homesharkLogo,
    image: homesharkBanner,
    industry: "Real Estate / Property Sales",
    accentColor: "#00C9A7",
    tags: ["Real Estate Marketing", "Performance Ads", "Social Strategy"],
    link: "/work/homeshark",
    challenge:
      "Home Shark, an emerging real estate brand, struggled to differentiate itself in India's crowded residential property market. Despite competitive pricing and inventory, their digital channels were generating poor-quality leads and weak brand recognition.",
    solution:
      "We repositioned Home Shark as a buyer-first, transparent real estate brand—revamping their social media identity, launching hyper-targeted performance campaigns on Meta and Google, and building a conversion-optimised web experience that turned casual browsers into serious buyers.",
    results: [
      { stat: "2.5×", label: "Qualified Lead Volume Growth" },
      { stat: "40%", label: "Reduction in Cost Per Lead" },
      { stat: "90%", label: "Increase in Social Engagement" },
    ],
    quote:
      "Our lead quality transformed completely. Fokel didn't just run ads—they built a brand we're proud of and a pipeline that actually converts.",
    quotePerson: "CEO, Home Shark",
  },
  {
    id: "aurum-education",
    client: "Aurum Education",
    logo: aurumEducationLogo,
    image: aurumEducationBanner,
    industry: "Education / EdTech",
    accentColor: "#D4AF37",
    tags: ["EdTech Marketing", "Student Acquisition", "Content Strategy"],
    link: "/work/aurum-education",
    challenge:
      "Aurum Education, a premium coaching and education consultancy, faced intense competition for student attention in the digital-first EdTech era. Their enrolment funnels were manual, their brand positioning unclear, and organic discoverability near-zero.",
    solution:
      "We crafted a premium brand identity and content strategy that positioned Aurum as a trusted academic partner—deploying SEO-led blog content, YouTube strategy, and a high-converting admissions landing page system that automated their entire student acquisition pipeline.",
    results: [
      { stat: "80%", label: "Increase in Student Enquiries" },
      { stat: "#1", label: "Local SEO Rankings for Key Courses" },
      { stat: "2×", label: "Social Follower Growth" },
    ],
    quote:
      "Fokel transformed how students find and trust Aurum. Our enrolments are at an all-time high, and our brand finally reflects the quality of education we deliver.",
    quotePerson: "Director, Aurum Education",
  },
  {
    id: "prithivi-grid",
    client: "Prithivi Grid Construction",
    logo: prithiviGridLogo,
    image: prithiviGridBanner,
    industry: "Infrastructure / Grid Construction",
    accentColor: "#E8610A",
    tags: ["Infrastructure Branding", "Corporate Identity", "Digital Strategy"],
    link: "/work/prithivi-grid",
    challenge:
      "Prithivi Grid Construction, a specialist infrastructure firm, operated in a high-stakes B2B market where reputation and credibility are everything—yet had no formal digital presence to showcase their technical capabilities, project portfolio, or bid for premium government and private contracts.",
    solution:
      "We built a commanding corporate digital identity—an authoritative website showcasing engineering capabilities and past projects, combined with a thought-leadership content strategy and LinkedIn presence that positioned Prithivi Grid as a credible, tier-one infrastructure partner.",
    results: [
      { stat: "0→1", label: "Full Corporate Digital Presence" },
      { stat: "3×", label: "Growth in RFP & Tender Inquiries" },
      { stat: "Top 5", label: "Industry Search Rankings" },
    ],
    quote:
      "In infrastructure, credibility wins contracts. Fokel gave us the digital presence to walk into any boardroom with confidence. Our RFPs have tripled.",
    quotePerson: "Managing Director, Prithivi Grid Construction",
  },
];

const impactStats = [
  { icon: TrendingUp, value: "60%", label: "Average Organic Traffic Growth" },
  { icon: Zap, value: "2.5×", label: "Average ROAS for Clients" },
  { icon: Users, value: "40+", label: "Countries Reached" },
  { icon: Star, value: "95%", label: "Client Retention Rate" },
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
          {/* Multi-stop gradient for clean fade into card */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          {/* Accent color tint at top */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"
          />
          {/* Left vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
          {/* Accent glow at bottom edge */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }}
          />
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
              className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shrink-0 shadow-lg overflow-hidden"
              style={{ boxShadow: `0 4px 20px ${project.accentColor}30` }}
            >
              <img
                src={project.logo}
                alt={`${project.client} logo`}
                className={`w-full h-full object-contain ${project.id === "22workspace"
                    ? "scale-150"
                    : project.id === "prithivi-grid"
                      ? "scale-[1.4]"
                      : ""
                  }`}
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
            The Gallery of <span className="text-accent italic">Impact</span>
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
              Excellence is <span className="text-accent italic">non-negotiable</span>
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
              Work that <span className="text-accent italic">moves the needle</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
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
