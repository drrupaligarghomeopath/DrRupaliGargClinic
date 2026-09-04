import React, { useState, useEffect } from 'react';
import { RoutePath } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MPESSPage } from './pages/MPESSPage';
import { ContactPage } from './pages/ContactPage';
import { BookAppointmentPage } from './pages/BookAppointmentPage';
import { LegalPage } from './pages/LegalPage';
import { ServicesSection } from './components/ServicesSection';
import { ConditionsSection } from './components/ConditionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RoutePath>('home');

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as RoutePath;
      const validRoutes: RoutePath[] = [
        'home',
        'about',
        'mpess-approach',
        'services',
        'conditions',
        'testimonials',
        'faq',
        'contact',
        'book-appointment',
        'privacy-policy',
        'terms',
        'medical-disclaimer',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (route: RoutePath) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9] text-[#1a1c1c] font-sans antialiased selection:bg-[#d9eaa3] selection:text-[#161f00]">
      {/* Accessibility: Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-[#56642b] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Persistent Header */}
      <Header currentRoute={currentRoute} onNavigate={navigateTo} />

      {/* Main Content View with top offset for fixed header */}
      <main id="main-content" className="flex-1 pt-20 pb-16 lg:pb-0">
        {currentRoute === 'home' && <HomePage onNavigate={navigateTo} />}

        {currentRoute === 'about' && <AboutPage onNavigate={navigateTo} />}

        {currentRoute === 'mpess-approach' && <MPESSPage onNavigate={navigateTo} />}

        {currentRoute === 'services' && (
          <div className="py-10 bg-[#eeeeee]/60">
            <ServicesSection onNavigate={navigateTo} />
          </div>
        )}

        {currentRoute === 'conditions' && (
          <div className="py-10 bg-[#f9f9f9]">
            <ConditionsSection onNavigate={navigateTo} />
          </div>
        )}

        {currentRoute === 'testimonials' && (
          <div className="py-10 bg-[#eeeeee]/40">
            <TestimonialsSection onNavigate={navigateTo} />
          </div>
        )}

        {currentRoute === 'faq' && (
          <div className="py-10 bg-[#f9f9f9]">
            <FAQSection onNavigate={navigateTo} fullPage={true} />
          </div>
        )}

        {currentRoute === 'contact' && <ContactPage />}

        {currentRoute === 'book-appointment' && <BookAppointmentPage onNavigate={navigateTo} />}

        {currentRoute === 'privacy-policy' && <LegalPage initialTab="privacy" />}
        {currentRoute === 'terms' && <LegalPage initialTab="terms" />}
        {currentRoute === 'medical-disclaimer' && <LegalPage initialTab="disclaimer" />}
      </main>

      {/* Persistent Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Sticky Mobile Conversion Bar (High Priority on Mobile) */}
      <MobileStickyBar onNavigate={navigateTo} />

      {/* Floating Interactive WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}
