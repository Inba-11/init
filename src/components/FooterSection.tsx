import { Mail, Phone, MessageCircle } from "lucide-react";


const FooterSection = () => {
  return (
    <footer id="contact" className="bg-dark py-16 border-t border-dark-bg-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">

              <span className="font-heading text-xl font-bold text-dark-bg-foreground">
                Init <span className="text-primary">Services</span>
              </span>
            </div>
            <p className="text-dark-bg-foreground/60 text-sm leading-relaxed max-w-xs">
              Your digital transformation partner. We help businesses and students level up with technology.
            </p>
          </div>

          {/* Contact — center */}
          <div>
            <h4 className="font-heading font-semibold text-dark-bg-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {/* Phone 1 — Mohammed Syfudeen */}
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919042649307"
                  className="text-dark-bg-foreground/60 hover:text-primary transition-colors"
                >
                  +91 90426 49307
                </a>
                <a
                  href="https://wa.me/919042649307"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-dark-bg-foreground/40 hover:text-green-400 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={13} />
                </a>
              </li>

              {/* Phone 2 — Inbatamizhan */}
              <li className="flex items-center gap-2 text-sm">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+916379656457"
                  className="text-dark-bg-foreground/60 hover:text-primary transition-colors"
                >
                  +91 63796 56457
                </a>
                <a
                  href="https://wa.me/916379656457"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-dark-bg-foreground/40 hover:text-green-400 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={13} />
                </a>
              </li>

              {/* Email 2 */}
              <li className="flex items-center gap-2 text-sm">
                <Mail size={14} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:initservices02@gmail.com"
                  className="text-dark-bg-foreground/60 hover:text-primary transition-colors"
                >
                  initservices02@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links — right */}
          <div>
            <h4 className="font-heading font-semibold text-dark-bg-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "How We Help", "For Students", "Team"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-dark-bg-foreground/60 hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-bg-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-bg-foreground/40 text-sm">
            © {new Date().getFullYear()} Init Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-dark-bg-foreground/40 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
