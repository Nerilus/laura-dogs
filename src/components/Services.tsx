import React, { useState } from 'react';
import { Scissors, Sparkles, Droplets, Check, Clock, Phone } from 'lucide-react';
import { SERVICES_LIST, SALON_INFO } from '../data/salonData';

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(SERVICES_LIST[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'coupe-ciseaux':
        return <Scissors className="w-7 h-7 text-[#CB5D38]" />;
      case 'bains-traitants':
        return <Droplets className="w-7 h-7 text-[#CB5D38]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#CB5D38]" />;
    }
  };

  return (
    <section id="prestations" className="py-16 lg:py-24 bg-[#F8F4EC]/60 border-t border-b border-[#E8E2D4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D4C3]/80 text-[#7D321F] text-xs font-semibold uppercase tracking-wider">
            <span>Prestations Haute Définition</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-snug sm:leading-tight">
            Prestations de toilettage canin & félin à Ézanville
          </h2>
          <p className="text-base sm:text-lg text-[#55341F] leading-relaxed">
            Coupe ciseaux sur-mesure, tonte, épilation et bains traitants bio pour chiens et chats du Val-d'Oise (Ézanville, Écouen, Domont, Moisselles, Sarcelles).
          </p>
        </div>

        {/* Services Grid (2 Columns without photo) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES_LIST.map((service) => {
            const isSelected = activeService === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl ${
                  isSelected 
                    ? 'border-[#CB5D38]/50 ring-2 ring-[#CB5D38]/20 -translate-y-1' 
                    : 'border-[#E8E2D4] hover:border-[#D0C2AE]'
                }`}
              >
                <div className="p-7 sm:p-9 flex flex-col justify-between h-full space-y-6">
                  <div>
                    {/* Top Row: Icon + Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#FDF6F2] flex items-center justify-center border border-[#F5D4C3] shadow-xs shrink-0">
                        {getIcon(service.id)}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#2C1810] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                          {service.badge}
                        </span>
                        <span className="bg-[#FAF8F5] text-[#2C1810] text-xs font-semibold px-3 py-1 rounded-full border border-[#E8E2D4] flex items-center gap-1.5 shadow-xs">
                          <Clock className="w-3.5 h-3.5 text-[#CB5D38]" />
                          <span>{service.duration}</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#2C1810] group-hover:text-[#CB5D38] transition-colors leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#6B4328] font-medium italic mt-1.5 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-[#42281A] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-3 pt-5 border-t border-[#F1EBDD]">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#55341F]">
                          <Check className="w-4 h-4 text-[#CB5D38] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action button */}
                  <div className="pt-6 border-t border-[#F1EBDD]">
                    <a
                      href={`tel:${SALON_INFO.phoneMobileRaw}`}
                      aria-label={`Nous contacter par téléphone au 07 82 99 37 13 pour la prestation ${service.title}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#FAF6F0] hover:bg-[#CB5D38] text-[#2C1810] hover:text-white border border-[#E8E2D4] hover:border-[#CB5D38] text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>Nous contacter pour ce soin</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F5D4C3] flex items-center justify-center text-2xl shrink-0">
              🌿
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#2C1810]">
                Notre engagement cosmétique & dermatologique
              </h4>
              <p className="text-sm text-[#55341F]">
                Uniquement des formules sans silicone ni parabènes, adaptées aux peaux sensibles, atopiques ou à tendance allergique.
              </p>
            </div>
          </div>

          <a
            href={`tel:${SALON_INFO.phoneMobileRaw}`}
            aria-label="Demander conseil au salon Laura Dogs au 07 82 99 37 13"
            className="w-full sm:w-auto min-h-[48px] shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2C1810] hover:bg-[#42281A] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#E2725B]" aria-hidden="true" />
            <span>Demander conseil au salon</span>
          </a>
        </div>

      </div>
    </section>
  );
};
