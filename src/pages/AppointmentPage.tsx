import React from 'react';
import { CalendarCheck, Clock, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { AppointmentForm } from '../components/Forms';

interface AppointmentPageProps {
  initialMode?: 'in-clinic' | 'telemedicine';
}

export const AppointmentPage: React.FC<AppointmentPageProps> = ({
  initialMode = 'in-clinic',
}) => {
  return (
    <div>
      {/* Page Hero */}
      <section className="navy-gradient text-white py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-white/75 mb-3">
              Home <span aria-hidden="true">/</span> Book Appointment
            </p>
            <h1 className="heading-hero text-white">
              Schedule Your Appointment at ABC Clinic
            </h1>
            <p className="mt-5 text-[16px] leading-[27px] text-white/80">
              Request an in-clinic visit in Dhanbad, Jharkhand or choose a telemedicine
              consultation with {CLINIC_INFO.primaryDoctor}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Split */}
      <section className="section-pad bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Appointment Form */}
            <div className="lg:col-span-8 reveal-item">
              <div className="clinic-card p-7 lg:p-10">
                <h2 className="text-[26px] font-bold text-[#213245] mb-2">
                  Patient Appointment Request
                </h2>
                <p className="text-[15px] text-[#59616B] mb-7">
                  Select your consultation mode, preferred date, time slot, and required service
                  below.
                </p>
                <AppointmentForm key={initialMode} initialMode={initialMode} />
              </div>
            </div>

            {/* Sidebar Guidelines */}
            <div className="lg:col-span-4 space-y-6 reveal-item reveal-delay-2">
              <div className="rounded-[12px] bg-[#F5F9FE] p-7 border border-[#025EC1]/12 space-y-5">
                <h3 className="heading-sub text-[#213245]">Clinic Visiting Details</h3>
                <ul className="space-y-4 text-[14px] text-[#59616B]">
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#025EC1] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#213245]">Operating Hours</p>
                      <p>{CLINIC_INFO.hours}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#025EC1] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#213245]">Location</p>
                      <p>{CLINIC_INFO.fullAddress}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#025EC1] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-[#213245]">Booking Helpline</p>
                      <a
                        href={CLINIC_INFO.phoneHref}
                        className="font-semibold text-[#025EC1] hover:underline"
                      >
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-[12px] bg-white p-7 border border-[#213245]/10 space-y-4">
                <div className="flex items-center gap-2.5 text-[#025EC1]">
                  <CalendarCheck className="h-5 w-5" />
                  <h3 className="text-[17px] font-bold text-[#213245]">
                    What to Bring to Your Visit
                  </h3>
                </div>
                <ul className="space-y-2.5 text-[14px] text-[#59616B]">
                  <li>· Previous prescriptions or medication lists</li>
                  <li>· Relevant diagnostic or lab reports</li>
                  <li>· Valid patient identification</li>
                  <li>· Arrive 10–15 minutes prior to your slot</li>
                </ul>
              </div>

              <div className="navy-gradient rounded-[12px] p-6 text-white space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-[#F5F9FE]" />
                  <h3 className="text-[17px] font-semibold text-white">Need Quick Assistance?</h3>
                </div>
                <p className="text-[14px] text-white/75">
                  Message ABC Clinic directly on WhatsApp or call {CLINIC_INFO.phone}.
                </p>
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn white w-full justify-center"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
