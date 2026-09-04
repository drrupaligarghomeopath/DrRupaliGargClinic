import React, { useState, useEffect, useRef } from 'react';
import { User, Upload, Image as ImageIcon } from 'lucide-react';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  showUploadButton?: boolean;
}

const LOCAL_CANDIDATE_SOURCES = [
  '/Doc Image.jpg',
  '/Doc%20Image.jpg',
  '/doc-image.jpg',
  '/doc_image.jpg',
  '/doctor.jpg',
  '/doctor.jpeg',
  '/doctor.png',
  '/doc-pick.png',
  '/doc%20pick.png',
];

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-top',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
}) => {
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [candidateFailed, setCandidateFailed] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
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

  const handleImageError = () => {
    if (candidateIndex < LOCAL_CANDIDATE_SOURCES.length - 1) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setCandidateFailed(true);
    }
  };

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
        window.dispatchEvent(new Event('doctor-photo-updated'));

        // Persist to server if available
        fetch('/api/upload-doctor-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl }),
        }).catch(() => {
          // Fallback to client-side localStorage
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

  const currentLocalCandidate = LOCAL_CANDIDATE_SOURCES[candidateIndex];
  const hasValidPhoto = !!customPhoto || !candidateFailed;
  const imageSrc = customPhoto || currentLocalCandidate;

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

      {hasValidPhoto ? (
        /* Render doctor portrait cleanly with no floating "Change Photo" button */
        <img
          src={imageSrc}
          alt={alt}
          className={className}
          loading={loading}
          referrerPolicy="no-referrer"
          onError={handleImageError}
        />
      ) : (
        /* Friendly Presentation Fallback & One-Click Uploader */
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#f2efe9] to-[#e7e4dc] border-2 border-dashed border-[#8c7047]/30 rounded-2xl cursor-pointer hover:border-[#2c4a3e] hover:bg-[#eae6dd] transition-all group"
          title="Click to select 'Doc Image.jpg'"
        >
          <div className="w-16 h-16 rounded-full bg-[#2c4a3e] text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
            <User className="w-8 h-8 text-[#faf9f6]" />
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#2c4a3e] mb-0.5">
            Dr. Roopali Garg Mangla
          </h3>
          <p className="text-xs text-[#8c7047] font-semibold mb-3">
            BHMS • Classical Homeopathic Physician
          </p>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2c4a3e] text-white text-xs font-semibold shadow-sm group-hover:bg-[#1f352c] transition-colors">
            <Upload className="w-3.5 h-3.5" />
            <span>Upload &apos;Doc Image.jpg&apos;</span>
          </div>

          <p className="text-[10px] text-[#787972] mt-2">
            Click or drag &amp; drop attached image here
          </p>
        </div>
      )}

      {/* Subtle Drag Overlay */}
      {isDragging && (
        <div className="absolute inset-0 bg-[#2c4a3e]/85 backdrop-blur-xs z-30 flex flex-col items-center justify-center text-white p-4">
          <ImageIcon className="w-10 h-10 mb-2 animate-bounce" />
          <p className="font-serif font-bold text-sm">Drop &apos;Doc Image.jpg&apos; here</p>
          <p className="text-xs text-[#faf9f6]/80 mt-1">Applies instantly to doctor presentation</p>
        </div>
      )}
    </div>
  );
};
