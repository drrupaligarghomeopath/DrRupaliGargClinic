import React, { useState } from 'react';
import doctorPhoto from '../assets/doctor.jpg';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

const STORAGE_KEY = 'dr_roopali_custom_photo';
const CACHE_BUST = 'v=20260904_updated';

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-center',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
}) => {
  const [photoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('doctor_custom_photo');
      if (saved && saved.startsWith('data:image')) {
        return saved;
      }
    } catch {
      // Storage access blocked or restricted
    }
    return `${doctorPhoto}?${CACHE_BUST}`;
  });

  return (
    <div
      id="doctor-portrait-container"
      className="relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]"
    >
      <img
        src={photoSrc}
        alt={alt}
        className={className}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Fallback to static public file if needed
          if (!e.currentTarget.src.includes('/doctor.jpg')) {
            e.currentTarget.src = `/doctor.jpg?${CACHE_BUST}`;
          }
        }}
      />
    </div>
  );
};

