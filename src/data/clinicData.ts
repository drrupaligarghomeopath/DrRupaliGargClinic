import { MPESSDimension, ServiceItem, ConditionItem, TestimonialItem, FAQItem } from '../types';

export const CLINIC_INFO = {
  doctorName: 'Dr. Roopali Garg Mangla',
  qualification: 'BHMS',
  experience: '10+ Years in Homeopathy & Holistic Healing',
  approach: 'Holistic MPESS Approach (Mind • Physical • Emotional • Spiritual • Social)',
  phoneDisplay: '+91-9990365635',
  phoneClean: '+919990365635',
  phoneTel: 'tel:+919990365635',
  email: 'drrupaligarghomeopath@gmail.com',
  doctorImage: '/Doctor RUPALI.jpg',
  doctorImageFallback: '/doctor.jpg',
  address: {
    shop: 'Shop No 32, 1st Floor, Rise Shoplex',
    area: 'Tech Zone IV, Sector 1, Bisrakh Jalalpur',
    city: 'Greater Noida',
    state: 'Uttar Pradesh',
    pincode: '201318',
    full: 'Shop No 32, 1st Floor, Rise Shoplex, Tech Zone IV, Sector 1, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201318'
  },
  timings: {
    weekdays: 'Mon - Fri: 10:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 2:00 PM',
    sunday: 'Sunday: Prior Appointment / Closed'
  },
  googleMapsUrl: 'https://share.google/zPsz8CoSSZVMnpyZD',
  googleBusinessName: 'Dr Roopali Garg Mangla',
  googleBusinessUrl: 'https://share.google/zPsz8CoSSZVMnpyZD',
  googleQrSvgPath: '/google-business-qr.svg',
  googleQrPosterPath: '/google-business-poster.svg',
  googleQrPngPath: '/google-business-qr.png',
  facebookUrl: 'https://www.facebook.com/Dr.RoopaliMangla',
  instagramUrl: 'https://www.instagram.com/drroopaligarg/'
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = 'Hello Dr. Roopali, I would like to know more about booking a consultation.';
  const message = customMessage || defaultMsg;
  return `https://wa.me/919990365635?text=${encodeURIComponent(message)}`;
}

