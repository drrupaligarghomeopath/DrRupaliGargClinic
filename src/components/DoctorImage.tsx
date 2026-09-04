import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, User, Check, RefreshCw } from 'lucide-react';

interface DoctorImageProps {
  className?: string;
  alt?: string;
  loading?: 'lazy' | 'eager';
  showUploadButton?: boolean;
}

const LOCAL_CANDIDATE_SOURCES = [
  '/doc-pick.png',
  '/doc%20pick.png',
  '/doc_pick.png',
  '/doctor.png'
];

export const DoctorImage: React.FC<DoctorImageProps> = ({
  className = 'w-full h-full object-cover object-top',
  alt = 'Dr. Roopali Garg Mangla - Classical Homeopathic Physician',
  loading = 'eager',
  showUploadButton = true
}) => {
  const [candidateIndex, setCandidateIndex] = useState<number>(0);
  const [candidateFailed, setCandidateFailed] = useState<boolean>(false);
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    try {
      return localStorage.getItem('dr_roopali_custom_photo');
    } catch {
      return null;
    }
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handlePhotoUpdate = () => {
      try {
        const stored = localStorage.getItem('dr_roopali_custom_photo');
        if (stored) {
          setCustomPhoto(stored);
          setUploadSuccess(true);
          setTimeout(() => setUploadSuccess(false), 2500);
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
          console.warn('LocalStorage limit exceeded, displaying in session memory', err);
        }
        setCustomPhoto(dataUrl);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2500);
        window.dispatchEvent(new Event('doctor-photo-updated'));
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
      className={`relative w-full h-full group overflow-hidden transition-all select-none ${
        isDragging ? 'ring-4 ring-[#2c4a3e] bg-[#2c4a3e]/10' : ''
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        aria-label="Upload photo of Dr. Roopali Garg Mangla"
      />

      {hasValidPhoto ? (
        <>
          <img
            src={imageSrc}
            alt={alt}
            className={className}
            loading={loading}
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />

          {/* Quick upload / replace control badge */}
          {showUploadButton && (
            <div className="absolute top-3 right-3 z-20">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-[#1a1c1e]/80 hover:bg-[#2c4a3e] text-white text-[11px] font-sans font-medium px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 transition-all cursor-pointer opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
                title="Replace photo with doc pick.png or another image"
              >
                {uploadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Photo Applied</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-3 h-3" />
                    <span>Change Photo</span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      ) : (
        /* Fallback Prompt Card when local file is not in public folder yet */
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#f2efe9] to-[#e7e4dc] cursor-pointer hover:bg-[#ece8df] transition-colors border-2 border-dashed border-[#8c7047]/40 rounded-xl"
          title="Click to select and apply doc pick.png"
        >
          <div className="w-16 h-16 rounded-full bg-[#2c4a3e] text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
            <Upload className="w-8 h-8 animate-pulse text-[#faf9f6]" />
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#2c4a3e] mb-1">
            Dr. Roopali Garg Mangla
          </h3>
          <p className="text-xs text-[#8c7047] font-semibold mb-3">
            BHMS • Classical Homeopathic Physician
          </p>

          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-[#e5e3df] text-[#1a1c1e] text-xs font-medium flex items-center gap-1.5">
            <Camera className="w-4 h-4 text-[#2c4a3e]" />
            <span>Click to apply attached photo (doc pick.png)</span>
          </div>

          <p className="text-[10px] text-[#787972] mt-2">
            Or drag and drop the image file directly here
          </p>
        </div>
      )}

      {/* Drag overlay state */}
      {isDragging && (
        <div className="absolute inset-0 bg-[#2c4a3e]/85 backdrop-blur-sm z-30 flex flex-col items-center justify-center text-white p-4">
          <Upload className="w-10 h-10 mb-2 animate-bounce" />
          <p className="font-serif font-bold text-sm">Drop &apos;doc pick.png&apos; here</p>
          <p className="text-xs text-[#faf9f6]/80 mt-1">Image will be applied as-is without alterations</p>
        </div>
      )}
    </div>
  );
};
