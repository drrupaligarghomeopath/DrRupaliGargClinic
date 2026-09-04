import React, { useState } from 'react';
import { CLINIC_INFO, getWhatsAppUrl, SERVICES_LIST } from '../data/clinicData';
import { ContactFormData } from '../types';
import { submitContactInquiry } from '../services/appointmentService';
import { MapSection } from '../components/MapSection';
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setSuccessResponse(null);

    const res = await submitContactInquiry(formData);
    setLoading(false);

    if (res.success) {
      setSuccessResponse(res.message);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="w-full bg-[#faf9f6]">
      {/* Top Header & Inquiries Container */}
      <div className="w-full bg-[#faf9f6] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info Section */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-[#8c7047] uppercase tracking-widest block mb-2">
              Reach Dr. Roopali's Clinic
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1a1c1e] mb-6">
              Get in Touch
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#4a4b46] mb-10 max-w-md leading-relaxed">
              We look forward to hearing from you. Our clinic is dedicated to providing holistic, homeopathic care tailored to your individual needs.
            </p>

            {/* Address & Timings Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
              {/* Address */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2c4a3e] flex items-center justify-center shadow-[0_8px_24px_rgba(44,74,62,0.15)] text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1a1c1e]">
                  Clinic Address
                </h3>
                <p className="font-sans text-sm text-[#4a4b46] leading-relaxed">
                  {CLINIC_INFO.address.shop}<br />
                  {CLINIC_INFO.address.area}<br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.pincode}
                </p>
              </div>

              {/* Timings */}
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-[#2c4a3e] flex items-center justify-center shadow-[0_8px_24px_rgba(44,74,62,0.15)] text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#1a1c1e]">
                  Clinic Timings
                </h3>
                <div className="font-sans text-sm text-[#4a4b46] flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-medium text-[#1a1c1e]">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium text-[#1a1c1e]">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#ba1a1a]">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed / By Appt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={CLINIC_INFO.phoneTel}
                className="flex items-center gap-3 bg-[#2c4a3e] text-white px-6 py-4 rounded-full font-sans text-xs font-bold tracking-wider hover:bg-[#233b32] hover:shadow-[0_8px_30px_rgba(44,74,62,0.25)] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>{CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-3 border border-[#787972] px-6 py-4 rounded-full font-sans text-xs font-bold tracking-wider text-[#1a1c1e] hover:bg-[#efece6] transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-[#2c4a3e]" />
                <span>Email Us</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello Dr. Roopali, I would like to inquire about clinic timings and consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full font-sans text-xs font-bold tracking-wider hover:bg-[#20b858] transition-all shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form Section */}
          <div className="bg-[#ffffff] p-8 sm:p-12 md:p-14 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#e5e3df] relative overflow-hidden">
            {/* Decorative blurred shape */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4dfd9] blur-3xl opacity-40 rounded-full pointer-events-none" />

            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1a1c1e] mb-2">
              Send an Inquiry
            </h2>
            <p className="font-sans text-sm text-[#4a4b46] mb-8">
              Fill out the form below and our team will get back to you shortly.
            </p>

            {successResponse ? (
              <div className="bg-[#faf9f6] border border-[#d4dfd9] p-8 rounded-2xl text-center shadow-md animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#d4dfd9] text-[#2c4a3e] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1a1c1e] mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#4a4b46] mb-6">
                  {successResponse}
                </p>
                <button
                  onClick={() => setSuccessResponse(null)}
                  className="bg-[#2c4a3e] text-white px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#233b32] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-semibold text-[#1a1c1e] uppercase tracking-wider" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Aditi Rao"
                    className="bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl font-sans text-sm text-[#1a1c1e] placeholder:text-[#787972] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-[#1a1c1e] uppercase tracking-wider" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="aditi@example.com"
                      className="bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl font-sans text-sm text-[#1a1c1e] placeholder:text-[#787972] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-[#1a1c1e] uppercase tracking-wider" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 99903 XXXXX"
                      className="bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl font-sans text-sm text-[#1a1c1e] placeholder:text-[#787972] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Interested In */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-semibold text-[#1a1c1e] uppercase tracking-wider" htmlFor="service">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl font-sans text-sm text-[#1a1c1e] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors"
                  >
                    <option value="">Select a Service</option>
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="General Health Inquiry">General Health Inquiry</option>
                  </select>
                </div>

                {/* Your Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-semibold text-[#1a1c1e] uppercase tracking-wider" htmlFor="message">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="bg-[#faf9f6] border border-[#e5e3df] px-4 py-3.5 rounded-xl font-sans text-sm text-[#1a1c1e] placeholder:text-[#787972] focus:outline-none focus:border-[#2c4a3e] focus:ring-1 focus:ring-[#2c4a3e] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#2c4a3e] text-white w-full py-4 rounded-full font-sans text-xs font-bold uppercase tracking-wider mt-2 hover:bg-[#233b32] hover:shadow-[0_8px_24px_rgba(44,74,62,0.3)] transition-all duration-300 disabled:opacity-50 active:scale-98"
                >
                  {loading ? 'SENDING INQUIRY...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />
    </div>
  );
};
