import CaseStudyTemplate, { unsplash, type CaseStudyData } from "@/components/CaseStudyTemplate";
import work22Workspace from "@/assets/clients/22workspacebanner.jpeg";

// All copy and figures from the Fokel Projects Portfolio (Invoid, page 07)
const invoid: CaseStudyData = {
  seo: {
    title: "Invoid — Invoice Automation FinTech SaaS Case Study | Fokel",
    description:
      "Invoid is an invoice automation platform that takes the manual work out of accounts payable, with OCR invoice capture, multi-step approvals and vendor management, delivered by Fokel.",
    keywords: "Invoid case study, invoice automation SaaS, accounts payable automation, OCR invoice capture, FinTech SaaS development",
    url: "https://www.fokelworks.com/work/invoid",
  },
  name: "Invoid",
  industry: "FinTech",
  category: "Invoice Automation SaaS",
  headline: "Invoice automation that takes the manual work out of accounts payable.",
  overview:
    "Invoid is an invoice automation platform built to take the manual work out of accounts payable. It captures invoices with OCR, routes them through approvals and gives finance teams one place to manage vendors.",
  heroCaption: {
    text: "OCR capture, approvals and vendor management in one place.",
    highlight: "A FinTech SaaS engagement delivered by Fokel.",
  },
  cta: { label: "Live Demo on Request", href: "mailto:info@fokelworks.com?subject=Invoid%20live%20demo" },
  engagement: ["FinTech SaaS"],
  role: "SEO strategy and execution",
  status: "Live demo available on request",
  deliverables: [
    "OCR-powered invoice capture",
    "Multi-step invoice approvals",
    "Accounts payable (AP) automation",
    "Vendor management",
    "Secure, role-based access with JWT",
    "Background job processing with queues",
    "Web dashboard with optional mobile companion",
    "Cloud-hosted on AWS",
  ],
  technology: ["Next.js", "Node.js", "PostgreSQL", "Flutter", "AWS", "OCR", "Redis", "BullMQ", "JWT"],
  stats: [
    { value: "OCR", label: "Automated data capture" },
    { value: "AP", label: "Payables automation" },
    { value: "4", label: "Core modules" },
    { value: "AWS", label: "Cloud infrastructure" },
  ],
  marquee: ["INVOICE AUTOMATION", "OCR CAPTURE", "AP AUTOMATION", "CLOUD-HOSTED ON AWS"],
  photos: {
    hero: { src: unsplash("photo-1554224155-6726b3ff858f", 2000), alt: "A person holding an invoice next to a pen and calculator" },
    pair: [
      { src: unsplash("photo-1551288049-bebda4e38f71", 1200), alt: "Analytics graphs on a laptop screen", tag: "Finance teams" },
      { src: unsplash("photo-1772588627373-729b0f47e5bb", 1200), alt: "A person reviewing documents with a calculator and laptop", tag: "Accounts payable" },
    ],
    closing: { src: unsplash("photo-1460925895917-afdab827c52f", 2000), alt: "A laptop showing charts on a glass table" },
  },
  next: { name: "22Workspace", link: "/work/22workspace", tags: ["Branding", "Web Dev"], image: work22Workspace },
};

const InvoidCaseStudy = () => <CaseStudyTemplate data={invoid} />;

export default InvoidCaseStudy;
