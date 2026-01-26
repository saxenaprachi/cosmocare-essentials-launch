import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import skincare from "@/assets/skincare.jpg";
import skincare1 from "@/assets/skincare/skincare1.png";
import skincare2 from "@/assets/skincare/skincare2.png";
import skincare3 from "@/assets/skincare/skincare3.png";
import skincare4 from "@/assets/skincare/skincare4.png";
import skincare5 from "@/assets/skincare/skincare5.png";
import skincare6 from "@/assets/skincare/skincare6.png";
import skincare7 from "@/assets/skincare/skincare7.png";
import haircare from "@/assets/haircare.jpg";
import babycare from "@/assets/babycare.jpg";
import toiletries from "@/assets/toiletries.jpg";
import CategoryImageCarousel from "@/components/ui/CategoryImageCarousel";

const productCategories = [
  {
    id: "skincare",
    title: "Skin Care",
    images: [skincare1, skincare2, skincare3, skincare4, skincare5, skincare6, skincare7],
    description: "Premium skincare formulations for all skin types",
    subcategories: [
      {
        name: "Moiturizing Body lotion",
        products: ["Papaya", "Aloe Vera", "Pomegranate", "Shea Butter", "French Lavender"],
      },
      {
        name: "Moisturizing & Refreshing Shower Gel",
        products: ["Papaya", "Aloe Vera", "Pomegranate", "Shea Butter", "French Lavender"],
      },
      {
        name: "Glow White Brightening & Moisturizing Body Cream",
        products: ["White Musk", "Papaya", "Cocoa Butter", "Licorice Extract"],
      },
      {
        name: "Face & Body Scrub",
        products: ["Apricot", "Pomegranate", "Turmeric", "Papaya", "Cofee", "Mango", "Watermelon", "Strawberry"],
      },
      {
        name: "Face wash",
        products: ["Coffee", "Orange", "Papaya", "Charcoal", "Rose"],
      },
      {
        name: "Creams",
        products: ["Day & Night Cream", "Foot Cream", "Bust Cream", "Glycerin Cream", "Firming Butter Cream", "Brightening Cream", "Dark Spot Whitening Cream"],
      },
      {
        name: "Serums",
        products: ["Retinol Serum", "Arbutin & Nicinamide", "Vitamin(Ascorbic acid )", "AHA BHA Peeling solution", "Kojic acid", "Collagen", "Turmeric"],
      },
      {
        name: "Toner",
        products: ["Glutathion", "Niacinamide", "Propanediol", "Hyaluronic acid", "Lactic acid"],
      },
      {
        name: "Moisturising jelly",
        products: ["Aloe vera", "Cocoa butter", "Shea butter"],
      },
      {
        name: "Sun Protection",
        products: ["Vitamin C & Hyaluronic acid", "Ceramide & Niacinamide", "Vitamin C & Papaya extract", "Hyaluronic acid & Turmeric extract", "Ceramide & Papaya extract", "Niacinamide, Hyaluronic acid & Vitamin E", "Vitamin C & Vitamin E", "Advanced multi vitamin"],
      },
    ],
  },
  {
    id: "haircare",
    title: "Hair Care",
    images: [haircare],
    description: "Complete hair care solutions for healthy, beautiful hair",
    subcategories: [
      {
        name: "Hair Cleansing",
        products: ["Shampoo", "Clarifying Shampoo", "Anti-Dandruff Shampoo", "Color Protection Shampoo"],
      },
      {
        name: "Shampoo",
        products: ["Tea Tree oil", "Avocado", "Onion", "Argan & White Protien", "Keratin", "Coconut & Rosemary", "Olive Oil", "Amla", "Sulfate free shampoo"],
      },
      {
        name: "Hair Conditioning",
        products: ["Conditioner", "Deep Conditioner", "Leave-in Conditioner", "Hair Mask", "Keratin", "Avocado", "Olive Oil", "Argan & Wheat Protien", "Tea Tree Oil", "Coconut Milk"],
      },
      {
        name: "Hair Treatments",
        products: ["Hair Oil", "Hair Serum", "Scalp Treatment", "Hair Growth Solution"],
      },
      {
        name: "Hair Oil",
        products: ["Amla", "Coconut & Rosemary", "Argan", "Almond"],
      },
      {
        name: "Styling Products",
        products: ["Hair Gel", "Hair Spray", "Hair Wax", "Mousse"],
      },
    ],
  },
  {
    id: "babycare",
    title: "Baby Care",
    images: [babycare],
    description: "Gentle, safe products designed for delicate baby skin",
    subcategories: [
      {
        name: "Baby Skin Care",
        products: ["Baby Lotion", "Baby Cream", "Baby Massage Oil", "Diaper Rash Cream"],
      },
      {
        name: "Baby Hair Care",
        products: ["Baby Shampoo", "Baby Conditioner", "Baby Hair Oil"],
      },
      {
        name: "Baby Bath & Hygiene",
        products: ["Baby Shower Gel", "Baby Bubble Bath", "Baby Body Wash", "Baby Soap"],
      },
    ],
  },
  {
    id: "toiletries",
    title: "Toiletries",
    images: [toiletries],
    description: "Personal hygiene and bath essentials for everyday use",
    subcategories: [
      {
        name: "Bath & Shower",
        products: ["Body Wash", "Shower Gel", "Bath Soap", "Exfoliating Scrub", "Bath Bombs"],
      },
      {
        name: "Personal Hygiene",
        products: ["Intimate Wash", "Body Mist", "Deodorant Stick", "Anti-Perspirant Roll-on", "Deodorant Gel", "Shaving Gel"],
      },
      {
        name: "Shower Scrub",
        products: ["Papaya", "Watermelon ", "Lavender", "Strawberry", "Blueberry"],
      },
      {
        name: "Anti perspirant deodorant roll ons",
        products: ["Hyaluronic acid", "Collagen ", "Backuchiol", "Biotin"],
      },
    ],
  },
];

const Products = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-teal-light/30 to-background">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Our Products
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Product Portfolio
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive range of private label beauty and personal 
                care products. Each formulation can be customized to match your brand's 
                unique identity.
              </p>
            </motion.div>

            {/* Quick Nav */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mt-10"
            >
              {productCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-5 py-2.5 bg-card rounded-full shadow-soft text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {cat.title}
                </a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="section-padding bg-background">
          <div className="container-wide space-y-24">
            {productCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32 relative"
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${categoryIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative lg:sticky lg:top-32 lg:self-start ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="rounded-3xl overflow-hidden shadow-elevated">
                      <CategoryImageCarousel images={category.images} />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-light rounded-2xl -z-10" />
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-light rounded-xl -z-10" />
                  </div>

                  {/* Content */}
                  <div className={categoryIndex % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      {category.description}
                    </p>

                    <div className="space-y-6">
                      {category.subcategories.map((sub) => (
                        <div key={sub.name}>
                          <h4 className="font-medium text-foreground mb-3">{sub.name}</h4>
                          <div className="flex flex-wrap gap-2">
                            {sub.products.map((product) => (
                              <span
                                key={product}
                                className="text-sm px-4 py-2 bg-secondary rounded-full text-secondary-foreground"
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
