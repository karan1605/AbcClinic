export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'doctors'
  | 'contact'
  | 'appointment';

export const CLINIC_INFO = {
  name: 'ABC Clinic',
  city: 'Dhanbad',
  state: 'Jharkhand',
  country: 'India',
  locationShort: 'Dhanbad, Jharkhand',
  fullAddress: '[FULL_ADDRESS], Dhanbad, Jharkhand, India',
  clinicAddressPlaceholder: '[CLINIC_ADDRESS]',
  phone: '[PHONE]',
  phoneHref: 'tel:[PHONE]',
  whatsappNumber: '[WHATSAPP_NUMBER]',
  whatsappHref: 'https://wa.me/[WHATSAPP_NUMBER]?text=Hello%20ABC%20Clinic%2C%20I%20would%20like%20to%20inquire%20about%20an%20appointment.',
  email: '[EMAIL]',
  emailHref: 'mailto:[EMAIL]',
  hours: '[HOURS]',
  logoPlaceholder: '[LOGO_PLACEHOLDER]',
  primaryDoctor: '[DOCTOR_NAME]',
  primaryDoctorQualification: '[DOCTOR_QUALIFICATION]',
  primaryDoctorExperience: '[DOCTOR_EXPERIENCE]',
  social: {
    instagram: '[INSTAGRAM_URL]',
    facebook: '[FACEBOOK_URL]',
    youtube: '[YOUTUBE_URL]',
    linkedin: '[LINKEDIN_URL]',
  },
} as const;

export interface ServiceItem {
  id: string;
  code: string;
  category: 'Consultations' | 'Diagnostics' | 'Specialized Care' | 'Telemedicine';
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  iconName: 'stethoscope' | 'activity' | 'clipboard' | 'heartPulse' | 'shieldCheck' | 'video';
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'outpatient-consultations',
    code: '01',
    category: 'Consultations',
    title: 'General & Specialist Consultations — [SERVICES]',
    summary:
      'Structured outpatient consultations at ABC Clinic in Dhanbad, Jharkhand covering patient evaluation, medical history review, and care planning.',
    details:
      'Replace this section with finalized outpatient consultation descriptions for [SERVICES]. Outline appointment workflow, initial screening steps, and follow-up scheduling protocols.',
    highlights: [
      'Initial clinical assessment for [SERVICES]',
      'Personalized care roadmap and follow-up schedule',
      'Coordinated medical records review',
    ],
    iconName: 'stethoscope',
  },
  {
    id: 'diagnostic-evaluation',
    code: '02',
    category: 'Diagnostics',
    title: 'Diagnostic Assessment & Screening — [SERVICES]',
    summary:
      'Systematic clinical evaluation and diagnostic coordination designed to support accurate medical decision-making.',
    details:
      'Replace this placeholder with approved diagnostic offerings and laboratory or imaging coordination details available under [SERVICES] at ABC Clinic.',
    highlights: [
      'Comprehensive evaluation protocols for [SERVICES]',
      'Clear report review with [DOCTOR_NAME]',
      'Timely follow-up guidance',
    ],
    iconName: 'activity',
  },
  {
    id: 'preventive-care',
    code: '03',
    category: 'Specialized Care',
    title: 'Preventive Healthcare & Monitoring — [SERVICES]',
    summary:
      'Routine checkups, risk factor assessment, and long-term preventive guidance tailored for individuals and families in Dhanbad.',
    details:
      'Update with clinic-approved preventive screening packages, periodic health review milestones, and lifestyle counseling programs under [SERVICES].',
    highlights: [
      'Periodic wellness evaluations for [SERVICES]',
      'Long-term condition monitoring schedules',
      'Patient education and preventive guidance',
    ],
    iconName: 'shieldCheck',
  },
  {
    id: 'treatment-procedures',
    code: '04',
    category: 'Specialized Care',
    title: 'Clinical Procedures & Care — [SERVICES]',
    summary:
      'Evidence-aligned outpatient care pathways delivered in a clean, organized clinical environment with transparent patient communication.',
    details:
      'Insert verified clinical procedure details, preparation guidelines, and post-visit care instructions for [SERVICES] once finalized by ABC Clinic.',
    highlights: [
      'Standardized clinical protocols for [SERVICES]',
      'Pre-visit preparation and recovery documentation',
      'Dedicated patient support desk',
    ],
    iconName: 'heartPulse',
  },
  {
    id: 'rehabilitation-followup',
    code: '05',
    category: 'Consultations',
    title: 'Follow-Up & Recovery Support — [SERVICES]',
    summary:
      'Structured post-consultation follow-up appointments ensuring continuity of care, progress tracking, and ongoing medical guidance.',
    details:
      'Customize with ABC Clinic recovery support schedules, rehabilitation coordination, and medication review workflows for [SERVICES].',
    highlights: [
      'Scheduled milestone check-ins for [SERVICES]',
      'Continuity of care with clinic specialists',
      'Clear discharge and home-care summaries',
    ],
    iconName: 'clipboard',
  },
  {
    id: 'telemedicine-care',
    code: '06',
    category: 'Telemedicine',
    title: 'Telemedicine & Remote Consultation — [SERVICES]',
    summary:
      'Convenient online consultation scheduling for follow-up discussions, report reviews, and remote medical guidance across Jharkhand.',
    details:
      'Configure your clinic telemedicine platform link, remote appointment hours ([HOURS]), and digital report-sharing instructions for [SERVICES].',
    highlights: [
      'Scheduled video or phone follow-ups during [HOURS]',
      'Remote review of clinical reports and progress',
      'Accessible for patients in and around Dhanbad',
    ],
    iconName: 'video',
  },
];

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  department: string;
  availability: string;
  bio: string;
  isLead?: boolean;
}

