import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { GOOGLE_QR_PATH_D, GOOGLE_QR_URL, GOOGLE_QR_DATA_URL } from '../assets/googleQrData';
import {
  QrCode,
  ExternalLink,
  Copy,
  Check,
  Printer,
  Download,
  Smartphone,
  MapPin,
  Star,
  X,
  Scissors,
  CheckCircle2,
  Share2
} from 'lucide-react';

/**
 * Pure inline SVG representation of the official Google Business Badge
 * Guaranteed to render instantly with zero network dependencies or file path errors.
 */
export const GoogleQrBadgeSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 380"
    className={`w-full h-auto select-none ${className}`}
    role="img"
    aria-label="Official Google Business Profile QR Code - Dr Roopali Garg Mangla"
  >
    <defs>
      <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1e293b" floodOpacity="0.08" />
      </filter>
    </defs>

    {/* White Base */}
    <rect width="320" height="380" rx="24" fill="#ffffff" />

    {/* Google Logo text */}
    <g transform="translate(160, 36)">
      <g transform="scale(1.15) translate(-36, -10)">
        <text
          fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="-0.5"
        >
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
        </text>
      </g>
    </g>

    {/* Heading */}
    <text
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      x="160"
      y="68"
      textAnchor="middle"
      fontSize="17"
      fontWeight="700"
      fill="#1f2937"
      letterSpacing="-0.2"
    >
      Check us out on Google
    </text>

    {/* 4-Color Google Border QR Container (220x220) */}
    <g transform="translate(50, 88)" filter="url(#badgeShadow)">
      {/* Base border */}
      <rect x="0" y="0" width="220" height="220" rx="26" fill="none" stroke="#4285F4" strokeWidth="8" />
      {/* 4-color corners */}
      <path d="M 110 0 L 194 0 A 26 26 0 0 1 220 26 L 220 110" fill="none" stroke="#EA4335" strokeWidth="8" strokeLinecap="round" />
      <path d="M 220 110 L 220 194 A 26 26 0 0 1 194 220 L 110 220" fill="none" stroke="#FBBC05" strokeWidth="8" strokeLinecap="round" />
      <path d="M 110 220 L 26 220 A 26 26 0 0 1 0 194 L 0 110" fill="none" stroke="#34A853" strokeWidth="8" strokeLinecap="round" />
      <path d="M 0 110 L 0 26 A 26 26 0 0 1 26 0 L 110 0" fill="none" stroke="#4285F4" strokeWidth="8" strokeLinecap="round" />

      {/* Inner White Plate */}
      <rect x="8" y="8" width="204" height="204" rx="18" fill="#ffffff" />

      {/* QR Code Vector scaled from 39x39 to 184x184 */}
      <g transform="translate(18, 18) scale(4.71795)" shapeRendering="crispEdges">
        <path stroke="#000000" strokeWidth="1" d={GOOGLE_QR_PATH_D} />
        {/* Center circular cutout */}
        <circle cx="19.5" cy="19.5" r="4.6" fill="#ffffff" stroke="#ffffff" strokeWidth="0.8" />
      </g>

      {/* Google G Emblem in center */}
      <g transform="translate(96, 96) scale(1.1666)">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
      </g>
    </g>

    {/* Doctor Name */}
    <text
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      x="160"
      y="338"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      fill="#111827"
      letterSpacing="-0.2"
    >
      Dr Roopali Garg Mangla
    </text>
    <text
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      x="160"
      y="358"
      textAnchor="middle"
      fontSize="11"
      fill="#6b7280"
      fontWeight="500"
    >
      Homeopathic Clinic • Greater Noida
    </text>
  </svg>
);

/**
 * Printable Poster SVG matching PDF Page 2
 */
