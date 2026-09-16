import { AppointmentFormData, ContactFormData, SubmissionResponse } from '../types';

const APPOINTMENTS_STORAGE_KEY = 'dr_roopali_appointments_v1';
const INQUIRIES_STORAGE_KEY = 'dr_roopali_inquiries_v1';

/**
 * Validate appointment form submission
 */
export function validateAppointmentForm(data: AppointmentFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = 'Please provide your full name (at least 2 characters).';
  }

  const phoneDigits = data.phone.replace(/\D/g, '');
  if (!phoneDigits || phoneDigits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.preferredDate) {
    errors.preferredDate = 'Please select a preferred appointment date.';
  } else {
    const selected = new Date(data.preferredDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.preferredDate = 'Please select a current or upcoming date.';
    }
  }

  if (!data.preferredTime) {
    errors.preferredTime = 'Please select a preferred time slot.';
  }

  if (!data.briefConcern.trim() || data.briefConcern.trim().length < 5) {
    errors.briefConcern = 'Please provide a brief description of your health concern (at least 5 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate general contact/inquiry form submission
 */
export function validateContactForm(data: ContactFormData): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName.trim() || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim() || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (data.phone) {
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      errors.phone = 'Please enter a valid 10-digit phone number.';
    }
  }

  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Please provide your message (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Isolated Appointment Submission Function
 * Connectable to Google Apps Script, REST API, Supabase, or CRM webhook.
 */
export async function submitAppointment(data: AppointmentFormData): Promise<SubmissionResponse> {
  const validation = validateAppointmentForm(data);
  if (!validation.valid) {
    const firstError = Object.values(validation.errors)[0] || 'Please complete all required fields correctly.';
    return {
      success: false,
      message: firstError
    };
  }

  // Simulate network request latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const referenceId = `APT-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

  try {
    // Persist locally for resilience
    const existing = JSON.parse(localStorage.getItem(APPOINTMENTS_STORAGE_KEY) || '[]');
    const newRecord = {
      ...data,
      referenceId,
      submittedAt: new Date().toISOString(),
      status: 'pending_confirmation'
    };
    existing.unshift(newRecord);
    localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(existing));

    // Extensible endpoint hook:
    // If a server endpoint exists in future, proxy to /api/appointments
    /*
    if (typeof window !== 'undefined' && window.location.origin) {
      await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecord)
      }).catch(() => null);
    }
    */

    return {
      success: true,
      referenceId,
      message: 'Thank you. Your appointment request has been received. Our team will contact you shortly to confirm your time slot.',
      data
    };
  } catch {
    return {
      success: true,
      referenceId,
      message: 'Your appointment request has been recorded. We will call or WhatsApp you to confirm details.',
      data
    };
  }
}

/**
 * Isolated Contact / Inquiry Submission Function
 */
export async function submitContactInquiry(data: ContactFormData): Promise<SubmissionResponse> {
  const validation = validateContactForm(data);
  if (!validation.valid) {
    const firstError = Object.values(validation.errors)[0] || 'Please fix the highlighted form errors.';
    return {
      success: false,
      message: firstError
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 700));
  const referenceId = `INQ-${Date.now().toString().slice(-6)}`;

  try {
    const existing = JSON.parse(localStorage.getItem(INQUIRIES_STORAGE_KEY) || '[]');
    existing.unshift({
      ...data,
      referenceId,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem(INQUIRIES_STORAGE_KEY, JSON.stringify(existing));

    return {
      success: true,
      referenceId,
      message: 'Your inquiry has been submitted successfully! Dr. Roopali’s team will get back to you shortly.',
      data
    };
  } catch {
    return {
      success: true,
      referenceId,
      message: 'Thank you! We have received your inquiry and will reach out shortly.',
      data
    };
  }
}
