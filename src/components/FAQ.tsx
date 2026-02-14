import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Fokel offer?",
    answer:
      "Fokel offers a comprehensive suite of digital services including digital marketing, web design & development, digital strategy, and brand identity development. We craft tailored solutions that drive measurable growth for your business.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A brand identity project typically takes 4-6 weeks, while a full website design and development project ranges from 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work across diverse industries including technology, healthcare, real estate, fashion, and more. Our versatile team adapts to each industry's unique challenges, delivering solutions that resonate with your specific target audience.",
  },
  {
    question: "How do you measure the success of your campaigns?",
    answer:
      "We establish clear KPIs at the start of every engagement — from traffic and engagement metrics to conversion rates and ROI. You'll receive regular reports with actionable insights, ensuring full transparency on campaign performance.",
  },
  {
    question: "What makes Fokel different from other agencies?",
    answer:
      "We combine data-driven strategy with bold creative execution. Our lean, senior-led team means you work directly with experts — no junior handoffs. We focus on making your brand the undisputed authority in your niche.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-6"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-16"
        >
          Any more <span className="text-accent">questions</span>?
        </motion.h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.05 }}
              className="border-b border-border"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
              >
                <span className="text-lg md:text-xl font-semibold text-foreground pr-8 group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  {openIndex === i ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 pb-8" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
