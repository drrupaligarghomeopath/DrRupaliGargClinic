import React, { useState, useEffect } from 'react';
import { RoutePath } from '../types';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Phone, Calendar, Menu, X, MessageSquare, Clock } from 'lucide-react';

interface HeaderProps {
  currentRoute: RoutePath;
  onNavigate: (route: RoutePath) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; route: RoutePath }[] = [
    { label: 'HOME', route: 'home' },
    { label: 'ABOUT', route: 'about' },
    { label: 'MPESS APPROACH', route: 'mpess-approach' },
    { label: 'SERVICES', route: 'services' },
    { label: 'CONDITIONS', route: 'conditions' },
    { label: 'TESTIMONIALS', route: 'testimonials' },
    { label: 'FAQ', route: 'faq' },
    { label: 'CONTACT', route: 'contact' },
  ];

  const handleNavClick = (route: RoutePath) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#faf9f6]/95 backdrop-blur-xl border-b border-[#e5e3df] shadow-[0_4px_24px_rgba(44,74,62,0.06)]'
            : 'bg-[#faf9f6]/85 backdrop-blur-md border-b border-[#e5e3df]/60 shadow-[0_2px_15px_rgba(0,0,0,0.02)]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a3e] rounded-lg p-1"
            aria-label="Dr. Roopali Garg Mangla Homepage"
          >
            <div className="w-10 h-10 rounded-full bg-[#2c4a3e]/10 border border-[#2c4a3e]/20 flex items-center justify-center text-[#2c4a3e] font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              🌿
            </div>
            <div>
              <span className="block font-serif text-lg md:text-xl font-semibold text-[#2c4a3e] tracking-tight leading-tight">
                Dr. Roopali Garg Mangla
              </span>
              <span className="block font-sans text-[11px] font-medium text-[#5d6058] uppercase tracking-wider">
                BHMS • Classical Homeopathy & MPESS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`text-[13px] tracking-[0.05em] font-semibold transition-colors duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#2c4a3e] font-bold'
                      : 'text-[#4a4b46] hover:text-[#2c4a3e]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2c4a3e] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Direct Phone link */}
            <a
              href={CLINIC_INFO.phoneTel}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#4a4b46] hover:text-[#2c4a3e] bg-[#efece6] hover:bg-[#e3e0d9] px-3.5 py-2.5 rounded-full transition-all border border-[#e5e3df]"
              title="Call Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-[#2c4a3e]" />
              <span className="hidden xl:inline">{CLINIC_INFO.phoneDisplay}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => handleNavClick('book-appointment')}
              className="hidden sm:inline-flex items-center gap-2 bg-[#2c4a3e] text-white text-[13px] tracking-wider font-semibold px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-[#233b32] hover:shadow-[0_8px_25px_rgba(44,74,62,0.25)] transition-all duration-300 active:scale-98"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1a1c1e] hover:bg-[#efece6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2c4a3e]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 right-0 bottom-0 w-[85%] max-w-sm bg-[#faf9f6] border-l border-[#e5e3df] shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 mb-4 border-b border-[#e5e3df]">
                <p className="text-xs font-semibold text-[#8c7047] uppercase tracking-widest">
                  Holistic Healthcare Practice
                </p>
                <p className="font-serif font-bold text-lg text-[#2c4a3e]">
                  Dr. Roopali Garg Mangla
                </p>
                <p className="text-xs text-[#5d6058] mt-0.5">BHMS • Greater Noida</p>
              </div>

              <nav className="flex flex-col gap-2" aria-label="Mobile Navigation Drawer">
                {navItems.map((item) => {
                  const isActive = currentRoute === item.route;
                  return (
                    <button
                      key={item.route}
                      onClick={() => handleNavClick(item.route)}
                      className={`text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                        isActive
                          ? 'bg-[#d4dfd9]/70 text-[#071913] font-bold border-l-4 border-[#2c4a3e]'
                          : 'text-[#4a4b46] hover:bg-[#efece6] hover:text-[#1a1c1e]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#e5e3df] flex flex-col gap-3">
              <button
                onClick={() => handleNavClick('book-appointment')}
                className="w-full flex items-center justify-center gap-2 bg-[#2c4a3e] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-xl font-semibold text-sm shadow-sm hover:bg-[#20b858]"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Message
              </a>

              <a
                href={CLINIC_INFO.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-[#efece6] text-[#1a1c1e] py-3 rounded-xl font-semibold text-sm hover:bg-[#e3e0d9]"
              >
                <Phone className="w-4 h-4 text-[#2c4a3e]" />
                Call {CLINIC_INFO.phoneDisplay}
              </a>

              <div className="mt-2 text-[11px] text-[#787972] text-center flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Mon-Sat 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
