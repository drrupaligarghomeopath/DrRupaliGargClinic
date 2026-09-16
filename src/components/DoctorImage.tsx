import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import doctorPhoto from '../assets/doctor.jpg';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

/**
 * Permanently frozen photograph of Dr. Roopali Garg Mangla.
 * Directly bundled as a standard image asset to eliminate runtime changing,
 * localStorage discrepancies, and diff/patch errors on GitHub.
 */
export const FROZEN_DOCTOR_IMAGE = doctorPhoto;

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopath',
  loading = 'eager',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(FROZEN_DOCTOR_IMAGE);

  return (
    <div
      id="doctor-photo-frame"
      className={`relative overflow-hidden w-full h-full bg-[#f4f1ea] rounded-2xl shadow-md ${className}`}
    >
      <img
        src={imgSrc}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-top"
        onError={() => {
          // Absolute fallback to public static asset if data URI is unsupported
          if (imgSrc !== '/doctor.jpg') {
            setImgSrc('/doctor.jpg');
          }
        }}
      />

      {/* Elegant Bottom Credential Banner */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 pt-12 text-white flex items-end justify-between pointer-events-none select-none">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#f5ebd7] tracking-wider uppercase bg-[#2c4a3e]/90 border border-[#8c7047]/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs mb-1.5">
            <CheckCircle2 className="w-3 h-3 text-[#d4af37]" />
            <span>Verified Classical Homeopath</span>
          </span>
          <p className="font-serif text-lg sm:text-xl font-bold text-white drop-shadow-sm">
            {CLINIC_INFO.doctorName}
          </p>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            BHMS • 10+ Years Dedicated Clinical Experience
          </p>
        </div>
      </div>
    </div>
  );
};
