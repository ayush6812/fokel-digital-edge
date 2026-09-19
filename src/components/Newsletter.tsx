import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        <div className="rounded-[3rem] border border-white/10 p-10 md:p-16 lg:p-24 grid lg:grid-cols-2 gap-12 lg:gap-24 bg-white/[0.02] items-center relative overflow-hidden group hover:border-accent/30 transition-colors duration-700">
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-1000" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 font-mono text-[10px] uppercase tracking-widest mb-6">
              STAY SHARP
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none text-white mb-6">
              SUBSCRIBE TO <br /> OUR <span className="text-accent italic">INSIGHTS</span>
            </h2>
            <p className="text-white/50 font-medium text-lg max-w-md">
              Get the latest insights on digital strategy, branding trends, and engineering architectures delivered straight to your inbox.
            </p>
          </div>

          <div className="relative z-10">
            {submitted ? (
              <div className="border border-accent/30 p-8 rounded-3xl bg-accent/5 text-center">
                <p className="text-xl font-black uppercase text-accent mb-2">THANK YOU</p>
                <p className="text-white/70 font-mono text-sm uppercase tracking-widest">
                  YOU HAVE SUCCESSFULLY SUBSCRIBED.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-full px-8 py-5 text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:bg-white/10 font-mono text-sm uppercase tracking-widest transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent text-black rounded-full py-5 px-10 shrink-0 font-mono text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,85,0,0.15)]"
                >
                  SUBSCRIBE <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
