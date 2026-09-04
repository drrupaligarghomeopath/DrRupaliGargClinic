import React, { useState } from 'react';
import { RoutePath } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Send, CheckCircle2, Globe, Share2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterStatus('success');
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterStatus('idle');
      }, 4000);
    }
  };

  const handleNav = (route: RoutePath) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#efece6] text-[#4a4b46] pt-16 md:pt-24 pb-12 border-t border-[#e5e3df]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Philosophy */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#2c4a3e] text-white flex items-center justify-center font-serif text-lg font-bold">
                🌿
              </div>
              <span className="font-serif text-xl font-bold text-[#2c4a3e] tracking-tight">
                Holistic Care
              </span>
            </div>
            <p className="font-sans text-sm text-[#4a4b46] leading-relaxed mb-6">
              Integrating clinical excellence with the timeless wisdom of classical homeopathy for balanced, lasting physical and emotional health.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNav('about')}
                className="w-9 h-9 rounded-full border border-[#2c4a3e]/20 flex items-center justify-center hover:bg-[#2c4a3e] hover:text-white transition-all text-[#2c4a3e]"
                aria-label="About Dr. Roopali"
                title="About"
              >
                <Globe className="w-4 h-4" />
              </button>
              <div className="relative">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Dr. Roopali Garg Mangla - Homeopathy & MPESS Wellness',
                        text: 'Consult Dr. Roopali Garg Mangla (BHMS) for holistic homeopathy in Greater Noida.',
                        url: window.location.href,
                      }).catch(() => null);
                    } else if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href).catch(() => null);
                      setCopiedLink(true);
                      setTimeout(() => setCopiedLink(false), 3000);
                    }
                  }}
                  className="w-9 h-9 rounded-full border border-[#2c4a3e]/20 flex items-center justify-center hover:bg-[#2c4a3e] hover:text-white transition-all text-[#2c4a3e]"
                  aria-label="Share Website"
                  title="Share Website"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedLink && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#2c4a3e] text-white text-[10px] font-sans px-2 py-0.5 rounded shadow-xs whitespace-nowrap">
                    Link copied!
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#1a1c1e] uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3 font-sans text-sm" aria-label="Footer Quick Links">
              <button
                onClick={() => handleNav('about')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                About Dr. Roopali
              </button>
              <button
                onClick={() => handleNav('mpess-approach')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                The MPESS Approach
              </button>
              <button
                onClick={() => handleNav('services')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                Wellness Services
              </button>
              <button
                onClick={() => handleNav('conditions')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                Conditions & Care
              </button>
              <button
                onClick={() => handleNav('testimonials')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                Patient Experiences
              </button>
              <button
                onClick={() => handleNav('faq')}
                className="text-left text-[#4a4b46] hover:text-[#2c4a3e] transition-colors"
              >
                General FAQs
              </button>
            </nav>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#1a1c1e] uppercase tracking-widest mb-5">
              Contact Info
            </h3>
            <div className="flex flex-col gap-4 font-sans text-sm text-[#4a4b46]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2c4a3e] mt-1 shrink-0" />
                <span className="leading-snug">
                  {CLINIC_INFO.address.shop}, {CLINIC_INFO.address.area}, {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="font-medium text-[#1a1c1e] hover:text-[#2c4a3e] transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-[#2c4a3e] transition-colors break-all"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Stay Inspired / Newsletter */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#1a1c1e] uppercase tracking-widest mb-5">
              Stay Inspired
            </h3>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-sm text-[#4a4b46] leading-relaxed">
                Subscribe for seasonal holistic wellness advice and natural lifestyle tips.
              </p>
              <form onSubmit={handleNewsletter} className="flex gap-2 mt-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="bg-[#ffffff] border border-[#e5e3df] px-3.5 py-2 rounded-lg flex-1 text-sm text-[#1a1c1e] placeholder:text-[#787972] outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e]"
                  aria-label="Subscribe email address"
                />
                <button
                  type="submit"
                  className="bg-[#2c4a3e] text-white p-2.5 rounded-lg hover:bg-[#233b32] transition-colors flex items-center justify-center active:scale-95"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {newsletterStatus === 'success' && (
                <div className="flex items-center gap-2 text-xs text-[#0d211a] font-medium bg-[#d4dfd9] p-2 rounded-lg animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 text-[#2c4a3e]" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="border-t border-[#e5e3df] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#787972]">
          <span>
            © {new Date().getFullYear()} Dr. Roopali Garg Mangla (BHMS). All Rights Reserved.
          </span>
          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-[#2c4a3e] transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#2c4a3e] transition-colors underline-offset-4 hover:underline"
            >
              Terms of Service
            </button>
            <button
              onClick={() => handleNav('medical-disclaimer')}
              className="hover:text-[#2c4a3e] transition-colors underline-offset-4 hover:underline text-[#8c7047] font-medium"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
