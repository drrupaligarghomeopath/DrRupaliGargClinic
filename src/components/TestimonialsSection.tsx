import React, { useState } from 'react';
import { TESTIMONIALS_LIST, CLINIC_INFO } from '../data/clinicData';
import { RoutePath } from '../types';
import { Star, Quote, CheckCircle2, Heart, Calendar } from 'lucide-react';
import { GoogleBusinessQR } from './GoogleBusinessQR';

interface TestimonialsSectionProps {
  onNavigate?: (route: RoutePath) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 md:py-24 bg-[#efece6]/40" aria-labelledby="testimonials-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-3.5 py-1 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-[#2c4a3e]" />
            <span>Patient Experiences & Healing Journeys</span>
          </div>
          <h2 id="testimonials-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#1a1c1e] mb-4">
            Trusted by Patients Across Delhi NCR & Worldwide
          </h2>
          <p className="font-sans text-base text-[#4a4b46] leading-relaxed">
            Real experiences from individuals and families who received personalized homeopathic care and MPESS wellness guidance from Dr. Roopali Garg Mangla.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#e5e3df] flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Top Star Rating & Condition Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-600">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#2c4a3e] bg-[#d4dfd9]/60 px-2.5 py-1 rounded-full">
                    {t.condition}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-sm sm:text-base text-[#1a1c1e] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Verification Footer */}
              <div className="pt-4 border-t border-[#e5e3df] flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-[#1a1c1e]">
                    <span>{t.patientName}</span>
                    {t.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2c4a3e]" title="Verified Patient" />
                    )}
                  </div>
                  <p className="text-[#787972]">{t.location}</p>
                </div>
                <span className="text-[#8c7047] font-medium bg-[#f5e8d2]/50 px-2.5 py-1 rounded-full">
                  {t.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Business Profile & QR Code Banner */}
        <div className="mt-12">
          <GoogleBusinessQR variant="banner" />
        </div>

        {/* CTA Card */}
        <div className="mt-12 bg-gradient-to-r from-[#efece6] to-[#faf9f6] rounded-3xl p-8 border border-[#e5e3df] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e] mb-1">
              Begin Your Personalized Healing Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#4a4b46]">
              Schedule your 1-on-1 constitutional consultation with Dr. Roopali Garg Mangla in Greater Noida.
            </p>
          </div>
          {onNavigate && (
            <button
              onClick={() => {
                onNavigate('book-appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#2c4a3e] text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider hover:bg-[#233b32] shrink-0 shadow-md transition-all uppercase flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
