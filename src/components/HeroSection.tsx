import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const chips = ["Startups", "Local Businesses", "Students", "Freelancers"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Sharp grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Single subtle blue glow — top-right, not bouncing */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, hsl(219 61% 43% / 0.12) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-28 sm:pb-32">
        <div className="max-w-3xl">

          {/* Section label */}
          <div className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0s" }}>
            <span className="section-label">Init Services</span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-[2.4rem] leading-[1.06] sm:text-5xl lg:text-7xl font-extrabold mb-5 sm:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.12s" }}
          >
            <span className="text-dark-bg-foreground">We </span>
            <span className="text-gradient-primary">build, automate</span>
            <span className="text-dark-bg-foreground"> &amp; scale your digital presence</span>
          </h1>

          {/* Thin blue rule */}
          <div
            className="w-16 h-[2px] bg-primary mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.22s" }}
          />

          {/* Subtext */}
          <p
            className="text-base sm:text-lg text-dark-bg-foreground/65 max-w-lg mb-8 sm:mb-10 opacity-0 animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            From landing pages to AI integrations — Init Services handles everything so you can focus on what matters most: growing your business.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto rounded px-8 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Talk to Us <ArrowRight size={16} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto rounded px-8 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services ↓
            </Button>
          </div>

          {/* Trusted-by chips — square */}
          <div
            className="flex flex-wrap items-center gap-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <span className="text-xs text-dark-bg-foreground/35 font-medium mr-1 font-mono">trusted_by /</span>
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-medium text-dark-bg-foreground/55 bg-dark-bg-foreground/5 border border-dark-bg-foreground/12 rounded px-2.5 py-1 hover:border-primary/50 hover:text-primary active:border-primary/50 active:text-primary transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-px h-8 bg-dark-bg-foreground/20" />
        <ChevronDown size={16} className="text-dark-bg-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
