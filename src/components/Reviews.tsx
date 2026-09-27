import React from 'react';
import { Star, ShieldCheck, Heart, ExternalLink, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Reviews: React.FC = () => {
  return (
    <section id="avis" className="py-16 lg:py-24 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D4C3]/80 text-[#7D321F] text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-[#CB5D38]" aria-hidden="true" />
            <span>Avis Clients 100% Authentiques</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] leading-snug sm:leading-tight">
            La Confiance de nos Clients sur Google
          </h2>

          <p className="text-base sm:text-lg text-[#55341F] leading-relaxed">
            Parce que la transparence et la sincérité sont nos valeurs fondamentales, tous les avis et témoignages sur notre salon de toilettage sont directement consultables sur notre fiche officielle Google.
          </p>
        </div>

        {/* Official Google Banner & Direct Access Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E8E2D4] shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Google Logo & Rating Indicator */}
          <div className="flex items-center gap-4 text-left w-full md:w-auto">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D4] flex items-center justify-center p-3 shrink-0 shadow-xs">
              {/* Google G Multi-Color SVG */}
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810]">
                  Google
                </span>
                <div className="flex text-amber-500" aria-label="5 étoiles">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#55341F] font-medium mt-0.5">
                Fiche officielle vérifiée • <strong>LAURA' DOGS à Ézanville</strong>
              </p>
            </div>
          </div>

          {/* Action Buttons: Direct Google Maps Access (min 48px tactile targets) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={SALON_INFO.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lire les véritables avis clients sur notre fiche officielle Google"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EFE9DF] text-[#2C1810] border border-[#E8E2D4] text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <span>Lire les avis sur Google</span>
              <ExternalLink className="w-4 h-4 text-[#6B4328]" aria-hidden="true" />
            </a>

            <a
              href={SALON_INFO.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Déposer un avis authentique sur la fiche Google du salon Laura' Dogs"
              className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#CB5D38] hover:bg-[#B84A27] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs active:scale-[0.98] cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" aria-hidden="true" />
              <span>Déposer un avis</span>
            </a>
          </div>

        </div>

        {/* Transparency & Quality Commitments (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                Avis 100% Réels
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#55341F] leading-relaxed">
              Toutes les évaluations sont rédigées par de vrais propriétaires d'animaux ayant fait toiletter leur compagnon au salon à Ézanville.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                Zéro Faux Commentaire
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#55341F] leading-relaxed">
              Nous refusons les faux avis inventés ou complaisants. Seule la sincérité de vos retours reflète la qualité et la douceur de nos soins.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D4] shadow-xs flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF6F2] text-[#CB5D38] flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2C1810]">
                Votre Avis Compte
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#55341F] leading-relaxed">
              Vous avez confié votre chien ou votre chat à Laura ? Partagez votre expérience sur Google pour nous aider et guider d'autres maîtres.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
