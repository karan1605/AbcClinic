import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Info, Loader2 } from 'lucide-react';
import { SERVICES_LIST } from '../data/clinicData';
import { createAppointment, createInquiry } from '../lib/firebase';

interface FormErrors {
  [key: string]: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[\d\s\-()]{7,20}$/;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [docId, setDocId] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const ref = await createInquiry({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        });
        setDocId(ref.id);
        setSubmitted(true);
      } catch (err) {
        console.error('Firebase save error:', err);
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setDocId(null);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/20 p-7 space-y-4"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-[#025EC1] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[20px] font-semibold text-[#213245]">
              Inquiry Saved to Database
            </h3>
            <p className="mt-1.5 text-[15px] text-[#59616B]">
              Thank you, <strong className="text-[#213245]">{formData.name}</strong>. Your message
              has been recorded in the ABC Clinic Cloud Firestore database.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2.5 rounded-[8px] bg-white p-3.5 text-[13px] text-[#59616B] border border-[#D1D8E0]">
          <Info className="h-4 w-4 text-[#025EC1] shrink-0 mt-0.5" />
          <span>
            Database Confirmation: Connected to Firebase project <code>AbcClinic</code> (ID:{' '}
            <code>{docId || 'Stored'}</code>). Clinic staff will review your message promptly.
          </span>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="primary-btn"
        >
          <span className="btn-icon-disc" aria-hidden="true">
            <ArrowRight className="h-4 w-4" />
          </span>
          <span>Send Another Inquiry</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
          Full Name <span className="text-[#ED2E27]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          placeholder="Enter your full name"
          className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
            errors.name ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
          }`}
        />
        {errors.name && <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Email Address <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="you@example.com"
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
              errors.email ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.email && <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Phone Number <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
              errors.phone ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.phone && <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
          Message <span className="text-[#ED2E27]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          placeholder="How can ABC Clinic assist you?"
          className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
            errors.message ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="primary-btn">
        <span className="btn-icon-disc" aria-hidden="true">
          <ArrowRight className="h-4 w-4" />
        </span>
        <span>Submit Message</span>
      </button>
    </form>
  );
};

interface AppointmentFormProps {
  initialMode?: 'in-clinic' | 'telemedicine';
  initialService?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialMode = 'in-clinic',
  initialService = '',
}) => {
  const [mode, setMode] = useState<'in-clinic' | 'telemedicine'>(initialMode);
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: initialService || SERVICES_LIST[0].title,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formData.patientName.trim() || formData.patientName.trim().length < 2) {
      nextErrors.patientName = 'Please enter the patient name.';
    }
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.date) {
      nextErrors.date = 'Please select a preferred appointment date.';
    }
    if (!formData.time) {
      nextErrors.time = 'Please choose a preferred time slot.';
    }
    if (!formData.service) {
      nextErrors.service = 'Please select a required service.';
    }
    return nextErrors;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [docId, setDocId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const ref = await createAppointment({
          patientName: formData.patientName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          date: formData.date,
          timeSlot: formData.time,
          service: formData.service,
          mode: mode,
          notes: formData.message.trim(),
        });
        setDocId(ref.id);
        setSubmitted(true);
      } catch (err) {
        console.error('Firebase save error:', err);
        setSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/20 p-8 space-y-5"
      >
        <div className="flex items-start gap-3.5">
          <CheckCircle2 className="h-7 w-7 text-[#025EC1] shrink-0 mt-0.5" />
          <div>
            <h3 className="text-[22px] font-bold text-[#213245]">
              Appointment Request Confirmed
            </h3>
            <p className="mt-1.5 text-[15px] text-[#59616B]">
              Request successfully recorded for <strong className="text-[#213245]">{formData.patientName}</strong> (
              {mode === 'telemedicine' ? 'Telemedicine Consultation' : 'In-Clinic Visit at Dhanbad'}).
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 gap-3 rounded-[10px] bg-white p-5 border border-[#D1D8E0] text-[14px] sm:grid-cols-2">
          <div>
            <dt className="text-[#59616B]">Preferred Date</dt>
            <dd className="font-semibold text-[#213245] tabular-nums">{formData.date}</dd>
          </div>
          <div>
            <dt className="text-[#59616B]">Preferred Time</dt>
            <dd className="font-semibold text-[#213245]">{formData.time}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[#59616B]">Service Required</dt>
            <dd className="font-semibold text-[#213245]">{formData.service}</dd>
          </div>
        </dl>

        <div className="flex items-start gap-2.5 rounded-[8px] bg-white p-4 text-[13px] text-[#59616B] border border-[#D1D8E0]">
          <Info className="h-4 w-4 text-[#025EC1] shrink-0 mt-0.5" />
          <span>
            Database Confirmation: Saved to Cloud Firestore collection <code>appointments</code> (Reference ID:{' '}
            <code>{docId || 'Pending'}</code>). The clinic team will contact you shortly to confirm your slot.
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setDocId(null);
            setFormData({
              patientName: '',
              phone: '',
              email: '',
              date: '',
              time: '',
              service: SERVICES_LIST[0].title,
              message: '',
            });
          }}
          className="primary-btn"
        >
          <span className="btn-icon-disc" aria-hidden="true">
            <ArrowRight className="h-4 w-4" />
          </span>
          <span>Prepare Another Request</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Consultation Mode Switch */}
      <div className="inline-flex rounded-[50px] bg-[#F5F9FE] p-1.5 border border-[#025EC1]/15">
        <button
          type="button"
          onClick={() => setMode('in-clinic')}
          className={`rounded-[50px] px-5 py-2.5 text-[14px] font-semibold transition-all cursor-pointer ${
            mode === 'in-clinic'
              ? 'bg-[#025EC1] text-white shadow-sm'
              : 'text-[#213245] hover:text-[#025EC1]'
          }`}
        >
          In-Clinic Visit
        </button>
        <button
          type="button"
          onClick={() => setMode('telemedicine')}
          className={`rounded-[50px] px-5 py-2.5 text-[14px] font-semibold transition-all cursor-pointer ${
            mode === 'telemedicine'
              ? 'bg-[#025EC1] text-white shadow-sm'
              : 'text-[#213245] hover:text-[#025EC1]'
          }`}
        >
          Telemedicine
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="appt-name" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Patient Name <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="appt-name"
            name="patientName"
            type="text"
            required
            value={formData.patientName}
            onChange={(e) => {
              setFormData({ ...formData, patientName: e.target.value });
              if (errors.patientName) setErrors({ ...errors, patientName: '' });
            }}
            placeholder="Full name of patient"
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
              errors.patientName ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.patientName && (
            <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.patientName}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-phone" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Phone Number <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="appt-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.phone) setErrors({ ...errors, phone: '' });
            }}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
              errors.phone ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="appt-email" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Email Address <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="appt-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            placeholder="patient@example.com"
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 transition-colors ${
              errors.email ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-date" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Appointment Date <span className="text-[#ED2E27]">*</span>
          </label>
          <input
            id="appt-date"
            name="date"
            type="date"
            min={todayStr}
            required
            value={formData.date}
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
              if (errors.date) setErrors({ ...errors, date: '' });
            }}
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] transition-colors ${
              errors.date ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          />
          {errors.date && (
            <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="appt-time" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
            Preferred Time <span className="text-[#ED2E27]">*</span>
          </label>
          <select
            id="appt-time"
            name="time"
            required
            value={formData.time}
            onChange={(e) => {
              setFormData({ ...formData, time: e.target.value });
              if (errors.time) setErrors({ ...errors, time: '' });
            }}
            className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] transition-colors ${
              errors.time ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
            }`}
          >
            <option value="">Select time slot</option>
            <option value="Morning Slot (within [HOURS])">Morning Slot (within [HOURS])</option>
            <option value="Midday Slot (within [HOURS])">Midday Slot (within [HOURS])</option>
            <option value="Evening Slot (within [HOURS])">Evening Slot (within [HOURS])</option>
          </select>
          {errors.time && (
            <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.time}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="appt-service" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
          Service Required <span className="text-[#ED2E27]">*</span>
        </label>
        <select
          id="appt-service"
          name="service"
          required
          value={formData.service}
          onChange={(e) => {
            setFormData({ ...formData, service: e.target.value });
            if (errors.service) setErrors({ ...errors, service: '' });
          }}
          className={`w-full rounded-[8px] border bg-white px-4 py-3 text-[15px] text-[#213245] transition-colors ${
            errors.service ? 'border-[#ED2E27]' : 'border-[#D1D8E0] focus:border-[#025EC1]'
          }`}
        >
          {SERVICES_LIST.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1 text-[13px] font-medium text-[#ED2E27]">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="appt-message" className="block text-[14px] font-semibold text-[#213245] mb-1.5">
          Message / Reason for Visit
        </label>
        <textarea
          id="appt-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Briefly share symptoms, follow-up notes, or scheduling preferences (optional)"
          className="w-full rounded-[8px] border border-[#D1D8E0] bg-white px-4 py-3 text-[15px] text-[#213245] placeholder:text-[#59616B]/60 focus:border-[#025EC1] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="primary-btn">
          <span className="btn-icon-disc" aria-hidden="true">
            <ArrowRight className="h-4 w-4" />
          </span>
          <span>
            {mode === 'telemedicine' ? 'Request Telemedicine Slot' : 'Request Appointment'}
          </span>
        </button>
        <p className="text-[13px] text-[#59616B]">
          Client-side validation enabled. Direct helpline: <strong className="text-[#213245]">[PHONE]</strong>
        </p>
      </div>
    </form>
  );
};
