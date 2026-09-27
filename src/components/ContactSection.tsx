import React from 'react';
import { 
  MapPin, Phone, Smartphone, Clock, 
  ExternalLink, Navigation, Heart, Mail
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  // Determine current day for hours highlight (0: Sun, 1: Mon, 2: Tue, ...)
  const todayIndex = new Date().getDay();
  const dayMapping: { [key: number]: string } = {
    0: 'Dimanche',
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi'
  };
  const currentDayName = dayMapping[todayIndex];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D4C3]/80 text-[#7D321F] text-xs font-semibold uppercase tracking-wider">
            <span>Coordonnées & Accès</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-snug sm:leading-tight">
            Prenez contact avec Laura' Dogs à Ézanville (95460)
          </h2>
          <p className="text-base sm:text-lg text-[#55341F] leading-relaxed">
            Pour assurer le calme et la sérénité des animaux, nos séances se déroulent sur rendez-vous. Laura est à votre écoute par téléphone pour échanger sur votre compagnon.
          </p>
        </div>

        {/* 2-Columns Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (6 cols): Direct Phone Call Cards & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Direct Calling Focus Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#E8E2D4] shadow-sm space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FDF6F2] flex items-center justify-center border border-[#F5D4C3] text-[#CB5D38] shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                    Contactez-nous directement
                  </h3>
                  <p className="text-xs text-[#6B4328]">
                    Échange personnalisé et bienveillant
                  </p>
                </div>
              </div>

              {/* Unique Contact Number: Mobile / SMS */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#FDF6F2] to-white border-2 border-[#CB5D38] space-y-4 shadow-sm">
                <div>
                  <span className="text-xs font-bold text-[#7D321F] uppercase tracking-wider block">
                    Numéro de Téléphone Direct
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-[#CB5D38]">
                      {SALON_INFO.phoneMobile}
                    </span>
                  </div>
                  <p className="text-xs text-[#7D321F] mt-1">
                    Appels et SMS • Laura vous répond directement pour planifier le soin de votre animal
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <a
                    href={`tel:${SALON_INFO.phoneMobileRaw}`}
                    aria-label="Appeler le salon Laura Dogs au 07 82 99 37 13"
                    className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#CB5D38] hover:bg-[#B84A27] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    <span>Appeler le salon</span>
                  </a>

                  <a
                    href={`sms:${SALON_INFO.phoneMobileRaw}`}
                    aria-label="Envoyer un SMS au salon Laura Dogs au 07 82 99 37 13"
                    className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE9DF] text-[#2C1810] border border-[#E8E2D4] text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
                  >
                    <Smartphone className="w-4 h-4 text-[#CB5D38]" aria-hidden="true" />
                    <span>Envoyer un SMS</span>
                  </a>
                </div>
              </div>

              {/* Email & Address brief */}
              <div className="pt-2 border-t border-[#F1EBDD] space-y-2.5 text-xs sm:text-sm text-[#55341F]">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#CB5D38] shrink-0" />
                  <span>Email : <strong>{SALON_INFO.email}</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#CB5D38] shrink-0" />
                  <span>Adresse : <strong>{SALON_INFO.fullAddress}</strong></span>
                </div>
              </div>

              {/* Friendly message note */}
              <div className="p-4 rounded-2xl bg-[#F8F4EC] border border-[#E8E2D4] flex items-start gap-3 text-xs text-[#55341F]">
                <Heart className="w-4 h-4 text-[#CB5D38] shrink-0 mt-0.5" />
                <p>
                  <strong>Un accueil personnalisé :</strong> Prendre le temps d'échanger au préalable nous permet de connaître les particularités de votre compagnon (race, âge, nœuds éventuels, tempérament) et de lui réserver tout le temps nécessaire.
                </p>
              </div>

            </div>

            {/* Opening Hours Detailed Table */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D4] shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#2C1810] flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#CB5D38]" />
                Horaires d'Ouverture du Salon
              </h3>

              <div className="divide-y divide-[#F1EBDD] text-xs sm:text-sm">
                {SALON_INFO.schedule.map((slot) => {
                  const isToday = currentDayName === slot.day;
                  return (
                    <div
                      key={slot.day}
                      className={`py-2.5 flex items-center justify-between transition-colors ${
                        isToday ? 'bg-[#FDF6F2] -mx-3 px-3 rounded-lg font-bold text-[#CB5D38]' : 'text-[#42281A]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {slot.day}
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#CB5D38] text-white">
                            Aujourd'hui
                          </span>
                        )}
                      </span>
                      <span className={slot.open ? 'font-medium' : 'text-[#6B4328]'}>
                        {slot.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#F1EBDD] text-xs text-[#6B4328]">
                💡 <em>Fermé les dimanches et lundis. Accueil uniquement sur rendez-vous téléphonique.</em>
              </div>
            </div>

          </div>

          {/* Right Column (6 cols): Location Map, Parking & Itinerary */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8E2D4] shadow-sm space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF6F2] flex items-center justify-center border border-[#F5D4C3] text-[#CB5D38] shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#2C1810]">
                      Accès au Salon
                    </h3>
                    <p className="text-xs text-[#6B4328]">
                      Au cœur d'Ézanville (95460)
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F5D4C3] text-[#7D321F] hidden sm:inline">
                  Stationnement facile
                </span>
              </div>

              <div className="text-xs sm:text-sm text-[#42281A] space-y-1">
                <p className="font-bold text-base text-[#2C1810]">
                  {SALON_INFO.fullAddress}
                </p>
                <p className="text-[#6B4328]">
                  Rue résidentielle calme avec places de stationnement disponibles directement devant et le long de la rue.
                </p>
              </div>

              {/* Map embed container */}
              <div className="rounded-2xl overflow-hidden border border-[#E8E2D4] h-72 w-full bg-[#E5DCCE] relative shadow-inner">
                <iframe
                  title="Plan interactif d'accès au salon de toilettage Laura' Dogs à Ézanville"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.486221087819!2d2.357121!3d49.014561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e668615b81a8b9%3A0x8673a5a755efd6fa!2s42%20Rue%20Jacques%20Gallicher%2C%2095460%20%C3%89zanville!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Itinerary buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Obtenir l'itinéraire vers le salon Laura' Dogs sur Google Maps"
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#2C1810] hover:bg-[#42281A] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-4 h-4 text-[#E2725B]" aria-hidden="true" />
                  <span>Itinéraire Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8CCB9]" aria-hidden="true" />
                </a>

                <a
                  href={`https://waze.com/ul?q=42+Rue+Jacques+Gallicher+95460+Ezanville`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Obtenir l'itinéraire vers le salon Laura' Dogs sur l'application Waze"
                  className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE9DF] text-[#2C1810] border border-[#E8E2D4] text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Ouvrir sur Waze</span>
                </a>
              </div>

              {/* Surrounding towns indication */}
              <div className="pt-3 border-t border-[#F1EBDD] text-xs text-[#6B4328]">
                📍 <em>À 5 minutes d'Écouen et Moisselles, 8 minutes de Domont et Bouffémont, 12 minutes de Sarcelles.</em>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
