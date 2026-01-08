import { motion } from "framer-motion";
import { FlaskConical, Factory, Truck, ShieldCheck, Settings, Leaf } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Custom Formulation Lab",
    description: "In-house R&D lab to create or adapt formulations to your brand's unique identity. Fully customizable: color, fragrance, texture, composition.",
  },
  {
    icon: Factory,
    title: "Scalable Manufacturing",
    description: "State-of-the-art machinery enabling seamless scalability while ensuring precision, uniformity, and strict regulatory compliance.",
  },
  {
    icon: Settings,
    title: "Full-Spectrum Services",
    description: "End-to-end support across sampling, product development, packaging, and logistics with market-aligned recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "Stringent Quality Control",
    description: "Quality standards backed by GMP certification ensuring product safety, efficacy, and regulatory compliance at every stage.",
  },
  {
    icon: Truck,
    title: "Efficient Delivery",
    description: "Streamlined operations and reliable logistics ensuring on-time delivery aligned with your go-to-market timelines.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Committed to environmentally and socially responsible practices throughout our manufacturing process.",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to delivery, we provide comprehensive private label 
            manufacturing solutions for the beauty and personal care industry
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
