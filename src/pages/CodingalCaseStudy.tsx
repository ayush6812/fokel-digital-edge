import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CalendarCheck, LayoutDashboard, Smartphone, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import GlassLensCursor from "@/components/ui/GlassLensCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StartProjectCTA from "@/components/StartProjectCTA";

import codingalLogo from "@/assets/codingal/logo.svg";
import codingalHeroBanner from "@/assets/codingal/hero-banner.png";
import codingalDesktopHome from "@/assets/codingal/desktop-home.jpg";
import codingalMobileBooking from "@/assets/codingal/mobile-book-class.jpg";
import codingalTeachers from "@/assets/codingal/teachers.png";
import codingalCertificate from "@/assets/codingal/certificate.png";
import projectSolarSystem from "@/assets/codingal/project-solar-system.png";

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

// Unsplash photos (free licence)
const heroPhoto = unsplash("photo-1597933471507-1ca5765185d8", 2000); // boy coding on a laptop
const familyPhoto = unsplash("photo-1752652013112-6734bf1a682a", 1200); // mother and daughter on a phone
const kidLaptopPhoto = unsplash("photo-1653566031285-8e198bca09d5", 1200); // girl in front of a laptop
const nextCasePhoto = unsplash("photo-1554224155-6726b3ff858f", 1200); // Invoid: invoice, pen and calculator
const closingPhoto = unsplash("photo-1759646827278-27c5733e0cee", 2000); // child's hands typing

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
          {char}
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

const approach = [
  {
    icon: CalendarCheck,
    title: "Frictionless Booking",
    desc: "A free trial class booking flow and scheduling for live 1:1 sessions, so a parent can go from curious to booked in a few taps.",
  },
  {
    icon: LayoutDashboard,
    title: "Parent Visibility",
    desc: "A progress dashboard that shows parents assignments, project milestones and the certificates their child has earned.",
  },
  {
    icon: Smartphone,
    title: "Learning on Mobile",
    desc: "An Android app on Google Play that keeps families connected with the learning team between classes.",
  },
  {
    icon: Search,
    title: "Search-Led Growth",
    desc: "SEO strategy and execution for the web platform, so parents researching coding classes find Codingal's courses and trial offer.",
  },
];

const deliverables = [
  "Live 1:1 classes with expert teachers",
  "AI, Python, Scratch, web and app-development courses",
  "Assignments and project-based learning",
  "Progress tracking dashboard for parents",
  "STEM.org-accredited certificates",
  "Coding competitions and quizzes",
  "Free trial class booking",
  "Android app on Google Play",
];

const phases = [
  { title: "Mobile App", desc: "The app experience families use to book classes, follow progress and stay connected with the learning team." },
  { title: "Web", desc: "The web platform behind codingal.com." },
  { title: "SEO", desc: "SEO strategy and execution." },
  { title: "Launch", desc: "Android app on Google Play. Live and running in production." },
]

// Technology and Fokel's engagement, exactly as listed in the Fokel Projects Portfolio
const techStack = ["React", "Node.js", "PostgreSQL", "Flutter", "AWS", "Firebase", "Agora", "Stripe"];

const engagement = [
  { label: "Engagement", value: "Mobile App · Web" },
  { label: "Fokel's role", value: "SEO strategy and execution" },
  { label: "Status", value: "Live and running in production" },
];

const workstreams = [
  {
    num: "01",
    title: "Mobile App",
    desc: "The app experience that lets families book classes, follow progress and stay connected with the learning team from their phone, shipped as an Android app on Google Play.",
  },
  {
    num: "02",
    title: "Web",
    desc: "The web platform at codingal.com, where families find Codingal's courses and book a free trial class.",
  },
  {
    num: "03",
    title: "SEO",
    desc: "SEO strategy and execution for the platform.",
  },
];

const stats = [
  { value: "1M+", label: "Students registered" },
  { value: "135", label: "Countries" },
  { value: "4.6/5", label: "Trustpilot rating" },
  { value: "YC", label: "Y Combinator-backed (W21)" },
];

