import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactFormModal from "@/components/ContactFormModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const content = useScrollReveal({ threshold: 0.25 });

  return (
    <>
      <section className="py-16 sm:py-24 bg-background border-t border-border relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-70" />
        {/* Blue corner glow */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom left, hsl(219 61% 43% / 0.1) 0%, transparent 65%)" }}
        />

        <div
          ref={content.ref}
          className={`container mx-auto px-4 lg:px-8 relative z-10 transition-all duration-700 ${
            content.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left-aligned, not centered */}
          <div className="max-w-2xl">
            <span className="section-label mb-5 inline-flex">Get Started</span>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
              Ready to <span className="text-gradient-primary">transform</span><br className="hidden sm:block" /> your business?
            </h2>
            <div className="w-10 h-[2px] bg-primary mb-5" />
            <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed max-w-lg">
              Let's build something extraordinary together. Get in touch and let Init Services take your business to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto rounded px-8 text-base"
                onClick={() => setFormOpen(true)}
              >
                Contact Us <ArrowRight size={16} />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                className="w-full sm:w-auto rounded px-8 text-base"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default CTASection;
