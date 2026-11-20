import CaseStudyTemplate, { unsplash, type CaseStudyData } from "@/components/CaseStudyTemplate";
import workHomelane from "@/assets/work-homelane.png";

// All copy and figures from the Fokel Projects Portfolio (Care24, page 04)
const care24: CaseStudyData = {
  seo: {
    title: "Care24 — Home Healthcare SaaS & SEO Case Study | Fokel",
    description:
      "How Fokel supported Care24, a leading home healthcare provider, with SEO and the operations technology that keeps bookings, caregivers and schedules running across 10+ cities.",
    keywords: "Care24 case study, home healthcare SaaS, healthcare operations platform, healthcare SEO India, caregiver management platform",
    url: "https://www.fokelworks.com/work/care24",
  },
  name: "Care24",
  industry: "Home Healthcare",
  category: "Healthcare SaaS / Operations Platform",
  headline: "Verified home healthcare, booked online across 10+ cities.",
  overview:
    "Care24 is a leading home healthcare provider that connects families with verified nurses, patient attendants, physiotherapists and baby-care professionals. Fokel supported the platform with SEO and the operations technology that keeps bookings, caregivers and schedules running smoothly across cities.",
  heroCaption: {
    text: "Verified nurses, patient attendants, physiotherapists and baby-care professionals.",
    highlight: "Bookings, caregivers and schedules, kept running by Fokel.",
  },
  cta: { label: "View Live Project", href: "https://care24.co.in" },
  engagement: ["SaaS Platform", "SEO"],
  role: "SEO strategy and execution",
  status: "Live and running in production",
  deliverables: [
    "Patient booking and call-back requests",
    "Caregiver onboarding and management",
    "Flexible 8 / 10 / 12 / 24-hour care plans",
    "Scheduling and online payments",
    "Admin dashboard for operations",
    "Dedicated service pages: attendant, nursing, elder care, physiotherapy, baby care, equipment",
    "Content hub and blog for organic growth",
    "City-wise lead capture across 10+ cities",
  ],
  technology: ["Next.js", "React", "Node.js", "PostgreSQL", "Flutter", "AWS", "Redis", "Socket.io", "Razorpay", "Twilio", "SEO"],
  stats: [
    { value: "2,000+", label: "Caregiver and nurse profiles" },
    { value: "10+", label: "Cities served" },
    { value: "70 hrs", label: "Caregiver training" },
    { value: "4.1/5", label: "Google rating, 1,689 reviews" },
  ],
  statsNote: "Client figures as published on Care24's public website (accessed October 2026)",
  marquee: ["HOME HEALTHCARE", "2,000+ CAREGIVER PROFILES", "10+ CITIES", "LIVE IN PRODUCTION"],
  photos: {
    hero: { src: unsplash("photo-1765896387387-0538bc9f997e", 2000), alt: "A nurse smiling with an elderly patient at home" },
    pair: [
      { src: unsplash("photo-1773227055624-07b515ba87c5", 1200), alt: "A caregiver helping an elderly woman with a walker", tag: "Elder care" },
      { src: unsplash("photo-1762955911431-4c44c7c3f408", 1200), alt: "A caregiver spending time with an elderly couple", tag: "Patient attendants" },
    ],
    closing: { src: unsplash("photo-1765896387398-1e1ae8d2eb85", 2000), alt: "A caregiver in scrubs leaning toward an elderly person" },
  },
  next: { name: "HomeLane", link: "/work/homelane", tags: ["SEO", "Performance Marketing"], image: workHomelane },
};

const Care24CaseStudy = () => <CaseStudyTemplate data={care24} />;

export default Care24CaseStudy;
