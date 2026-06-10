import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "About", id: "mission" },
    { label: "Services", id: "services" },
    { label: "Use Cases", id: "standard" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    { icon: Mail, href: "mailto:priyanshivinyakya@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/priyanshivinyakya", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/priyanshivinyakya", label: "GitHub" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border border-foreground flex items-center justify-center rounded-md">
                <span className="font-display text-sm font-bold">T</span>
              </div>
              <span className="font-display text-xl font-bold tracking-wide">
                THINKFLOW
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[240px]">
              From Chaos → Execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground tracking-wide mb-5">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground tracking-wide mb-5">
              CONNECT
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Built in Public
          </p>
          <p className="text-muted-foreground text-sm">
            © 2026 ThinkFlow. From Chaos → Execution.
          </p>
          <p className="text-muted-foreground text-xs mt-2 md:mt-0">
            built by priyanshivinyakya 💡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
