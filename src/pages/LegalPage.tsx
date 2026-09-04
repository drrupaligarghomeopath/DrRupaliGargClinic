import React, { useState } from 'react';
import { RoutePath } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'disclaimer';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'disclaimer'>(initialTab);

  return (
    <div className="w-full bg-[#faf9f6] py-12 md:py-20 min-h-screen">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-[#8c7047] uppercase tracking-widest block mb-2">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1c1e]">
            Clinic Policies & Disclaimers
          </h1>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 mb-8" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'privacy'}
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#2c4a3e] text-white shadow-sm'
                : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e5e3df]'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'terms'}
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'terms'
                ? 'bg-[#2c4a3e] text-white shadow-sm'
                : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e5e3df]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === 'disclaimer'}
            onClick={() => setActiveTab('disclaimer')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'disclaimer'
                ? 'bg-[#ba1a1a] text-white shadow-sm'
                : 'bg-[#efece6] text-[#4a4b46] hover:bg-[#e5e3df]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Medical Disclaimer</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#e5e3df] shadow-sm font-sans text-sm text-[#4a4b46] leading-relaxed space-y-6">
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#1a1c1e]">
                Privacy & Data Protection Policy
              </h2>
              <p>
                At the clinical practice of <strong>Dr. Roopali Garg Mangla (BHMS)</strong>, patient privacy and medical confidentiality are fundamental tenets. We collect personal health details, consultation inquiries, and contact numbers exclusively to facilitate individualized homeopathic case-taking, appointment scheduling, and treatment tracking.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">Data Handling & Confidentiality</h3>
              <p>
                All patient records, medical histories, and consultation notes are safeguarded with strict confidentiality. We do not sell, rent, or lease patient contact information to third-party advertisers.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">Communication Preferences</h3>
              <p>
                By requesting an appointment via our website, WhatsApp, or phone, you consent to receive direct booking confirmations and clinical follow-up communication from our Greater Noida clinic.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#1a1c1e]">
                Terms of Service & Consultation
              </h2>
              <p>
                These terms govern your use of this website and appointments with Dr. Roopali Garg Mangla.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">1. Appointments & Scheduling</h3>
              <p>
                Submitting an appointment request indicates a slot preference. Official confirmation is communicated via WhatsApp, phone, or email by our clinical desk. In-clinic consultations are conducted at Shop 32, 1st Floor, Rise Shoplex, Greater Noida.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">2. Online Telehealth Consultations</h3>
              <p>
                Online WhatsApp and video consultations require the patient to provide truthful, comprehensive symptomatic details. Remedies are prescribed according to classical homeopathic principles.
              </p>
            </div>
          )}

          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <div className="bg-[#ba1a1a]/10 border-l-4 border-[#ba1a1a] p-4 rounded-r-xl mb-4">
                <p className="text-[#ba1a1a] font-bold text-sm">
                  Important Medical & Healthcare Notice
                </p>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#1a1c1e]">
                Medical Disclaimer & Scope of Care
              </h2>
              <p>
                The information provided on this website is for general educational and informational purposes only and does not constitute medical advice or a doctor-patient relationship until a formal consultation is conducted.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">Not a Substitute for Emergency Services</h3>
              <p>
                Homeopathy is a gentle, constitutional therapeutic practice. If you are experiencing an acute medical emergency, life-threatening situation, severe trauma, or acute chest pain, please immediately contact emergency medical services or visit the nearest hospital emergency department.
              </p>
              <h3 className="font-serif text-lg font-bold text-[#1a1c1e]">Individualized Results</h3>
              <p>
                Homeopathic treatment response times vary depending on the chronicity of the condition, patient vitality, and adherence to lifestyle recommendations. No guaranteed instant cure is claimed or implied.
              </p>
            </div>
          )}

          <div className="pt-6 border-t border-[#e5e3df] text-xs text-[#787972]">
            <p>
              For inquiries regarding clinic policies, write to{' '}
              <a href={`mailto:${CLINIC_INFO.email}`} className="text-[#2c4a3e] underline">
                {CLINIC_INFO.email}
              </a>{' '}
              or call {CLINIC_INFO.phoneDisplay}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
