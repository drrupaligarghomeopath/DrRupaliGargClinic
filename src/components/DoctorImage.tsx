import React from 'react';
import doctorPhoto from '../assets/doctor.jpg';

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
  return (
    <div
      id="doctor-portrait-container"
      className="relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]"
    >
      <img
        src={doctorPhoto}
        alt={alt}
        className={className}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={(e) => {
          // Direct fallback to static public file if needed
          if (e.currentTarget.src !== window.location.origin + '/doctor.jpg') {
            e.currentTarget.src = '/doctor.jpg';
          }
        }}
      />
    </div>
  );
};
