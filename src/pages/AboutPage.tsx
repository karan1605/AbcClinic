import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import {
  CLINIC_INFO,
  PageId,
  STATISTICS_ITEMS,
  WHY_CHOOSE_ITEMS,
} from '../data/clinicData';
import { PlaceholderVisual } from '../components/PlaceholderVisual';
import { ServiceIcon } from '../components/ServiceIcon';

interface AboutPageProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="navy-gradient text-white py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-white/75 mb-3">
              Home <span aria-hidden="true">/</span> About ABC Clinic
            </p>
            <h1 className="heading-hero text-white">
              About ABC Clinic in Dhanbad, Jharkhand
            </h1>
            <p className="mt-5 text-[16px] leading-[27px] text-white/80">
              Dedicated to accessible, transparent, and patient-focused healthcare delivery for
              [SERVICES]. Replace placeholder paragraphs with verified institutional history and
              accreditation details.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Introduction Split */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 reveal-item">
              <PlaceholderVisual
                token="[CLINIC_IMAGE]"
                variant="clinic"
                subtitle="Replace with ABC Clinic reception, consultation area, or exterior building photograph."
                aspectClass="aspect-[4/3]"
              />
            </div>

            <div className="lg:col-span-6 space-y-5 reveal-item reveal-delay-2">
              <p className="text-[14px] font-semibold text-[#025EC1]">
                Our Care Philosophy
              </p>
              <h2 className="heading-section text-[#213245]">
                Structured Clinical Practice Centered Around Every Patient
              </h2>
              <p className="text-[16px] leading-[27px] text-[#59616B]">
                ABC Clinic serves individuals and families across {CLINIC_INFO.locationShort} with
                organized appointment scheduling, respectful medical consultation, and clear
                post-visit care summaries. Our clinical team is led by {CLINIC_INFO.primaryDoctor} (
                {CLINIC_INFO.primaryDoctorQualification}).
              </p>
              <p className="text-[16px] leading-[27px] text-[#59616B]">
                [CLINIC_HISTORY_PLACEHOLDER] — Update this narrative block with ABC Clinic&apos;s
                establishment background, clinical standards, and community healthcare initiatives
                in Dhanbad.
              </p>

              <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                <div className="rounded-[12px] bg-[#F5F9FE] p-5 border border-[#025EC1]/12">
                  <h3 className="heading-sub text-[#213245]">Our Mission</h3>
                  <p className="mt-2 text-[14px] leading-[22px] text-[#59616B]">
                    Deliver dependable, patient-friendly care for [SERVICES] with clear
                    communication and organized clinical pathways.
                  </p>
                </div>
                <div className="rounded-[12px] bg-[#F5F9FE] p-5 border border-[#025EC1]/12">
                  <h3 className="heading-sub text-[#213245]">Our Vision</h3>
                  <p className="mt-2 text-[14px] leading-[22px] text-[#59616B]">
                    Serve as a trusted neighborhood healthcare destination in Dhanbad, Jharkhand
                    combining clinical thoroughness with accessibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Ribbon */}
      <section className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="max-w-2xl mb-10 reveal-item">
            <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
              Clinic Overview Metrics
            </p>
            <h2 className="heading-section text-[#213245]">
              Key Figures (Replace With Verified Data)
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATISTICS_ITEMS.map((stat, idx) => (
              <div
                key={stat.id}
                className={`clinic-card p-7 reveal-item reveal-delay-${idx + 1}`}
              >
                <p className="text-[24px] font-bold text-[#025EC1] tabular-nums">{stat.value}</p>
                <h3 className="mt-2 text-[17px] font-semibold text-[#213245]">{stat.label}</h3>
                <p className="mt-1.5 text-[13px] text-[#59616B]">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="section-pad bg-white">
        <div className="site-container">
          <div className="max-w-2xl mb-12 reveal-item">
            <p className="text-[14px] font-semibold text-[#025EC1] mb-2">
              Why Choose ABC Clinic
            </p>
            <h2 className="heading-section text-[#213245]">
              Clinical Pillars Designed for Patient Confidence
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`clinic-card p-7 reveal-item reveal-delay-${idx + 1}`}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-full text-[#025EC1]"
                  style={{ backgroundColor: 'rgba(2, 94, 193, 0.08)' }}
                >
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
      </section>

      {/* Clinic Infrastructure Showcase */}
      <section id="infrastructure" className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-5 reveal-item">
              <p className="text-[14px] font-semibold text-[#025EC1]">
                Clinic Infrastructure
              </p>
              <h2 className="heading-section text-[#213245]">
                Clean, Accessible Patient Spaces
              </h2>
              <p className="text-[16px] leading-[26px] text-[#59616B]">
                Replace these slots with actual photographs of ABC Clinic&apos;s reception,
                examination rooms, diagnostic equipment, and patient waiting lounge at{' '}
                {CLINIC_INFO.fullAddress}.
              </p>
              <ul className="space-y-3 text-[15px] text-[#213245]">
                {[
                  'Dedicated private consultation rooms',
                  'Sanitized diagnostic & examination stations',
                  'Comfortable waiting and reception assistance desk',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-[#025EC1] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('appointment')}
                  className="primary-btn"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  <span>Schedule a Clinic Visit</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2 reveal-item reveal-delay-2">
              <PlaceholderVisual
                token="[CLINIC_IMAGE]"
                variant="clinic"
                subtitle="Consultation Room Placeholder"
                aspectClass="aspect-[4/3]"
              />
              <PlaceholderVisual
                token="[MEDICAL_IMAGE]"
                variant="medical"
                subtitle="Diagnostic Equipment Placeholder"
                aspectClass="aspect-[4/3]"
              />
              <div className="sm:col-span-2 rounded-[12px] bg-white p-6 border border-[#213245]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="h-6 w-6 text-[#025EC1] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[16px] font-bold text-[#213245]">
                      Patient Rights &amp; Safety Standards
                    </p>
                    <p className="text-[14px] text-[#59616B]">
                      Confidential medical records, clear pre-visit guidance, and transparent
                      scheduling policies.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="text-[14px] font-semibold text-[#025EC1] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Contact Reception
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
