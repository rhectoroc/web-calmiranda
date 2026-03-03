import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { LegalPage } from './features/legal/components/LegalPage';
import { privacyPolicyContent } from './features/legal/constants/privacyPolicy';
import { termsOfServiceContent } from './features/legal/constants/termsOfService';

const HomePage: React.FC = () => {
  return (
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
  );
};

import { ScrollToTop } from './shared/components/ScrollToTop';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatProvider>
        <div className="min-h-screen bg-cal-bone font-inter selection:bg-cal-emerald/30 selection:text-cal-emerald-dark">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/politica-de-privacidad"
              element={
                <LegalPage
                  title={privacyPolicyContent.title}
                  lastUpdated={privacyPolicyContent.lastUpdated}
                  sections={privacyPolicyContent.sections}
                  type="privacy"
                />
              }
            />
            <Route
              path="/terminos-de-servicio"
              element={
                <LegalPage
                  title={termsOfServiceContent.title}
                  lastUpdated={termsOfServiceContent.lastUpdated}
                  sections={termsOfServiceContent.sections}
                  type="terms"
                />
              }
            />
          </Routes>
          <VirtualAssistant />
          <Footer />
        </div>
      </ChatProvider>
    </BrowserRouter>
  );
};

export default App;
