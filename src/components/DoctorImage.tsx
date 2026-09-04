import React, { useState } from 'react';
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

  return (
    <div className="relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]">
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => {
          if (currentSrc !== '/doctor.jpg') {
            setCurrentSrc('/doctor.jpg');
          }
        }}
      />
    </div>
  );
};
