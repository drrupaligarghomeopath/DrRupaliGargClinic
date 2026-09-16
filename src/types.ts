export type RoutePath =
  | 'home'
  | 'about'
  | 'mpess-approach'
  | 'services'
  | 'conditions'
  | 'testimonials'
  | 'faq'
  | 'contact'
  | 'book-appointment'
  | 'privacy-policy'
  | 'terms'
  | 'medical-disclaimer';

export interface MPESSDimension {
  id: 'mind' | 'physical' | 'emotional' | 'spiritual' | 'social';
  name: string;
  shortSubtitle: string;
  tagline: string;
  description: string;
  clinicalFocus: string[];
  homeopathicSynergy: string;
  iconName: string;
  badgeColor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  duration: string;
  mode: 'In-Clinic & Online' | 'Online WhatsApp' | 'In-Clinic' | 'Personalized Coaching';
  suitableFor: string;
  iconName: string;
}

export interface ConditionItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  holisticApproach: string;
  symptoms: string[];
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  location: string;
  condition: string;
  quote: string;
  rating: number;
  duration: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Consultation' | 'Homeopathy' | 'Clinic & Booking';
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: 'in-clinic' | 'online-whatsapp' | 'follow-up' | 'wellness-coaching';
  briefConcern: string;
  preferredContactMethod: 'whatsapp' | 'phone' | 'email';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  data?: AppointmentFormData | ContactFormData;
}
