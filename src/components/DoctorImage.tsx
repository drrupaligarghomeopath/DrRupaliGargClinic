import React, { useState, useEffect, useRef } from 'react';
import doctorPhoto from '../assets/doctor.jpg';
import { Camera, RotateCcw, Check } from 'lucide-react';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
}

const STORAGE_KEY = 'dr_roopali_custom_photo';
// Static version to prevent browser HTTP cache from showing stale older image
const CACHE_BUST = 'v=20260904b';

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-center',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
}) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
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

  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('doctor_custom_photo');
      return !!(saved && saved.startsWith('data:image'));
    } catch {
      return false;
    }
  });

  const [showToast, setShowToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSync = (e: CustomEvent<string>) => {
      if (e.detail) {
        setPhotoSrc(e.detail);
        setHasCustomPhoto(true);
      } else {
        setPhotoSrc(`${doctorPhoto}?${CACHE_BUST}&t=${Date.now()}`);
        setHasCustomPhoto(false);
      }
    };

    window.addEventListener('doctor-photo-updated' as any, handleSync);
    return () => {
      window.removeEventListener('doctor-photo-updated' as any, handleSync);
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoSrc(dataUrl);
        setHasCustomPhoto(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);

        try {
          localStorage.setItem(STORAGE_KEY, dataUrl);
        } catch {
          // Ignore localStorage size quota exceeded
        }

        // Broadcast to other DoctorImage components on the page
        window.dispatchEvent(
          new CustomEvent('doctor-photo-updated', { detail: dataUrl })
        );

        // Also persist to server if running Vite dev server
        fetch('/api/upload-doctor-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl }),
        }).catch(() => null);
      }
    };
    reader.readAsDataURL(file);

    // Reset input value so same file can be selected again if needed
    e.target.value = '';
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem('doctor_custom_photo');
    } catch {
      // Ignore
    }
    const defaultUrl = `${doctorPhoto}?${CACHE_BUST}&t=${Date.now()}`;
    setPhotoSrc(defaultUrl);
    setHasCustomPhoto(false);
    window.dispatchEvent(
      new CustomEvent('doctor-photo-updated', { detail: '' })
    );
  };

  return (
    <div
      id="doctor-portrait-container"
      className="group relative w-full h-full overflow-hidden select-none bg-[#e2e4dc]"
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

      {/* Subtle update/change photo trigger overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-white text-center">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 bg-[#2c4a3e] hover:bg-[#233b32] text-white px-3.5 py-2 rounded-full text-xs font-sans font-semibold tracking-wide shadow-md transition-transform hover:scale-105"
          title="Upload latest doctor portrait"
        >
          <Camera className="w-3.5 h-3.5" />
          <span>Update Photo</span>
        </button>

        {hasCustomPhoto && (
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 bg-white/90 hover:bg-white text-[#2c4a3e] px-3 py-1.5 rounded-full text-[11px] font-sans font-medium shadow-xs transition-transform hover:scale-105"
            title="Reset to default photo"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Original</span>
          </button>
        )}
      </div>

      {/* Small subtle camera icon in bottom-right corner for touch devices */}
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="lg:hidden absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#2c4a3e]/85 text-white flex items-center justify-center shadow-md backdrop-blur-xs"
        aria-label="Update Doctor Photo"
      >
        <Camera className="w-4 h-4" />
      </button>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Success Notification */}
      {showToast && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#2c4a3e] text-white text-[11px] font-sans px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-20 whitespace-nowrap animate-fade-in">
          <Check className="w-3 h-3 text-[#d9eaa3]" />
          <span>Doctor photo updated!</span>
        </div>
      )}
    </div>
  );
};
