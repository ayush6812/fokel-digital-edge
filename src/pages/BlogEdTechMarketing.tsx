import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, GraduationCap, Users, BarChart3, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Footer from "@/components/Footer";
import heroImg from "@/assets/exec-blueprint.jpg";

const BlogEdTechMarketing = () => {
  return (
    <>
      <SEO
        title="The Content Marketing Playbook for EdTech Brands in India | Fokel"
        description="EdTech is the most competitive digital market in India. Learn how to build a content strategy that attracts students, earns parental trust, and reduces cost-per-enrolment at scale."
        keywords="EdTech content marketing India, EdTech digital marketing, education marketing strategy, student acquisition marketing, coaching centre digital marketing India"
        url="https://www.fokelworks.com/blog/edtech-content-marketing-india"
        type="article"
      />
      <div className="bg-background min-h-screen text-foreground">
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center">
            <Link to="/#blog" className="group flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors uppercase tracking-wider">
              <motion.span whileHover={{ x: -4 }} transition={{ duration: 0.2 }}><ArrowLeft className="w-4 h-4" /></motion.span>
              Back to Blog
            </Link>
          </div>
        </motion.div>

        <article className="pt-40 pb-24">
          <motion.div className="max-w-4xl mx-auto px-6 lg:px-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-sm font-semibold px-4 py-2 bg-accent/10 text-accent rounded-full">EdTech Marketing</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">July 07, 2026</span>
              <span className="text-sm font-medium px-4 py-2 text-muted-foreground">7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              The Content Marketing Playbook for EdTech Brands in India
            </h1>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative w-full h-72 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl shadow-black/20">
              <img src={heroImg} alt="EdTech content marketing and student acquisition strategy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              India is the world's largest EdTech market, and also its most competitive. BYJU's collapse didn't slow the sector — it shook out the weak and left enormous opportunity for brands that can build genuine student trust. In this environment, content is your most durable competitive advantage.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Why Most EdTech Content Fails</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most EdTech content makes the same mistake: it's either pure promotional material (testimonials, success stories, feature lists) or generic educational content that any competitor could publish. Neither builds the trust that converts a curious student — or their cautious parent — into an enrolment. The sweet spot is content that is simultaneously educational, brand-specific, and commercially relevant.
            </p>

            <div className="bg-muted/30 p-8 rounded-xl border border-border my-10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-accent w-6 h-6" /> The Two-Audience Problem
              </h3>
              <p className="text-base text-muted-foreground mb-0">
                EdTech marketing must speak to two audiences simultaneously: the student (emotional, aspiration-driven) and the parent (rational, outcome-driven). Your content strategy must address both. A blog post about "How to crack JEE Advanced in 6 months" speaks to the student. A page titled "Our Mentors & Track Record" speaks to the parent writing the cheque.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">The 4-Pillar EdTech Content Strategy</h2>
            <div className="space-y-8 mt-8 mb-12">
              {[
                { icon: <GraduationCap />, title: "Pillar 1: Free Value Content (Top of Funnel)", desc: "Create genuinely useful free resources: study guides, question banks, subject-wise revision notes, exam schedules. Publish these on your blog targeting high-search exam keywords (e.g., 'JEE Mains 2026 syllabus'). This builds a massive organic audience of students in your target exam segment." },
                { icon: <Users />, title: "Pillar 2: Social Proof & Outcome Stories (Middle of Funnel)", desc: "Go beyond generic testimonial videos. Feature specific students. Name their rank. Show their score sheet. Explain what changed after they joined you. Parents in India make decisions based on verified, specific results — not vague claims of 'excellence'." },
                { icon: <BarChart3 />, title: "Pillar 3: Comparison & Differentiation Content", desc: "Parents actively search 'Aurum Education vs [Competitor]'. Create content that honestly addresses this comparison. Highlight your specific advantages (batch size, faculty credentials, personalised mentoring). Brands that avoid this search category lose conversions to competitors who own it." },
                { icon: <Megaphone />, title: "Pillar 4: Parent-Specific Trust Content (Bottom of Funnel)", desc: "Create a 'For Parents' section on your website with content that directly addresses parental concerns: how you ensure student safety, how you track progress and share reports, how your refund/transfer policies work, and who your faculty are (with their own story and credentials)." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-accent/10 p-3 rounded-full h-fit shrink-0"><span className="text-accent">{item.icon}</span></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Platform-Specific Tactics for Indian EdTech</h2>
            <ul className="list-none space-y-3 mt-6 mb-10 p-0">
              {[
                "YouTube: Long-form free classes, faculty introduction videos, and 'Day in the Life of a Topper' content outperform ads by 10×.",
                "Instagram Reels: Quick exam tips, '5 mistakes toppers avoid', and student countdown content. Keep it to 30–60 seconds.",
                "WhatsApp Broadcast: Weekly 'Free Study Material' drops build a warm audience of highly interested, permission-based leads.",
                "Google Search: Rank for '[Exam Name] preparation tips', '[subject] study plan', and '[your city] [exam] coaching' to capture high-intent organic traffic.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-16 text-center p-10 bg-accent/5 rounded-2xl border border-accent/20">
              <h3 className="text-2xl font-bold mb-4">Grow Your EdTech Enrolments With Content</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Fokel built Aurum Education's complete content and digital marketing strategy, generating a 220% increase in student enquiries in one academic year. See the <Link to="/work/aurum-education" className="text-accent hover:underline">full case study</Link>.
              </p>
              <Link to="/#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 font-medium text-accent-foreground transition-all hover:bg-accent/90">
                Build Your EdTech Growth Strategy
              </Link>
            </div>
          </div>
        </article>

        <div className="border-t border-border bg-background py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl font-bold mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/work/aurum-education" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">Case Study</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">Aurum Education: 220% More Student Enquiries in One Year</h4>
                </div>
              </Link>
              <Link to="/blog/b2b-lead-generation-autopilot" className="group block">
                <div className="bg-muted/20 rounded-xl p-6 border border-border transition-colors hover:border-accent/50">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">B2B Growth</span>
                  <h4 className="text-xl font-bold group-hover:text-accent transition-colors">Build a Lead Generation System That Runs on Autopilot</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BlogEdTechMarketing;
