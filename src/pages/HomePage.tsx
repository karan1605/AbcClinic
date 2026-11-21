import React from 'react';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Video,
} from 'lucide-react';
import {
  CLINIC_INFO,
  CLINIC_UPDATES,
  DOCTORS_LIST,
  PageId,
  SERVICES_LIST,
  STATISTICS_ITEMS,
  WHY_CHOOSE_ITEMS,
} from '../data/clinicData';
import { ContactForm } from '../components/Forms';
import { PlaceholderVisual } from '../components/PlaceholderVisual';
import { ServiceIcon } from '../components/ServiceIcon';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

interface HomePageProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F9FE] via-[#F5F9FE] to-white pt-10 pb-14 lg:pt-16 lg:pb-20">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            {/* Hero Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-4">
                ABC Clinic <span aria-hidden="true">·</span> Dhanbad, Jharkhand
              </p>

              <h1 className="heading-hero text-[#213245]">
                Built on Clinical Clarity
              </h1>

              <p className="mt-5 text-[16px] leading-[27px] text-[#59616B] max-w-xl">
                ABC Clinic in Dhanbad, Jharkhand delivers organized outpatient consultations,
                diagnostic guidance, and ongoing follow-up care for [SERVICES] led by{' '}
                {CLINIC_INFO.primaryDoctor} ({CLINIC_INFO.primaryDoctorQualification}).
              </p>

              {/* Signature Dual Pill CTAs matching DESIGN.md Button 1 & Button 3 */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('appointment')}
                  className="primary-btn"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Book Appointment</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('appointment', 'telemedicine')}
                  className="primary-btn white border border-[#025EC1]/15"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <Video className="h-4 w-4" />
                  </span>
                  <span>Telemedicine</span>
                </button>
              </div>

              {/* Direct Clinic Quick Strip */}
              <div className="mt-9 pt-6 border-t border-[#213245]/10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[14px] text-[#59616B]">
                <a
                  href={CLINIC_INFO.phoneHref}
                  className="inline-flex items-center gap-2 font-semibold text-[#213245] hover:text-[#025EC1] transition-colors"
                >
                  <Phone className="h-4 w-4 text-[#025EC1]" />
                  <span>Helpline: {CLINIC_INFO.phone}</span>
                </a>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#025EC1]" />
                  <span>Hours: {CLINIC_INFO.hours}</span>
                </span>
              </div>
            </div>

            {/* Hero Visual Slot */}
            <div className="lg:col-span-6 flex">
              <div className="w-full flex items-center justify-center rounded-[12px] p-2 bg-white shadow-[0_8px_32px_rgba(33,50,69,0.08)] border border-[#213245]/6">
                <img
                  src="/assets/images/hero/hero-image.jpg"
                  alt="ABC Clinic Hero Visual"
                  className="w-full h-auto max-h-[520px] aspect-[645/504] object-cover object-center rounded-[8px]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Statistics Strip below Hero Split */}
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STATISTICS_ITEMS.map((stat, index) => (
              <div
                key={stat.id}
                className={`reveal-item reveal-delay-${index + 1} rounded-[12px] bg-white p-6 border border-[#213245]/8 shadow-[0_2px_12px_rgba(33,50,69,0.06)]`}
              >
                <p className="text-[22px] font-bold tracking-[-0.02em] text-[#025EC1] tabular-nums">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-[15px] font-semibold text-[#213245]">
                  {stat.label}
                </p>
                <p className="mt-1 text-[13px] text-[#59616B]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT ABC CLINIC SECTION */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Clinic Visual Column */}
            <div className="lg:col-span-6 reveal-item">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <PlaceholderVisual
                    token="[CLINIC_IMAGE]"
                    variant="clinic"
                    subtitle="Replace with primary ABC Clinic exterior or reception photograph in Dhanbad, Jharkhand."
                    aspectClass="aspect-[16/10]"
                  />
                </div>
                <div className="col-span-6">
                  <PlaceholderVisual
                    token="[MEDICAL_IMAGE]"
                    variant="medical"
                    subtitle="Consultation suite or clinical equipment placeholder."
                    aspectClass="aspect-[4/3]"
                  />
                </div>
                <div className="col-span-6 rounded-[12px] bg-[#F5F9FE] p-5 flex flex-col justify-between border border-[#025EC1]/12">
                  <CalendarCheck className="h-8 w-8 text-[#025EC1]" />
                  <div>
                    <p className="text-[18px] font-bold text-[#213245]">
                      Patient-First Scheduling
                    </p>
                    <p className="mt-1 text-[13px] leading-[20px] text-[#59616B]">
                      Open {CLINIC_INFO.hours} at {CLINIC_INFO.locationShort}.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* About Copy Column */}
            <div className="lg:col-span-6 reveal-item reveal-delay-2">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                About ABC Clinic
              </p>
              <h2 className="heading-section text-[#213245]">
                Dedicated Healthcare Center Serving Dhanbad, Jharkhand
              </h2>
              <p className="mt-5 text-[16px] leading-[27px] text-[#59616B]">
                ABC Clinic is designed to provide calm, well-structured clinical consultations and
                reliable medical guidance for patients and families across Dhanbad and surrounding
                communities. Replace this paragraph with ABC Clinic&apos;s verified founding story
                and care philosophy.
              </p>

              <ul className="mt-6 space-y-3.5">
                {[
                  'Clear consultation workflow covering evaluation, diagnosis, and follow-up for [SERVICES]',
                  'Accessible clinic location at [FULL_ADDRESS], Dhanbad, Jharkhand',
                  'Coordinated in-clinic visits and telemedicine guidance during [HOURS]',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[15px] text-[#213245]">
                    <CheckCircle2 className="h-5 w-5 text-[#025EC1] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="primary-btn"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>More About ABC Clinic</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES & TREATMENTS SECTION */}
      <section className="section-pad-bottom bg-white">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12 reveal-item">
            <div className="max-w-2xl">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                Medical Departments &amp; Offerings
              </p>
              <h2 className="heading-section text-[#213245]">
                Services &amp; Clinical Care — [SERVICES]
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="primary-btn self-start sm:self-auto"
            >
              <span className="btn-icon-disc" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>View All Services</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((service, index) => (
              <article
                key={service.id}
                className={`clinic-card p-7 flex flex-col justify-between reveal-item reveal-delay-${
                  (index % 3) + 1
                }`}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className="flex h-13 w-13 items-center justify-center rounded-full text-[#025EC1]"
                      style={{ backgroundColor: 'rgba(2, 94, 193, 0.08)' }}
                    >
                      <ServiceIcon name={service.iconName} className="h-6 w-6" />
                    </div>
                    <span className="text-[13px] font-semibold text-[#59616B] tabular-nums">
                      {service.code} <span aria-hidden="true">/</span> {service.category}
                    </span>
                  </div>

                  <h3 className="heading-sub text-[#213245]">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-[25px] text-[#59616B]">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-[#213245]/8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate('services', service.category)}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#025EC1] hover:text-[#013874] transition-colors cursor-pointer"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment')}
                    className="text-[13px] font-semibold text-[#59616B] hover:text-[#213245] transition-colors cursor-pointer"
                  >
                    Book Slot
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE ABC CLINIC (Reference div.us-card Framework) */}
      <section className="section-pad-bottom bg-white">
        <div className="site-container">
          <div className="rounded-[12px] bg-[#F5F9FE] p-8 lg:p-12 border border-[#025EC1]/10">
            <div className="max-w-2xl mb-10 reveal-item">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                Why Choose ABC Clinic
              </p>
              <h2 className="heading-section text-[#213245]">
                Standards Focused on Clarity, Safety &amp; Continuity
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`us-card reveal-item reveal-delay-${idx + 1}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#025EC1] shadow-[0_2px_10px_rgba(2,94,193,0.1)]">
                    <ServiceIcon name={item.iconName} className="h-5 w-5" />
                  </div>
                  <h3 className="heading-sub text-[#213245]">{item.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-[25px] text-[#59616B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOCTORS / MEDICAL PROFESSIONALS SECTION */}
      <section className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12 reveal-item">
            <div className="max-w-2xl">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                Medical Professionals
              </p>
              <h2 className="heading-section text-[#213245]">
                Meet Our Clinical Team
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('doctors')}
              className="primary-btn self-start sm:self-auto"
            >
              <span className="btn-icon-disc" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>View All Doctors</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DOCTORS_LIST.map((doctor, index) => (
              <article
                key={doctor.id}
                className={`clinic-card overflow-hidden flex flex-col justify-between reveal-item reveal-delay-${
                  index + 1
                }`}
              >
                <div>
                  <div className="p-3 pb-0">
                    <PlaceholderVisual
                      token="[DOCTOR_IMAGE]"
                      variant="doctor"
                      subtitle={`Portrait placeholder for ${doctor.name}`}
                      aspectClass="aspect-[4/3]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[13px] font-semibold text-[#025EC1]">
                      {doctor.role}
                    </p>
                    <h3 className="mt-1.5 heading-sub text-[#213245]">
                      {doctor.name}
                    </h3>
                    <div className="mt-3 space-y-1.5 text-[14px] text-[#59616B]">
                      <p>
                        <strong className="text-[#213245]">Qualification:</strong>{' '}
                        {doctor.qualification}
                      </p>
                      <p>
                        <strong className="text-[#213245]">Experience:</strong>{' '}
                        {doctor.experience}
                      </p>
                      <p>
                        <strong className="text-[#213245]">Services:</strong>{' '}
                        {doctor.department}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment')}
                    className="primary-btn w-full justify-center"
                  >
                    <span className="btn-icon-disc" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Book Appointment</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TELEMEDICINE & REMOTE CARE BANNER */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="navy-gradient rounded-[12px] p-8 lg:p-14 text-white overflow-hidden reveal-item">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <p className="text-[14px] font-semibold text-white/80">
                  Remote Care Access <span aria-hidden="true">·</span> ABC Clinic
                </p>
                <h2 className="heading-section text-white">
                  Schedule an In-Clinic Visit or Telemedicine Consultation
                </h2>
                <p className="text-[16px] leading-[27px] text-white/75 max-w-xl">
                  Whether you are visiting our Dhanbad clinic in person or requesting a remote
                  follow-up discussion during {CLINIC_INFO.hours}, our scheduling desk is ready to
                  assist you.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment', 'telemedicine')}
                    className="primary-btn white"
                  >
                    <span className="btn-icon-disc" aria-hidden="true">
                      <Video className="h-4 w-4" />
                    </span>
                    <span>Telemedicine</span>
                  </button>
                  <a href={CLINIC_INFO.phoneHref} className="primary-btn outline-light">
                    <span className="btn-icon-disc" aria-hidden="true">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <PlaceholderVisual
                  token="[MEDICAL_IMAGE]"
                  variant="medical"
                  subtitle="Replace with telemedicine consultation or clinical care visual."
                  aspectClass="aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL SECTION */}
      <section className="section-pad-bottom bg-white">
        <div className="site-container reveal-item">
          <TestimonialCarousel />
        </div>
      </section>

      {/* 8. CLINIC UPDATES & SOCIAL FEED (Reference article.ti-widget-card Structure) */}
      <section className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-12 reveal-item">
            <div className="max-w-2xl">
              <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                Health Resources &amp; Social Updates
              </p>
              <h2 className="heading-section text-[#213245]">
                Latest From ABC Clinic
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="primary-btn self-start sm:self-auto"
            >
              <span className="btn-icon-disc" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>Connect With Us</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CLINIC_UPDATES.map((item, idx) => (
              <article
                key={item.id}
                className={`clinic-card overflow-hidden flex flex-col justify-between reveal-item reveal-delay-${
                  idx + 1
                }`}
              >
                <div>
                  {/* Widget Header matching ti-widget-card */}
                  <div className="flex items-center justify-between px-5 pt-5 pb-3.5">
                    <div className="flex items-center gap-3">
                      <div className="social-ring-gradient shrink-0">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[12px] font-bold text-[#025EC1]">
                          ABC
                        </div>
                      </div>
                      <div className="leading-tight">
                        <p className="text-[14px] font-bold text-[#213245]">{item.handle}</p>
                        <p className="text-[12px] text-[#59616B]">
                          {item.date} <span aria-hidden="true">·</span> {item.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Media Slot */}
                  <div className="px-5">
                    <PlaceholderVisual
                      token={item.imageLabel}
                      variant={item.imageType}
                      subtitle={`Update media placeholder for ${item.category}`}
                      aspectClass="aspect-[16/10]"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <h3 className="text-[18px] font-semibold leading-[24px] text-[#213245]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-[23px] text-[#59616B]">
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#025EC1] hover:text-[#013874] transition-colors cursor-pointer"
                  >
                    <span>Explore Related Care</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT & QUICK INQUIRY SECTION */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-6 reveal-item">
              <div>
                <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
                  Get In Touch
                </p>
                <h2 className="heading-section text-[#213245]">
                  Contact ABC Clinic in Dhanbad
                </h2>
                <p className="mt-4 text-[16px] leading-[26px] text-[#59616B]">
                  Reach our reception desk for appointment scheduling, clinic directions, or
                  questions regarding [SERVICES].
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-[12px] bg-[#F5F9FE] p-5 border border-[#025EC1]/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#025EC1] shrink-0 shadow-xs">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#213245]">Clinic Address</p>
                    <p className="mt-0.5 text-[15px] text-[#59616B]">{CLINIC_INFO.fullAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] bg-[#F5F9FE] p-5 border border-[#025EC1]/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#025EC1] shrink-0 shadow-xs">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#213245]">Phone Helpline</p>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      className="mt-0.5 block text-[15px] font-semibold text-[#025EC1] hover:underline"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[12px] bg-[#F5F9FE] p-5 border border-[#025EC1]/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#025EC1] shrink-0 shadow-xs">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-semibold text-[#213245]">Email &amp; Hours</p>
                    <a
                      href={CLINIC_INFO.emailHref}
                      className="mt-0.5 block text-[15px] text-[#025EC1] hover:underline"
                    >
                      {CLINIC_INFO.email}
                    </a>
                    <p className="mt-1 text-[14px] text-[#59616B]">Hours: {CLINIC_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex flex-wrap gap-3">
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>WhatsApp Clinic</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="primary-btn white border border-[#025EC1]/20"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Full Contact Page</span>
                </button>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="lg:col-span-7 reveal-item reveal-delay-2">
              <div className="clinic-card p-7 lg:p-10">
                <h3 className="text-[24px] font-bold text-[#213245] mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-[15px] text-[#59616B] mb-6">
                  Fill out the form below for general questions or callback requests.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
