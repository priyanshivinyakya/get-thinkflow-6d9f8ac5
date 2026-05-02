import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ShowcaseCards from "@/components/ShowcaseCards";
import Stats from "@/components/Stats";
import Founder from "@/components/Founder";

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
      <ShowcaseCards />
      <Stats />
      <Founder />
      
      <Contact />
      <AIBotButton />
    </div>
  );
};

export default Index;
