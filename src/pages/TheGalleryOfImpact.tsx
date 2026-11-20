import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartProjectCTA from "@/components/StartProjectCTA";
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
import codingalLogo from "@/assets/codingal/logo.svg";
import codingalBanner from "@/assets/codingal/hero-banner.png";

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
  {
    id: "codingal",
    client: "Codingal",
    logo: codingalLogo,
    image: codingalBanner,
    industry: "EdTech / Y Combinator-Backed",
    accentColor: "#FF5A43",
    tags: ["Mobile App", "Web Platform", "SEO"],
    link: "/work/codingal",
    challenge:
      "Codingal teaches AI and coding to kids and teens through live, 1:1 online classes with expert instructors, serving families across 135 countries. The experience had to make it effortless for parents to book classes, follow progress and stay connected with the learning team.",
    solution:
      "We delivered the app experience that lets families book a free trial, attend live 1:1 classes, track assignments and certificates through a parent dashboard, and join coding competitions, shipped as an Android app on Google Play alongside the web platform and its SEO.",
    results: [
      { stat: "1M+", label: "Students Registered" },
      { stat: "135", label: "Countries" },
      { stat: "4.6/5", label: "Trustpilot Rating" },
    ],
  },
  {
    id: "care24",
    client: "Care24",
    image: "https://images.unsplash.com/photo-1765896387387-0538bc9f997e?auto=format&fit=crop&w=1200&q=80",
    industry: "Home Healthcare",
    accentColor: "#FF5A1F",
    tags: ["SaaS Platform", "SEO"],
    link: "/work/care24",
    challenge:
      "Care24 is a leading home healthcare provider that connects families with verified nurses, patient attendants, physiotherapists and baby-care professionals across 10+ cities.",
    solution:
      "Fokel supported the platform with SEO and the operations technology that keeps bookings, caregivers and schedules running smoothly across cities, from patient booking and care plans to an admin dashboard for operations.",
    results: [
      { stat: "2,000+", label: "Caregiver & Nurse Profiles" },
      { stat: "10+", label: "Cities Served" },
      { stat: "4.1/5", label: "Google Rating" },
    ],
  },
  {
    id: "invoid",
    client: "Invoid",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    industry: "FinTech / Invoice Automation SaaS",
    accentColor: "#FF5A1F",
    tags: ["FinTech SaaS", "OCR", "AP Automation"],
    link: "/work/invoid",
    challenge:
      "Invoid is an invoice automation platform built to take the manual work out of accounts payable.",
    solution:
      "It captures invoices with OCR, routes them through multi-step approvals and gives finance teams one place to manage vendors, with role-based access, background job queues and cloud hosting on AWS.",
    results: [
      { stat: "OCR", label: "Automated Data Capture" },
      { stat: "AP", label: "Payables Automation" },
      { stat: "4", label: "Core Modules" },
    ],
  },
];

const impactStats = [
  { value: "60%", label: "Average Organic Traffic Growth" },
  { value: "2.5×", label: "Average ROAS for Clients" },
  { value: "40+", label: "Countries Reached" },
  { value: "95%", label: "Client Retention Rate" },
];

const principles = [
  { title: "Creativity That Resonates", desc: "We don't follow trends—we set them. Our designs are distinctive, memorable, and deeply aligned with your brand's purpose." },
  { title: "Innovation That Differentiates", desc: "We push boundaries and embrace new technologies to create experiences that stand out in crowded markets." },
  { title: "Impact That Matters", desc: "Our work isn't just about looking good—it's about driving real, measurable results for your business." },
];

const marqueeItems = ["Selected Work", "Real Clients", "Measurable Results", "Built To Perform"];

const headingFont = { fontFamily: "var(--font-heading)" };

const MonoLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-xs md:text-sm text-accent uppercase tracking-widest font-bold block ${className}`}>{children}</span>
);

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
      className="group border border-white/10 hover:border-white/25 bg-[#0a0a0a] transition-colors duration-500 flex flex-col"
    >
      {/* Image */}
      <Link to={project.link} className="relative block aspect-[16/10] overflow-hidden bg-black">
        <img
          src={project.image}
          alt={project.client}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover md:grayscale md:brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700"
        />
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-black/40 md:scale-0 group-hover:scale-100 transition-transform duration-500">
          <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
        </span>
      </Link>

      <div className="p-6 md:p-8 lg:p-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="min-w-0">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 block mb-3">{project.industry}</span>
            <Link to={project.link}>
              <h3
                className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.95] group-hover:text-accent transition-colors duration-500"
                style={headingFont}
              >
                {project.client}
              </h3>
            </Link>
          </div>
          {project.logo && (
            <div className="w-12 h-12 shrink-0 bg-white flex items-center justify-center p-2 overflow-hidden">
              <img
                src={project.logo}
                alt={`${project.client} logo`}
                className={`w-full h-full object-contain ${
                  project.id === "22workspace" ? "scale-150" : project.id === "prithivi-grid" ? "scale-[1.4]" : ""
                }`}
              />
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-white/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/60">
              {tag}
            </span>
          ))}
        </div>

        {/* Challenge / Solution */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-3">The Challenge</h4>
            <p className="text-white/60 text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-3">Our Solution</h4>
            <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="mt-auto border-t border-white/10 grid grid-cols-3 divide-x divide-white/10">
          {project.results.map((r) => (
            <div key={r.label} className="pt-6 px-3 first:pl-0 last:pr-0">
              <p className="text-2xl md:text-3xl font-black tracking-tighter text-white" style={headingFont}>
                {r.stat}
              </p>
              <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-white/40 mt-2 leading-snug">{r.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        {project.quote && (
          <blockquote className="border-l-2 border-accent pl-4 mt-8">
            <p className="text-sm text-white/70 leading-relaxed mb-2">"{project.quote}"</p>
            <cite className="font-mono text-[10px] uppercase tracking-widest text-white/40 not-italic">— {project.quotePerson}</cite>
          </blockquote>
        )}
      </div>
    </motion.article>
  );
};

const TheGalleryOfImpact = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white antialiased overflow-x-clip">
      <SEO
        title="The Gallery of Impact | Fokel Creative Agency"
        description="Award-winning quality that delivers real, measurable results. Explore Fokel's portfolio of work across real estate, fashion, events, and more."
      />
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="pt-36 md:pt-48 pb-20 md:pb-28 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-8"
            >
              <MonoLabel className="mb-6">Our Work — ({String(projects.length).padStart(2, "0")})</MonoLabel>
              <h1 className="text-[clamp(3.5rem,9vw,8.5rem)] font-black uppercase tracking-tighter leading-[0.85]" style={headingFont}>
                The Gallery <br />
                of Impact<span className="text-accent">.</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-4 flex flex-col gap-6 lg:pb-3"
            >
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-[2] text-white/50">
                We don't just build digital experiences—we craft them with{" "}
                <span className="text-white/90">precision, creativity, and an unwavering commitment to excellence.</span>
              </p>
              <p className="text-white/50 text-sm leading-relaxed">
                "Award-Winning Quality" isn't just a badge we wear; it's the standard we hold ourselves to on every single project, no matter
                the size or scope.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Impact Stats ── */}
        <section className="border-b border-white/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`px-6 md:px-12 py-10 md:py-14 border-white/10 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                  i === 1 ? "lg:border-r" : ""
                }`}
              >
                <p className="text-5xl md:text-6xl font-black tracking-tighter mb-3" style={headingFont}>
                  {stat.value}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── What Sets Our Work Apart ── */}
        <section className="py-24 md:py-32 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <MonoLabel className="mb-6">What Sets Our Work Apart</MonoLabel>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8" style={headingFont}>
                Excellence is non-negotiable<span className="text-accent">.</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                Every project we undertake is approached with the same level of dedication, craftsmanship, and attention to detail. Whether
                we're building a bold new brand identity, designing a high-performance website, or crafting a digital experience that
                captivates audiences, we never settle for "good enough."
              </p>
            </motion.div>
            <div className="lg:col-span-7 lg:col-start-6 border-t border-white/10">
              {principles.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr] gap-4 py-8 border-b border-white/10"
                >
                  <span className="font-mono text-xs text-accent font-bold pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3" style={headingFont}>
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee strip */}
        <div className="w-full bg-orange-600 py-4 md:py-6 overflow-hidden flex">
          <div className="animate-marquee flex min-w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex gap-16 items-center px-8 font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span>{item}</span>
                    <span className="w-2 h-2 rounded-full bg-black" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured Projects ── */}
        <section className="py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-16 md:mb-20"
            >
              <MonoLabel className="mb-6">Featured Projects</MonoLabel>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]" style={headingFont}>
                Work that moves <br className="hidden md:block" />
                the needle<span className="text-accent">.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <StartProjectCTA />

      <Footer />
    </div>
  );
};

export default TheGalleryOfImpact;
