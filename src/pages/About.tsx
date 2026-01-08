import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Lightbulb, Users, Award, Leaf, Handshake } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    description: "We act with honesty, transparency, and accountability in everything we do",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We foster creativity and embrace change to drive continuous improvement",
  },
  {
    icon: Users,
    title: "Customer Centricity",
    description: "We put our customers at the heart of every decision and solution",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality in our products and services",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are dedicated to environmentally and socially responsible practices",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of teamwork and collective success",
  },
];

const About = () => {
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
                About Us
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Empowering Beauty Brands Worldwide
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Sharjah, UAE, Cosmocare Essentials is your trusted partner 
                for private label manufacturing in the beauty and personal care industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Our Mission
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
                  Delivering Excellence in Every Product
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To empower brands by delivering innovative, sustainable, and high-quality 
                  cosmetic and personal care products tailored for diverse skin types and tones.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We combine cutting-edge formulation science with deep industry expertise 
                  to help our partners create products that stand out in the competitive 
                  beauty market.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-teal-light to-gold-light rounded-3xl p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                      <p className="font-display text-3xl text-primary mb-2">GMP</p>
                      <p className="text-sm text-muted-foreground">Certified</p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center">
                      <p className="font-display text-3xl text-primary mb-2">ISO</p>
                      <p className="text-sm text-muted-foreground">22716 & 9001</p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center col-span-2">
                      <p className="font-display text-3xl text-primary mb-2">UAE</p>
                      <p className="text-sm text-muted-foreground">Sharjah, SAIF Zone</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                What We Stand For
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-4">
                    <value.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Leadership
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
                Our Founder
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-medium">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shrink-0 shadow-soft">
                    <img
                      src={founderImage}
                      alt="Sivakumar Nair - CEO & Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      Sivakumar Nair
                    </h3>
                    <p className="text-primary font-medium mb-4">CEO & Managing Director</p>
                    <p className="text-muted-foreground leading-relaxed">
                      With extensive experience in the beauty and personal care industry, 
                      Sivakumar leads Cosmocare Essentials with a vision to deliver 
                      world-class private label manufacturing solutions. His commitment 
                      to quality, innovation, and customer satisfaction drives the 
                      company's growth and success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
