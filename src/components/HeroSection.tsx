import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const chips = ["Startups", "Local Businesses", "Students", "Freelancers"];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen min-h-[100svh] flex items-center overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>

      {/* Floating ambient orbs — hidden on mobile to prevent overflow */}
      <div
        className="hidden sm:block absolute top-[12%] right-[8%] w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, hsl(219 61% 43% / 0.2) 0%, transparent 70%)" }}
      />
      <div
        className="hidden sm:block absolute bottom-[15%] left-[4%] w-[220px] h-[220px] lg:w-[340px] lg:h-[340px] rounded-full pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle, hsl(219 61% 55% / 0.13) 0%, transparent 70%)", animationDelay: "1.5s" }}
      />
      <div
        className="hidden lg:block absolute top-[60%] right-[28%] w-[220px] h-[220px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, hsl(240 2% 40% / 0.2) 0%, transparent 70%)", animationDuration: "8s", animationDelay: "3s" }}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-28 sm:pb-32">
        <div className="max-w-3xl">

          {/* Headline */}
          <h1
            className="font-heading text-[2.4rem] leading-[1.1] sm:text-5xl lg:text-7xl font-extrabold mb-5 sm:mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-dark-bg-foreground">We </span>
            <span className="text-gradient-primary">build, automate</span>
            <span className="text-dark-bg-foreground"> & scale your digital presence</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-base sm:text-xl text-dark-bg-foreground/70 max-w-xl mb-8 sm:mb-10 opacity-0 animate-fade-up font-body leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            From landing pages to AI integrations — Init Services handles everything so you can focus on what matters most: growing your business.
          </p>

          {/* Buttons — stack full-width on mobile */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Talk to Us <ArrowRight size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services ↓
            </Button>
          </div>

          {/* Trusted-by chips */}
          <div
            className="flex flex-wrap items-center gap-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="text-xs text-dark-bg-foreground/40 font-medium mr-1">Trusted by</span>
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-xs font-medium text-dark-bg-foreground/60 bg-dark-bg-foreground/5 border border-dark-bg-foreground/10 rounded-full px-3 py-1 active:border-primary/50 active:text-primary hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="text-xs text-dark-bg-foreground/30 tracking-widest uppercase font-medium">Scroll to explore</span>
        <ChevronDown size={20} className="text-dark-bg-foreground/30 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
