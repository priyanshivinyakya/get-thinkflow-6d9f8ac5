import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatItDoes from "@/components/WhatItDoes";
import Flow from "@/components/Flow";
import Quote from "@/components/Quote";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ShowcaseCards from "@/components/ShowcaseCards";
import Stats from "@/components/Stats";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIBotButton from "@/components/AIBotButton";
import ExitIntentModal from "@/components/ExitIntentModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Problem />
      <WhatItDoes />
      <Flow />
      <Quote />
      <Mission />
      <Services />
      <ShowcaseCards />
      <Stats />
      <CTA />
      <Founder />
      <Contact />
      <Footer />
      <AIBotButton />
      <ExitIntentModal />
    </div>
  );
};

export default Index;
