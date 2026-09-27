import React from 'react';
import { Heart, ShieldCheck, Sparkles, Coffee, Award, CheckCircle2 } from 'lucide-react';

export const AboutSalon: React.FC = () => {
  return (
    <section id="salon" className="py-16 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Visual collage */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5] bg-[#F1EBDD]">
                <img
                  src="/images/ciseaux.webp"
                  alt="Séance de coupe ciseaux et soins attentifs prodigués avec douceur chez Laura' Dogs à Ézanville (95460)"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Overlapping small badge card (mobile-safe positioning) */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#E8E2D4] max-w-[210px] sm:max-w-[240px]">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F5D4C3] flex items-center justify-center text-[#7D321F] shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-serif text-sm sm:text-base font-bold text-[#2C1810]">Atelier Certifié</p>
                    <p className="text-[10px] sm:text-[11px] text-[#6B4328]">Diplômée d'État</p>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-[#55341F] leading-snug">
                  Expertise technique & écoute active des besoins de chaque compagnon.
                </p>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#CB5D38]/10 -z-10 blur-xl" />
            </div>
          </div>

          {/* Right Column: Text & Values */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D4C3]/80 text-[#7D321F] text-xs font-semibold uppercase tracking-wider">
              <span>Notre Histoire & Philosophie</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-snug sm:leading-tight">
              Bienvenue chez <span className="text-[#CB5D38]">LAURA' DOGS</span> : salon de toilettage à Ézanville, proche d'Écouen & Domont
            </h2>

            <p className="text-base text-[#55341F] leading-relaxed">
              Installé au cœur d'<strong>Ézanville</strong>, notre salon est né d'une passion inconditionnelle pour les animaux et de la volonté d'offrir une expérience de toilettage radicalement différente : humaine, calme et respectueuse.
            </p>

            <p className="text-sm sm:text-base text-[#55341F] leading-relaxed">
              Ici, le chronomètre ne dicte pas nos soins. Si votre animal est timide, craintif ou prend de l'âge, nous adaptons le rythme de la séance avec des pauses caresses et un ton apaisant. Chaque chien et chaque chat est considéré comme un membre unique de votre famille.
            </p>

            {/* Core Values 4-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C1810]">Bienveillance & Zéro contrainte</h4>
                  <p className="text-xs text-[#6B4328] mt-0.5">Pas de contention brutale. Respect total des signaux d'apaisement.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C1810]">Hygiène Stricte & Sécurité</h4>
                  <p className="text-xs text-[#6B4328] mt-0.5">Désinfection systématique des tables et stérilisation des outils entre chaque visite.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C1810]">Cosmétiques Végétaux</h4>
                  <p className="text-xs text-[#6B4328] mt-0.5">Gammes françaises haut de gamme sans sulfate, respectueuses du microbiote cutané.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2C1810]">Conseils Personnalisés</h4>
                  <p className="text-xs text-[#6B4328] mt-0.5">Recommandations d'entretien à la maison pour préserver la santé du pelage.</p>
                </div>
              </div>

            </div>

            {/* Direct location tag */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-[#7D321F] font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Facile d'accès depuis Écouen, Moisselles, Domont, Sarcelles et tout le Val d'Oise.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
