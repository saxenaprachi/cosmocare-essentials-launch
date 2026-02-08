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
const Leadership =[
  {
    icon: founderImage,
    name: "Sivakumar Nair",
    title: "CEO & Managing Director",
    description: `With over 28 years of experience in the private label cosmetic manufacturing industry, he brings deep technical expertise and strategic leadership to us. He spent 16 years with a leading French cosmetics company in SAIF Zone, UAE, where he played a pivotal role in building the organization from the ground up into a highly profitable manufacturing unit. His knowledge of formulation, operations, and manufacturing forms the backbone of Cosmocare.`,
  },
  {
    icon: founderImage,
    name: "Mohammed Shebeeb",
    title: "Partner ",
    description: `Shebeeb has over 25 years of experience in beauty and personal care product distribution across the Middle East, with a strong presence in multiple international territories. His deep understanding of regional markets, channel partnerships, and brand building enables Cosmocare Essentials to successfully bridge manufacturing excellence with market demand. He plays a key role in expanding the company’s distribution footprint and customer relationships.`,
  },
  {
    icon: founderImage,
    name: "Mohamed Jhazan ",
    title: "Partner ",
    description: `With 5–6 years of hands-on industry experience, Jhazan contributes to the smooth execution of product development and operational coordination. His practical exposure to cosmetic manufacturing processes and industry workflows supports Cosmocare’s agility, efficiency, and responsiveness to client requirements. He is instrumental in ensuring timelines, quality benchmarks, and internal coordination are consistently met.`,
  },
  {
    icon: founderImage,
    name: "Kanakaletha Sivakumar",
    title: "Partner & Finance Director",
    description: `Kanakaletha brings over 20 years of experience in finance and accounts management within the UAE. She previously managed the finance and accounting functions of one of Dubai’s oldest distribution companies, building strong expertise in financial controls, compliance, and operational finance. At Cosmocare Essentials, she ensures robust financial governance, transparency, and sustainable growth.`,
  },

]

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-teal-light/30 to-background">
          <div className="container-wide px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                About Us,
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
        <section id="mission" className="section-padding bg-background scroll-mt-32">
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
                Founded out of a passion for quality and a vision to serve diverse markets, we have grown from a regional manufacturer to a global partner in personal care production. Today, our products and services span key regions including the <strong>Middle East</strong>, <strong>Asia</strong>, <strong>Africa</strong>, <strong>the United States</strong>, and <strong>Europe</strong>.
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
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center flex align-center items-center flex-col">
                      <p className="font-display text-xl md:text-3xl text-primary mb-2">GMP</p>
                      <p className="text-xs md:text-sm text-muted-foreground w-[4rem] md:w-[8rem] break-words">Certified</p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center flex align-center items-center flex-col">
                      <p className="font-display text-xl md:text-3xl text-primary mb-2">ISO</p>
                      <p className="text-xs md:text-sm text-muted-foreground w-[4rem] md:w-[8rem] break-words">9001:2015</p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center flex align-center items-center flex-col">
                      <p className="font-display text-xl md:text-3xl text-primary mb-2">Trade License</p>
                      <p className="text-xs md:text-sm text-muted-foreground w-[4rem] md:w-[8rem] break-words">24548</p>
                    </div>
                    <div className="bg-card rounded-2xl p-6 shadow-soft text-center flex align-center items-center flex-col">
                      <p className="font-display text-xl md:text-3xl text-primary mb-2">VAT Reg.</p>
                      <p className="text-xs md:text-sm text-muted-foreground w-[4rem] md:w-[8rem] break-words">104535809800003</p>
                    </div>
                    {/* <div className="bg-card rounded-2xl p-6 shadow-soft text-center col-span-2">
                      <p className="font-display text-3xl text-primary mb-2">UAE</p>
                      <p className="text-sm text-muted-foreground">Sharjah, SAIF Zone</p>
                    </div> */}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="section-padding bg-secondary/50 scroll-mt-32">
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
        <section id="team" className="section-padding bg-background scroll-mt-32">
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
                Our Team
              </h2>
            </motion.div>

            {Leadership.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto my-8"
            >
              <div className="bg-card rounded-3xl p-8 lg:p-12 lg:px-8 shadow-medium">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shrink-0 shadow-soft">
                    <img
                      src={value.icon}
                      alt="Sivakumar Nair - CEO & Managing Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-foreground mb-2">
                      {value.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{value.title}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
