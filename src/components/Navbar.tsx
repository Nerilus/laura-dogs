import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Navigation, ChevronRight, Clock, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Prestations', href: '#prestations' },
    { label: 'Le Salon', href: '#salon' },
    { label: 'Avis Clients', href: '#avis' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact & Accès', href: '#contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-[#E8E2D4]' 
          : 'bg-[#FAF6F0] py-3 sm:py-4 border-b border-[#F1EBDD]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Brand */}
            <a 
              href="#" 
              aria-label="LAURA' DOGS, retour au haut de la page" 
              className="flex items-center gap-2.5 sm:gap-3 group text-left min-h-[48px] py-1"
            >
              <div 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#CB5D38] to-[#E2725B] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform" 
                aria-hidden="true"
              >
                <span className="text-xl">🐾</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#2C1810] group-hover:text-[#CB5D38] transition-colors">
                    LAURA' DOGS
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F5D4C3] text-[#7D321F]">
                    95460
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#6B4328] font-medium tracking-wide">
                  Toilettage Canin & Félin • Ézanville
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#42281A]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="min-h-[44px] inline-flex items-center relative py-1 text-[#42281A] hover:text-[#CB5D38] transition-colors after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#CB5D38] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action CTA (Desktop) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                id="navbar-contact-btn"
                className="min-h-[48px] inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CB5D38] hover:bg-[#B84A27] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Nous Contacter</span>
              </a>
            </div>

            {/* Mobile menu & Quick call trigger (min 48x48px Touch Targets) */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${SALON_INFO.phoneMobileRaw}`}
                aria-label="Appeler le salon Laura Dogs au 07 82 99 37 13"
                className="sm:hidden min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 px-3 rounded-xl bg-[#CB5D38] text-white text-xs font-semibold shadow-xs active:bg-[#B84A27]"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Appeler</span>
              </a>

              {/* Tactile Burger Button (48x48px touch target) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-xl bg-white border border-[#E8E2D4] text-[#2C1810] hover:bg-[#F3EFE6] active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-xs"
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                id="mobile-menu-toggle"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Accessible Mobile Slide-Over Drawer with Animated Backdrop */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation mobile"
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Backdrop Overlay (Click outside to close) */}
          <div 
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Drawer Slide-in Panel from Right */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs sm:max-w-sm bg-[#FAF6F0] p-6 flex flex-col justify-between shadow-2xl border-l border-[#E8E2D4] overflow-y-auto animate-in slide-in-from-right duration-300">
            
            <div className="space-y-6">
              {/* Drawer Header: Brand + Close button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D4]">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#CB5D38] text-white flex items-center justify-center text-lg shadow-xs">
                    🐾
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-[#2C1810]">
                      LAURA' DOGS
                    </span>
                    <p className="text-[11px] text-[#6B4328]">Ézanville (95460)</p>
                  </div>
                </div>

                {/* Tactile Close Button (48x48px) */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[48px] min-h-[48px] w-12 h-12 rounded-xl bg-white border border-[#E8E2D4] text-[#2C1810] hover:bg-[#F3EFE6] active:scale-95 transition-all flex items-center justify-center cursor-pointer shadow-xs"
                  aria-label="Fermer le menu de navigation"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links with large touch targets (min 48px height) */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[48px] px-4 py-3 rounded-xl font-semibold text-base text-[#2C1810] hover:bg-white hover:text-[#CB5D38] border border-transparent hover:border-[#E8E2D4] transition-all flex items-center justify-between active:scale-[0.99]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#A89885]" aria-hidden="true" />
                  </a>
                ))}
              </nav>

              {/* Practical Salon Info Snippet in Drawer */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D4] space-y-2 text-xs text-[#55341F]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#CB5D38] shrink-0" aria-hidden="true" />
                  <span className="font-medium">{SALON_INFO.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#CB5D38] shrink-0" aria-hidden="true" />
                  <span>{SALON_INFO.openingHoursDisplay}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions at bottom of drawer */}
            <div className="pt-6 border-t border-[#E8E2D4] flex flex-col gap-3">
              <a
                href={`tel:${SALON_INFO.phoneMobileRaw}`}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#CB5D38] active:bg-[#B84A27] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Appeler : 07 82 99 37 13</span>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[48px] w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#2C1810] active:bg-[#42281A] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#E2725B]" aria-hidden="true" />
                <span>Itinéraire Google Maps</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
