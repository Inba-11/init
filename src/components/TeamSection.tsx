import { Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  {
    name: "Mohammed Syfudeen",
    role: "CEO",
    linkedin: "https://www.linkedin.com/in/mohammed-syfudeen-239416292/",
  },
  {
    name: "Inbatamizhan P",
    role: "Head of Operations",
    linkedin: "https://www.linkedin.com/in/inbatamizhan-p-232a23295/",
  },
  {
    name: "Lourdhu Sathish",
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/lourdu-sathish/",
  },
  {
    name: "Dhivakar Sankar",
    role: "President",
    linkedin: "https://www.linkedin.com/in/dhivakar-sankar/",
  },
];

const TeamSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const cards = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={header.ref}
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-16 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Leadership</span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Meet the <span className="text-gradient-primary">team</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            The people behind Init Services — passionate about technology and committed to your success.
          </p>
        </div>

        <div ref={cards.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group relative bg-card border border-border border-t-2 border-t-transparent rounded-xl p-4 sm:p-6 text-center shadow-card hover:border-t-primary active:border-t-primary hover:-translate-y-1.5 hover:shadow-[0_14px_36px_-10px_hsl(219_61%_43%_/_0.25)] transition-all duration-300 ${
                cards.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transitionDuration: "600ms" }}
            >
              {/* Avatar */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-primary/30 bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:border-primary/70 group-hover:bg-primary/20 transition-all duration-300">
                <span className="font-heading text-lg sm:text-xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-foreground text-sm sm:text-base mb-0.5 group-hover:text-primary transition-colors duration-300 leading-tight">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-xs font-medium mb-3 sm:mb-4 uppercase tracking-wider">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary active:text-primary text-xs font-medium transition-colors duration-200 border border-border rounded-full px-2.5 sm:px-3 py-1.5 hover:border-primary/50 active:border-primary/50"
              >
                <Linkedin size={12} />
                <span>LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
