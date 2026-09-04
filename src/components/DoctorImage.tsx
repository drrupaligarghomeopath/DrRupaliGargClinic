import React, { useState, useEffect } from 'react';
import { DOCTOR_PHOTO_SRC } from '../assets/doctorPhotoData';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-center',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(DOCTOR_PHOTO_SRC);

  useEffect(() => {
    // Clear any temporary runtime overrides so the fixed official uploaded photo is used
    try {
      localStorage.removeItem('dr_roopali_custom_photo');
      localStorage.removeItem('dr_roopali_photo_fit');
      localStorage.removeItem('dr_roopali_photo_position');
      localStorage.removeItem('dr_roopali_photo_zoom');
    } catch {
      // Ignore storage restrictions
    }

    // Attempt to load the optimized static file from /doctor.jpg or /Rupali Garg.jpg
    const img = new Image();
    img.src = '/doctor.jpg';
    img.onload = () => {
      setCurrentSrc('/doctor.jpg');
    };
    img.onerror = () => {
      // Fallback is already DOCTOR_PHOTO_SRC (which has Dr. Rupali Garg embedded)
      setCurrentSrc(DOCTOR_PHOTO_SRC);
    };
  }, []);

  return (
    <div
      id="doctor-portrait-container"
      className="relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]"
    >
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => {
          if (currentSrc !== DOCTOR_PHOTO_SRC) {
            setCurrentSrc(DOCTOR_PHOTO_SRC);
          }
        }}
      />
    </div>
  );
};
