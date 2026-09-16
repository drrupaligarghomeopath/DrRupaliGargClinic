import React from 'react';
import { RoutePath } from '../types';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { MapSection } from '../components/MapSection';
import { Award, GraduationCap, HeartHandshake, Sparkles, CheckCircle2, Calendar, MessageSquare } from 'lucide-react';
import { DoctorImage } from '../components/DoctorImage';

interface AboutPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#faf9f6] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 md:mb-24">
          {/* Physician Clinic Emblem & Credentials */}
          <div className="lg:col-span-5">
            <div className="bg-[#efece6] p-6 sm:p-8 rounded-3xl border border-[#e5e3df] shadow-lg">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-md">
                <DoctorImage />
              </div>

              <div className="space-y-2 text-center">
                <h2 className="font-serif text-2xl font-bold text-[#2c4a3e]">
                  Dr. Roopali Garg Mangla
                </h2>
                <p className="text-xs font-bold text-[#8c7047] uppercase tracking-wider">
                  BHMS • Classical Homeopathic Physician
                </p>
                <p className="text-xs text-[#4a4b46]">
                  Greater Noida, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Clinical Journey */}
          <div className="lg:col-span-7">
            <span className="text-xs font-bold text-[#8c7047] uppercase tracking-widest block mb-2">
              Meet Your Physician
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1a1c1e] leading-tight mb-6">
              Dedicated to Gentle, Holistic & Lasting Healing
            </h1>
            <p className="font-sans text-base text-[#4a4b46] leading-relaxed mb-4">
              With over <strong>10+ years of dedicated clinical practice</strong>, Dr. Roopali Garg Mangla (BHMS) is known for her compassionate, meticulous approach to individualized healthcare. 
            </p>
            <p className="font-sans text-base text-[#4a4b46] leading-relaxed mb-6">
              Recognizing that disease is rarely just a physical breakdown, Dr. Roopali developed the signature <strong>MPESS Framework</strong> (Mind, Physical, Emotional, Spiritual, Social). Her consultations delve deep into individual lifestyle rhythms, mental stressors, and constitutional traits to provide healing that endures.
            </p>

            {/* Qualifications & Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-[#1a1c1e]">
                <GraduationCap className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>BHMS (Bachelor of Homeopathic Medicine & Surgery)</span>
              </div>
              <div className="flex items-center gap-2 text-[#1a1c1e]">
                <Award className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>10+ Years Dedicated Clinical Experience</span>
              </div>
              <div className="flex items-center gap-2 text-[#1a1c1e]">
                <Sparkles className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>Pioneer of the 5-Pillar MPESS Method</span>
              </div>
              <div className="flex items-center gap-2 text-[#1a1c1e]">
                <HeartHandshake className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>5,000+ Cases Treated Across India</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  onNavigate('book-appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#2c4a3e] text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#233b32] shadow-md transition-all uppercase flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
              <a
                href={getWhatsAppUrl('Hello Dr. Roopali, I would like to consult you regarding a health concern.')}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clinical Philosophy Cards */}
        <div className="bg-[#efece6]/60 rounded-3xl p-8 sm:p-12 border border-[#e5e3df] mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e] text-center mb-8">
            Core Principles of Our Healing Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#e5e3df] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#2c4a3e] mb-2">
                1. Individualization Over Mass Treatment
              </h3>
              <p className="text-xs sm:text-sm text-[#4a4b46] leading-relaxed">
                Two patients with the exact same diagnosis may receive entirely different homeopathic remedies based on their emotional constitution, temperature sensitivities, and sleep habits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#e5e3df] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#2c4a3e] mb-2">
                2. Stimulating Innate Vital Force
              </h3>
              <p className="text-xs sm:text-sm text-[#4a4b46] leading-relaxed">
                Homeopathy operates by reawakening the body’s innate cellular intelligence rather than overriding natural immune functions with heavy chemical suppressants.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#e5e3df] shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#2c4a3e] mb-2">
                3. Gentle, Long-Term Restoration
              </h3>
              <p className="text-xs sm:text-sm text-[#4a4b46] leading-relaxed">
                Our focus is on eradicating the fundamental root susceptibility so flare-ups become rare, mild, and eventually disappear.
              </p>
            </div>
          </div>
        </div>

        {/* Map & Clinic Visit */}
        <MapSection />
      </div>
    </div>
  );
};
