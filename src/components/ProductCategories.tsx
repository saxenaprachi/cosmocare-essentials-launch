import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import skincare from "@/assets/skincare.jpg";
import haircare from "@/assets/haircare.jpg";
import babycare from "@/assets/babycare.jpg";
import toiletries from "@/assets/toiletries.jpg";

const categories = [
  {
    id: "skincare",
    title: "Skin Care",
    description: "Face creams, serums, cleansers, moisturizers, and sun protection formulations developed for efficacy, safety, and consistency across skin types.",
    image: skincare,
    items: ["Face Care", "Serums", "Creams", "SPF Products"],
  },
  {
    id: "haircare",
    title: "Hair Care",
    description: "Shampoos, conditioners, oils, masks, and styling solutions formulated for performance, scalp health, and long-term consumer use.",
    image: haircare,
    items: ["Shampoo", "Conditioner", "Hair Oil", "Styling"],
  },
  {
    id: "babycare",
    title: "Baby Care",
    description: "Gentle, dermatologically considered formulations designed for delicate baby skin, hair, and daily hygiene needs.",
    image: babycare,
    items: ["Baby Lotion", "Shampoo", "Massage Oil", "Bath Products"],
  },
  {
    id: "toiletries",
    title: "Toiletries",
    description: "Essential bath, body, and personal hygiene products manufactured with strict quality and regulatory standards.",
    image: toiletries,
    items: ["Body Wash", "Shower Gel", "Deodorants", "Intimate Care"],
  },
];

const ProductCategories = () => {
  return (
    <section className="section-padding bg-background">
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
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive range of beauty and personal care products, fully customizable to align with your brand’s formulation, positioning, and market needs.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/products#${category.id}`}
                className="group block card-elegant overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl text-card mb-1">{category.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={20} className="text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/products" className="btn-secondary">
            View Full Product Range
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
