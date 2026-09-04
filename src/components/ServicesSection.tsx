import React, { useState } from 'react';
import { SERVICES_LIST, getWhatsAppUrl } from '../data/clinicData';
import { RoutePath, ServiceItem } from '../types';
import { Check, Calendar, MessageSquare, Clock, Video, Stethoscope, Sparkles, X, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (route: RoutePath) => void;
  limit?: number;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, limit }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const displayServices = limit ? SERVICES_LIST.slice(0, limit) : SERVICES_LIST;

  return (
    <section className="py-16 md:py-24 bg-[#efece6]/60" aria-labelledby="services-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#d4dfd9]/70 px-3.5 py-1 rounded-full text-xs font-bold text-[#0d211a] uppercase tracking-wider mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-[#2c4a3e]" />
            <span>Integrative Clinical Offerings</span>
          </div>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl md:text-[40px] font-bold text-[#1a1c1e] mb-4">
            Personalized Healthcare & Wellness Services
          </h2>
          <p className="font-sans text-base text-[#4a4b46] leading-relaxed">
            Every consultation is designed to understand your unique constitutional makeup, addressing both acute flare-ups and deep chronic imbalances without harsh suppressive treatments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#ffffff] rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-[#e5e3df] hover:shadow-[0_15px_45px_rgba(44,74,62,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Mode Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8c7047] bg-[#f5e8d2]/60 px-2.5 py-1 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-[11px] font-medium text-[#2c4a3e] bg-[#d4dfd9]/60 px-2.5 py-1 rounded-full">
                    {service.mode}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e] mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-sm text-[#4a4b46] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#1a1c1e]">
                      <Check className="w-3.5 h-3.5 text-[#2c4a3e] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Details & CTAs */}
              <div className="pt-4 border-t border-[#e5e3df] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#787972]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#2c4a3e]" />
                    {service.duration}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-[#2c4a3e] font-semibold hover:underline"
                  >
                    View Details
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-1">
                  <button
                    onClick={() => {
                      onNavigate('book-appointment');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-1.5 bg-[#2c4a3e] text-white py-2.5 rounded-full text-xs font-semibold hover:bg-[#233b32] transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello Dr. Roopali, I am interested in knowing more about ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-2.5 rounded-full text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#2c4a3e] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#233b32] shadow-md transition-all uppercase"
            >
              <span>Explore All Healthcare Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl border border-[#e5e3df] max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 text-[#787972] hover:text-[#1a1c1e] p-1 rounded-full hover:bg-[#efece6]"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-[#8c7047] bg-[#f5e8d2]/60 px-3 py-1 rounded-full">
              {selectedService.category}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e] mt-3 mb-2">
              {selectedService.title}
            </h3>

            <p className="text-xs text-[#2c4a3e] font-medium mb-4">
              Mode: {selectedService.mode} • Duration: {selectedService.duration}
            </p>

            <p className="font-sans text-sm text-[#4a4b46] leading-relaxed mb-6">
              {selectedService.detailedDescription}
            </p>

            <h4 className="font-serif text-sm font-bold text-[#1a1c1e] mb-3">
              Included Benefits & Protocol
            </h4>
            <ul className="space-y-2 mb-6">
              {selectedService.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1a1c1e]">
                  <Check className="w-4 h-4 text-[#2c4a3e] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#faf9f6] p-4 rounded-2xl border border-[#e5e3df] mb-6 text-xs text-[#4a4b46]">
              <strong className="text-[#1a1c1e] block mb-1">Recommended For:</strong>
              {selectedService.suitableFor}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onNavigate('book-appointment');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#2c4a3e] text-white py-3 rounded-full text-xs font-semibold hover:bg-[#233b32] transition-colors"
              >
                Book This Service
              </button>
              <a
                href={getWhatsAppUrl(`Hello Dr. Roopali, I would like to book a consultation for ${selectedService.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-3 rounded-full text-xs font-semibold text-center transition-colors"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
