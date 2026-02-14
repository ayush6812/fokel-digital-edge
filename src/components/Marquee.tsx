import inventeron from "@/assets/clients/inventeron.jpg";
import onsurity from "@/assets/clients/onsurity.jpg";
import homelane from "@/assets/clients/homelane.webp";
import hmo from "@/assets/clients/hmo.png";
import genes from "@/assets/clients/genes.png";
import wtc from "@/assets/clients/wtc.webp";

const clients = [
  { src: inventeron, alt: "Inventeron Technologies" },
  { src: onsurity, alt: "Onsurity" },
  { src: homelane, alt: "HomeLane" },
  { src: hmo, alt: "HMO Architects" },
  { src: genes, alt: "Genes Lecoanet Hemant" },
  { src: wtc, alt: "WTC 2026" },
];

const Marquee = () => {
  return (
    <section className="bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-8">
          Trusted By
        </p>
      </div>

      {/* Marquee container with gradient fade edges, pause on hover */}
      <div className="relative py-10 overflow-hidden marquee-hover-pause">
        {/* Left fade - masks the edge for smooth visual */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-32 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0) 100%)",
          }}
        />

        {/* Infinite smooth scroll - duplicates content for seamless loop */}
        <div className="animate-marquee py-4 will-change-transform flex min-w-max">
          <div className="flex gap-12 md:gap-20 items-center pr-12 md:pr-20">
            {clients.map((client, i) => (
              <div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-out mix-blend-darken dark:mix-blend-lighten opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="flex gap-12 md:gap-20 items-center pl-12 md:pl-20" aria-hidden>
            {clients.map((client, i) => (
              <div
                key={`dup-${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4"
              >
                <img
                  src={client.src}
                  alt=""
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-out mix-blend-darken dark:mix-blend-lighten opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