// TODO: replace with real parent reviews or a quote from Codingal before publishing
const reviews = [
  { text: "[Placeholder] Paste a real parent review of Codingal here.", author: "Parent name", source: "Trustpilot" },
  { text: "[Placeholder] Paste a real parent review of Codingal here.", author: "Parent name", source: "Trustpilot" },
  { text: "[Placeholder] Paste a real parent review of Codingal here.", author: "Parent name", source: "Trustpilot" },
  { text: "[Placeholder] Paste a quote from the Codingal team here.", author: "Name, Role", source: "Codingal" },
];

const marqueeItems = ["Y COMBINATOR-BACKED", "1M+ STUDENTS", "135 COUNTRIES", "LIVE 1:1 CLASSES"];

const ReviewsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-12 border-b border-black/10 pb-8">
        <div className="h-[2px] w-40 bg-black/10 overflow-hidden">
          <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${25 + progress * 75}%` }} />
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous review"
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next review"
            className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-black text-white hover:bg-transparent hover:text-black transition-colors duration-300"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory border-l border-black/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[40%] border-r border-black/10 px-8 md:px-12 flex flex-col justify-between min-h-[300px]"
          >
            <p className="text-2xl md:text-3xl font-medium leading-[1.5] text-black/90">"{review.text}"</p>
            <div className="flex flex-col mt-12 pt-8 border-t border-black/5">
              <span className="font-bold text-xl tracking-tight uppercase">{review.author}</span>
              <span className="text-orange-600 font-mono text-xs uppercase tracking-widest mt-1 font-bold">{review.source}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const CodingalCaseStudy = () => {
  return (
    <>
      <SEO
        title="Codingal — YC-Backed EdTech App & Web Case Study | Fokel"
        description="How Fokel delivered the mobile app and web experience for Codingal, the Y Combinator-backed platform teaching AI and coding to kids through live 1:1 classes, used by 1M+ students across 135 countries."
        keywords="Codingal case study, Y Combinator EdTech, kids coding app development, EdTech mobile app, Flutter app agency India, EdTech SEO"
        url="https://www.fokelworks.com/work/codingal"
        type="article"
      />
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

            <MonoLabel className="mb-6">Case Study — EdTech</MonoLabel>
            <div className="overflow-hidden pb-[0.1em]">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-[clamp(4rem,14vw,13rem)] font-black uppercase tracking-tighter leading-[0.85]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Codingal<span className="text-accent">.</span>
              </motion.h1>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="lg:col-span-7 text-2xl md:text-4xl font-bold uppercase tracking-tight leading-[1.05]"
              >
                Live AI and coding classes for kids, in every family's pocket.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="lg:col-span-5 grid grid-cols-3 border-t border-white/10"
              >
                {[
                  ["Client", "Codingal"],
                  ["Backed by", "YC W21"],
                  ["Industry", "EdTech"],
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
            src={heroPhoto}
            alt="A child taking an online coding class on a laptop"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 right-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="bg-[#111111]/90 backdrop-blur-sm border border-white/20 p-6 max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest leading-loose">
              1M+ students across 135 countries learn to code with Codingal. <br />
              <span className="text-accent">Fokel built the experience around them.</span>
            </div>
            <a
              href="https://www.codingal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center justify-center gap-4 bg-accent text-white px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black self-start md:self-auto"
            >
              View Live Project
              <ArrowUpRight className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.section>

        {/* Description — split screen like the home About section */}
        <section className="flex flex-col md:flex-row min-h-[80vh]">
          <div className="w-full md:w-1/2 bg-accent text-white flex flex-col justify-between p-8 md:p-12 lg:p-16">
            <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest mb-12">
              <span>( Services )</span>
              <span>Fokel × Codingal</span>
            </div>
            <div className="flex flex-col gap-2">
              {["Mobile App", "Web Platform", "SEO Strategy & Execution"].map((s) => (
                <p key={s} className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
                  {s}
                </p>
              ))}
            </div>
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/70 mt-12">
              Learning Platform / Mobile App
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-black flex flex-col justify-center p-8 md:p-12 lg:p-16">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <MonoLabel className="mb-8">The Brief</MonoLabel>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-snug mb-10">
                Great teachers are only half the product. The other half is everything a family does between classes.
              </h2>
              <div className="space-y-5 text-white/60 text-base md:text-lg leading-relaxed">
                <p>
                  Codingal teaches AI and coding to kids and teens through live, 1:1 online classes with expert instructors. With families in 135 countries, the product has to work for a parent booking a trial class in one time zone and a student submitting a project in another.
                </p>
                <p>
                  Fokel delivered the app experience that lets families book classes, follow progress and stay connected with the learning team from their phone, alongside the web platform and the SEO that brings new families in.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Photo pair */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {[
            { src: familyPhoto, alt: "A mother and daughter looking at a phone together", tag: "For parents" },
            { src: kidLaptopPhoto, alt: "A young girl learning in front of a laptop", tag: "For students" },
          ].map((photo) => (
            <div key={photo.tag} className="relative h-[60vh] md:h-[80vh] overflow-hidden group bg-black">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white uppercase tracking-widest group-hover:border-accent/50 transition-colors duration-500">
                  {photo.tag}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Banner — white block like the home "Selected Work" header */}
        <section className="bg-white text-black border-b border-black/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-8">
              <img src={codingalLogo} alt="Codingal logo" className="h-10 md:h-12 self-start" />
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
                AI, Python, Scratch, web & app dev. <span className="text-accent">Live and 1:1.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 border border-black/10">
              <img src={codingalHeroBanner} alt="Codingal's website banner showing kids learning to code" className="w-full" loading="lazy" />
            </div>
          </div>
        </section>

        {/* How we dealt with it */}
        <section className="bg-[#050505] text-white w-full py-16 md:py-24 relative overflow-hidden border-t border-white/10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[140px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <MonoLabel className="mb-4">How We Dealt With It</MonoLabel>
                <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
                  Trial class <br className="hidden md:block" />to certificate.
                </h2>
              </div>
              <p className="text-white/50 max-w-xs font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed lg:pb-2">
                One learning journey, designed around the parent who books and the child who learns.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
              {approach.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group p-8 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500"
                >
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-8 group-hover:border-accent group-hover:text-accent transition-colors duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-white/20 block mb-4">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3 group-hover:text-accent transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-snug group-hover:text-white/90 transition-colors duration-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Layouts */}
        <section className="bg-accent w-full py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex justify-between items-center font-mono text-[10px] md:text-xs uppercase tracking-widest text-white mb-12">
              <span>Layouts</span>
              <span>Desktop / Mobile</span>
            </div>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Desktop — real screenshot of codingal.com at 1440 × 900 */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="lg:col-span-8">
                <div className="rounded-xl overflow-hidden bg-white shadow-2xl shadow-black/40 ring-1 ring-black/10">
                  <div className="relative flex items-center px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-1/2 max-w-sm rounded-md bg-white border border-neutral-200 py-1 text-center text-[10px] md:text-xs text-neutral-500">
                      codingal.com
                    </div>
                  </div>
                  <img
                    src={codingalDesktopHome}
                    alt="Codingal's homepage on desktop"
                    width={2250}
                    height={1406}
                    className="w-full aspect-[1440/900] object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/80">Desktop · codingal.com</p>
              </motion.div>

              {/* Mobile — app screenshot in an iPhone 17 Pro frame (402 × 874 pt screen) */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-[260px] md:w-[280px]">
                  {/* Side buttons */}
                  <span className="absolute -left-[3px] top-[18%] w-[3px] h-[6%] rounded-l bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[27%] w-[3px] h-[9%] rounded-l bg-neutral-700" />
                  <span className="absolute -left-[3px] top-[38%] w-[3px] h-[9%] rounded-l bg-neutral-700" />
                  <span className="absolute -right-[3px] top-[30%] w-[3px] h-[13%] rounded-r bg-neutral-700" />
                  {/* Body */}
                  <div className="rounded-[3.25rem] p-[3px] bg-gradient-to-b from-neutral-500 via-neutral-800 to-neutral-600 shadow-2xl shadow-black/50">
                    <div className="rounded-[3.1rem] bg-black p-[9px]">
                      <div className="relative rounded-[2.6rem] overflow-hidden bg-white aspect-[402/874] flex flex-col">
                        {/* iOS status bar with Dynamic Island */}
                        <div className="relative h-[6.2%] shrink-0 flex items-center justify-between px-[9%] text-black">
                          <span className="text-[11px] font-semibold tracking-tight">1:03</span>
                          <span className="absolute left-1/2 top-[22%] -translate-x-1/2 w-[31%] h-[62%] rounded-full bg-black" />
                          <span className="flex items-center gap-1">
                            <svg viewBox="0 0 18 12" className="w-[14px] h-[10px]" aria-hidden="true">
                              <rect x="0" y="8" width="3" height="4" rx="0.8" fill="currentColor" />
                              <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" fill="currentColor" />
                              <rect x="10" y="3" width="3" height="9" rx="0.8" fill="currentColor" />
                              <rect x="15" y="0" width="3" height="12" rx="0.8" fill="currentColor" />
                            </svg>
                            <span className="text-[9px] font-semibold">LTE</span>
                            <span className="relative w-[20px] h-[10px] rounded-[3px] border border-black/40 p-[1px]">
                              <span className="block h-full w-[45%] rounded-[1.5px] bg-black" />
                              <span className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[1.5px] h-[4px] rounded-r bg-black/40" />
                            </span>
                          </span>
                        </div>
                        <img
                          src={codingalMobileBooking}
                          alt="Codingal app: booking a free class by choosing a date and time slot"
                          width={712}
                          height={1450}
                          className="w-full flex-1 min-h-0 object-cover object-top"
                          loading="lazy"
                        />
                        {/* Home indicator */}
                        <span className="absolute bottom-[1.2%] left-1/2 -translate-x-1/2 w-[35%] h-[4px] rounded-full bg-black/80" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-white/80">Mobile · Book a free class</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we delivered */}
        <section className="flex flex-col md:flex-row">
          <div className="w-full md:w-5/12 bg-white flex items-center justify-center p-8 md:p-16">
            <img src={codingalTeachers} alt="Codingal's expert teachers" className="w-full max-w-md" loading="lazy" />
          </div>
          <div className="w-full md:w-7/12 bg-[#111111] p-8 md:p-12 lg:p-16">
            <MonoLabel className="mb-4">What We Delivered</MonoLabel>
            <h2 className="text-[clamp(2.25rem,4.5vw,4rem)] font-black uppercase tracking-tighter leading-[0.9] mb-12" style={{ fontFamily: "var(--font-heading)" }}>
              Everything a family needs.
            </h2>
            <ul className="grid sm:grid-cols-2 border-t border-white/10">
              {deliverables.map((item, i) => (
                <li key={item} className="group flex items-start gap-4 py-5 border-b border-white/10 sm:odd:pr-6">
                  <span className="font-mono text-xs font-bold text-white/20 group-hover:text-accent transition-colors pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-bold uppercase tracking-tight text-sm md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Development */}
        <section className="bg-[#111111] py-16 md:py-24 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <MonoLabel className="mb-4">Development</MonoLabel>
                <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
                  How it came <br className="hidden md:block" />together.
                </h2>
              </div>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
              <div className="space-y-12 md:space-y-4">
                {phases.map((phase, i) => (
                  <motion.div
                    key={phase.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    className={`relative pl-14 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"}`}
                  >
                    <span
                      className={`absolute top-2 left-4 md:left-auto -translate-x-1/2 md:translate-x-0 w-4 h-4 rounded-full bg-accent ring-4 ring-[#111111] ${i % 2 === 0 ? "md:-right-2" : "md:-left-2"}`}
                    />
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent font-bold block mb-3">
                      Phase {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                      {phase.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Engineering — Fokel's tech contribution, from the portfolio PDF */}
        <section className="bg-[#050505] py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[130px] pointer-events-none" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <MonoLabel className="mb-4">Engineering</MonoLabel>
                <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
                  How we built <br className="hidden md:block" />Codingal.
                </h2>
              </div>
              <p className="text-white/50 max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed lg:pb-2">
                Codingal teaches AI and coding to kids and teens through live, 1:1 online classes with expert instructors.{" "}
                <span className="text-accent font-bold">Fokel delivered the app experience behind it.</span>
              </p>
            </div>

            {/* Engagement facts */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 mb-16">
              {engagement.map((item) => (
                <div key={item.label} className="py-6 md:pr-8 border-b md:border-b-0 border-white/10">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-2">{item.label}</p>
                  <p className="text-lg md:text-xl font-bold uppercase tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Workstreams */}
            <div className="flex flex-col w-full border-t border-white/10 mb-16">
              {workstreams.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 p-6 md:p-8 border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500"
                >
                  <span className="font-mono text-xl md:text-2xl font-bold text-white/20 group-hover:text-accent transition-colors duration-500">{item.num}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter md:w-64 shrink-0 group-hover:text-accent transition-colors duration-500" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl group-hover:text-white/90 transition-colors duration-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Technology */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-3">
                <MonoLabel>Technology</MonoLabel>
              </div>
              <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-white/10">
                {techStack.map((tool, i) => (
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

        {/* Client at a glance — orange numbers strip like the home StoryInNumbers */}
        <section className="bg-accent w-full py-12 md:py-16">
          <div className="max-w-[1600px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center space-y-4">
                  <h3 className="text-5xl md:text-6xl lg:text-[6rem] font-black text-white leading-none tracking-tighter">
                    <AnimatedNumber text={stat.value} />
                  </h3>
                  <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/80 max-w-[150px] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center font-mono text-[10px] uppercase tracking-widest text-white/60">
              Client figures as published on Codingal's public website (accessed October 2026)
            </p>
          </div>
        </section>

        {/* Proof — certificate and student project */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
          <div className="bg-white flex flex-col items-center justify-center p-10 md:p-16 gap-6">
            <img src={codingalCertificate} alt="A Codingal STEM.org-accredited certificate" className="w-full max-w-sm" loading="lazy" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/50">STEM.org-accredited certificate</span>
          </div>
          <div className="relative min-h-[50vh] overflow-hidden group bg-black">
            <img
              src={projectSolarSystem}
              alt="A student's solar system coding project"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.8] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 font-mono text-[10px] text-white uppercase tracking-widest">
                Student project · Solar system
              </div>
            </div>
          </div>
        </section>

        {/* Reviews — light block like the home Testimonials */}
        <section className="bg-[#f0f0f0] text-black w-full py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs md:text-sm text-orange-600 uppercase tracking-widest font-bold mb-6 block">Reviews</span>
              <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-black uppercase tracking-tighter leading-[0.85]" style={{ fontFamily: "var(--font-heading)" }}>
                What families say.
              </h2>
            </div>
            <div className="lg:col-span-8 min-w-0">
              <ReviewsCarousel />
            </div>
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

        {/* Closing banner */}
        <section className="relative h-[60vh] md:h-[80vh] overflow-hidden group">
          <img
            src={closingPhoto}
            alt="A child's hands typing on a laptop keyboard"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-[0.4] scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-end justify-center pb-6 md:pb-10">
            <p className="text-[18vw] font-black uppercase tracking-tighter text-accent leading-[0.8] select-none drop-shadow-2xl" style={{ fontFamily: "var(--font-heading)" }}>
              Codingal
            </p>
          </div>
        </section>

        {/* Next case */}
        <section className="grid grid-cols-1 md:grid-cols-12 border-t border-white/10">
          <Link to="/work/invoid" className="group md:col-span-7 bg-white text-black p-10 md:p-16 flex flex-col justify-between gap-12">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-black/60">Next Project</span>
            <div>
              <h3 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.9] mb-4 group-hover:text-accent transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                Invoid
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {["FinTech SaaS", "OCR", "AP Automation"].map((tag) => (
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
          <Link to="/work/invoid" className="group md:col-span-5 relative min-h-[40vh] overflow-hidden bg-black" aria-label="View the Invoid case study">
            <img
              src={nextCasePhoto}
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

export default CodingalCaseStudy;
