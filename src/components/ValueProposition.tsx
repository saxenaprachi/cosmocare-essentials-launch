import { motion } from "framer-motion";
import { FlaskConical, Factory, Truck, ShieldCheck, Settings, Leaf } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Custom Formulation Lab",
    description: "Our in-house R&D team creates or adapts formulations to reflect your brand’s identity, with full control over ingredients, texture, fragrance, and performance.",
  },
  {
    icon: Factory,
    title: "Scalable Manufacturing",
    description: "Advanced manufacturing infrastructure designed to scale efficiently while maintaining precision, consistency, and strict regulatory compliance.",
  },
  {
    icon: Settings,
    title: "Full-Spectrum Services",
    description: "Comprehensive support across sampling, product development, packaging, and logistics, guided by market-aligned recommendations.",
  },
  {
    icon: ShieldCheck,
    title: "Stringent Quality Control",
    description: "GMP-certified processes ensure product safety, efficacy, and regulatory compliance at every stage of manufacturing.",
  },
  {
    icon: Truck,
    title: "Efficient Delivery",
    description: "Streamlined operations and reliable logistics aligned to your go-to-market timelines — without delays or surprises.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Responsible manufacturing practices focused on environmental care, ethical sourcing, and long-term sustainability.",
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
          End-to-end private label manufacturing solutions built to support your brand from formulation to market delivery.
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
