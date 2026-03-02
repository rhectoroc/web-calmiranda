import React from 'react';
import { Navbar } from './features/navigation/components/Navbar';
import { HeroSection } from './features/hero/components/HeroSection';
import { AboutSection } from './features/about/components/AboutSection';
import { PillarsSection } from './features/pillars/components/PillarsSection';
import { ProductsCatalog } from './features/catalog/components/ProductsCatalog';
import { EmbellishedSpaces } from './features/gallery/components/EmbellishedSpaces';
import { VirtualAssistant } from './features/assistant/components/VirtualAssistant';
import { Footer } from './features/footer/components/Footer';
import { ChatProvider } from './features/assistant/context/ChatContext';
import { FranchiseHero } from './features/franchise/components/FranchiseHero';
import { FranchiseBenefitCards } from './features/franchise/components/FranchiseBenefitCards';
import { FranchiseRequirements } from './features/franchise/components/FranchiseRequirements';

const App: React.FC = () => {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-cal-bone font-inter selection:bg-cal-emerald/30 selection:text-cal-emerald-dark">
        <Navbar />
        <main>
          <div id="inicio">
            <HeroSection />
          </div>
          <div id="nosotros">
            <AboutSection />
          </div>
          <div id="pilares">
            <PillarsSection />
          </div>
          <div id="productos">
            <ProductsCatalog />
          </div>
          <div id="espacios">
            <EmbellishedSpaces />
          </div>
          <div id="franquicias">
            <FranchiseHero />
            <FranchiseBenefitCards />
            <FranchiseRequirements />
          </div>
        </main>
        <VirtualAssistant />
        <Footer />
      </div>
    </ChatProvider>
  );
};

export default App;
