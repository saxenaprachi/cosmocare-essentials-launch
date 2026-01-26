import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Factory, ArrowRight, FlaskConical, Package, Boxes } from "lucide-react";

const ManufacturingPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Manufacturing
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
              Where Your Formula Becomes a{" "}
              <span className="text-gradient">Finished Product</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Turning a formula into something you can hold in your hands demands precision, 
              coordination, and partners who understand every detail. Our role is to make this 
              entire process predictable and aligned with the quality your brand stands for.
            </p>
            

            <Link
              to="/manufacturing"
              className="btn-primary group inline-flex items-center"
            >
              Learn More About Manufacturing
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-light to-gold-light rounded-3xl p-8 lg:p-12">
              <div className="flex items-center justify-center w-20 h-20 bg-card rounded-2xl shadow-soft mb-6 mx-auto">
                <Factory size={40} className="text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground text-center mb-4">
                Three Production Models
              </h3>
              <div className="space-y-3">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-medium text-foreground text-sm">Bulk Only</p>
                  <p className="text-xs text-muted-foreground">Custom formulation, you handle filling</p>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-medium text-foreground text-sm">Bulk + Filling</p>
                  <p className="text-xs text-muted-foreground">You provide packaging, we do the rest</p>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 ring-2 ring-primary">
                  <p className="font-medium text-foreground text-sm">Full Service</p>
                  <p className="text-xs text-muted-foreground">End-to-end from concept to finished product</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-light rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-light rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPreview;
