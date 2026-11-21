import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Video } from 'lucide-react';
import { CLINIC_INFO, PageId, SERVICES_LIST, ServiceItem } from '../data/clinicData';
import { PlaceholderVisual } from '../components/PlaceholderVisual';
import { ServiceIcon } from '../components/ServiceIcon';

interface ServicesPageProps {
  initialCategory?: string;
  onNavigate: (page: PageId, hash?: string) => void;
}

const CATEGORIES = ['All', 'Consultations', 'Diagnostics', 'Specialized Care', 'Telemedicine'] as const;

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(SERVICES_LIST[0].id);

  useEffect(() => {
    if (
      initialCategory &&
      CATEGORIES.includes(initialCategory as (typeof CATEGORIES)[number])
    ) {
      setSelectedCategory(initialCategory);
    } else {
      setSelectedCategory('All');
    }
  }, [initialCategory]);

  const filteredServices: ServiceItem[] =
    selectedCategory === 'All'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Page Hero */}
      <section className="navy-gradient text-white py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-white/75 mb-3">
              Home <span aria-hidden="true">/</span> Services &amp; Treatments
            </p>
            <h1 className="heading-hero text-white">
              Clinical Services — [SERVICES]
            </h1>
            <p className="mt-5 text-[16px] leading-[27px] text-white/80">
              Explore structured medical care pathways offered at ABC Clinic in{' '}
              {CLINIC_INFO.locationShort}. Customize each category with finalized clinic
              departments, consultation protocols, and diagnostic offerings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Service Cards */}
      <section className="section-pad bg-white">
        <div className="site-container">
          {/* Interactive Category Filter Bar */}
          <div
            className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#213245]/10 pb-6"
            role="tablist"
            aria-label="Filter clinical services by category"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-[50px] px-5 py-2.5 text-[14px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-[#025EC1] text-white shadow-sm'
                    : 'bg-[#F5F9FE] text-[#213245] hover:bg-[#025EC1]/10 hover:text-[#025EC1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredServices.map((service) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <article key={service.id} className="clinic-card p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-5">
                      <div
                        className="flex h-13 w-13 items-center justify-center rounded-full text-[#025EC1] shrink-0"
                        style={{ backgroundColor: 'rgba(2, 94, 193, 0.08)' }}
                      >
                        <ServiceIcon name={service.iconName} className="h-6 w-6" />
                      </div>
                      <span className="text-[13px] font-semibold text-[#59616B] tabular-nums">
                        {service.code} <span aria-hidden="true">·</span> {service.category}
                      </span>
                    </div>

                    <h2 className="heading-sub text-[#213245]">{service.title}</h2>
                    <p className="mt-3 text-[15px] leading-[25px] text-[#59616B]">
                      {service.summary}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[14px] text-[#213245]"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#025EC1] shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {isExpanded && (
                      <div className="mt-5 rounded-[10px] bg-[#F5F9FE] p-4 text-[14px] leading-[23px] text-[#59616B] border border-[#025EC1]/10">
                        {service.details}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#213245]/8 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedServiceId(isExpanded ? null : service.id)
                      }
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#213245] hover:text-[#025EC1] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Care Protocol'}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        onNavigate(
                          'appointment',
                          service.category === 'Telemedicine' ? 'telemedicine' : undefined
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#025EC1] hover:text-[#013874] transition-colors cursor-pointer"
                    >
                      <span>Book This Service</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient Care Pathway Section */}
      <section className="section-pad bg-[#F5F9FE]">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6 reveal-item">
              <p className="text-[14px] font-semibold text-[#025EC1]">
                Patient Journey
              </p>
              <h2 className="heading-section text-[#213245]">
                How Care Works at ABC Clinic
              </h2>
              <ol className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Schedule Consultation',
                    text: 'Book an in-clinic or telemedicine slot online or by calling [PHONE] during [HOURS].',
                  },
                  {
                    step: '02',
                    title: 'Clinical Evaluation',
                    text: 'Meet [DOCTOR_NAME] for a thorough medical review and discussion of relevant [SERVICES].',
                  },
                  {
                    step: '03',
                    title: 'Clear Follow-Up Plan',
                    text: 'Receive structured guidance, diagnostic coordination if required, and follow-up scheduling.',
                  },
                ].map((stage) => (
                  <li
                    key={stage.step}
                    className="flex items-start gap-4 rounded-[12px] bg-white p-5 border border-[#213245]/8"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#025EC1] text-[14px] font-bold text-white shrink-0 tabular-nums">
                      {stage.step}
                    </span>
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#213245]">{stage.title}</h3>
                      <p className="mt-1 text-[14px] leading-[22px] text-[#59616B]">{stage.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-6 space-y-5 reveal-item reveal-delay-2">
              <PlaceholderVisual
                token="[MEDICAL_IMAGE]"
                variant="medical"
                subtitle="Replace with clinical care pathway or specialist consultation visual."
                aspectClass="aspect-[4/3]"
              />
              <div className="flex flex-wrap gap-3">
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
                  className="primary-btn white border border-[#025EC1]/20"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <Video className="h-4 w-4" />
                  </span>
                  <span>Telemedicine</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