export const DOCTORS_LIST: DoctorProfile[] = [
  {
    id: 'lead-doctor',
    name: '[DOCTOR_NAME]',
    role: 'Primary Consultant & Lead Specialist',
    qualification: '[DOCTOR_QUALIFICATION]',
    experience: '[DOCTOR_EXPERIENCE]',
    department: '[SERVICES]',
    availability: '[HOURS]',
    bio: 'Lead medical specialist at ABC Clinic, Dhanbad, Jharkhand. Replace this placeholder biography with verified clinical training, areas of medical focus, and professional memberships.',
    isLead: true,
  },
  {
    id: 'associate-doctor-1',
    name: '[DOCTOR_NAME] — Specialist 02',
    role: 'Associate Consultant',
    qualification: '[DOCTOR_QUALIFICATION]',
    experience: '[DOCTOR_EXPERIENCE]',
    department: '[SERVICES]',
    availability: '[HOURS]',
    bio: 'Placeholder profile for an associate specialist at ABC Clinic. Update with verified doctor name, medical credentials, and consultation timings.',
  },
  {
    id: 'associate-doctor-2',
    name: '[DOCTOR_NAME] — Specialist 03',
    role: 'Clinical Care Specialist',
    qualification: '[DOCTOR_QUALIFICATION]',
    experience: '[DOCTOR_EXPERIENCE]',
    department: '[SERVICES]',
    availability: '[HOURS]',
    bio: 'Placeholder profile for additional clinical staff or visiting specialists at ABC Clinic in Dhanbad, Jharkhand. Remove or duplicate cards as needed.',
  },
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'award' | 'building' | 'users' | 'clock';
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'structured-care',
    title: 'Structured Care Pathways',
    description:
      'Every consultation follows a clear clinical evaluation, transparent discussion of options, and scheduled follow-up for [SERVICES].',
    iconName: 'award',
  },
  {
    id: 'modern-environment',
    title: 'Organized Clinical Facility',
    description:
      'Designed around patient comfort, hygiene standards, and accessible consultation rooms in Dhanbad, Jharkhand.',
    iconName: 'building',
  },
  {
    id: 'dedicated-specialists',
    title: 'Dedicated Medical Team',
    description:
      'Led by [DOCTOR_NAME] ([DOCTOR_QUALIFICATION]) with attentive nursing and front-desk coordination.',
    iconName: 'users',
  },
  {
    id: 'accessible-scheduling',
    title: 'Flexible Appointment Access',
    description:
      'Streamlined in-clinic booking and telemedicine inquiry channels available during [HOURS] via [PHONE].',
    iconName: 'clock',
  },
];

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  note: string;
}

