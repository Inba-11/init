import { Linkedin } from "lucide-react";

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
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Leadership</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Meet the <span className="text-gradient-primary">team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The people behind Init Services — passionate about technology and committed to your success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-card hover:bg-accent/70 hover:backdrop-blur-lg hover:border-accent/40 hover:shadow-[0_12px_45px_-8px_hsl(240,70%,62%,0.4)] hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-all duration-300">
                <span className="font-heading text-2xl font-bold text-primary-foreground group-hover:text-white">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-white transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3 group-hover:text-white/90 transition-colors">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary text-sm transition-colors group-hover:text-white group-hover:hover:text-white/80"
              >
                <Linkedin size={16} />
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
