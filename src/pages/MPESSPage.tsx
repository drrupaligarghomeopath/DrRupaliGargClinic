import React from 'react';
import { RoutePath } from '../types';
import { MPESS_DIMENSIONS, CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { Sparkles, Brain, Activity, Heart, Compass, Users, CheckCircle, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

interface MPESSPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const MPESSPage: React.FC<MPESSPageProps> = ({ onNavigate }) => {
  const dimensionIcons: Record<string, React.ReactNode> = {
    mind: <Brain className="w-6 h-6" />,
    physical: <Activity className="w-6 h-6" />,
    emotional: <Heart className="w-6 h-6" />,
    spiritual: <Compass className="w-6 h-6" />,
    social: <Users className="w-6 h-6" />,
  };

  return (
    <div className="w-full bg-[#faf9f6] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-4 py-1.5 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#2c4a3e]" />
            <span>Pioneering Multi-Dimensional Healing</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1c1e] mb-6">
            The MPESS Approach to Holistic Homeopathy
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#4a4b46] leading-relaxed">
            Conventional methods often isolate disease to a single organ or chemical marker. Developed by <strong>Dr. Roopali Garg Mangla (BHMS)</strong>, the MPESS framework examines how Mind, Physical, Emotional, Spiritual, and Social dynamics intertwine to create illness or vitality.
          </p>
        </div>

        {/* 5 In-Depth Dimension Cards */}
        <div className="space-y-12 mb-16">
          {MPESS_DIMENSIONS.map((dim, idx) => (
            <div
              key={dim.id}
              className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e5e3df] shadow-[0_15px_40px_rgba(0,0,0,0.04)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4dfd9] text-[#2c4a3e] flex items-center justify-center font-bold text-xl shadow-inner">
                    {dimensionIcons[dim.id]}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#8c7047]">
                      Pillar 0{idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e]">
                      {dim.name} Dimension
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-[#2c4a3e] mb-3">
                  {dim.shortSubtitle}
                </p>

                <p className="font-sans text-sm sm:text-base text-[#4a4b46] leading-relaxed mb-6">
                  {dim.description}
                </p>

                <div className="bg-[#efece6]/60 p-4 rounded-2xl border border-[#e5e3df]">
                  <p className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1">
                    Homeopathic Correlation:
                  </p>
                  <p className="text-xs sm:text-sm text-[#4a4b46] leading-relaxed">
                    {dim.homeopathicSynergy}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Focus Points */}
              <div className="lg:col-span-5 bg-[#faf9f6] p-6 sm:p-8 rounded-2xl border border-[#e5e3df]">
                <h3 className="font-serif text-base font-bold text-[#1a1c1e] mb-4">
                  Assessment Focus Points:
                </h3>
                <ul className="space-y-3">
                  {dim.clinicalFocus.map((focus, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1a1c1e]">
                      <CheckCircle className="w-4 h-4 text-[#2c4a3e] shrink-0 mt-0.5" />
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="bg-[#2c4a3e] text-white rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
            Experience the MPESS Difference
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl mx-auto mb-8">
            Schedule your comprehensive constitutional case study with Dr. Roopali Garg Mangla in Greater Noida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('book-appointment');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white text-[#2c4a3e] px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#d4dfd9] transition-colors"
            >
              Book Appointment
            </button>
            <a
              href={getWhatsAppUrl('Hello Dr. Roopali, I would like to book an MPESS constitutional consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#20b858] transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
