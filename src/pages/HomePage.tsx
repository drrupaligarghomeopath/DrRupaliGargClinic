import React from 'react';
import { RoutePath } from '../types';
import { Hero } from '../components/Hero';
import { MPESSSection } from '../components/MPESSSection';
import { ServicesSection } from '../components/ServicesSection';
import { ConditionsSection } from '../components/ConditionsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { MapSection } from '../components/MapSection';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Calendar, MessageSquare, Award, Clock, HeartHandshake, ShieldCheck, Star } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Trust Badges Banner */}
      <section className="bg-[#e4e4cc] py-6 border-y border-[#c6c8b8]" aria-label="Key Clinic Highlights">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs sm:text-sm font-semibold text-[#1b1d0e]">
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#56642b] shrink-0" />
            <span>10+ Years Clinical Expertise</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#56642b] shrink-0" />
            <span>100% Individualized Remedies</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#56642b] shrink-0" />
            <span>Zero Chemical Side-Effects</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#56642b] shrink-0" />
            <span>Greater Noida Clinic & Telehealth</span>
          </div>
        </div>
      </section>

      {/* 3. MPESS Holistic Approach */}
      <MPESSSection onNavigate={onNavigate} showExploreMore={true} />

      {/* 4. Core Healthcare Services */}
      <ServicesSection onNavigate={onNavigate} limit={6} />

      {/* 5. Conditions Supported with Homeopathy */}
      <ConditionsSection onNavigate={onNavigate} />

      {/* 6. Patient Experiences */}
      <TestimonialsSection onNavigate={onNavigate} />

      {/* 7. Comprehensive FAQ */}
      <FAQSection onNavigate={onNavigate} fullPage={false} />

      {/* 8. Clinic Location & Google Maps */}
      <MapSection />

      {/* 9. Final Pre-Footer Call to Action */}
      <section className="py-16 md:py-20 bg-[#56642b] text-white text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d9eaa3] block mb-2">
            Your Health Is Your True Wealth
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
            Ready for a Gentle, Sustainable Path to Wellness?
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/90 leading-relaxed mb-8 max-w-xl mx-auto">
            Book your constitutional consultation with Dr. Roopali Garg Mangla in Greater Noida or connect digitally on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => {
                onNavigate('book-appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#56642b] px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#d9eaa3] shadow-lg transition-all"
            >
              Book Appointment Now
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#20b858] shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
