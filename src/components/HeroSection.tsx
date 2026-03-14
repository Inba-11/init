import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const chips = ["Startups", "Local Businesses", "Students", "Freelancers"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-32">
        <div className="max-w-3xl">

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-dark-bg-foreground">We </span>
            <span className="text-gradient-primary">build, automate</span>
            <span className="text-dark-bg-foreground"> & scale your digital presence</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-dark-bg-foreground/70 max-w-xl mb-10 animate-fade-up font-body leading-relaxed" style={{ animationDelay: "0.25s" }}>
            From landing pages to AI integrations — Init Services handles everything so you can focus on what matters most: growing your business.
          </p>

          {/* === Option A — Buttons === */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="lg"
              className="rounded-full px-8 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Talk to Us <ArrowRight size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="rounded-full px-8 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services ↓
            </Button>
          </div>

          {/* === Option B — Trusted By Chips === */}
          <div className="flex flex-wrap items-center gap-2 animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <span className="text-xs text-dark-bg-foreground/40 font-medium mr-1">Trusted by</span>
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-medium text-dark-bg-foreground/60 bg-dark-bg-foreground/5 border border-dark-bg-foreground/10 rounded-full px-3 py-1 hover:border-primary/50 hover:text-primary hover:bg-primary/5 hover:shadow-card/50 transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* === Option D — Scroll Indicator === */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-dark-bg-foreground/30 tracking-widest uppercase font-medium">Scroll to explore</span>
        <ChevronDown
          size={20}
          className="text-dark-bg-foreground/30 animate-bounce"
        />
      </div>
    </section>
  );
};

export default HeroSection;
