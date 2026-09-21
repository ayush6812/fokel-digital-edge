import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Why most redesigns fail — and what to do instead",
    date: "MAR 31, 2026",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-1 md:col-span-4",
    link: "/blog/why-redesigns-fail"
  },
  {
    title: "How to write a landing page that actually converts",
    date: "MAR 31, 2026",
    image: null,
    span: "col-span-1 md:col-span-3",
    link: "/blog/landing-page-copy"
  },
  {
    title: "How we cut bounce rate by 34% with one layout change",
    date: "MAR 30, 2026",
    image: "https://images.unsplash.com/photo-1515378960530-7c0da622a382?q=80&w=2070&auto=format&fit=crop",
    span: "col-span-1 md:col-span-5",
    link: "/blog/bounce-rate"
  },
  {
    title: "Small defaults, big outcomes: lessons from behavioral design",
    date: "MAR 25, 2026",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    span: "col-span-1 md:col-span-12 lg:col-span-4 lg:absolute lg:-right-4 lg:-top-32 lg:w-[400px]",
    link: "/blog/behavioral-design"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#f0f0f0] text-black w-full min-h-screen p-8 md:p-12 lg:p-24 relative z-10 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-32">
        <button className="bg-black text-white font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#FF4500] transition-colors">
          SEE MORE
        </button>
        <h2 className="text-[clamp(3.5rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-right mt-12 md:mt-0" style={{ fontFamily: "var(--font-heading)" }}>
          NEWS AND <br/>
          UPDATES.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
        {blogs.map((blog, i) => (
          <Link 
            key={i} 
            to={blog.link}
            className={`group flex flex-col ${blog.span} ${!blog.image ? 'bg-white p-8 border border-black/5' : ''}`}
          >
            {blog.image && (
              <div className="w-full aspect-square mb-6 overflow-hidden bg-black/5 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            
            {!blog.image && (
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                   <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                </div>
                <ArrowUpRight className="w-6 h-6 text-black/30 group-hover:text-black transition-colors" />
              </div>
            )}

            <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-4 group-hover:text-[#FF4500] transition-colors ${!blog.image ? 'mt-auto' : ''}`}>
              {blog.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/50 font-bold">
              {blog.date}
            </span>

          </Link>
        ))}
      </div>

    </section>
  );
};

export default BlogSection;
