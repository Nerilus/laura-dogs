import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, Clock, Heart, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#2C1810] text-[#EDE6D8] pt-16 pb-24 lg:pb-16 border-t border-[#4A2E1B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#4A2E1B]">
            
            {/* Col 1: Brand presentation (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#CB5D38] to-[#E2725B] text-white flex items-center justify-center text-xl shadow-md">
                  🐾
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                    LAURA' DOGS
                  </h3>
                  <p className="text-xs text-[#D8CCB9] font-medium">
                    Atelier de Toilettage Canin & Félin à Ézanville
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#D0C2AE] leading-relaxed max-w-md">
                Un salon dédié au bien-être des chiens et des chats dans le Val d'Oise (95). Des soins doux, des produits bio et une attention bienveillante pour chaque poilu.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#E2725B]">
                <Heart className="w-3.5 h-3.5 fill-[#E2725B]" />
                <span>Passion, douceur et respect du bien-être animal</span>
              </div>
            </div>

            {/* Col 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-serif text-base font-bold text-white tracking-wide">
                Navigation Rapide
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#D0C2AE]">
                <li>
                  <a href="#prestations" className="hover:text-[#E2725B] transition-colors">
                    Nos Prestations de Toilettage
                  </a>
                </li>
                <li>
                  <a href="#salon" className="hover:text-[#E2725B] transition-colors">
                    Le Salon & Philosophie Douce
                  </a>
                </li>

                <li>
                  <a href="#avis" className="hover:text-[#E2725B] transition-colors">
                    Avis & Témoignages Clients
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#E2725B] transition-colors">
                    Foire Aux Questions (FAQ)
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#E2725B] transition-colors">
                    Localisation & Rendez-vous
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Coordinates & Opening (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="font-serif text-base font-bold text-white tracking-wide">
                Nous Contacter à Ézanville
              </h4>

              <div className="space-y-2 text-xs sm:text-sm text-[#D0C2AE]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E2725B] shrink-0 mt-0.5" />
                  <span>{SALON_INFO.fullAddress}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E2725B] shrink-0" />
                  <a 
                    href={`tel:${SALON_INFO.phoneMobileRaw}`} 
                    aria-label="Appeler le salon Laura Dogs au 07 82 99 37 13"
                    className="min-h-[44px] inline-flex items-center hover:text-white transition-colors font-semibold text-white"
                  >
                    07 82 99 37 13 (Appel & SMS)
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E2725B] shrink-0" />
                  <span>Mardi au Samedi : 09h30 - 18h00</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D0C2AE]">
            <p>
              © {new Date().getFullYear()} <strong>LAURA' DOGS</strong> — Salon de toilettage à Ézanville (95460). Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setLegalModalOpen(true)}
                className="min-h-[44px] inline-flex items-center hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Mentions Légales & Confidentialité
              </button>
              <span>•</span>
              <span>Fait avec tendresse pour nos animaux 🐶🐱</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Mentions Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 text-[#2C1810] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModalOpen(false)}
              aria-label="Fermer la boîte de dialogue des mentions légales"
              className="absolute top-4 right-4 min-w-[48px] min-h-[48px] w-12 h-12 rounded-full hover:bg-[#F3EFE6] text-[#2C1810] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              Mentions Légales & Politique de Confidentialité
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#55341F] leading-relaxed">
              <div>
                <h4 className="font-bold text-[#2C1810]">1. Informations Légales</h4>
                <p>
                  <strong>Dénomination :</strong> LAURA' DOGS<br />
                  <strong>Activité :</strong> Salon de toilettage canin et félin<br />
                  <strong>Adresse :</strong> 42 Rue Jacques Gallicher, 95460 Ézanville, France<br />
                  <strong>Téléphone :</strong> 07 82 99 37 13 (Appel & SMS)<br />
                  <strong>Responsable de la publication :</strong> Laura, artisane toiletteuse
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#2C1810]">2. Hébergement</h4>
                <p>
                  Ce site web est hébergé selon les normes de sécurité en vigueur sur serveurs conformes RGPD en Union Européenne.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#2C1810]">3. Protection des Données Personnelles</h4>
                <p>
                  Les coordonnées collectées via le formulaire de demande de rappel (nom, numéro de téléphone, informations sur l'animal) sont strictement réservées à la gestion des rendez-vous et échanges avec les propriétaires. Elles ne sont ni vendues ni cédées à des tiers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#2C1810]">4. Propriété Intellectuelle</h4>
                <p>
                  L'ensemble des visuels, logos, textes et éléments graphiques sont la propriété exclusive de LAURA' DOGS.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D4] text-right">
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#2C1810] text-white text-xs sm:text-sm font-semibold hover:bg-[#42281A] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
