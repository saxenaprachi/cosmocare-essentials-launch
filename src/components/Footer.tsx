import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Cosmocare Essentials"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted private label manufacturing partner in beauty & personal care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products#skincare" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Skin Care
                </Link>
              </li>
              <li>
                <Link to="/products#haircare" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link to="/products#babycare" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Baby Care
                </Link>
              </li>
              <li>
                <Link to="/products#toiletries" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Toiletries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground text-sm">
                  P6/005 SAIF Zone, Sharjah,<br />United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+971507356254" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  +971 50 735 6254
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:siva@cosmocare-essentials.com" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  siva@cosmocare-essentials.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin size={18} className="text-primary shrink-0" />
                <a 
                  href="https://www.linkedin.com/company/cosmocare-essentials/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Cosmocare Essentials FZC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground/70 flex items-center gap-2">
                <span className="font-medium">GMP</span> •
                <span className="font-medium">ISO 22716</span> •
                <span className="font-medium">ISO 9001:2015</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
