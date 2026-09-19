import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Fokel transformed our digital presence completely. Their strategic approach to branding and marketing delivered results that exceeded our expectations. We've seen a 3x increase in qualified leads.",
    name: "RAHUL SHARMA",
    role: "CEO, INVENTERON TECHNOLOGIES"
  },
  {
    quote: "Working with Fokel was a game-changer for our brand. They understood our vision and translated it into a digital experience that truly resonates with our audience. The ROI has been exceptional.",
    name: "PRIYA MENON",
    role: "MARKETING HEAD, ONSURITY"
  },
  {
    quote: "The team at Fokel brought fresh perspective and meticulous attention to detail. Our brand has never looked better or performed stronger online. They're now our go-to digital partner.",
    name: "ANKIT VERMA",
    role: "FOUNDER, HMO ARCHITECTS"
  },
  {
    quote: "Fokel's data-driven approach combined with creative excellence helped us achieve remarkable growth. Our digital engagement increased 3x within just six months. Highly recommended.",
    name: "SNEHA KAPOOR",
    role: "DIRECTOR OF GROWTH, HOMELANE"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-background py-24 md:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="mb-16 border-b border-white/10 pb-8">
          <span className="font-mono text-[10px] sm:text-xs text-accent uppercase tracking-widest mb-6 block">
            05. CLIENT STORIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">
            VOICES OF IMPACT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex gap-2 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-12 flex-grow max-w-2xl">
                "{testimonial.quote}"
              </p>

              <div className="flex flex-col border-t border-white/10 pt-6">
                <span className="text-white font-bold text-lg uppercase tracking-tight">{testimonial.name}</span>
                <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest mt-1">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
