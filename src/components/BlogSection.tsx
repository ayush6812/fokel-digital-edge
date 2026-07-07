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
  {
    title: "The Ultimate SEO Guide for Real Estate Developers in India (2026)",
    description:
      "Learn how Indian real estate developers can dominate search rankings, bypass expensive aggregators, and generate high-intent property leads.",
    link: "/blog/real-estate-seo-india",
    date: "July 07, 2026",
    category: "Real Estate SEO",
    image: "/process-discover.jpg",
    imageAlt: "Real estate digital marketing and SEO growth",
    readTime: "8 min read",
  },
  {
    title: "How to Build a B2B Lead Generation System That Runs on Autopilot",
    description:
      "Stop chasing individual leads. Learn how to build a compound B2B lead generation engine using SEO, content, and marketing automation.",
    link: "/blog/b2b-lead-generation-autopilot",
    date: "July 07, 2026",
    category: "B2B Growth",
    image: "/blog-strat-chart.jpg",
    imageAlt: "B2B lead generation funnel and marketing automation",
    readTime: "7 min read",
  },
  {
    title: "Brand Identity for Startups: What to Get Right Before You Spend on Ads",
    description:
      "Running ads without a brand is like pouring water into a leaking bucket. Here's what Indian startups must build first — and why it's the highest-ROI investment you'll make.",
    link: "/blog/brand-identity-startups",
    date: "July 07, 2026",
    category: "Brand Strategy",
    image: "/blog-strategy-analytics.jpg",
    imageAlt: "Brand identity design process for Indian startups",
    readTime: "6 min read",
  },
  {
    title: "AI Agents in Marketing: What Indian SMEs Need to Know in 2026",
    description:
      "AI marketing agents are automating tasks that used to require entire teams. Here's what to adopt now — and what to avoid — to stay competitive.",
    link: "/blog/ai-agents-marketing-india",
    date: "July 07, 2026",
    category: "AI & Technology",
    image: "/blog-eco-img1.jpg",
    imageAlt: "AI marketing agents automating digital workflows",
    readTime: "7 min read",
  },
  {
    title: "Local SEO for Service Businesses in Delhi: A Step-by-Step Guide",
    description:
      "Over 76% of 'near me' searchers visit a business within 24 hours. If you're not in Delhi's Local Pack, you're invisible to the majority of your market.",
    link: "/blog/local-seo-delhi-guide",
    date: "July 07, 2026",
    category: "Local SEO",
    image: "/blog-eco-img2.jpg",
    imageAlt: "Local SEO strategy for Delhi NCR service businesses",
    readTime: "6 min read",
  },
  {
    title: "Luxury Brand Marketing in India: Why Less Is Always More",
    description:
      "Luxury brands in India are failing online by doing too much. Here's why restraint, exclusivity, and storytelling outperform aggressive performance marketing every time.",
    link: "/blog/luxury-brand-marketing-india",
    date: "July 07, 2026",
    category: "Luxury Marketing",
    image: "/blog-eco-img3.jpg",
    imageAlt: "Luxury brand digital marketing strategy",
    readTime: "6 min read",
  },
  {
    title: "The Content Marketing Playbook for EdTech Brands in India",
    description:
      "EdTech is the most competitive digital market in India. Here's how to build a content strategy that attracts students, earns parental trust, and reduces cost-per-enrolment.",
    link: "/blog/edtech-content-marketing-india",
    date: "July 07, 2026",
    category: "EdTech Marketing",
    image: "/blog-eco-img4.jpg",
    imageAlt: "EdTech content marketing and student acquisition strategy",
    readTime: "7 min read",
  },
  {
    title: "Why Construction & Infrastructure Firms Need a Digital Brand in 2026",
    description:
      "India's infrastructure sector is worth ₹111 lakh crore. Yet most construction firms are invisible online. Here's why that's costing them tenders, contracts, and talent.",
    link: "/blog/infrastructure-branding-india",
    date: "July 07, 2026",
    category: "Infrastructure Branding",
    image: "/blog-eco-img5.jpg",
    imageAlt: "Construction and infrastructure company digital branding",
    readTime: "6 min read",
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
          className="mb-12 md:mb-16 -ml-2"
        >
          <DepthText
            text="BEYOND"
            glowColor="hsl(var(--muted))"
            className="text-primary-foreground text-4xl md:text-7xl lg:text-8xl font-black"
          />
          {" "}
          <DepthText
            text="THE BRIEF"
            glowColor="hsla(var(--accent), 0.5)"
            className="text-accent text-4xl md:text-7xl lg:text-8xl font-black"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
