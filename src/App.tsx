import React from 'react';
import { Navbar } from './features/navigation/components/Navbar';
import { HeroSection } from './features/hero/components/HeroSection';
import { AboutSection } from './features/about/components/AboutSection';
import { PillarsSection } from './features/pillars/components/PillarsSection';
import { ProductsCatalog } from './features/catalog/components/ProductsCatalog';
import { EmbellishedSpaces } from './features/gallery/components/EmbellishedSpaces';
import { VirtualAssistant } from './features/assistant/components/VirtualAssistant';
import { Footer } from './features/footer/components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cal-bone font-inter selection:bg-cal-emerald/30 selection:text-cal-emerald-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EmbellishedSpaces />
        <PillarsSection />
        <ProductsCatalog />
      </main>
      <VirtualAssistant />
      <Footer />
    </div>
  );
};

export default App;
