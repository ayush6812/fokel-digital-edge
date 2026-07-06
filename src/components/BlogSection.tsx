import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DepthText } from "@/components/ui/DepthText";

const blogs = [
  {
    title: "Why Your Brand Needs a Strategic Digital Partner, Not Just a Vendor",
    description:
      "In today's hyper-competitive digital landscape, the brands that truly break through the noise are those that find a partner, not just a vendor.",
    link: "/blog/strategic-partner",
    date: "June 25, 2026",
    category: "Strategy",
    image: "/blog-strategy-hero.jpg",
    imageAlt: "Strategic business growth with chess piece on bar chart",
    readTime: "6 min read",
  },
  {
    title: "The Future of Brand Growth: Why an Integrated Digital Ecosystem Beats One-Off Tactics",
    description:
      "The brands that win are those that build an integrated digital ecosystem where every element works together to create a seamless, compelling brand experience.",
    link: "/blog/integrated-ecosystem",
    date: "June 30, 2026",
    category: "Digital Growth",
    image: "/blog-ecosystem-hero.jpg",
    imageAlt: "Integrated digital ecosystem vs broken silos diagram",
    readTime: "8 min read",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-16 md:py-24 overflow-hidden bg-primary text-primary-foreground" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[2px] bg-accent"
          />
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent">
            Insights & Ideas
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <DepthText
            text="BEYOND"
            glowColor="hsl(var(--muted))"
            className="text-primary-foreground text-4xl md:text-7xl lg:text-8xl font-black mb-2 -ml-2"
          />
          <DepthText
            text="THE BRIEF"
            glowColor="hsla(var(--accent), 0.5)"
            className="text-accent text-4xl md:text-7xl lg:text-8xl font-black mb-16 -ml-2"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="group relative flex flex-col h-full bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1"
            >
              <Link to={blog.link} className="flex flex-col h-full">
                {/* Hero Image */}
                <div className="relative w-full h-56 md:h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {/* Category badge over image */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1.5 bg-accent text-white rounded-full tracking-wider uppercase shadow-lg">
                      {blog.category}
                    </span>
                  </div>
                  {/* Arrow button */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-grow p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-muted-foreground text-base mb-6 flex-grow leading-relaxed">
                    {blog.description}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
