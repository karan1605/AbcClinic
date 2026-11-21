import React from 'react';
import { ArrowRight, Clock, GraduationCap, Stethoscope } from 'lucide-react';
import { CLINIC_INFO, DOCTORS_LIST, PageId } from '../data/clinicData';
import { PlaceholderVisual } from '../components/PlaceholderVisual';

interface DoctorsPageProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onNavigate }) => {
  const leadDoctor = DOCTORS_LIST[0];
  const teamDoctors = DOCTORS_LIST.slice(1);

  return (
    <div>
      {/* Page Hero */}
      <section className="navy-gradient text-white py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-white/75 mb-3">
              Home <span aria-hidden="true">/</span> Doctors &amp; Medical Team
            </p>
            <h1 className="heading-hero text-white">
              Our Doctors &amp; Clinical Specialists
            </h1>
            <p className="mt-5 text-[16px] leading-[27px] text-white/80">
              Meet the medical professionals serving patients at ABC Clinic in{' '}
              {CLINIC_INFO.locationShort}. Replace each placeholder card with verified physician
              photographs, medical council credentials, and consultation schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Specialist */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="clinic-card p-6 lg:p-10 reveal-item">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <PlaceholderVisual
                  token="[DOCTOR_IMAGE]"
                  variant="doctor"
                  subtitle="Replace with high-resolution studio portrait of primary doctor [DOCTOR_NAME]."
                  aspectClass="aspect-[4/4]"
                />
              </div>

              <div className="lg:col-span-7 space-y-5">
                <div>
                  <p className="text-[14px] font-semibold text-[#025EC1]">
                    {leadDoctor.role}
                  </p>
                  <h2 className="mt-1.5 heading-section text-[#213245]">
                    {leadDoctor.name}
                  </h2>
                </div>

                <p className="text-[16px] leading-[27px] text-[#59616B]">{leadDoctor.bio}</p>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-[10px] bg-[#F5F9FE] p-4 border border-[#025EC1]/10">
                    <GraduationCap className="h-5 w-5 text-[#025EC1] mb-2" />
                    <p className="text-[12px] font-semibold text-[#59616B]">Qualification</p>
                    <p className="mt-0.5 text-[14px] font-bold text-[#213245]">
                      {leadDoctor.qualification}
                    </p>
                  </div>
                  <div className="rounded-[10px] bg-[#F5F9FE] p-4 border border-[#025EC1]/10">
                    <Stethoscope className="h-5 w-5 text-[#025EC1] mb-2" />
                    <p className="text-[12px] font-semibold text-[#59616B]">Experience</p>
                    <p className="mt-0.5 text-[14px] font-bold text-[#213245]">
                      {leadDoctor.experience}
                    </p>
                  </div>
                  <div className="rounded-[10px] bg-[#F5F9FE] p-4 border border-[#025EC1]/10">
                    <Clock className="h-5 w-5 text-[#025EC1] mb-2" />
                    <p className="text-[12px] font-semibold text-[#59616B]">OPD Hours</p>
                    <p className="mt-0.5 text-[14px] font-bold text-[#213245]">
                      {leadDoctor.availability}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment')}
                    className="primary-btn"
                  >
                    <span className="btn-icon-disc" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Book Consultation</span>
                  </button>
                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="primary-btn white border border-[#025EC1]/20"
                  >
                    <span className="btn-icon-disc" aria-hidden="true">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Associate Team Grid */}
      <section className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="max-w-2xl mb-12 reveal-item">
            <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
              Extended Clinical Team
            </p>
            <h2 className="heading-section text-[#213245]">
              Associate &amp; Visiting Specialists
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {teamDoctors.map((doctor, index) => (
              <article
                key={doctor.id}
                className={`clinic-card p-6 flex flex-col sm:flex-row gap-6 reveal-item reveal-delay-${
                  index + 1
                }`}
              >
                <div className="sm:w-48 shrink-0">
                  <PlaceholderVisual
                    token="[DOCTOR_IMAGE]"
                    variant="doctor"
                    subtitle="Specialist portrait placeholder"
                    aspectClass="aspect-[4/4]"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[13px] font-semibold text-[#025EC1]">{doctor.role}</p>
                    <h3 className="mt-1 heading-sub text-[#213245]">{doctor.name}</h3>
                    <p className="mt-2.5 text-[14px] leading-[22px] text-[#59616B]">
                      {doctor.bio}
                    </p>
                    <div className="mt-3 space-y-1 text-[13px] text-[#59616B]">
                      <p>
                        <strong className="text-[#213245]">Qualification:</strong>{' '}
                        {doctor.qualification}
                      </p>
                      <p>
                        <strong className="text-[#213245]">Experience:</strong> {doctor.experience}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => onNavigate('appointment')}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#025EC1] hover:text-[#013874] transition-colors cursor-pointer"
                    >
                      <span>Book Appointment</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
