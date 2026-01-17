import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo1.png";

const footerLinks = {
  services: [
    { name: "Talent Development", href: "/talent-development" },
    { name: "Talent Assessment", href: "/talent-assessment" },
    { name: "Leadership Programs", href: "/talent-development" },
    { name: "Organisational Consulting", href: "/challenges" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Approach", href: "/approach" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Resources", href: "/resources" },
  ],
  solutions: [
    { name: "High Performance Culture", href: "/challenges" },
    { name: "Succession Management", href: "/challenges" },
    { name: "Women's Leadership", href: "/challenges" },
    { name: "First-Time Managers", href: "/challenges" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-14 md:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-xl">
                <img src={logo} alt="Athivee" className="h-10 w-auto" />
              </div>
            </Link>

            <p className="text-primary-foreground/80 text-sm mb-6 max-w-sm leading-normal">
              Leadership Architects dedicated to building exceptional talent pools
              and transforming organizations through strategic talent development.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@athivee.com"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@athivee.com</span>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (234) 567-890</span>
              </a>

              <div className="flex items-start gap-4 text-primary-foreground/80">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm pt-1">
                  123 Business District, Corporate Plaza, City, Country
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4 relative inline-block">
              Company
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4 relative inline-block">
              Solutions
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/15 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Athivee Management Consulting. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
