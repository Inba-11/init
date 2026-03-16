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
      <section className="py-16 sm:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div
          ref={content.ref}
          className={`container mx-auto px-4 lg:px-8 relative z-10 text-center transition-all duration-700 ${
            content.isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-dark-bg-foreground mb-4">
            Ready to <span className="text-gradient-primary">transform</span> your business?
          </h2>
          <p className="text-dark-bg-foreground/60 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Let's build something extraordinary together. Get in touch and let Init Services take your business to the next level.
          </p>

          {/* Buttons — stack on mobile */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base"
              onClick={() => setFormOpen(true)}
            >
              Contact Us <ArrowRight size={18} />
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <ContactFormModal open={formOpen} onOpenChange={setFormOpen} />
    </>
  );
};

export default CTASection;
