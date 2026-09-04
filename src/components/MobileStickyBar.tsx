import React from 'react';
import { RoutePath } from '../types';
import { getWhatsAppUrl } from '../data/clinicData';
import { Calendar, MessageSquare } from 'lucide-react';

interface MobileStickyBarProps {
  onNavigate: (route: RoutePath) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onNavigate }) => {
  return (
    <aside
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#ffffff]/95 backdrop-blur-lg border-t border-[#e5e3df] px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-safe"
      aria-label="Quick mobile appointment actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* Book Appointment CTA */}
        <button
          onClick={() => {
            onNavigate('book-appointment');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-2 bg-[#2c4a3e] text-white py-3 px-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 transition-all hover:bg-[#233b32]"
        >
          <Calendar className="w-4 h-4 shrink-0" />
          <span className="truncate">Book Appointment</span>
        </button>

        {/* WhatsApp CTA */}
        <a
          href={getWhatsAppUrl('Hello Dr. Roopali, I would like to know more about booking a consultation.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-md active:scale-95 transition-all hover:bg-[#20b858]"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
