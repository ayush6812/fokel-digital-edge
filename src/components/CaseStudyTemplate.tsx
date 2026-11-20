import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import SEO from "@/components/SEO";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StartProjectCTA from "@/components/StartProjectCTA";

// Shared layout for case studies written from the Fokel Projects Portfolio,
// styled to match the home page (see CodingalCaseStudy for the bespoke version).

export const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

type Photo = { src: string; alt: string; tag?: string };

export interface CaseStudyData {
  seo: { title: string; description: string; keywords: string; url: string };
  name: string;
  industry: string;
  category: string;
  headline: string;
  overview: string;
  heroCaption: { text: string; highlight: string };
  cta: { label: string; href: string };
  engagement: string[];
  role: string;
  status: string;
  deliverables: string[];
  technology: string[];
  stats: { value: string; label: string }[];
  statsNote?: string;
  marquee: string[];
  photos: { hero: Photo; pair: [Photo, Photo]; closing: Photo };
  next: { name: string; link: string; tags: string[]; image: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

// Same character-stagger reveal as the home page's StoryInNumbers
const AnimatedNumber = ({ text }: { text: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? "visible" : "hidden"} className="inline-flex overflow-hidden">
      {text.split("").map((char, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const MonoLabel = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-mono text-xs md:text-sm text-accent uppercase tracking-widest font-bold block ${className}`}>
    {children}
  </span>
);

const CaseStudyTemplate = ({ data }: { data: CaseStudyData }) => {
  const isExternal = /^(https?:|mailto:)/.test(data.cta.href);

  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} url={data.seo.url} type="article" />
      <div className="dark bg-[#111111] min-h-screen relative text-white antialiased overflow-x-hidden">
        <div className="global-noise" />
        <GlassLensCursor />
        <Navbar />

        {/* Heading */}
        <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 border-b border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <Link
              to="/the-gallery-of-impact"
              className="group inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white/60 hover:text-accent transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to Work
            </Link>

            <MonoLabel className="mb-6">Case Study — {data.industry}</MonoLabel>
            <div className="overflow-hidden pb-[0.1em]">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[clamp(4rem,14vw,13rem)] font-black uppercase tracking-tighter leading-[0.85]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {data.name}<span className="text-accent">.</span>
              </motion.h1>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:col-span-7 text-2xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05]"
              >
                {data.headline}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="lg:col-span-5 grid grid-cols-2 border-t border-white/10"
              >
                {[
                  ["Client", data.name],
                  ["Industry", data.industry],
                ].map(([label, value]) => (
                  <div key={label} className="pt-4 pr-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">{label}</p>
                    <p className="font-bold uppercase tracking-tight">{value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Hero photo — full bleed */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative h-[60vh] md:h-[85vh] overflow-hidden group"
        >
          <img
            src={data.photos.hero.src}
            alt={data.photos.hero.alt}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="bg-[#111111]/90 backdrop-blur-sm border border-white/20 p-6 max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest leading-loose">
              {data.heroCaption.text} <br />
              <span className="text-accent">{data.heroCaption.highlight}</span>
            </div>
            <a
              href={data.cta.href}
              {...(isExternal && !data.cta.href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group/link inline-flex items-center justify-center gap-4 bg-accent text-white px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black self-start md:self-auto"
            >
              {data.cta.label}
              <ArrowUpRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.section>

        {/* Overview — split screen like the home About section */}
        <section className="flex flex-col md:flex-row min-h-[80vh]">
          <div className="w-full md:w-1/2 bg-accent text-white flex flex-col justify-between p-8 md:p-12 lg:p-16">
            <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12">
              <span>( Fokel's Engagement )</span>
              <span>Fokel × {data.name}</span>
            </div>
            <div className="flex flex-col gap-2">
              {data.engagement.map((s) => (
                <p key={s} className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s}
                </p>
              ))}
            </div>
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70 mt-12">{data.category}</div>
          </div>
          <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <MonoLabel className="mb-8">Overview</MonoLabel>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight leading-snug">{data.overview}</p>
            </motion.div>
          </div>
        </section>

        {/* Photo pair */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {data.photos.pair.map((photo) => (
            <div key={photo.src} className="relative h-[60vh] md:h-[80vh] overflow-hidden group bg-black">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
              />
              {photo.tag && (
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white uppercase tracking-widest group-hover:border-accent/50 transition-colors duration-500">
                    {photo.tag}
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Engineering — what Fokel delivered, from the portfolio PDF */}
        <section className="bg-[#050505] py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[140px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-14">
              <MonoLabel className="mb-4">Engineering</MonoLabel>
              <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
                How we built <br className="hidden md:block" />{data.name}.
              </h2>
            </div>

            {/* Engagement facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 mb-16">
              {[
                { label: "Engagement", value: data.engagement.join(" · ") },
                { label: "Fokel's role", value: data.role },
                { label: "Status", value: data.status },
              ].map((item) => (
                <div key={item.label} className="py-6 md:pr-8 border-b md:border-b-0 border-white/10">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">{item.label}</p>
                  <p className="text-lg md:text-xl font-bold uppercase tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>

            {/* What we delivered */}
            <MonoLabel className="mb-6">What We Delivered</MonoLabel>
            <ul className="grid sm:grid-cols-2 border-t border-white/10 mb-16">
              {data.deliverables.map((item, i) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i % 2}
                  className="group flex items-start gap-4 py-5 border-b border-white/10 sm:odd:pr-6 hover:bg-white/[0.03] transition-colors duration-500"
                >
                  <span className="font-mono text-xs font-bold text-white/20 group-hover:text-accent transition-colors pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold uppercase tracking-tight text-sm md:text-base">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3">
                <MonoLabel>Technology</MonoLabel>
              </div>
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-white/10">
                {data.technology.map((tool, i) => (
                  <motion.div
                    key={tool}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i % 4}
                    className="group border-r border-b border-white/10 p-6 md:p-8 hover:bg-white/[0.03] transition-colors duration-500"
                  >
                    <span className="font-mono text-[10px] text-white/30 block mb-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* At a glance — orange numbers strip like the home StoryInNumbers */}
        <section className="bg-accent w-full py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <p className="text-center font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/80 mb-10">At a Glance</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
              {data.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center space-y-4">
                  <h3 className="text-5xl md:text-6xl lg:text-[6rem] font-black text-white leading-none tracking-tighter">
                    <AnimatedNumber text={stat.value} />
                  </h3>
                  <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/80 max-w-[170px] leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
            {data.statsNote && (
              <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-white/60">{data.statsNote}</p>
            )}
          </div>
        </section>

        {/* Marquee strip */}
        <div className="w-full bg-orange-600 py-4 md:py-6 overflow-hidden relative z-20 flex">
          <div className="animate-marquee flex min-w-max items-center">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex gap-16 items-center px-8 font-mono text-xs md:text-sm font-black uppercase tracking-[0.2em] text-black"
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {[...data.marquee, ...data.marquee].map((item, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span>{item}</span>
                    <span className="w-2 h-2 rounded-full bg-black" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Closing banner */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            src={data.photos.closing.src}
            alt={data.photos.closing.alt}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.4] scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-10 px-4">
            <p className="text-[18vw] font-black uppercase tracking-tighter text-accent leading-[0.8] select-none drop-shadow-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              {data.name}
            </p>
          </div>
        </section>

        {/* Next case */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-t border-white/10">
          <Link to={data.next.link} className="group md:col-span-7 bg-white text-black p-10 md:p-16 flex flex-col justify-between gap-12">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/60">Next Project</span>
            <div>
              <h3 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                {data.next.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {data.next.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest px-4 py-2 border border-black/20 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                View Case
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
          <Link to={data.next.link} className="group md:col-span-5 relative min-h-[40vh] overflow-hidden bg-black" aria-label={`View the ${data.next.name} case study`}>
            <img
              src={data.next.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-black/50">
              <ArrowUpRight className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </Link>
        </section>

        <StartProjectCTA />

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default CaseStudyTemplate;
