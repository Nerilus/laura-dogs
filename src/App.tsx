import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutSalon } from './components/AboutSalon';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C1810] overflow-x-hidden w-full pb-20 md:pb-0">
      {/* 1. Barre supérieure : Adresse, horaires & boutons d'appel rapide */}
      <TopBar />

      {/* 2. Navigation : Logo "LAURA' DOGS", ancres, contact direct */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Section Hero : Bien-être animal, douceur, expertise, visuel animal soigné */}
        <Hero />

        {/* 4. Prestations : Cartes modernes avec icônes (ciseaux, bain, hygiène, félins) */}
        <Services />

        {/* Philosophie & Ambiance du salon à Ézanville */}
        <AboutSalon />

        {/* Avis & Témoignages Google */}
        <Reviews />

        {/* FAQ : Questions fréquentes & Données structurées */}
        <FaqSection />

        {/* Localisation & Contact : Coordonnées, horaires détaillés, plan d'accès */}
        <ContactSection />
      </main>

      {/* Footer : Mentions légales, copyright et rappel localisation Ézanville */}
      <Footer />

      {/* Mobile sticky tap-to-call bar */}
      <MobileCallBar />
    </div>
  );
}

export default App;
