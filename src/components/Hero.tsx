import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import bgVideo from "@/assets/bg-video.mp4";
import { Magnetic } from "@/components/ui/Magnetic";

const AnimatedWord = ({
  children,
  delay
}: {
  children: string;
  delay: number;
}) => {
  return (
    <span className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em]">
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
        className="absolute inset-0 bg-black/60"
        style={{ zIndex: 1 }}
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

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 lg:pt-40 pb-16 min-h-screen flex items-center justify-center" style={{ zIndex: 2 }}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col gap-6 md:gap-10 items-center relative">
                        


            <h1
              className="text-[clamp(3.5rem,7.5vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-white text-center flex flex-col gap-2 md:gap-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6">
                <AnimatedWord delay={0.6}>WE</AnimatedWord>
                <AnimatedWord delay={0.7}>BRING</AnimatedWord>
                <AnimatedWord delay={0.8}>YOUR</AnimatedWord>
              </div>
              <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6">
                <AnimatedWord delay={0.9}>BRAND</AnimatedWord>
                <AnimatedWord delay={1.0}>INTO</AnimatedWord>
                <span className="inline-block overflow-hidden pb-[0.2em] -mb-[0.2em]">
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
                    FOCUS.
                  </motion.span>
                </span>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/60 max-w-2xl leading-[2] text-center"
            >
              Fokel is a premier technology solutions firm. We empower real estate, fashion, EdTech, and infrastructure brands with scalable software, innovative engineering, and measurable tech results to accelerate their business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 w-full md:w-auto mt-4"
            >
              <Magnetic strength={0.22} range={70}>
                <Link
                  to="/#contact"
                  className="group relative inline-flex items-center justify-center gap-4 bg-accent text-white px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black w-full sm:w-auto"
                >
                  <span>START A PROJECT</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.18} range={60}>
                <Link
                  to="/#work"
                  className="inline-flex items-center justify-center gap-2 text-white bg-transparent border border-white/20 hover:border-white px-8 py-5 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] transition-all duration-300 w-full sm:w-auto"
                >
                  VIEW OUR WORK
                </Link>
              </Magnetic>
            </motion.div>
          </div>
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
