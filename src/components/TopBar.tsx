import React, { useMemo } from 'react';
import { MapPin, Clock, Smartphone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TopBar: React.FC = () => {
  // Compute open status dynamically
  const isOpenNow = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday, 2 is Tuesday, etc.
    const hour = now.getHours() + now.getMinutes() / 60;
    
    // Tuesday (2) to Saturday (6), 9h30 to 18h00
    if (day >= 2 && day <= 6) {
      return hour >= 9.5 && hour < 18.0;
    }
    return false;
  }, []);

  return (
    <div className="bg-[#2C1810] text-[#EDE6D8] text-xs sm:text-sm border-b border-[#4A2E1B]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
          
          {/* Location & Opening hours */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a 
              href={SALON_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Voir l'emplacement du salon au 42 Rue Jacques Gallicher à Ézanville sur Google Maps"
              className="inline-flex items-center gap-1.5 hover:text-[#E2725B] transition-colors"
              title="Voir l'emplacement sur Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E2725B] shrink-0" aria-hidden="true" />
              <span>{SALON_INFO.fullAddress}</span>
            </a>

            <span className="hidden md:inline text-[#6E4730]">•</span>

            <div className="inline-flex items-center gap-1.5 text-[#D8CCB9]">
              <Clock className="w-3.5 h-3.5 text-[#D8CCB9] shrink-0" aria-hidden="true" />
              <span>{SALON_INFO.openingHoursDisplay}</span>
            </div>

            {/* Live open indicator badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ${
              isOpenNow 
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50' 
                : 'bg-[#3E2316] text-[#EDE6D8] border border-[#55341F]'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              {isOpenNow ? 'Ouvert actuellement' : 'Accueil sur RDV'}
            </span>
          </div>

          {/* Quick Call Direct Button */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0 font-medium">
            <span className="hidden lg:inline text-xs text-[#D8CCB9]">Contact direct :</span>
            
            {/* Mobile / SMS */}
            <a
              href={`tel:${SALON_INFO.phoneMobileRaw}`}
              id="topbar-call-mobile"
              aria-label="Appeler le salon Laura Dogs au 07 82 99 37 13"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E2725B] hover:bg-[#CB5D38] text-white transition-all text-xs font-semibold shadow-xs"
              title="Appeler ou envoyer un SMS au 07 82 99 37 13"
            >
              <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>07 82 99 37 13</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
