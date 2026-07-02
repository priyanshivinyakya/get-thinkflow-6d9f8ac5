import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WorkflowDemo from "@/components/WorkflowDemo";
import NotChatbot from "@/components/NotChatbot";
import ProductPreview from "@/components/ProductPreview";
import IndustryTabs from "@/components/IndustryTabs";
import Process from "@/components/Process";
import Integrations from "@/components/Integrations";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
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
      <div id="workflow-demo">
        <WorkflowDemo />
      </div>
      <NotChatbot />
      <ProductPreview />
      <IndustryTabs />
      <Process />
      <Integrations />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <AIBotButton />
      <ExitIntentModal />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
