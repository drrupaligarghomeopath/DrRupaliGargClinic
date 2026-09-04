import React from 'react';
import { RoutePath } from '../types';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Calendar, MessageSquare, ShieldCheck, Sparkles, Award, MapPin, CheckCircle2 } from 'lucide-react';
import { DoctorImage } from './DoctorImage';

interface HeroProps {
  onNavigate: (route: RoutePath) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 bg-gradient-to-b from-[#faf9f6] via-[#efece6]/40 to-[#faf9f6]" aria-labelledby="hero-title">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#d4dfd9]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#f5e8d2]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - Content & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Top Credential Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#e2e4dc] border border-[#cacdc4] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1a1c18] mb-6 w-fit shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#8c7047]" />
              <span>Classical Homeopathy & Holistic MPESS Healing</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#1a1c1e] leading-[1.15] tracking-tight mb-5"
            >
              Root-Cause Healing for Mind, Body & Lasting Vitality.
            </h1>

            {/* Doctor intro subtitle */}
            <p className="font-sans text-base sm:text-lg text-[#4a4b46] leading-relaxed mb-8 max-w-xl">
              Welcome to the private practice of <strong className="text-[#1a1c1e] font-semibold">Dr. Roopali Garg Mangla (BHMS)</strong>. With over a decade of clinical experience in Greater Noida, we combine individualized classical homeopathy with the multi-dimensional <strong className="text-[#2c4a3e] font-semibold">MPESS Approach</strong> (Mind • Physical • Emotional • Spiritual • Social).
            </p>

            {/* Core Value Props Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm font-medium text-[#1a1c1e]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>100% Individualized Natural Remedies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>Zero Toxic Side Effects or Dependency</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>In-Clinic & Online WhatsApp Care</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>Comprehensive MPESS Mind-Body Care</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => {
                  onNavigate('book-appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2.5 bg-[#2c4a3e] text-white px-7 py-4 rounded-full font-semibold text-sm tracking-wider shadow-[0_8px_25px_rgba(44,74,62,0.25)] hover:bg-[#233b32] hover:shadow-[0_12px_32px_rgba(44,74,62,0.35)] transition-all duration-300 active:scale-98"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK AN APPOINTMENT</span>
              </button>

              <a
                href={getWhatsAppUrl('Hello Dr. Roopali, I would like to know more about booking a consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 border-2 border-[#2c4a3e] text-[#2c4a3e] hover:bg-[#2c4a3e] hover:text-white px-6 py-3.5 rounded-full font-semibold text-sm tracking-wider transition-all duration-300 shadow-sm active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WHATSAPP CONSULTATION</span>
              </a>
            </div>

            {/* Clinic Location Pill */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#787972] font-sans">
              <MapPin className="w-3.5 h-3.5 text-[#2c4a3e]" />
              <span>Shop 32, Rise Shoplex, Tech Zone IV, Sector 1, Greater Noida</span>
            </div>
          </div>

          {/* Right Column - Doctor Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-[#efece6] to-[#ffffff] p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_rgba(44,74,62,0.1)] border border-[#e5e3df]">
              {/* Doctor Avatar Presentation */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#e2e4dc] shadow-md mb-4 flex items-center justify-center border border-[#e5e3df]">
                <DoctorImage
                  alt="Dr. Roopali Garg Mangla - Homeopathic Physician"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>

              {/* Doctor Credentials & Experience Bar */}
              <div className="bg-white/95 px-4 py-3 rounded-xl shadow-xs border border-[#e5e3df] flex items-center justify-between mb-5">
                <div>
                  <p className="font-serif text-sm font-bold text-[#2c4a3e]">Dr. Roopali Garg Mangla</p>
                  <p className="text-[11px] font-sans text-[#4a4b46]">BHMS • 10+ Years Clinical Experience</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#d4dfd9] flex items-center justify-center text-[#2c4a3e]">
                  <Award className="w-4 h-4" />
                </div>
              </div>

              {/* Quick Consultation Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-center font-sans">
                <div className="bg-[#faf9f6] p-3 rounded-xl border border-[#e5e3df]">
                  <p className="font-serif text-lg font-bold text-[#2c4a3e]">5,000+</p>
                  <p className="text-[11px] text-[#4a4b46]">Cases Analyzed</p>
                </div>
                <div className="bg-[#faf9f6] p-3 rounded-xl border border-[#e5e3df]">
                  <p className="font-serif text-lg font-bold text-[#8c7047]">5 Pillars</p>
                  <p className="text-[11px] text-[#4a4b46]">MPESS Framework</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
