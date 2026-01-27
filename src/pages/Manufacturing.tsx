import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Factory, Package, Boxes, CheckCircle, FlaskConical, Shield, Microscope, ClipboardCheck, ArrowRight, Sparkles, Truck, Award } from "lucide-react";

const productionModels = [
  {
    icon: FlaskConical,
    title: "Bulk Only",
    subtitle: "For brands that want to handle filling themselves",
    description: "We develop a custom formulation for your brand and produce the bulk (MOQ: 300 kg – 1500 kgs). You manage the filling and handling process with your own partners.",
    tag: "Private Label",
    step: "01",
  },
  {
    icon: Package,
    title: "Bulk + Filling & Handling",
    subtitle: "For brands that want us to manage production but already have packaging",
    description: "We develop your formula (Private Label or White Label). We produce the bulk for you. You provide the packaging. We do the manufacturing, filling and packing for you.",
    tag: "Flexible",
    step: "02",
  },
  {
    icon: Boxes,
    title: "Full Service",
    subtitle: "For founders and teams who want a seamless production experience",
    description: "We develop your formula (Private Label or White Label). We produce the bulk for you. We source and purchase the packaging. We handle everything from concept to a ready-to-sell finished product.",
    tag: "Most Popular",
    highlight: true,
    step: "03",
  },
];

const qualityChecks = [
  { icon: Microscope, name: "Stability Checks", description: "Long-term and accelerated stability testing" },
  { icon: Package, name: "Packaging Compatibility", description: "Ensuring formula and container harmony" },
  { icon: Shield, name: "Microbial Testing", description: "Safety and preservation efficacy" },
  { icon: ClipboardCheck, name: "Physical & Sensorial", description: "Texture, color, and fragrance evaluation" },
];

const processSteps = [
  { icon: Sparkles, title: "Formulation", description: "Custom formula development" },
  { icon: FlaskConical, title: "Bulk Production", description: "Large-scale manufacturing" },
  { icon: Package, title: "Filling & Packing", description: "Precision filling process" },
  { icon: Truck, title: "Delivery", description: "Ready for your market" },
];

const certifications = [
  { name: "GMP Certified", description: "Good Manufacturing Practice" },
  { name: "ISO 9001:2015", description: "Quality Management System" },
  { name: "In-House Lab", description: "R&D & Quality Control" },
  { name: "Full Traceability", description: "Batch Documentation" },
];

const Manufacturing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-teal-light/30 via-background to-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          </div>
          <div className="container-wide px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-3xl mb-8 shadow-lg"
              >
                <Factory size={40} className="text-primary-foreground" />
              </motion.div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Manufacturing Excellence
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Where Your Formula Becomes a{" "}
                <span className="text-gradient">Finished Product</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Turning a formula into something you can hold in your hands is one of the most 
                meaningful steps in product development. It demands precision, coordination, and 
                partners who understand every detail.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-card border-y border-border/50">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-light to-gold-light rounded-2xl mb-4 shadow-soft">
                    <step.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%]">
                      <ArrowRight size={20} className="text-primary/40" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Models */}
        <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Production Models
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                Three Levels of Support
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Depending on how much of the production process you want to manage yourself, 
                we offer three flexible options.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {productionModels.map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group ${
                    model.highlight ? "md:-mt-4 md:mb-4" : ""
                  }`}
                >
                  <div className={`h-full bg-card rounded-3xl p-8 shadow-soft transition-all duration-300 hover:shadow-medium ${
                    model.highlight ? "ring-2 ring-primary bg-gradient-to-b from-card to-teal-light/20" : "hover:bg-card/80"
                  }`}>
                    {model.highlight && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                          {model.tag}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-6">
                      <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${
                        model.highlight 
                          ? "bg-gradient-to-br from-primary to-primary/70" 
                          : "bg-teal-light"
                      }`}>
                        <model.icon size={28} className={model.highlight ? "text-primary-foreground" : "text-primary"} />
                      </div>
                      <span className="font-display text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">
                        {model.step}
                      </span>
                    </div>
                    
                    {!model.highlight && model.tag && (
                      <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                        {model.tag}
                      </span>
                    )}
                    
                    <h3 className="font-display text-xl text-foreground mb-2">{model.title}</h3>
                    <p className="text-sm text-primary font-medium mb-4">{model.subtitle}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{model.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* MOQ Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl flex-shrink-0">
                  <Award size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    What is MOQ (Minimum Order Quantity)?
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    MOQ refers to the smallest amount of product we can produce per order. For bulk production, our MOQ ranges from{" "}
                    <strong className="text-primary">300 kg to 1,500 kg</strong>, depending on the formulation and production model you choose. 
                    This ensures cost-efficiency and consistent quality across every batch.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quality Control - Redesigned */}
        <section className="section-padding bg-foreground text-background">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Quality Assurance
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-background mb-4">
                Quality Control & Testing
              </h2>
              <p className="text-background/70 max-w-2xl mx-auto">
                Exceptional speed-to-market only works when quality is non-negotiable. 
                We follow structured testing protocols throughout the entire production process.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {qualityChecks.map((check, index) => (
                <motion.div
                  key={check.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 border border-background/20 hover:bg-background/15 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl mb-4">
                    <check.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg text-background mb-2">{check.name}</h3>
                  <p className="text-sm text-background/60">{check.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-3 bg-background/5 rounded-xl p-4 border border-background/10"
                >
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-background text-sm">{cert.name}</p>
                    <p className="text-xs text-background/50">{cert.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturing;