export const GooglePosterSvg: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 600 850"
    className={`w-full h-auto select-none ${className}`}
    role="img"
    aria-label="Printable Google QR Poster"
  >
    <rect width="600" height="850" fill="#ffffff" />

    {/* Header */}
    <g transform="translate(300, 60)">
      <g transform="scale(1.2) translate(-90, -10)">
        <text fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="18" fontWeight="500">
          <tspan fill="#4285F4">G</tspan>
          <tspan fill="#EA4335">o</tspan>
          <tspan fill="#FBBC05">o</tspan>
          <tspan fill="#4285F4">g</tspan>
          <tspan fill="#34A853">l</tspan>
          <tspan fill="#EA4335">e</tspan>
          <tspan fill="#5f6368" fontWeight="400"> Business Profile</tspan>
        </text>
      </g>
    </g>

    <text
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      x="300"
      y="116"
      textAnchor="middle"
      fontSize="32"
      fontWeight="700"
      fill="#111827"
      letterSpacing="-0.5"
    >
      Here&apos;s your Google QR!
    </text>

    {/* Cut Line */}
    <g transform="translate(60, 240)">
      <line x1="0" y1="0" x2="480" y2="0" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="6,6" />
      <g transform="translate(80, -14)">
        <path d="M9.64 7.64a4 4 0 1 1-5.65-5.65 4 4 0 0 1 5.65 5.65zm0 0L14 12l-4.36 4.36a4 4 0 1 1-5.65-5.65 4 4 0 0 1 5.65 5.65zM14 12l8 8m0-16-8 8" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </g>

    {/* Shield Poster Badge */}
    <g transform="translate(80, 260)">
      <path
        d="M 70 0 L 370 0 A 60 60 0 0 1 430 60 L 430 380 A 60 60 0 0 1 370 440 L 240 490 A 60 60 0 0 1 200 490 L 70 440 A 60 60 0 0 1 10 380 L 10 60 A 60 60 0 0 1 70 0 Z"
        fill="#ffffff"
        stroke="#d0e3fc"
        strokeWidth="2.5"
      />

      <g transform="translate(220, 70)">
        <g transform="scale(1.9) translate(-36, -10)">
          <text fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="24" fontWeight="600" letterSpacing="-0.5">
            <tspan fill="#4285F4">G</tspan>
            <tspan fill="#EA4335">o</tspan>
            <tspan fill="#FBBC05">o</tspan>
            <tspan fill="#4285F4">g</tspan>
            <tspan fill="#34A853">l</tspan>
            <tspan fill="#EA4335">e</tspan>
          </text>
        </g>
      </g>

      <text
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        x="220"
        y="116"
        textAnchor="middle"
        fontSize="24"
        fontWeight="700"
        fill="#111827"
        letterSpacing="-0.5"
      >
        Check us out on Google
      </text>

      {/* QR Frame */}
      <g transform="translate(110, 140)">
        <path d="M 110 0 L 194 0 A 26 26 0 0 1 220 26 L 220 110" fill="none" stroke="#EA4335" strokeWidth="10" strokeLinecap="round" />
        <path d="M 220 110 L 220 194 A 26 26 0 0 1 194 220 L 110 220" fill="none" stroke="#FBBC05" strokeWidth="10" strokeLinecap="round" />
        <path d="M 110 220 L 26 220 A 26 26 0 0 1 0 194 L 0 110" fill="none" stroke="#34A853" strokeWidth="10" strokeLinecap="round" />
        <path d="M 0 110 L 0 26 A 26 26 0 0 1 26 0 L 110 0" fill="none" stroke="#4285F4" strokeWidth="10" strokeLinecap="round" />

        <rect x="8" y="8" width="204" height="204" rx="18" fill="#ffffff" />

        <g transform="translate(18, 18) scale(4.71795)" shapeRendering="crispEdges">
          <path stroke="#000000" strokeWidth="1" d={GOOGLE_QR_PATH_D} />
          <circle cx="19.5" cy="19.5" r="4.6" fill="#ffffff" stroke="#ffffff" strokeWidth="0.8" />
        </g>

        <g transform="translate(96, 96) scale(1.1666)">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12s.45 3.84 1.25 5.42l4.03-3.15z" />
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
        </g>
      </g>

      <text
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        x="220"
        y="400"
        textAnchor="middle"
        fontSize="18"
        fontWeight="700"
        fill="#111827"
      >
        Dr Roopali Garg Mangla
      </text>
    </g>
  </svg>
);

