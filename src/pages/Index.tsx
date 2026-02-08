import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import AIBotButton from "@/components/AIBotButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Quote />
      <Mission />
      <Services />
      <Stats />
      <Founder />
      <CTA />
      <Contact />
      <AIBotButton />
    </div>
  );
};

export default Index;
