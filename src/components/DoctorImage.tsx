import React, { useEffect } from 'react';
import { DOCTOR_NEW_PHOTO_BASE64 } from '../assets/doctorPhotoData';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

const CACHE_BUST = 'v=20260908_new_photo_fixed';

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-center',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
}) => {
  // Purge any stale localStorage keys from earlier testing so older images are never restored
  useEffect(() => {
    try {
      localStorage.removeItem('dr_roopali_custom_photo');
      localStorage.removeItem('doctor_custom_photo');
    } catch {
      // Storage access blocked or restricted
    }
  }, []);

  return (
    <div
      id="doctor-portrait-container"
      className="relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]"
    >
      <img
        src={DOCTOR_NEW_PHOTO_BASE64}
        alt={alt}
        className={className}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Robust fallback to static public file with updated cache-busting query
          if (!e.currentTarget.src.includes('/doctor.jpg')) {
            e.currentTarget.src = `/doctor.jpg?${CACHE_BUST}`;
          }
        }}
      />
    </div>
  );
};

