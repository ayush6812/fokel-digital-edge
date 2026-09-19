import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "WHAT SERVICES DOES FOKEL OFFER?",
    answer: "Fokel offers a comprehensive suite of digital services including digital marketing, web design & development, AI automation agents, digital strategy, and brand identity development. We craft tailored growth systems.",
  },
  {
    question: "HOW LONG DOES A TYPICAL PROJECT TAKE?",
    answer: "Project timelines vary based on scope. A brand identity project typically takes 4-6 weeks, while a full web application or digital marketing strategy ranges from 8-12 weeks.",
  },
  {
    question: "WHAT INDUSTRIES DO YOU WORK WITH?",
    answer: "We partner with visionary companies in technology, real estate, fashion, healthcare, and EdTech. Our framework is adaptable but our execution speed remains constant.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-24 md:py-32 relative">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
        
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 font-mono text-[10px] uppercase tracking-widest mb-6">
            FAQ
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white">
            COMMON <span className="text-accent italic">QUESTIONS</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const number = String(i + 1).padStart(2, '0');

            return (
              <div 
                key={i} 
                className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'bg-white/[0.03] border-accent/30 shadow-[0_0_30px_rgba(255,85,0,0.05)]' 
                    : 'bg-white/[0.01] border-white/10 hover:border-white/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <div className="flex items-center gap-6">
                    <span className={`font-mono text-sm font-bold transition-colors ${isOpen ? 'text-accent' : 'text-white/30'}`}>
                      {number}
                    </span>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tight text-white pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`shrink-0 w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent border-accent text-black rotate-180' : 'border-white/20 text-white/50 group-hover:text-white group-hover:border-white/50'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-8 px-8 pl-[4.5rem]">
                        <p className="text-white/60 font-medium text-lg leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
