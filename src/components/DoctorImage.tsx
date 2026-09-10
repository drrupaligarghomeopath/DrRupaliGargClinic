import React, { useState, useEffect } from 'react';
import { CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

const STORAGE_KEY = 'doctor_custom_photo';

// Preferred photo paths in public directory
const CANDIDATE_IMAGE_URLS = [
  '/Doctor RUPALI.jpg',
  '/doctor-rupali.jpg',
  '/doctor.jpg',
  '/doctor.png',
  '/Doc Image.jpg',
  '/doc-pick.png',
];

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopath',
  loading = 'eager',
}) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });

  const [hasError, setHasError] = useState(false);

  // Background sync: If photo is stored in localStorage, persist it to server public assets
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && stored.startsWith('data:image/')) {
        fetch('/api/upload-doctor-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl: stored }),
        }).catch(() => {
          // Ignore background sync errors
        });
      }
    } catch {
      // Storage access restricted
    }
  }, []);

  // Probe static paths if no localStorage photo is present
  useEffect(() => {
    if (photoSrc) return;

    let isMounted = true;
    let index = 0;

    function testNextCandidate() {
      if (index >= CANDIDATE_IMAGE_URLS.length) {
        return;
      }

      const url = CANDIDATE_IMAGE_URLS[index];
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          setPhotoSrc(url);
          setHasError(false);
        }
      };
      img.onerror = () => {
        index++;
        testNextCandidate();
      };
      img.src = `${url}?v=1`;
    }

    testNextCandidate();

    return () => {
      isMounted = false;
    };
  }, [photoSrc]);

  // Display the fixed doctor photograph
  if (photoSrc && !hasError) {
    return (
      <div
        id="doctor-photo-frame"
        className={`relative overflow-hidden w-full h-full bg-[#f4f1ea] rounded-2xl shadow-md ${className}`}
      >
        <img
          src={photoSrc}
          alt={alt}
          loading={loading}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
          onError={() => setHasError(true)}
        />

        {/* Elegant Bottom Credential Banner */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 pt-12 text-white flex items-end justify-between pointer-events-none">
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
  }

  // Dignified Practice Emblem fallback (zero changing buttons, zero upload prompts)
  return (
    <div
      id="doctor-emblem-card"
      className={`relative overflow-hidden w-full h-full min-h-[340px] rounded-2xl bg-gradient-to-br from-[#faf9f6] via-[#f5f1ea] to-[#eee8dd] border border-[#e2dcce] shadow-md flex flex-col items-center justify-center p-6 text-center select-none ${className}`}
    >
      {/* Background ambient accents */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#8c7047]/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#2c4a3e]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Classical Medical Heraldic Badge */}
      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-md border-2 border-[#8c7047]/30 flex items-center justify-center mb-4">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#2c4a3e] to-[#1c332a] flex flex-col items-center justify-center text-[#f5ebd7] p-2">
          <Award className="w-8 h-8 sm:w-9 sm:h-9 text-[#d4af37] mb-1" />
          <span className="text-[9px] font-bold tracking-wider uppercase text-[#f5ebd7]/90 text-center">
            Classical
          </span>
        </div>
        <div className="absolute -bottom-1 -right-1 bg-[#8c7047] text-white p-1.5 rounded-full shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#f5ebd7]" />
        </div>
      </div>

      {/* Doctor Name & Designation */}
      <div className="relative z-10 max-w-xs">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#8c7047] uppercase tracking-widest bg-[#8c7047]/10 px-3 py-1 rounded-full mb-2">
          <CheckCircle2 className="w-3 h-3 text-[#8c7047]" />
          <span>Chief Physician</span>
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a1c1e] mb-1">
          {CLINIC_INFO.doctorName}
        </h3>
        <p className="text-xs sm:text-sm text-[#4a4b46] font-medium mb-2">
          BHMS • Classical Homeopathic Practitioner
        </p>
        <p className="text-xs text-[#6b6c66] leading-relaxed">
          Specializing in chronic disease management, pediatric homeopathy, and personalized constitutional care.
        </p>
      </div>
    </div>
  );
};
