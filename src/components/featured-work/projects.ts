import workCodingal from "@/assets/codingal/desktop-home.jpg";
import workHomelane from "@/assets/work-homelane.png";
import workWtc from "@/assets/work-wtc.png";
import workSab from "@/assets/work-sab-collage.jpg";
import work22Workspace from "@/assets/work-22workspace-real.jpg";

export const featuredProjects = [
  {
    image: workCodingal,
    title: "Codingal",
    category: "EdTech · Y Combinator W21",
    tags: ["Mobile App", "Web", "SEO"],
    description: "Live AI and coding classes for kids. The app, web platform and SEO behind a Y Combinator-backed school.",
    link: "/work/codingal",
  },
  {
    image: workHomelane,
    title: "HomeLane",
    category: "Interior Design",
    tags: ["SEO", "Performance Marketing"],
    description: "Driving organic growth and maximizing ROI through targeted performance marketing campaigns.",
    link: "/work/homelane",
  },
  {
    image: workSab,
    title: "SAB Properties",
    category: "Real Estate",
    tags: ["Web Dev", "UI/UX", "SEO"],
    description: "A complete digital transformation redefining the property discovery experience.",
    link: "/work/sab-properties",
  },
  {
    image: workWtc,
    title: "World Tunnel Congress",
    category: "Global Events",
    tags: ["Web Design", "Digital Strategy"],
    description: "Designing a world-class digital platform for a premier global engineering event.",
    link: "/work/wtc-2026",
  },
  {
    image: work22Workspace,
    title: "22Workspace",
    category: "Coworking",
    tags: ["Branding", "Web Dev"],
    description: "Crafting a dynamic brand identity and seamless web experience for modern workspaces.",
    link: "/work/22workspace",
  },
];

export type FeaturedProject = (typeof featuredProjects)[number];
