import React, { useState } from 'react';
import { CLINIC_INFO, getWhatsAppUrl } from '../data/clinicData';
import { AppointmentFormData, RoutePath } from '../types';
import { submitAppointment, validateAppointmentForm } from '../services/appointmentService';
import { Calendar, Clock, Phone, MessageSquare, CheckCircle2, AlertCircle, ShieldCheck, MapPin, UserCheck } from 'lucide-react';

interface BookAppointmentPageProps {
  onNavigate: (route: RoutePath) => void;
}

export const BookAppointmentPage: React.FC<BookAppointmentPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '11:00 AM - 12:00 PM',
    consultationType: 'in-clinic',
    briefConcern: '',
    preferredContactMethod: 'whatsapp',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmedResult, setConfirmedResult] = useState<{
    referenceId?: string;
    message: string;
  } | null>(null);

  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
  ];

  // Calculate minimum selectable date (today)
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateAppointmentForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setLoading(true);

    const res = await submitAppointment(formData);
    setLoading(false);

    if (res.success) {
      setConfirmedResult({
        referenceId: res.referenceId,
        message: res.message,
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setErrors({ form: res.message });
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#faf9f6] min-h-screen">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
        {confirmedResult ? (
          /* Successful Appointment Confirmation View */
          <div className="bg-[#ffffff] rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#e5e3df] text-center animate-fade-in max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#d4dfd9] text-[#2c4a3e] flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#8c7047] bg-[#f5e8d2]/60 px-3 py-1 rounded-full">
              Booking Received
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1c1e] mt-4 mb-3">
              Thank You! Your Appointment Request Has Been Received.
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#4a4b46] leading-relaxed mb-6">
              Our clinical coordinator will review your preferred slot and contact you shortly to confirm your consultation.
            </p>

            {confirmedResult.referenceId && (
              <div className="bg-[#faf9f6] border border-[#e5e3df] p-4 rounded-2xl inline-block mb-8 text-xs text-[#1a1c1e]">
                <span className="text-[#787972] block mb-1">Appointment Reference ID:</span>
                <span className="font-mono font-bold text-sm text-[#2c4a3e] tracking-wider">
                  {confirmedResult.referenceId}
                </span>
              </div>
            )}

            {/* Next Steps / Fallback actions */}
            <div className="border-t border-[#e5e3df] pt-8 mb-8 text-left">
              <h2 className="font-serif text-lg font-bold text-[#1a1c1e] mb-2 text-center">
                Need Immediate Confirmation or Have Questions?
              </h2>
              <p className="text-xs text-[#4a4b46] text-center mb-6">
                You can reach us directly via WhatsApp or telephone:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={getWhatsAppUrl(`Hello Dr. Roopali, I just submitted an appointment request (Ref: ${confirmedResult.referenceId || 'New'}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 px-4 rounded-full font-sans text-xs font-bold tracking-wider hover:bg-[#20b858] transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WHATSAPP US NOW</span>
                </a>

                <a
                  href={CLINIC_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 bg-[#2c4a3e] text-white py-3.5 px-4 rounded-full font-sans text-xs font-bold tracking-wider hover:bg-[#233b32] transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL {CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                setConfirmedResult(null);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  preferredDate: '',
                  preferredTime: '11:00 AM - 12:00 PM',
                  consultationType: 'in-clinic',
                  briefConcern: '',
                  preferredContactMethod: 'whatsapp',
                });
              }}
              className="text-xs font-semibold text-[#2c4a3e] hover:underline"
            >
              Book Another Appointment
            </button>
          </div>
        ) : (
          /* Main Appointment Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Side: Summary & Trust */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold text-[#8c7047] uppercase tracking-widest block mb-2">
                  Direct Appointment Portal
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1a1c1e] leading-tight mb-4">
                  Schedule Your Consultation
                </h1>
                <p className="font-sans text-sm text-[#4a4b46] leading-relaxed">
                  Book a personalized session with Dr. Roopali Garg Mangla (BHMS). Choose between an in-clinic consultation in Greater Noida or a convenient online WhatsApp consultation.
                </p>
              </div>

              {/* Consultation Format Options */}
              <div className="bg-[#ffffff] p-5 rounded-2xl border border-[#e5e3df] shadow-sm space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4dfd9] text-[#2c4a3e] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wide">
                      In-Clinic (Greater Noida)
                    </h2>
                    <p className="text-xs text-[#4a4b46]">
                      Shop 32, 1st Floor, Rise Shoplex, Tech Zone IV, Sector 1.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-[#1a1c1e] uppercase tracking-wide">
                      Online Video / WhatsApp
                    </h2>
                    <p className="text-xs text-[#4a4b46]">
                      Direct consultation with genuine medicine dispatch to your doorstep.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-center gap-2 text-xs text-[#787972]">
                <ShieldCheck className="w-4 h-4 text-[#2c4a3e] shrink-0" />
                <span>Your medical details and contact information remain 100% confidential.</span>
              </div>
            </div>

            {/* Right Side: Appointment Form */}
            <div className="lg:col-span-7 bg-[#ffffff] p-6 sm:p-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#e5e3df]">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {errors.form && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                {/* Consultation Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-2">
                    Consultation Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'in-clinic' })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        formData.consultationType === 'in-clinic'
                          ? 'bg-[#2c4a3e] text-white border-[#2c4a3e] shadow-sm'
                          : 'bg-[#faf9f6] text-[#4a4b46] border-[#e5e3df] hover:bg-[#efece6]'
                      }`}
                    >
                      In-Clinic (Greater Noida)
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: 'online-whatsapp' })}
                      className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                        formData.consultationType === 'online-whatsapp'
                          ? 'bg-[#2c4a3e] text-white border-[#2c4a3e] shadow-sm'
                          : 'bg-[#faf9f6] text-[#4a4b46] border-[#e5e3df] hover:bg-[#efece6]'
                      }`}
                    >
                      Online WhatsApp Video
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="apt-fullName" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="apt-fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Chandra"
                    className={`w-full bg-[#faf9f6] border px-4 py-3.5 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:ring-1 transition-colors ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#e5e3df] focus:border-[#2c4a3e] focus:ring-[#2c4a3e]'
                    }`}
                  />
                  {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="apt-phone" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="apt-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 99903 XXXXX"
                      className={`w-full bg-[#faf9f6] border px-4 py-3.5 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#e5e3df] focus:border-[#2c4a3e] focus:ring-[#2c4a3e]'
                      }`}
                    />
                    {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="apt-email" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="apt-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ramesh@example.com"
                      className={`w-full bg-[#faf9f6] border px-4 py-3.5 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#e5e3df] focus:border-[#2c4a3e] focus:ring-[#2c4a3e]'
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="apt-date" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      id="apt-date"
                      type="date"
                      min={todayStr}
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full bg-[#faf9f6] border px-4 py-3.5 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:ring-1 transition-colors ${
                        errors.preferredDate
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#e5e3df] focus:border-[#2c4a3e] focus:ring-[#2c4a3e]'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-red-600 text-xs mt-1">{errors.preferredDate}</p>}
                  </div>

                  <div>
                    <label htmlFor="apt-time" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                      Preferred Time Slot *
                    </label>
                    <select
                      id="apt-time"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Brief Concern */}
                <div>
                  <label htmlFor="apt-concern" className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-1.5">
                    Brief Health Concern or Symptoms *
                  </label>
                  <textarea
                    id="apt-concern"
                    rows={3}
                    required
                    value={formData.briefConcern}
                    onChange={(e) => setFormData({ ...formData, briefConcern: e.target.value })}
                    placeholder="Describe your symptoms, how long you've had them, or goals for consultation..."
                    className={`w-full bg-[#faf9f6] border px-4 py-3 rounded-xl text-sm text-[#1a1c1e] focus:outline-none focus:ring-1 transition-colors resize-none ${
                      errors.briefConcern
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#e5e3df] focus:border-[#2c4a3e] focus:ring-[#2c4a3e]'
                    }`}
                  />
                  {errors.briefConcern && <p className="text-red-600 text-xs mt-1">{errors.briefConcern}</p>}
                </div>

                {/* Preferred Confirmation Channel */}
                <div>
                  <label className="block text-xs font-bold text-[#1a1c1e] uppercase tracking-wider mb-2">
                    Preferred Confirmation Method
                  </label>
                  <div className="flex flex-wrap gap-4 text-xs text-[#4a4b46]">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        checked={formData.preferredContactMethod === 'whatsapp'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'whatsapp' })}
                        className="text-[#2c4a3e] focus:ring-[#2c4a3e]"
                      />
                      <span>WhatsApp Message</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        checked={formData.preferredContactMethod === 'phone'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'phone' })}
                        className="text-[#2c4a3e] focus:ring-[#2c4a3e]"
                      />
                      <span>Phone Call</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        checked={formData.preferredContactMethod === 'email'}
                        onChange={() => setFormData({ ...formData, preferredContactMethod: 'email' })}
                        className="text-[#2c4a3e] focus:ring-[#2c4a3e]"
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#2c4a3e] text-white py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-[#233b32] hover:shadow-[0_8px_25px_rgba(44,74,62,0.3)] transition-all duration-300 disabled:opacity-50 active:scale-98"
                >
                  {loading ? 'SUBMITTING REQUEST...' : 'REQUEST APPOINTMENT'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
