import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Why Your Brand Needs a Strategic Digital Partner",
    date: "LATEST BLOG",
    image: "/blog-strat-chart.jpg",
    span: "col-span-1 md:col-span-6",
    link: "/blog/strategic-partner"
  },
  {
    title: "The Future of Brand Growth: Integrated Ecosystems",
    date: "FEATURED POST",
    image: "/blog-eco-img1.jpg",
    span: "col-span-1 md:col-span-6",
    link: "/blog/integrated-ecosystem"
  },
  {
    title: "Fokel Insider: Weekly Digital Strategy Newsletter",
    date: "JOIN 10,000+ SUBSCRIBERS",
    image: null,
    span: "col-span-1 md:col-span-12 lg:col-span-4 lg:absolute lg:-right-4 lg:-top-32 lg:w-[400px]",
    link: "#newsletter"
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="bg-[#f0f0f0] text-black w-full min-h-screen p-8 md:p-12 lg:p-24 relative z-10 overflow-hidden">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-32">
        <a href="#newsletter" className="bg-black text-white font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#FF4500] transition-colors">
          SUBSCRIBE NOW
        </a>
        <h2 className="text-[clamp(3.5rem,8vw,10rem)] font-black uppercase tracking-tighter leading-[0.85] text-right mt-12 md:mt-0" style={{ fontFamily: "var(--font-heading)" }}>
          NEWS AND <br/>
          UPDATES.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
        {blogs.map((blog, i) => (
          <a 
            key={i} 
            href={blog.link}
            className={`group flex flex-col ${blog.span} ${!blog.image ? 'bg-white p-8 border border-black/5 shadow-xl hover:shadow-2xl transition-shadow' : ''}`}
          >
            {blog.image && (
              <div className="w-full aspect-[4/3] mb-6 overflow-hidden bg-black/5 relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}
            
            {!blog.image && (
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                   <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                   </svg>
                </div>
                <ArrowUpRight className="w-6 h-6 text-black/30 group-hover:text-black transition-colors" />
              </div>
            )}

            <h3 className={`text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-6 group-hover:text-[#FF4500] transition-colors ${!blog.image ? 'mt-auto' : ''}`}>
              {blog.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-black/50 font-bold mt-auto">
              {blog.date}
            </span>

          </a>
        ))}
      </div>

    </section>
  );
};

export default BlogSection;
