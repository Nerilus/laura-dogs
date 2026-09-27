import React from 'react';
import { Phone, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const MobileCallBar: React.FC = () => {
  return (
    <aside 
      aria-label="Actions rapides pour mobile"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#E8E2D4] p-2.5 sm:p-3 md:hidden shadow-[0_-8px_25px_rgba(44,24,16,0.12)] safe-area-bottom"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        
        {/* 1. Direct Phone Call Button */}
        <a
          href={`tel:${SALON_INFO.phoneMobileRaw}`}
          id="mobilebar-call"
          aria-label="Appeler le salon Laura Dogs au 07 82 99 37 13"
          className="min-h-[48px] h-12 sm:h-13 rounded-2xl bg-[#CB5D38] hover:bg-[#B84A27] active:scale-[0.98] text-white flex items-center justify-center gap-2 font-bold text-xs sm:text-sm shadow-md shadow-[#CB5D38]/25 transition-all cursor-pointer select-none"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
          <span className="tracking-tight">Appeler le salon</span>
        </a>

        {/* 2. Direct Itinerary Button */}
        <a
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="mobilebar-itinerary"
          aria-label="Obtenir l'itinéraire vers le salon Laura' Dogs à Ézanville sur Google Maps"
          className="min-h-[48px] h-12 sm:h-13 rounded-2xl bg-[#2C1810] hover:bg-[#42281A] active:scale-[0.98] text-white flex items-center justify-center gap-2 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer select-none border border-[#4A2E1B]/40"
        >
          <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-[#E2725B] shrink-0" aria-hidden="true" />
          <span className="tracking-tight">Y aller (Maps)</span>
        </a>

      </div>
    </aside>
  );
};
