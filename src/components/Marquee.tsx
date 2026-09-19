import homelane from "@/assets/clients/homelane.png";
import wtc from "@/assets/clients/wtc.png";
import genes from "@/assets/clients/genes.png";
import onsurity from "@/assets/clients/onsurity.png";
import inventeron from "@/assets/clients/inventeron.png";
import hmo from "@/assets/clients/hmo.png";
import sabProperties from "@/assets/clients/sab-properties.png";

const clients = [
  { src: homelane, alt: "HomeLane", height: "h-8 md:h-12" },
  { src: wtc, alt: "WTC", height: "h-8 md:h-12" },
  { src: genes, alt: "Genes", height: "h-8 md:h-12" },
  { src: onsurity, alt: "Onsurity", height: "h-8 md:h-12" },
  { src: inventeron, alt: "Inventeron", height: "h-8 md:h-12" },
  { src: hmo, alt: "HMO Architects", height: "h-8 md:h-12" },
  { src: sabProperties, alt: "SAB Properties", height: "h-8 md:h-12" },
];

const Marquee = () => {
  return (
    <section className="bg-background border-b border-white/10 overflow-hidden py-12">
      <div className="relative overflow-hidden">
        <div className="animate-marquee py-2 flex min-w-max">
          <div className="flex gap-20 md:gap-32 items-center pr-8 md:pr-12">
            {clients.map((client, i) => (
              <div
                key={`${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${client.height} w-auto object-contain opacity-50 hover:opacity-100 invert`}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-20 md:gap-32 items-center pl-8 md:pl-12" aria-hidden>
            {clients.map((client, i) => (
              <div
                key={`dup-${client.alt}-${i}`}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`${client.height} w-auto object-contain opacity-50 hover:opacity-100 invert`}
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
