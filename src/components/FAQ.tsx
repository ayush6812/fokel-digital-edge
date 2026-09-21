import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Fokel offer?",
    answer: "Fokel offers a comprehensive suite of digital services including digital marketing, web design & development, AI automation agents, digital strategy, and brand identity development. We craft tailored growth systems."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope. A brand identity project typically takes 4-6 weeks, while a full web application or digital marketing strategy ranges from 8-12 weeks."
  },
  {
    question: "What industries do you work with?",
    answer: "We partner with visionary companies in technology, real estate, fashion, healthcare, and EdTech. Our framework is adaptable but our execution speed remains constant."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white text-black w-full min-h-screen relative overflow-hidden flex flex-col z-10 pt-24 md:pt-32">
      
      <div className="relative z-10 p-8 md:p-12 lg:px-24 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <span className="font-mono text-xs text-[#FF4500] uppercase tracking-widest block mb-6 font-bold">
            [ CLEAR THE NOISE ]
          </span>
          <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase tracking-tighter leading-none" style={{ fontFamily: "var(--font-heading)" }}>
            FAQ.
          </h2>
        </div>
        <p className="font-mono text-[10px] text-black/50 uppercase tracking-widest font-bold max-w-[200px] mt-8 md:mt-0 text-left md:text-right">
          EVERYTHING YOU NEED TO KNOW BEFORE WE START.
        </p>
      </div>

      {/* Massive Accordion List */}
      <div className="relative z-10 flex flex-col w-full mt-auto border-t border-black/10">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="w-full border-b border-black/10 hover:bg-black/5 transition-colors duration-500 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="w-full p-8 md:p-12 lg:px-24 flex flex-col">
              
              <div className="flex justify-between items-center gap-8">
                <h3 className={`text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter transition-colors duration-500 ${openIndex === index ? 'text-[#FF4500]' : 'text-black'}`} style={{ fontFamily: "var(--font-heading)" }}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-8 h-8 text-[#FF4500]" />
                  ) : (
                    <Plus className="w-8 h-8 text-black/30" />
                  )}
                </div>
              </div>
              
              <div className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                  <p className="text-black/70 text-lg md:text-xl font-medium leading-relaxed max-w-4xl pb-4">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQ;