export const STATISTICS_ITEMS: StatisticItem[] = [
  {
    id: 'stat-1',
    value: '[STATISTIC_VALUE]',
    label: 'Clinical Consultations',
    note: 'Replace with verified clinic metric',
  },
  {
    id: 'stat-2',
    value: '[STATISTIC_VALUE]',
    label: 'Years of Medical Practice',
    note: 'Replace with verified practice timeline',
  },
  {
    id: 'stat-3',
    value: '[STATISTIC_VALUE]',
    label: 'Specialized Services Offered',
    note: 'Replace with finalized count of [SERVICES]',
  },
  {
    id: 'stat-4',
    value: '[STATISTIC_VALUE]',
    label: 'Dedicated Care Professionals',
    note: 'Replace with verified clinical team size',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  patientName: string;
  serviceTag: string;
  location: string;
  date: string;
}

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      '[TESTIMONIAL_PLACEHOLDER] — Insert a verified patient experience statement regarding consultation clarity, clinic environment, and follow-up support at ABC Clinic.',
    patientName: '[PATIENT_NAME_01]',
    serviceTag: '[SERVICES]',
    location: 'Dhanbad, Jharkhand',
    date: '[DATE_PLACEHOLDER]',
  },
  {
    id: 'testimonial-2',
    quote:
      '[TESTIMONIAL_PLACEHOLDER] — Insert a verified patient feedback excerpt detailing appointment scheduling ease and attentive clinical care from [DOCTOR_NAME].',
    patientName: '[PATIENT_NAME_02]',
    serviceTag: '[SERVICES]',
    location: 'Dhanbad, Jharkhand',
    date: '[DATE_PLACEHOLDER]',
  },
  {
    id: 'testimonial-3',
    quote:
      '[TESTIMONIAL_PLACEHOLDER] — Insert a verified patient review covering diagnostic guidance, clear communication, and timely recovery follow-ups at ABC Clinic.',
    patientName: '[PATIENT_NAME_03]',
    serviceTag: '[SERVICES]',
    location: 'Jharkhand',
    date: '[DATE_PLACEHOLDER]',
  },
  {
    id: 'testimonial-4',
    quote:
      '[TESTIMONIAL_PLACEHOLDER] — Insert a verified telemedicine or outpatient care review approved for publication on the ABC Clinic website.',
    patientName: '[PATIENT_NAME_04]',
    serviceTag: 'Telemedicine — [SERVICES]',
    location: 'Dhanbad, Jharkhand',
    date: '[DATE_PLACEHOLDER]',
  },
];

export interface ClinicUpdateItem {
  id: string;
  handle: '@abcclinic_dhanbad';
  date: '[UPDATE_DATE]';
  title: string;
  excerpt: string;
  imageType: 'clinic' | 'medical';
  imageLabel: '[CLINIC_IMAGE]' | '[MEDICAL_IMAGE]';
  category: string;
}

export const CLINIC_UPDATES: ClinicUpdateItem[] = [
  {
    id: 'update-1',
    handle: '@abcclinic_dhanbad',
    date: '[UPDATE_DATE]',
    title: 'Preparing for Your First Visit at ABC Clinic',
    excerpt:
      'Placeholder health update: Learn what previous prescriptions, diagnostic reports, and questions to bring to your consultation for [SERVICES].',
    imageType: 'clinic',
    imageLabel: '[CLINIC_IMAGE]',
    category: 'Patient Guide',
  },
  {
    id: 'update-2',
    handle: '@abcclinic_dhanbad',
    date: '[UPDATE_DATE]',
    title: 'Preventive Care Checklists & Seasonal Awareness',
    excerpt:
      'Placeholder medical resource: Replace with clinic-authored patient education articles reviewed by [DOCTOR_NAME] for the Dhanbad community.',
    imageType: 'medical',
    imageLabel: '[MEDICAL_IMAGE]',
    category: 'Health Education',
  },
  {
    id: 'update-3',
    handle: '@abcclinic_dhanbad',
    date: '[UPDATE_DATE]',
    title: 'Telemedicine Follow-Up Scheduling Guidelines',
    excerpt:
      'Placeholder clinic announcement: Step-by-step instructions on requesting remote consultations and follow-up reviews during [HOURS].',
    imageType: 'clinic',
    imageLabel: '[CLINIC_IMAGE]',
    category: 'Clinic Updates',
  },
];
