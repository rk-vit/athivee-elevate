import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../assets/logos/logotest2.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Approach", href: "/approach" },
  {
    name: "Services",
    href: "#",
    children: [
      {
        name: "Talent Development",
        href: "/talent-development",
        children: [
          { name: "Behaviour Architecture", href: "/services/behaviour-architecture" },
          { name: "Leadership Excel", href: "/services/leadership-excel" },
          { name: "Leadership Excavation", href: "/services/leadership-excavation" },
          { name: "Leadership Architecture", href: "/services/leadership-architecture" },
        ],
      },
      {
        name: "Talent Assessment",
        href: "/talent-assessment",
        children: [
          { name: "Competency Framework", href: "/services/competency-framework" },
          { name: "Behaviour Assessment", href: "/services/behaviour-assessment" },
          { name: "Assessment Centre", href: "/services/assessment-centre" },
        ],
      },
    ],
  },
  { name: "Challenges", href: "/challenges" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src={logo}
              alt="Athivee"
              className="h-16 w-auto origin-left"
              animate={{ scale: 1.8 }}
            />
          </Link>

          {/* Desktop Navigation */}
          {isScrolled && (
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    /* 🔑 SINGLE HOVER ZONE FOR BOTH LEVELS */
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => {
                        setOpenDropdown(null);
                        setOpenSubDropdown(null);
                      }}
                    >
                      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-border overflow-visible"
                          >
                            {item.children.map((child) => (
                              <div
                                key={child.name}
                                className="relative"
                                onMouseEnter={() => setOpenSubDropdown(child.name)}
                              >
                                <Link
                                  to={child.href}
                                  className="flex items-center justify-between px-5 py-3.5 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors border-b border-border last:border-0"
                                >
                                  {child.name}
                                  {child.children && <ChevronRight className="w-4 h-4" />}
                                </Link>

                                {/* SECOND LEVEL */}
                                <AnimatePresence>
                                  {openSubDropdown === child.name &&
                                    child.children && (
                                      <motion.div
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-0 left-full ml-1 w-56 bg-white rounded-xl shadow-xl border border-border"
                                      >
                                        {child.children.map((sub) => (
                                          <Link
                                            key={sub.name}
                                            to={sub.href}
                                            className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-secondary/50 transition-colors border-b border-border last:border-0"
                                          >
                                            {sub.name}
                                          </Link>
                                        ))}
                                      </motion.div>
                                    )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              size="sm"
              className={isScrolled ? "" : "bg-black text-white hover:bg-white/90"}
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border shadow-lg"
          >
            <div className="container-custom py-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === item.name ? null : item.name)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-secondary/50"
                      >
                        {item.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="block px-4 py-2.5 text-foreground hover:text-primary rounded-lg"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 font-medium rounded-lg ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/5"
                          : "text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 px-4">
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