export const MPESS_DIMENSIONS: MPESSDimension[] = [
  {
    id: 'mind',
    name: 'Mind',
    shortSubtitle: 'Mental wellbeing & cognitive clarity',
    tagline: 'Thoughts, stress management, focus, and inner equilibrium',
    description: 'The mental plane governs our cognitive patterns, stress response, thought processing, and memory. Classical homeopathy recognises how mental overexertion, prolonged anxiety, or cognitive fatigue manifest in bodily symptoms.',
    clinicalFocus: [
      'Chronic stress & burnout recovery',
      'Focus, concentration & brain fog',
      'Overthinking & sleep-onset restlessness',
      'Workplace and academic anxiety'
    ],
    homeopathicSynergy: 'Remedies are selected considering your distinct mental constitution, reaction to deadlines, and inner stress triggers.',
    iconName: 'psychology',
    badgeColor: 'bg-primary-fixed text-on-primary-fixed'
  },
  {
    id: 'physical',
    name: 'Physical',
    shortSubtitle: 'Vitality, organ harmony & immunity',
    tagline: 'Physical health, vitality, lifestyle, and cellular homeostasis',
    description: 'Your physical vessel expresses vital force imbalances through acute and chronic symptoms. We evaluate your constitution, digestive rhythms, thermal tolerances, and natural vitality to trigger natural self-recovery.',
    clinicalFocus: [
      'Gastrointestinal & digestive balance',
      'Skin, eczema, allergies & hair vitality',
      'Respiratory & recurrent seasonal sensitivity',
      'Joint mobility & chronic inflammation management'
    ],
    homeopathicSynergy: 'Gentle, potentised micro-doses stimulate the body’s innate healing mechanism without suppressing symptoms.',
    iconName: 'vital_signs',
    badgeColor: 'bg-primary-container text-on-primary'
  },
  {
    id: 'emotional',
    name: 'Emotional',
    shortSubtitle: 'Emotional balance & inner resilience',
    tagline: 'Emotional equilibrium, resilience, and healthy expression',
    description: 'Unresolved emotional grief, suppressed frustrations, or chronic emotional tension frequently act as root causes for physical pathology. Our care provides a safe space for deep healing.',
    clinicalFocus: [
      'Grief, sorrow & emotional heaviness',
      'Mood fluctuations & irritability',
      'Panic tendencies & situational fears',
      'Post-trauma emotional recovery'
    ],
    homeopathicSynergy: 'Homeopathy uniquely excels in addressing the emotional origin of disease, restoring gentle emotional buoyancy.',
    iconName: 'favorite',
    badgeColor: 'bg-secondary-container text-on-secondary-container'
  },
  {
    id: 'spiritual',
    name: 'Spiritual',
    shortSubtitle: 'Purpose, inner peace & connection',
    tagline: 'Purpose, inner connection, meaning, and holistic harmony',
    description: 'Spiritual wellness is about living aligned with one’s intrinsic values, finding inner peace, and maintaining meaningful purpose in daily living. True health is a state of free vital movement.',
    clinicalFocus: [
      'Alignment with personal values and purpose',
      'Mindfulness integration and meditative calm',
      'Overcoming existential inertia or detachment',
      'Harmonising inner intuition and daily actions'
    ],
    homeopathicSynergy: 'Higher potentised remedies subtle energetic harmony, encouraging clarity and spiritual grounding.',
    iconName: 'self_improvement',
    badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed'
  },
  {
    id: 'social',
    name: 'Social',
    shortSubtitle: 'Relationships & environmental wellness',
    tagline: 'Relationships, community, environment, and social harmony',
    description: 'We do not exist in isolation. Family dynamics, workplace atmosphere, social support networks, and environmental factors deeply influence long-term health and recuperation.',
    clinicalFocus: [
      'Navigating interpersonal relational stress',
      'Boundary setting and empathetic balance',
      'Environmental sensitivity & seasonal adaptability',
      'Family health and intergenerational wellness'
    ],
    homeopathicSynergy: 'Comprehensive case-taking takes into account your environmental reactivity and social sphere dynamics.',
    iconName: 'groups',
    badgeColor: 'bg-primary-fixed-dim text-on-surface'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'homeopathic-consultation',
    title: 'Homeopathic Consultation',
    category: 'Clinical Care',
    shortDescription: 'In-depth classical constitutional case evaluation for chronic and acute health concerns.',
    detailedDescription: 'A comprehensive 45–60 minute initial session analysing physical complaints, constitutional temperament, past medical history, and mental-emotional state to select individualized classical homeopathic remedies.',
    benefits: [
      '100% Individualized constitutional prescription',
      'Non-invasive, side-effect-free gentle medicine',
      'Root-cause resolution instead of temporary symptom suppression',
      'Detailed dietary and regimen recommendations'
    ],
    duration: '45 - 60 Minutes',
    mode: 'In-Clinic & Online',
    suitableFor: 'Individuals of all ages dealing with chronic or recurrent health challenges.',
    iconName: 'medical_services'
  },
  {
    id: 'mpess-guidance',
    title: 'MPESS Wellness Guidance',
    category: 'Holistic Approach',
    shortDescription: 'Multi-dimensional assessment across Mind, Physical, Emotional, Spiritual, and Social spheres.',
    detailedDescription: 'Our signature MPESS approach evaluates how your mental thoughts, emotional habits, lifestyle rhythms, and social surroundings intersect with your physical health. Tailored for deep restorative transformation.',
    benefits: [
      'Comprehensive 5-pillar health roadmap',
      'Stress reduction & emotional grounding protocols',
      'Bio-individual lifestyle alignment',
      'Preventive health and longevity focus'
    ],
    duration: '60 Minutes',
    mode: 'Personalized Coaching',
    suitableFor: 'Professionals, parents, and seniors seeking holistic balance and lifestyle restoration.',
    iconName: 'spa'
  },
  {
    id: 'whatsapp-consultation',
    title: 'WhatsApp & Online Consultation',
    category: 'Digital Telehealth',
    shortDescription: 'Direct digital consultations for remote patients, busy professionals, and rapid follow-ups.',
    detailedDescription: 'Secure, convenient video or voice consultations via WhatsApp. Prescriptions and detailed guidance sent directly to your phone, with courier support for genuine homeopathic medicines.',
    benefits: [
      'Consult from anywhere across India & worldwide',
      'Flexible scheduling suited to your availability',
      'Direct WhatsApp chat support between appointments',
      'Doorstep delivery of high-potency authentic remedies'
    ],
    duration: '30 - 45 Minutes',
    mode: 'Online WhatsApp',
    suitableFor: 'Patients unable to visit the Greater Noida clinic in person.',
    iconName: 'chat'
  },
  {
    id: 'chronic-disease-care',
    title: 'Chronic Illness Management',
    category: 'Long-term Care',
    shortDescription: 'Structured long-term homeopathic support for stubborn, recurrent, and lifestyle diseases.',
    detailedDescription: 'Carefully monitored treatment programs for long-standing issues such as recurring allergies, thyroid imbalances, hormonal irregularities (PCOS/PCOD), arthritis, IBS, and chronic migraine.',
    benefits: [
      'Gradual reduction in recurrence frequency and intensity',
      'Safe accompaniment alongside conventional ongoing therapies',
      'Periodic progress reviews and remedy adjustments',
      'Immune system rejuvenation'
    ],
    duration: 'Ongoing Care Plans',
    mode: 'In-Clinic & Online',
    suitableFor: 'Individuals suffering from long-term stubborn conditions seeking sustainable relief.',
    iconName: 'healing'
  },
  {
    id: 'pediatric-homeopathy',
    title: 'Pediatric & Child Wellness',
    category: 'Family Health',
    shortDescription: 'Sweet, gentle, non-addictive remedies to boost your child’s natural immunity.',
    detailedDescription: 'Children love homeopathic sweet pills! Safe, gentle treatment for recurrent coughs, colds, poor appetite, teething difficulties, skin sensitivity, and behavioral restlessness without harsh chemicals.',
    benefits: [
      'Easy to administer sweet pills children love',
      'Zero drowsiness, zero bitter taste, zero chemical burden',
      'Strengthens innate developing immune systems',
      'Addresses recurrent school-acquired infections'
    ],
    duration: '30 - 45 Minutes',
    mode: 'In-Clinic & Online',
    suitableFor: 'Infants, toddlers, school-going children, and teenagers.',
    iconName: 'child_care'
  },
  {
    id: 'wellness-coaching',
    title: 'Holistic Wellness Coaching',
    category: 'Lifestyle & Preventive',
    shortDescription: 'One-on-one lifestyle, nutrition, and natural stress modulation coaching.',
    detailedDescription: 'Guidance on sleep hygiene, circadian alignment, anti-inflammatory nutrition, and mental resilience techniques to amplify your healing outcomes.',
    benefits: [
      'Customized daily routine & meal guidance',
      'Mindfulness & breathwork techniques for stress',
      'Sustained energy levels and mental focus',
      'Accountability and compassionate guidance'
    ],
    duration: '45 Minutes',
    mode: 'Personalized Coaching',
    suitableFor: 'Anyone committed to proactive preventive vitality and self-care.',
    iconName: 'emoji_events'
  }
];

