import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/clinicData';
import { MessageSquare, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  customMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(customMessage || 'Hello Dr. Roopali, I would like to know more about booking a consultation.');

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-5 sm:right-8 z-50 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-3 bg-white p-4 rounded-2xl shadow-2xl border border-[#e5e3df] max-w-[260px] text-xs text-[#1a1c1e] animate-fade-in relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#787972] hover:text-[#1a1c1e] p-1"
            aria-label="Close message preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
            <p className="font-bold text-[#2c4a3e]">Dr. Roopali's Clinic</p>
          </div>
          <p className="text-[#4a4b46] leading-relaxed">
            Need quick guidance on consultation slots or homeopathic medicines? Chat with us directly on WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-full font-semibold text-[11px] hover:bg-[#20b858] transition-colors"
          >
            <MessageSquare className="w-3 h-3" />
            Start Chat
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 relative group focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Chat with Dr. Roopali Garg Mangla on WhatsApp"
        title="WhatsApp Consultation"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
          1
        </span>
      </a>
    </div>
  );
};
