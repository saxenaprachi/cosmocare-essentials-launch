import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import NavDropdown from "./NavDropdown";

const aboutDropdownItems = [
  { name: "Company Overview", path: "/about#mission" },
  { name: "Core Values", path: "/about#values" },
  { name: "Our Team", path: "/about#team" },
];

const productsDropdownItems = [
  { name: "Skin Care", path: "/products#skincare" },
  { name: "Hair Care", path: "/products#haircare" },
  { name: "Baby Care", path: "/products#babycare" },
  { name: "Toiletries", path: "/products#toiletries" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cosmocare Essentials"
              className="h-[4rem] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link text-sm tracking-wide ${
                location.pathname === "/" ? "text-primary font-semibold" : ""
              }`}
            >
              Home
            </Link>
            
            <NavDropdown
              label="About Us"
              basePath="/about"
              items={aboutDropdownItems}
              isActive={location.pathname === "/about"}
            />
            
            <NavDropdown
              label="Products"
              basePath="/products"
              items={productsDropdownItems}
              isActive={location.pathname === "/products"}
            />
            
            <Link
              to="/manufacturing"
              className={`nav-link text-sm tracking-wide ${
                location.pathname === "/manufacturing" ? "text-primary font-semibold" : ""
              }`}
            >
              Manufacturing
            </Link>
            
            <Link
              to="/contact"
              className={`nav-link text-sm tracking-wide ${
                location.pathname === "/contact" ? "text-primary font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm">
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2 bg-card rounded-xl p-6 shadow-medium">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Home
                </Link>
                
                {/* Mobile About Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`w-full flex items-center justify-between text-base font-medium py-2 ${
                      location.pathname === "/about" ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    About Us
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {aboutDropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-primary py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Mobile Products Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    className={`w-full flex items-center justify-between text-base font-medium py-2 ${
                      location.pathname === "/products" ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    Products
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-2 space-y-2">
                          {productsDropdownItems.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-muted-foreground hover:text-primary py-1"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link
                  to="/manufacturing"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/manufacturing" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Manufacturing
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 ${
                    location.pathname === "/contact" ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  Contact
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center mt-2"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