export const CONDITIONS_LIST: ConditionItem[] = [
  {
    id: 'skin-hair',
    category: 'Dermatology & Scalp',
    title: 'Skin & Hair Health',
    summary: 'Holistic support for eczema, psoriasis, acne, urticaria, hair fall, and alopecia.',
    holisticApproach: 'Skin ailments reflect internal blood, liver, and vital vitality balance. We treat from within rather than relying only on suppressive topical steroidal creams.',
    symptoms: ['Recurrent eczema patches', 'Adult & hormonal acne', 'Allergic skin rashes & hives', 'Diffuse hair thinning & dandruff'],
    iconName: 'face'
  },
  {
    id: 'digestive-gut',
    category: 'Gastroenterology',
    title: 'Digestive & Gut Health',
    summary: 'Gentle management for acidity, chronic constipation, IBS, GERD, gas, and bloating.',
    holisticApproach: 'The gut is intimately linked with the emotional brain. Homeopathic constitutional remedies rebalance gut motility and digestive secretions.',
    symptoms: ['Irritable bowel syndrome (IBS)', 'Chronic heartburn & acid reflux', 'Persistent bloating & sluggish digestion', 'Food intolerance sensitivities'],
    iconName: 'restaurant'
  },
  {
    id: 'respiratory-allergies',
    category: 'Pulmonary & Immune',
    title: 'Respiratory & Allergies',
    summary: 'Natural relief for allergic rhinitis, sinusitis, chronic bronchitis, and asthma tendencies.',
    holisticApproach: 'Desensitising hypersensitive immune reactions naturally without causing grogginess or dependence on antihistamines.',
    symptoms: ['Morning sneezing fits & runny nose', 'Sinus pressure & post-nasal drip', 'Dust & pollen allergies', 'Frequent seasonal throat infections'],
    iconName: 'air'
  },
  {
    id: 'womens-hormonal',
    category: 'Gynecology & Endocrine',
    title: 'Women’s Hormonal Wellness',
    summary: 'Personalised care for PCOS/PCOD, irregular menses, PMS, menopausal transitions, and thyroid health.',
    holisticApproach: 'Supporting the delicate endocrine axis naturally by harmonising physical rhythms, stress factors, and emotional equilibrium.',
    symptoms: ['PCOS / PCOD metabolic support', 'Painful or irregular menstrual cycles', 'Menopausal hot flashes & mood shifts', 'Hypothyroid support'],
    iconName: 'female'
  },
  {
    id: 'stress-sleep',
    category: 'Neuropsychological',
    title: 'Stress, Anxiety & Sleep',
    summary: 'Restorative guidance for nervous exhaustion, panic triggers, burnout, and insomnia.',
    holisticApproach: 'Calming the sympathetic nervous system and easing the racing mind through constitutional remedies that foster deep, restful sleep.',
    symptoms: ['Difficulty falling or staying asleep', 'Chronic workplace fatigue & burnout', 'Restlessness & generalized anxiety', 'Tension headaches'],
    iconName: 'bedtime'
  },
  {
    id: 'joints-musculoskeletal',
    category: 'Orthopedics & Rheumatology',
    title: 'Joints & Musculoskeletal Care',
    summary: 'Holistic care for cervical spondylosis, osteoarthritis, sciatica, backache, and uric acid.',
    holisticApproach: 'Reducing chronic inflammatory tenderness, supporting joint lubrication, and preventing degeneration without gastric irritation.',
    symptoms: ['Morning joint stiffness & swelling', 'Cervical & lumbar backache', 'Sciatic nerve shooting pain', 'High uric acid & gout flare-ups'],
    iconName: 'accessibility_new'
  }
];

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: '1',
    patientName: 'Priya Sharma',
    location: 'Greater Noida West',
    condition: 'Chronic Allergic Rhinitis & Sinusitis',
    quote: 'I had been suffering from severe morning sneezing and sinus headaches for over 6 years. Dr. Roopali’s thorough constitutional diagnosis and MPESS guidance brought me permanent relief within 4 months. She is incredibly patient and understanding.',
    rating: 5,
    duration: 'Under Care: 6 Months',
    verified: true
  },
  {
    id: '2',
    patientName: 'Rajesh Verma',
    location: 'Tech Zone IV, Greater Noida',
    condition: 'Digestive IBS & Chronic Stress',
    quote: 'Being in high-pressure IT management, my gut was wrecked with IBS and acidity. Dr. Roopali addressed not just my physical symptoms but also my stress triggers through her MPESS approach. My energy and digestion are better than ever.',
    rating: 5,
    duration: 'Under Care: 8 Months',
    verified: true
  },
  {
    id: '3',
    patientName: 'Ananya & Mother (Sunita)',
    location: 'Sector 1, Greater Noida',
    condition: 'PCOS & Hormonal Imbalance',
    quote: 'My menstrual cycles were extremely irregular due to PCOS. After trying multiple treatments with no long-term benefit, we consulted Dr. Roopali. Her holistic homeopathic remedies restored regular cycles and cleared my cystic acne naturally.',
    rating: 5,
    duration: 'Under Care: 5 Months',
    verified: true
  },
  {
    id: '4',
    patientName: 'Amitabh Mukherjee',
    location: 'Noida Extension',
    condition: 'Pediatric Immunity (5yo Son)',
    quote: 'My 5-year-old son caught colds and throat infections every alternate week in school. Dr. Roopali’s sweet homeopathic medicines boosted his immunity so well that he hasn’t missed school once this winter. Highly recommended!',
    rating: 5,
    duration: 'Under Care: 1 Year',
    verified: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is homeopathy and how does it work?',
    answer: 'Homeopathy is a gentle, holistic system of medicine based on the principle of "Like Cures Like" (Similia Similibus Curentur). Highly diluted and potentised natural substances stimulate your body’s vital force and innate immune intelligence to heal itself from within, rather than merely suppressing surface symptoms.',
    category: 'Homeopathy'
  },
  {
    id: 'faq-2',
    question: 'What can I expect during my first consultation with Dr. Roopali?',
    answer: 'Your initial consultation lasts approximately 45 to 60 minutes. Dr. Roopali takes a detailed case history covering not only your physical complaints, but your medical background, emotional stress factors, sleep habits, thermal preferences, and lifestyle patterns. This holistic evaluation ensures a precision constitutional remedy is prescribed.',
    category: 'Consultation'
  },
  {
    id: 'faq-3',
    question: 'What is the MPESS approach?',
    answer: 'The MPESS approach is Dr. Roopali’s comprehensive 5-pillar healing framework integrating Mind (thoughts & stress), Physical (vitality & organ health), Emotional (feelings & resilience), Spiritual (purpose & inner peace), and Social (relationships & environment). Healing all 5 dimensions provides sustainable long-term wellness.',
    category: 'General'
  },
  {
    id: 'faq-4',
    question: 'Do I need a prior appointment before visiting the clinic?',
    answer: 'Yes, prior appointments are highly recommended to ensure each patient receives dedicated, unhurried time for consultation without long waiting room delays. You can easily book online via this website or message on WhatsApp at +91-9990365635.',
    category: 'Clinic & Booking'
  },
  {
    id: 'faq-5',
    question: 'Are WhatsApp and online consultations available for outstation patients?',
    answer: 'Yes! Dr. Roopali conducts digital consultations via secure WhatsApp voice and video calls for patients across India and overseas. Genuine, authentic homeopathic medicines are carefully packaged and couriered directly to your doorstep with tracking.',
    category: 'Consultation'
  },
  {
    id: 'faq-6',
    question: 'Where is the clinic located in Greater Noida?',
    answer: 'The clinic is located at Shop No 32, 1st Floor, Rise Shoplex, Tech Zone IV, Sector 1, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201318. Convenient parking and elevator access are available.',
    category: 'Clinic & Booking'
  },
  {
    id: 'faq-7',
    question: 'Can I take homeopathic medicines alongside my existing allopathic medicines?',
    answer: 'Yes, in most cases homeopathic remedies can be safely taken alongside conventional allopathic prescriptions. We advise keeping a 20–30 minute gap between medicines. You should never stop any critical prescribed medications (such as blood pressure or insulin) without consulting your prescribing physician.',
    category: 'Homeopathy'
  },
  {
    id: 'faq-8',
    question: 'Are there any dietary restrictions with homeopathic medicine?',
    answer: 'Generally, it is advised to avoid consuming strong aromatic substances like raw onion, raw garlic, strong coffee, or mint immediately (15–20 minutes) before or after taking your homeopathic doses to ensure optimal absorption.',
    category: 'Homeopathy'
  }
];
