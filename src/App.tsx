import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PillarsSection } from './components/PillarsSection';
import { ProductsCatalog } from './components/ProductsCatalog';
import { EmbellishedSpaces } from './components/EmbellishedSpaces';
import { VirtualAssistant } from './components/VirtualAssistant';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cal-bone font-inter text-cal-dark overflow-x-hidden selection:bg-cal-emerald/30 selection:text-cal-emerald-dark">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <ProductsCatalog />
        <EmbellishedSpaces />
      </main>

      <Footer />
      <VirtualAssistant />
    </div>
  );
}

export default App;