interface GoogleBusinessQRProps {
  variant?: 'card' | 'banner' | 'compact';
  className?: string;
  showPosterAction?: boolean;
}

export const GoogleBusinessQR: React.FC<GoogleBusinessQRProps> = ({
  variant = 'card',
  className = '',
  showPosterAction = true,
}) => {
  const [copied, setCopied] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [viewMode, setViewMode] = useState<'badge' | 'qr-only'>('badge');

  const targetGoogleUrl = CLINIC_INFO.googleMapsUrl || GOOGLE_QR_URL;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(targetGoogleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = targetGoogleUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Google Colored Wordmark
  const GoogleLogo = ({ size = 'text-xl' }: { size?: string }) => (
    <span className={`font-semibold tracking-tight ${size} select-none`}>
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );

  // Compact Variant (Header / Footer / Quick Callout)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#e5e3df] shadow-xs ${className}`}>
        <div
          onClick={() => setShowPosterModal(true)}
          className="w-16 h-16 shrink-0 rounded-xl overflow-hidden border border-[#d0e3fc] p-1 bg-white shadow-xs cursor-pointer hover:border-[#4285F4] transition-colors"
          title="Click to view QR code"
        >
          <img
            src={GOOGLE_QR_DATA_URL}
            alt="Google Business QR Code"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-xs text-[#5f6368] font-medium mb-0.5">
            <GoogleLogo size="text-xs" />
            <span>Business Profile</span>
          </div>
          <p className="text-sm font-bold text-[#1a1c1e] truncate">
            {CLINIC_INFO.googleBusinessName}
          </p>
          <div className="flex items-center gap-3 mt-1.5">
            <a
              href={targetGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#2c4a3e] hover:underline inline-flex items-center gap-1"
            >
              <span>Open on Google</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setShowPosterModal(true)}
              className="text-xs font-medium text-[#4285F4] hover:underline transition-colors"
            >
              View QR
            </button>
          </div>
        </div>

        {showPosterModal && renderPosterModal()}
      </div>
    );
  }

  // Banner Variant (Used in Testimonials & Bottom of Pages)
  if (variant === 'banner') {
    return (
      <>
        <div
          id="google-business-qr-banner"
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#f8fafc] to-[#f0f7ff] border border-[#d0e3fc] p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_rgba(66,133,244,0.06)] ${className}`}
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#4285F4]/10 via-[#34A853]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/90 border border-[#d0e3fc] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1a1c1e] shadow-xs mb-4">
                <GoogleLogo size="text-sm" />
                <span className="text-[#5f6368] font-normal">|</span>
                <span className="text-[#1a1c1e] font-medium">Official Business Profile</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1a1c1e] mb-2">
                Check Us Out on Google
              </h3>
              <p className="text-sm text-[#4a4b46] max-w-xl mb-4 leading-relaxed">
                Scan the official QR code with your phone camera to explore verified patient reviews, clinic directions to Rise Shoplex, operating hours, and holistic homeopathic care insights.
              </p>

              {/* Verified Link Callout */}
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-[#cbd5e1] text-xs font-mono text-[#334155] mb-5 max-w-full overflow-hidden text-ellipsis">
                <MapPin className="w-3.5 h-3.5 text-[#4285F4] shrink-0" />
                <span className="truncate">{targetGoogleUrl}</span>
              </div>

              {/* Badges / Rating */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e5e3df] text-xs font-semibold text-[#1a1c1e] shadow-2xs">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>5.0 Star Rating</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e5e3df] text-xs text-[#4a4b46] shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#2c4a3e]" />
                  <span>Rise Shoplex, Greater Noida</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#e5e3df] text-xs text-[#4a4b46] shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-[#4285F4]" />
                  <span>Camera Instant Scan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={targetGoogleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2c4a3e] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider hover:bg-[#233b32] transition-all shadow-sm"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 bg-white border border-[#e5e3df] text-[#1a1c1e] px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#faf9f6] transition-all shadow-2xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#787972]" />
                      <span>Copy Google Link</span>
                    </>
                  )}
                </button>

                {showPosterAction && (
                  <button
                    onClick={() => setShowPosterModal(true)}
                    className="inline-flex items-center gap-2 bg-white/80 border border-[#d0e3fc] text-[#4285F4] px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#f0f7ff] transition-all"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>View Print Poster</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right QR Badge Visual */}
            <div className="shrink-0 flex flex-col items-center">
              <div
                onClick={() => setShowPosterModal(true)}
                className="cursor-pointer group relative bg-white p-3 sm:p-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#d0e3fc] hover:shadow-[0_16px_40px_rgba(66,133,244,0.15)] transition-all transform hover:-translate-y-0.5"
                title="Click to view high-resolution Google QR poster"
              >
                <div className="w-52 sm:w-60 overflow-hidden rounded-2xl bg-white">
                  <GoogleQrBadgeSvg />
                </div>
                <div className="mt-2 text-center">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#4285F4] group-hover:underline">
                    <Smartphone className="w-3 h-3" />
                    <span>Scan with phone camera</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showPosterModal && renderPosterModal()}
      </>
    );
  }

  // Default "card" Variant (Beside the Map in MapSection)
  return (
    <>
      <div
        id="google-business-qr-card"
        className={`bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.05)] border border-[#e2e8f0] flex flex-col items-center text-center relative overflow-hidden group ${className}`}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between w-full mb-3">
          <div className="flex items-center gap-1.5 text-xs text-[#5f6368] font-medium">
            <GoogleLogo size="text-sm" />
            <span>Business Profile</span>
          </div>
          <span className="text-[10px] font-bold text-[#4285F4] uppercase tracking-wider bg-[#f0f7ff] border border-[#d0e3fc] px-2.5 py-0.5 rounded-full">
            Official QR
          </span>
        </div>

        {/* View toggle (Official Badge vs Direct High-Contrast QR) */}
        <div className="flex items-center justify-center gap-1 mb-3 bg-[#f1f5f9] p-1 rounded-xl text-[11px] font-medium text-[#475569]">
          <button
            onClick={() => setViewMode('badge')}
            className={`px-3 py-1 rounded-lg transition-all ${
              viewMode === 'badge' ? 'bg-white text-[#1e293b] font-semibold shadow-xs' : 'hover:text-[#0f172a]'
            }`}
          >
            Google Badge
          </button>
          <button
            onClick={() => setViewMode('qr-only')}
            className={`px-3 py-1 rounded-lg transition-all ${
              viewMode === 'qr-only' ? 'bg-white text-[#1e293b] font-semibold shadow-xs' : 'hover:text-[#0f172a]'
            }`}
          >
            Direct QR Only
          </button>
        </div>

        {/* Interactive QR Display */}
        <div
          onClick={() => setShowPosterModal(true)}
          className="w-full max-w-[240px] cursor-pointer rounded-2xl p-2 bg-gradient-to-b from-[#f8fafc] to-white border border-[#e2e8f0] shadow-xs group-hover:border-[#4285F4]/40 group-hover:shadow-md transition-all duration-300"
          title="Click to enlarge & print Google Business QR"
        >
          {viewMode === 'badge' ? (
            <div className="w-full h-auto">
              <GoogleQrBadgeSvg />
            </div>
          ) : (
            <div className="w-full aspect-square p-2 bg-white rounded-xl flex items-center justify-center">
              <img
                src={GOOGLE_QR_DATA_URL}
                alt="Direct QR Code for Google Business Profile"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </div>

        {/* Scan instruction indicator */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#5f6368]">
          <Smartphone className="w-3.5 h-3.5 text-[#4285F4]" />
          <span>Point phone camera to scan</span>
        </div>

        {/* Google Map Link Pill */}
        <div className="mt-2 text-center w-full">
          <a
            href={targetGoogleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-[#4285F4] hover:underline font-mono inline-flex items-center gap-1 max-w-[220px] truncate"
            title="Google Map Link"
          >
            <span className="truncate">{targetGoogleUrl}</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </a>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2.5 w-full mt-4 pt-3 border-t border-[#f1f5f9]">
          <a
            href={targetGoogleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#2c4a3e] text-white py-2.5 px-3 rounded-full text-xs font-bold hover:bg-[#233b32] transition-colors shadow-2xs"
          >
            <span>Open Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 bg-white border border-[#cbd5e1] text-[#1e293b] py-2.5 px-3 rounded-full text-xs font-semibold hover:bg-[#f8fafc] transition-colors shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#64748b]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Poster Modal CTA */}
        <button
          onClick={() => setShowPosterModal(true)}
          className="mt-2.5 text-xs font-medium text-[#4285F4] hover:underline flex items-center justify-center gap-1"
        >
          <Printer className="w-3 h-3" />
          <span>View Printable Flyer / Poster</span>
        </button>
      </div>

      {showPosterModal && renderPosterModal()}
    </>
  );

  // Modal rendering
  function renderPosterModal() {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto animate-fade-in"
        onClick={() => setShowPosterModal(false)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="google-qr-modal-title"
      >
        <div
          className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#d0e3fc] relative my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setShowPosterModal(false)}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#0f172a] flex items-center justify-center transition-colors"
            aria-label="Close Google QR dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2">
              <GoogleLogo size="text-lg" />
              <span className="text-sm font-medium text-[#5f6368]">Business Profile</span>
            </div>
            <h2 id="google-qr-modal-title" className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Here&apos;s your Google QR!
            </h2>
            <p className="text-xs sm:text-sm text-[#64748b] mt-1 max-w-md mx-auto">
              Scan this code to explore Dr. Roopali&apos;s verified clinic profile, patient reviews, and directions in Greater Noida.
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#4285F4] bg-[#f0f7ff] px-3 py-1 rounded-full border border-[#d0e3fc]">
              <MapPin className="w-3 h-3" />
              <span>Link: {targetGoogleUrl}</span>
            </div>
          </div>

          {/* Authentic Printable Badge Card matching Page 2 of PDF */}
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-4 sm:p-6 mb-6">
            <div className="relative flex items-center justify-center mb-5 pb-1">
              <div className="w-full border-t border-dashed border-[#94a3b8]" />
              <span className="absolute bg-[#f8fafc] px-3 text-xs text-[#64748b] flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#475569]" />
                <span className="font-mono text-[11px]">Print & Cut Guide</span>
              </span>
            </div>

            {/* Inline Poster SVG */}
            <div className="max-w-[340px] mx-auto bg-white rounded-2xl p-3 shadow-md border border-[#d0e3fc]">
              <GooglePosterSvg />
            </div>
          </div>

          {/* Best Practices info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-left">
            <div className="bg-[#f0f7ff] border border-[#d0e3fc] rounded-xl p-3">
              <span className="text-[11px] font-bold text-[#1d4ed8] uppercase tracking-wide block mb-1">
                ✓ Camera Ready
              </span>
              <p className="text-xs text-[#1e293b]">
                Encoded with high error correction for instant phone camera autofocus.
              </p>
            </div>
            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
              <span className="text-[11px] font-bold text-[#15803d] uppercase tracking-wide block mb-1">
                ✓ Clinic Reception
              </span>
              <p className="text-xs text-[#1e293b]">
                Print at 100% scale to display at the clinic reception desk for quick patient reviews.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#e2e8f0]">
            <a
              href={targetGoogleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2c4a3e] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#233b32] transition-colors shadow-sm"
            >
              <span>OPEN GOOGLE MAPS</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 bg-white border border-[#cbd5e1] text-[#334155] px-3.5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#f8fafc] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              <a
                href={GOOGLE_QR_DATA_URL}
                download="dr-roopali-google-qr.png"
                className="inline-flex items-center gap-1.5 bg-white border border-[#cbd5e1] text-[#334155] px-3.5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#f8fafc] transition-colors"
                title="Download PNG QR Image"
              >
                <Download className="w-3.5 h-3.5 text-[#34A853]" />
                <span>Save Image</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 bg-[#4285F4] text-white px-4 py-2.5 rounded-full text-xs font-semibold hover:bg-[#3367d6] transition-colors shadow-xs"
                title="Print this Google QR Poster"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
