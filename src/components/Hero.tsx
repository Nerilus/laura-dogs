import React from 'react';
import { Phone, Smartphone, Heart, Sparkles, ShieldCheck, Award, Star } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#F5D4C3]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-24 w-80 h-80 rounded-full bg-[#E5DCCE]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D4C3]/70 border border-[#EBB59D]/60 text-[#7D321F] text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#CB5D38]" />
              <span>Salon de toilettage d'exception à Ézanville (95460)</span>
            </div>

            {/* Main Headline H1 with Local SEO */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#2C1810] tracking-tight leading-snug sm:leading-[1.15] break-words hyphens-none">
              Toilettage canin & félin à Ézanville : <br className="hidden sm:inline" />
              l’art des soins en <span className="italic text-[#CB5D38] font-normal underline decoration-[#F5D4C3] decoration-4 underline-offset-4">douceur & bien-être</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#55341F] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Chez <strong className="text-[#2C1810] font-semibold">LAURA' DOGS</strong>, chaque animal est accueilli avec patience, respect et affection. Coupe ciseaux sur-mesure, bains traitants bio et soins d'hygiène complets dans une atmosphère sereine et apaisante.
            </p>

            {/* Direct Call Action buttons (min 48px touch targets) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href={`tel:${SALON_INFO.phoneMobileRaw}`}
                id="hero-cta-call"
                aria-label="Appeler le salon Laura' Dogs au 07 82 99 37 13"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#CB5D38] hover:bg-[#B84A27] text-white font-semibold text-base shadow-lg shadow-[#CB5D38]/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Appeler : 07 82 99 37 13</span>
              </a>

              <a
                href="#contact"
                id="hero-cta-contact"
                aria-label="Voir les coordonnées, SMS et le plan d'accès du salon à Ézanville"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-2xl bg-white hover:bg-[#FDFBF8] text-[#2C1810] font-semibold text-base border-2 border-[#E5DCCE] hover:border-[#CB5D38]/40 shadow-sm transition-all"
              >
                <Smartphone className="w-5 h-5 text-[#CB5D38]" aria-hidden="true" />
                <span>SMS & Plan d'accès</span>
              </a>
            </div>

            {/* Mini proof indicators */}
            <div className="pt-4 border-t border-[#E8E2D4]/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-[#55341F]">
              <a
                href={SALON_INFO.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Consulter les avis réels vérifiés sur notre fiche Google"
                className="flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer"
              >
                <div className="flex text-amber-500" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-[#2C1810]">Avis Vérifiés Google</span>
              </a>

              <div className="hidden sm:inline text-[#D0C2AE]">•</div>

              <div className="flex items-center gap-1.5 font-medium">
                <Heart className="w-4 h-4 text-[#CB5D38]" aria-hidden="true" />
                <span>Approche positive sans stress</span>
              </div>

              <div className="hidden sm:inline text-[#D0C2AE]">•</div>

              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span>Cosmétiques bio naturels</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Photo with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative framed background */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#CB5D38]/20 to-[#EBB59D]/30 rotate-2 scale-102 transform -z-10" aria-hidden="true" />

              {/* Main Image Container */}
              <div className="overflow-hidden rounded-[2.2rem] shadow-2xl border-4 border-white aspect-[4/3] bg-[#F1EBDD]">
                <img
                  src="/images/hero.webp"
                  alt="Salon de toilettage canin et félin Laura' Dogs à Ézanville (95460) Val d'Oise - Chien poméranien soigné et heureux après un toilettage doux"
                  width={1376}
                  height={768}
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-[#E8E2D4] animate-float-slow hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center font-bold">
                  ✂️
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2C1810]">Coupe Ciseaux & Tonte</p>
                  <p className="text-[11px] text-[#6B4328]">Stylisme canin & félin</p>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 left-2 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-xl border border-[#E8E2D4] animate-float-delayed flex items-center gap-2.5 sm:gap-3 max-w-[240px] sm:max-w-[270px]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#2C1810]">Bienveillance & Douceur</p>
                  <p className="text-[10px] sm:text-[11px] text-[#55341F] leading-tight">Adapté aux animaux sensibles</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Feature Strip under Hero */}
        <div className="mt-14 pt-8 border-t border-[#E8E2D4] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3 rounded-2xl bg-white/60 border border-[#F1EBDD]">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#CB5D38]">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-[#2C1810] mt-0.5">Produits naturels</p>
            <p className="text-[11px] text-[#6B4328]">Sans sulfate ni paraben</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-[#F1EBDD]">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#CB5D38]">0 Stress</p>
            <p className="text-xs sm:text-sm font-semibold text-[#2C1810] mt-0.5">Séances individualisées</p>
            <p className="text-[11px] text-[#6B4328]">Pas de bousculade</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-[#F1EBDD]">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#CB5D38]">Canin & Félin</p>
            <p className="text-xs sm:text-sm font-semibold text-[#2C1810] mt-0.5">Toutes races admises</p>
            <p className="text-[11px] text-[#6B4328]">Du Chihuahua au Terre-Neuve</p>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 border border-[#F1EBDD]">
            <p className="font-serif text-xl sm:text-2xl font-bold text-[#CB5D38]">Ézanville</p>
            <p className="text-xs sm:text-sm font-semibold text-[#2C1810] mt-0.5">42 Rue Jacques Gallicher</p>
            <p className="text-[11px] text-[#6B4328]">Stationnement facile</p>
          </div>
        </div>

      </div>
    </section>
  );
};
