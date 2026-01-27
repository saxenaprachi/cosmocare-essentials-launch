import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  name: string;
  path: string;
}

interface NavDropdownProps {
  label: string;
  basePath: string;
  items: DropdownItem[];
  isActive: boolean;
}

const NavDropdown = ({ label, basePath, items, isActive }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={basePath}
        className={`nav-link text-sm tracking-wide flex items-center gap-1 ${
          isActive ? "text-primary font-semibold" : ""
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-2 z-50"
          >
            <div className="bg-card rounded-xl shadow-medium border border-border/50 py-2 min-w-[200px]">
              {items.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavDropdown;
