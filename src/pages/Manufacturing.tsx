import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Factory, Package, Boxes, CheckCircle, FlaskConical, Shield, Microscope, ClipboardCheck } from "lucide-react";

const productionModels = [
  {
    icon: FlaskConical,
    title: "Bulk Only",
    subtitle: "For brands that want to handle filling themselves",
    description: "We develop a custom formulation for your brand and produce the bulk (MOQ: 300 kg – 1500 kgs). You manage the filling and handling process with your own partners.",
    tag: "Private Label",
  },
  {
    icon: Package,
    title: "Bulk + Filling & Handling",
    subtitle: "For brands that want us to manage production but already have packaging",
    description: "We develop your formula (Private Label or White Label). We produce the bulk for you. You provide the packaging. We do the manufacturing, filling and packing for you.",
    tag: "Flexible",
  },
  {
    icon: Boxes,
    title: "Full Service",
    subtitle: "For founders and teams who want a seamless production experience",
    description: "We develop your formula (Private Label or White Label). We produce the bulk for you. We source and purchase the packaging. We handle everything from concept to a ready-to-sell finished product.",
    tag: "Most Popular",
    highlight: true,
  },
];

const qualityChecks = [
  { icon: Microscope, name: "Stability Checks" },
  { icon: Package, name: "Packaging Compatibility" },
  { icon: Shield, name: "Microbial Testing" },
  { icon: ClipboardCheck, name: "Physical & Sensorial Evaluations" },
];

const Manufacturing = () => {
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
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Manufacturing
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
                Where Your Formula Becomes a{" "}
                <span className="text-gradient">Finished Product</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Turning a formula into something you can hold in your hands is one of the most 
                meaningful steps in product development. It demands precision, coordination, and 
                partners who understand every detail from bulk production to filling, handling, 
                and final packaging.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section-padding bg-background">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-light rounded-2xl mb-6">
                <Factory size={32} className="text-primary" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
                Our Role in Your Success
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our role is to make the entire manufacturing process predictable and aligned with 
                the quality your brand stands for. We offer flexible production models to match 
                your business needs and capabilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Production Models */}
        <section className="section-padding bg-secondary/30">
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

            <div className="grid md:grid-cols-3 gap-8">
              {productionModels.map((model, index) => (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-card rounded-3xl p-8 shadow-soft ${
                    model.highlight ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {model.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full">
                        {model.tag}
                      </span>
                    </div>
                  )}
                  {!model.highlight && model.tag && (
                    <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {model.tag}
                    </span>
                  )}
                  <div className="flex items-center justify-center w-14 h-14 bg-teal-light rounded-2xl mb-6">
                    <model.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{model.title}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{model.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Control */}
        <section className="section-padding bg-background">
          <div className="container-wide px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                  Quality Assurance
                </span>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
                  Quality Control & Testing
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Exceptional speed-to-market only works when quality is non-negotiable. 
                  We follow structured testing protocols throughout the entire production process, 
                  with controlled batch documentation for complete traceability.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {qualityChecks.map((check, index) => (
                    <motion.div
                      key={check.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft"
                    >
                      <div className="flex items-center justify-center w-10 h-10 bg-teal-light rounded-lg">
                        <check.icon size={20} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{check.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-teal-light to-gold-light rounded-3xl p-8 lg:p-12">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Batch Traceability</h4>
                        <p className="text-sm text-muted-foreground">
                          Complete documentation for every production batch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">GMP Certified Facility</h4>
                        <p className="text-sm text-muted-foreground">
                          Manufacturing in compliance with international standards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">In-House Laboratory</h4>
                        <p className="text-sm text-muted-foreground">
                          Dedicated R&D and quality control facilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Controlled Documentation</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive records for regulatory compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-light rounded-2xl -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-light rounded-xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturing;
