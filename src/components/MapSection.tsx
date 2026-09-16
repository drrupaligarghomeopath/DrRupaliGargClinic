import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Navigation, MapPin, ExternalLink, Clock, Phone, QrCode } from 'lucide-react';
import { GoogleBusinessQR } from './GoogleBusinessQR';

export const MapSection: React.FC = () => {
  return (
    <section className="w-full relative py-12 md:py-16 bg-[#efece6]/60" aria-labelledby="clinic-location-heading">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#8c7047] uppercase tracking-widest block mb-1">
              Greater Noida Clinic
            </span>
            <h2 id="clinic-location-heading" className="font-serif text-2xl md:text-3xl font-bold text-[#1a1c1e]">
              Find Our Clinic & Plan Your Visit
            </h2>
          </div>
          <a
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2c4a3e] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-[#233b32] transition-all shadow-sm shrink-0 w-fit"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>OPEN IN GOOGLE MAPS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Map & Google Business QR Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Container (8 Cols on Desktop) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="w-full relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#e5e3df] group">
              {/* Real Google Maps iframe embed with clean styling */}
              <iframe
                title="Clinic Location Map - Rise Shoplex, Greater Noida"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.257088921868!2d77.4395427871582!3d28.5903998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6f60000001%3A0x6b6c16e7886477e6!2sRise%20Shoplex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Location badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-[#4a4b46] border border-[#e5e3df] shadow-sm hidden sm:flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#2c4a3e]" />
                <span>Tech Zone IV, Sector 1, Greater Noida</span>
              </div>

              {/* Floating Action Card in Editorial style */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-[#faf9f6]/95 backdrop-blur-xl px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-xl border border-[#e5e3df] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#d4dfd9] flex items-center justify-center text-[#2c4a3e] shrink-0 shadow-inner">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#1a1c1e]">
                    Visit Dr. Roopali Garg Mangla
                  </h3>
                  <p className="text-xs text-[#4a4b46] max-w-sm">
                    {CLINIC_INFO.address.shop}, {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}
                  </p>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2c4a3e] text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-[#233b32] transition-colors whitespace-nowrap shadow-sm"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Google Map Link Bar */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-white/80 backdrop-blur-xs p-3.5 sm:px-5 rounded-2xl border border-[#e5e3df] text-xs">
              <div className="flex items-center gap-2 text-[#4a4b46] min-w-0">
                <MapPin className="w-4 h-4 text-[#4285F4] shrink-0" />
                <span className="font-semibold text-[#1a1c1e] shrink-0">Google Map Link:</span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#4285F4] hover:underline truncate"
                >
                  {CLINIC_INFO.googleMapsUrl}
                </a>
              </div>
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#2c4a3e] font-semibold hover:underline shrink-0"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Google Business QR Code Card (4 Cols on Desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <GoogleBusinessQR variant="card" className="h-full justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};
