import React, { useState, useEffect, useRef } from 'react';
import { User, ImageIcon } from 'lucide-react';
import defaultDoctorPhoto from '../assets/doctor.jpg';

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
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<boolean>(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('dr_roopali_custom_photo');
    } catch {
      return null;
    }
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handlePhotoUpdate = () => {
      try {
        const stored = localStorage.getItem('dr_roopali_custom_photo');
        if (stored) {
          setCustomPhoto(stored);
          setLoadError(false);
        }
      } catch {
        // Storage not accessible
      }
    };

    window.addEventListener('doctor-photo-updated', handlePhotoUpdate);
    return () => {
      window.removeEventListener('doctor-photo-updated', handlePhotoUpdate);
    };
  }, []);

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem('dr_roopali_custom_photo', dataUrl);
        } catch (err) {
          console.warn('LocalStorage quota, keeping in memory', err);
        }
        setCustomPhoto(dataUrl);
        setLoadError(false);
        window.dispatchEvent(new Event('doctor-photo-updated'));

        // Also persist to server
        fetch('/api/upload-doctor-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl }),
        }).catch(() => {
          // Ignored if offline
        });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  // Determine active image source
  const imageSrc = customPhoto || defaultDoctorPhoto || '/doctor.jpg';

  const handleImageError = () => {
    if (customPhoto) {
      // If custom photo failed, clear it and fall back to bundled photo
      try {
        localStorage.removeItem('dr_roopali_custom_photo');
      } catch {
        // Storage not accessible
      }
      setCustomPhoto(null);
    } else {
      setLoadError(true);
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden select-none transition-all ${
        isDragging ? 'ring-4 ring-[#2c4a3e] bg-[#2c4a3e]/10' : ''
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        aria-label="Upload photo of Dr. Roopali Garg Mangla"
      />

      {!loadError ? (
        /* Unobstructed portrait display with no 'Change Photo' button */
        <img
          src={imageSrc}
          alt={alt}
          className={className}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
      ) : (
        /* Fallback doctor card */
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#f2efe9] to-[#e7e4dc] border border-[#e5e3df] rounded-2xl cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-[#2c4a3e] text-white flex items-center justify-center mb-3 shadow-md">
            <User className="w-8 h-8 text-[#faf9f6]" />
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#2c4a3e] mb-0.5">
            Dr. Roopali Garg Mangla
          </h3>
          <p className="text-xs text-[#8c7047] font-semibold">
            BHMS • Classical Homeopathic Physician
          </p>
          <p className="text-[11px] text-[#5d6058] mt-1">
            Holistic Wellness &amp; MPESS Care
          </p>
        </div>
      )}

      {/* Subtle Drag & Drop Visual Cue */}
      {isDragging && (
        <div className="absolute inset-0 bg-[#2c4a3e]/85 backdrop-blur-xs z-30 flex flex-col items-center justify-center text-white p-4">
          <ImageIcon className="w-10 h-10 mb-2 animate-bounce" />
          <p className="font-serif font-bold text-sm">Drop photo here to update</p>
        </div>
      )}
    </div>
  );
};
