import { Link } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/#blog" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const linkClass = "hover:text-accent transition-colors";

const Column = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h4 className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-6">{title}</h4>
    <ul className="space-y-3 font-bold uppercase tracking-tight text-base text-white">{children}</ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden z-10 w-full">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Brand — same wordmark as the navbar */}
          <div className="col-span-2 md:col-span-4">
            <Link to="/" className="inline-block group">
              <span
                className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                f<span className="text-accent">o</span>kel
              </span>
            </Link>
          </div>

          <div className="md:col-span-2">
            <Column title="Navigation">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </Column>
          </div>

          <div className="md:col-span-2">
            <Column title="Socials">
              {socialLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </Column>
          </div>

          <div className="col-span-2 md:col-span-2">
            <Column title="Connect">
              <li>
                <a href="mailto:info@fokelworks.com" className={`${linkClass} normal-case`}>info@fokelworks.com</a>
              </li>
              <li>
                <a href="tel:+919289539957" className={linkClass}>+91 92895 39957</a>
              </li>
            </Column>
          </div>

          <div className="col-span-2 md:col-span-2">
            <Column title="Location">
              <li className="leading-snug">
                A77, Basement, A Block,
                <br />
                East of Kailash,
                <br />
                New Delhi 110065, India
              </li>
            </Column>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/40">
          &copy; {new Date().getFullYear()} Fokel Digital Studio.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
