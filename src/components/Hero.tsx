import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import bgVideo from "@/assets/bg-video.mp4";
import { Magnetic } from "@/components/ui/Magnetic";
import { Tilt } from "@/components/ui/Tilt";

const AnimatedWord = ({
  children,
  delay
}: {
  children: string;
  delay: number;
}) => {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [showPageReveal, setShowPageReveal] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem('hasSeenPageReveal');
    if (!hasSeenAnimation) {
      setShowPageReveal(true);
      sessionStorage.setItem('hasSeenPageReveal', 'true');
    }
  }, []);



  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Full-screen background video */}
      <video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.75) 100%)",
          zIndex: 1,
        }}
      />

      {showPageReveal && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-foreground origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.div
            className="fixed inset-0 z-40 bg-accent origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 pt-32 lg:pt-40 pb-20 min-h-screen flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 w-fit backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium tracking-wide text-accent">Creative Digital Agency</span>
            </motion.div>

            <h1
              className="text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <AnimatedWord delay={0.6}>We</AnimatedWord>{" "}
              <AnimatedWord delay={0.7}>Bring</AnimatedWord>
              <br />
              <AnimatedWord delay={0.8}>Your</AnimatedWord>{" "}
              <AnimatedWord delay={0.9}>Brand</AnimatedWord>
              <br />
              <AnimatedWord delay={1.0}>Into</AnimatedWord>{" "}
              <span className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block text-accent"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: 1.1,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  Focus
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed text-center"
            >
              Fokel is a Delhi-based digital marketing agency helping real estate, fashion, EdTech, and infrastructure brands build authority, generate qualified leads, and dominate organic search — with bold strategy and measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <Magnetic strength={0.22} range={70}>
                <Link
                  to="/#contact"
                  className="btn-primary group"
                >
                  Start a Project
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </Magnetic>
              <Magnetic strength={0.18} range={60}>
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-6 py-3 text-sm font-medium transition-all duration-300 group relative"
                >
                  View our work
                  <span className="absolute bottom-2 left-6 right-6 h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Magnetic>
            </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      />
    </section>
  );
};

export default Hero;
