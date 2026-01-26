import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import ManufacturingPreview from "@/components/ManufacturingPreview";
import ValueProposition from "@/components/ValueProposition";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductCategories />
        <ManufacturingPreview />
        <ValueProposition />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
