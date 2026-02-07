import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Quote />
      <Mission />
      <Services />
      
      <Founder />
      <CTA />
      <Contact />
    </div>
  );
};

export default Index;
