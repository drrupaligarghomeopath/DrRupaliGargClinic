import React, { useEffect } from 'react';
import { Shield, Sparkles, Award, Heart, CheckCircle2 } from 'lucide-react';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Classical Physician & Homeopathic Clinic Seal
 * Displayed in place of personal photographic portraits to maintain complete privacy.
 */
export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full',
}) => {
  // Purge any previously cached photo strings from browser storage
  useEffect(() => {
    try {
      localStorage.removeItem('dr_roopali_custom_photo');
      localStorage.removeItem('doctor_custom_photo');
      localStorage.removeItem('doctor_photo');
      sessionStorage.removeItem('doctor_custom_photo');
    } catch {
      // Storage access restricted or disabled
    }
  }, []);

  return (
    <div
      id="doctor-emblem-container"
      className={`relative w-full h-full min-h-[300px] overflow-hidden select-none bg-gradient-to-br from-[#243e34] via-[#2c4a3e] to-[#1a2c24] text-white flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl border border-[#3e6354] shadow-inner ${className}`}
    >
      {/* Decorative background radial effects */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#8c7047]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#3d6857]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header Crest */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase text-[#e2ece7] border border-white/10">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          <span>Classical Homeopathy</span>
        </span>
        <span className="inline-flex items-center gap-1 bg-[#8c7047]/25 px-2 py-0.5 rounded-full text-[10px] font-semibold text-[#f3e8d2] border border-[#8c7047]/40">
          <Award className="w-3 h-3 text-[#d4af37]" />
          <span>10+ Years</span>
        </span>
      </div>

      {/* Center Medical & Botanical Crest */}
      <div className="relative z-10 flex flex-col items-center my-auto py-4 text-center">
        {/* Heraldic Shield / Caduceus Icon */}
        <div className="relative mb-3.5">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#3a5d4e] to-[#1f352b] border-2 border-[#8c7047]/60 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex items-center justify-center p-2 relative group">
            {/* Outer dotted accent ring */}
            <div className="absolute inset-1 rounded-full border border-dashed border-[#8c7047]/40" />

            {/* Caduceus / Healing Leaf SVG */}
            <svg
              viewBox="0 0 100 100"
              className="w-14 h-14 sm:w-16 sm:h-16 text-[#e8f0ec]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Central Staff of Asclepius */}
              <line x1="50" y1="12" x2="50" y2="88" stroke="#d4af37" strokeWidth="3" />
              <circle cx="50" cy="12" r="4" fill="#d4af37" />

              {/* Serpentine Helix / Healing curves */}
              <path
                d="M 32 30 C 44 26, 56 36, 50 48 C 44 60, 56 70, 68 64"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <path
                d="M 68 30 C 56 26, 44 36, 50 48 C 56 60, 44 70, 32 64"
                stroke="#e2ece7"
                strokeWidth="2"
                strokeDasharray="4 3"
              />

              {/* Botanical healing leaves */}
              <path
                d="M 50 36 C 36 24, 28 40, 50 44"
                fill="#3d6857"
                stroke="#8c7047"
                strokeWidth="1.5"
              />
              <path
                d="M 50 56 C 64 44, 72 60, 50 64"
                fill="#3d6857"
                stroke="#8c7047"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Verification Badge */}
          <div className="absolute -bottom-1 -right-1 bg-[#1a2c24] border border-[#8c7047] rounded-full p-1 shadow-md text-[#d4af37]">
            <CheckCircle2 className="w-4 h-4 fill-[#2c4a3e]" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
          Dr. Roopali Garg Mangla
        </h3>
        <p className="text-xs font-medium text-[#d4af37] tracking-wider uppercase mt-0.5">
          BHMS • Classical Homeopathic Physician
        </p>
        <p className="text-[11px] text-[#b8c9c1] mt-1.5 max-w-[220px]">
          Constitutional Holistic Healing & Holistic Care
        </p>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-10 w-full pt-3 border-t border-white/10 flex items-center justify-around text-[11px] text-[#c9d8d1]">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3 text-[#d4af37]" />
          <span>Pure Homeopathy</span>
        </span>
        <span className="text-white/30">•</span>
        <span className="flex items-center gap-1">
          <Heart className="w-3 h-3 text-[#d4af37]" />
          <span>Patient-Centered</span>
        </span>
      </div>
    </div>
  );
};
