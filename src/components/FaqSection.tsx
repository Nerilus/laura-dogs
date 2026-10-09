import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    category: "Déroulement",
    question: "Quelle est la durée moyenne d'une séance de toilettage ?",
    answer: "Une séance dure généralement entre 1h15 et 2h selon le gabarit (petit, moyen ou grand chien) et l'état de son pelage. Chez LAURA' DOGS à Ézanville, nous ne travaillons jamais dans la précipitation : nous accordons le temps nécessaire pour que chaque animal se sente détendu et en confiance.",
  },
  {
    category: "Bien-Être",
    question: "Comment accueillez-vous les chiens craintifs, anxieux ou âgés ?",
    answer: "Notre approche est 100% bienveillante et axée sur la réduction du stress (Fear Free). Aucune contention brutale n'est utilisée. Nous prévoyons des pauses réconfortantes, de l'eau fraîche et un accueil adapté. Pour les chiens seniors ou souffrant d'arthrose, notre table hydraulique s'abaisse au ras du sol pour éviter tout effort.",
  },
  {
    category: "Chats & Félins",
    question: "Proposez-vous le toilettage pour chats à Ézanville ?",
    answer: "Oui, notre salon accueille les félins avec une attention toute particulière. Nous organisons des créneaux calmes dédiés aux chats, sans présence ni aboiements de chiens. Nous réalisons le démêlage en douceur, l'élimination des feutrages, la coupe des griffes et le nettoyage délicat des yeux et des oreilles.",
  },
  {
    category: "Cosmétiques Bio",
    question: "Quels types de produits et shampoings utilisez-vous ?",
    answer: "Nous sélectionnons exclusivement des gammes professionnelles françaises 100% végétales, bio et hypoallergéniques, formulées sans silicone, sans sulfate ni parabènes. Chaque formule est choisie sur-mesure selon la nature du poil et la sensibilité cutanée de votre animal.",
  },
  {
    category: "Secteur Géographique",
    question: "Quelles communes sont desservies autour d'Ézanville (95460) ?",
    answer: "Installé au 42 Rue Jacques Gallicher à Ézanville, notre salon de toilettage accueille très facilement les résidents des villes limitrophes du Val-d'Oise (95) : Écouen (à 3 min), Moisselles (à 4 min), Domont (à 7 min), Bouffémont, Attainville, ainsi que Sarcelles et Montmorency.",
  },
  {
    category: "Contact & Rendez-vous",
    question: "Comment réserver une séance de toilettage pour son animal ?",
    answer: "Pour vous garantir une disponibilité optimale et une écoute personnalisée, les rendez-vous se prennent directement par téléphone au 07 82 99 37 13 (appel ou SMS). Nous échangerons ensemble sur les particularités de votre compagnon.",
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F8F4EC]/60 border-t border-b border-[#E8E2D4] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D4C3]/80 text-[#7D321F] text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#CB5D38]" />
            <span>Foire Aux Questions • SEO Local 95460</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-snug sm:leading-tight">
            Questions fréquentes sur le toilettage canin & félin
          </h2>

          <p className="text-base sm:text-lg text-[#55341F] leading-relaxed">
            Tout ce qu'il faut savoir avant de confier votre chien ou votre chat à notre atelier de toilettage à Ézanville, proche d'Écouen et Domont.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-[#CB5D38]/50 shadow-md ring-1 ring-[#CB5D38]/20' 
                    : 'border-[#E8E2D4] hover:border-[#D0C2AE] shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 min-h-[52px] flex items-center justify-between gap-3 sm:gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FAF6F0] text-[#7D321F] border border-[#E8E2D4] self-start">
                      {faq.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#2C1810]">
                      {faq.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#CB5D38] text-white rotate-180' : 'bg-[#FAF8F5] text-[#2C1810]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#55341F] leading-relaxed border-t border-[#F1EBDD] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local Reassurance Bar below FAQ */}
        <div className="mt-12 p-5 sm:p-6 rounded-3xl bg-white border border-[#E8E2D4] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#2C1810]">
                Vous habitez Ézanville, Écouen, Domont, Moisselles ou Sarcelles ?
              </p>
              <p className="text-xs text-[#6B4328]">
                Le salon est à moins de 10 minutes avec stationnement direct et gratuit.
              </p>
            </div>
          </div>

          <a
            href="tel:+33782993713"
            aria-label="Poser une question directement à Laura par téléphone au 07 82 99 37 13"
            className="w-full sm:w-auto min-h-[48px] shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2C1810] hover:bg-[#42281A] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            Poser une question à Laura
          </a>
        </div>

      </div>
    </section>
  );
};
