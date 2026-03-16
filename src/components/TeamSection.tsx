import { Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const team = [
  { name: "Mohammed Syfudeen", role: "CEO",               linkedin: "https://www.linkedin.com/in/mohammed-syfudeen-239416292/" },
  { name: "Inbatamizhan P",    role: "Head of Operations", linkedin: "https://www.linkedin.com/in/inbatamizhan-p-232a23295/" },
  { name: "Lourdhu Sathish",   role: "Managing Director",  linkedin: "https://www.linkedin.com/in/lourdu-sathish/" },
  { name: "Dhivakar Sankar",   role: "President",          linkedin: "https://www.linkedin.com/in/dhivakar-sankar/" },
];

const TeamSection = () => {
  const header = useScrollReveal({ threshold: 0.2 });
  const cards  = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="team" className="py-16 sm:py-24 bg-dark border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">

        <div
          ref={header.ref}
          className={`max-w-2xl mb-10 sm:mb-14 transition-all duration-700 ${
            header.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-label mb-4 inline-flex">Leadership</span>
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-dark-bg-foreground mt-4 mb-3">
            Meet the <span className="text-gradient-primary">team</span>
          </h2>
          <p className="text-dark-bg-foreground/55 text-sm sm:text-base leading-relaxed">
            The people behind Init Services — passionate about technology and committed to your success.
          </p>
        </div>

        <div ref={cards.ref} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-dark-bg-foreground/10 max-w-4xl">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`group relative bg-dark p-5 sm:p-6 hover:bg-dark-bg-foreground/5 active:bg-dark-bg-foreground/5 transition-all duration-250 ${
                cards.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 90}ms`, transitionDuration: "550ms" }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Avatar — square */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center mb-4 group-hover:border-primary/65 group-hover:bg-primary/18 transition-all duration-250">
                <span className="font-heading text-lg font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-dark-bg-foreground text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors duration-250">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider mb-4">{member.role}</p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary active:text-primary text-[11px] font-medium transition-colors duration-200 border border-border rounded px-2.5 py-1.5 hover:border-primary/50 active:border-primary/50"
              >
                <Linkedin size={11} />
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
