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
  },
  {
    title: "The Future of Brand Growth: Why an Integrated Digital Ecosystem Beats One-Off Tactics",
    description:
      "The brands that win are those that build an integrated digital ecosystem where every element works together to create a seamless, compelling brand experience.",
    link: "/blog/integrated-ecosystem",
    date: "June 30, 2026",
    category: "Digital Growth",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-16 md:py-24 overflow-hidden bg-background" ref={ref}>
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
            className="text-foreground text-4xl md:text-7xl lg:text-8xl font-black mb-2 -ml-2"
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
              className="group relative flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-accent/50 transition-colors"
            >
              <Link to={blog.link} className="flex flex-col h-full p-8 md:p-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-xs font-medium px-3 py-1 text-muted-foreground">
                      {blog.date}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>

                <p className="text-muted-foreground text-lg mb-8 flex-grow">
                  {blog.description}
                </p>

                <div className="mt-auto">
                  <span className="font-medium inline-flex items-center gap-2 group-hover:text-accent transition-colors">
                    Read Article
                  </span>
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
