import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, FlaskConical, Truck } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-background to-gold-light opacity-50" />
      
      {/* Hero Image (positioned absolutely on larger screens) */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent lg:block hidden z-10" />
        <img
          src={heroImage}
          alt="Premium beauty products"
          className="w-full h-full object-cover opacity-30 lg:opacity-100"
        />
      </div>

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-light/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Award size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">GMP & ISO Certified What the fuck</span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Your Trusted{" "}
              <span className="text-gradient">Private Label</span>{" "}
              Manufacturing Partner
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From concept to scale, we help beauty and personal care brands create high-quality, compliant products tailored for diverse skin types and markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact" className="btn-primary group">
                Start Your Project
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products" className="btn-secondary">
                Explore Products
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <FlaskConical size={20} className="text-primary" />
                </div>
                <p className="font-display text-2xl sm:text-3xl text-foreground">R&D Lab</p>
                <p className="text-sm text-muted-foreground">In-house</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Award size={20} className="text-primary" />
                </div>
                <p className="font-display text-2xl sm:text-3xl text-foreground">GMP</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <Truck size={20} className="text-primary" />
                </div>
                <p className="font-display text-2xl sm:text-3xl text-foreground">Global</p>
                <p className="text-sm text-muted-foreground">Delivery</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
