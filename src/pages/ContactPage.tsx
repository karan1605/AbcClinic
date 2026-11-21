import React from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO, PageId } from '../data/clinicData';
import { ContactForm } from '../components/Forms';

interface ContactPageProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Page Hero */}
      <section className="navy-gradient text-white py-16 lg:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-[14px] font-semibold text-white/75 mb-3">
              Home <span aria-hidden="true">/</span> Contact Us
            </p>
            <h1 className="heading-hero text-white">
              Contact ABC Clinic — Dhanbad, Jharkhand
            </h1>
            <p className="mt-5 text-[16px] leading-[27px] text-white/80">
              Reach out to our front desk for clinic directions, consultation hours, or patient
              support inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards + Form */}
      <section className="section-pad bg-white">
        <div className="site-container">
          {/* 4 Quick Info Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-14">
            <div className="clinic-card p-6 reveal-item">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F9FE] text-[#025EC1] mb-4">
                <MapPin className="h-5 w-5" />
              </span>
              <h2 className="text-[17px] font-bold text-[#213245]">Clinic Location</h2>
              <p className="mt-2 text-[14px] leading-[22px] text-[#59616B]">
                {CLINIC_INFO.fullAddress}
              </p>
            </div>

            <div className="clinic-card p-6 reveal-item reveal-delay-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F9FE] text-[#025EC1] mb-4">
                <Phone className="h-5 w-5" />
              </span>
              <h2 className="text-[17px] font-bold text-[#213245]">Phone Helpline</h2>
              <a
                href={CLINIC_INFO.phoneHref}
                className="mt-2 block text-[15px] font-semibold text-[#025EC1] hover:underline"
              >
                {CLINIC_INFO.phone}
              </a>
              <p className="mt-1 text-[13px] text-[#59616B]">Click to call directly</p>
            </div>

            <div className="clinic-card p-6 reveal-item reveal-delay-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F9FE] text-[#025EC1] mb-4">
                <Mail className="h-5 w-5" />
              </span>
              <h2 className="text-[17px] font-bold text-[#213245]">Email Desk</h2>
              <a
                href={CLINIC_INFO.emailHref}
                className="mt-2 block text-[15px] font-semibold text-[#025EC1] hover:underline"
              >
                {CLINIC_INFO.email}
              </a>
              <p className="mt-1 text-[13px] text-[#59616B]">General &amp; patient queries</p>
            </div>

            <div className="clinic-card p-6 reveal-item reveal-delay-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F9FE] text-[#025EC1] mb-4">
                <Clock className="h-5 w-5" />
              </span>
              <h2 className="text-[17px] font-bold text-[#213245]">Operating Hours</h2>
              <p className="mt-2 text-[15px] font-semibold text-[#213245]">{CLINIC_INFO.hours}</p>
              <p className="mt-1 text-[13px] text-[#59616B]">Dhanbad, Jharkhand</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7 reveal-item">
              <div className="clinic-card p-7 lg:p-10">
                <h2 className="text-[26px] font-bold text-[#213245] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[15px] text-[#59616B] mb-6">
                  Complete the fields below for clinic inquiries. For specific date/time booking,
                  visit the{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment')}
                    className="font-semibold text-[#025EC1] underline underline-offset-4 cursor-pointer"
                  >
                    Appointment Page
                  </button>
                  .
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Map Embed Placeholder + WhatsApp Card */}
            <div className="lg:col-span-5 space-y-6 reveal-item reveal-delay-2">
              <div className="rounded-[12px] bg-[#F5F9FE] border border-[#025EC1]/15 p-7 space-y-4">
                <p className="text-[13px] font-semibold text-[#025EC1]">
                  Location Map Slot
                </p>
                <h3 className="heading-sub text-[#213245]">
                  ABC Clinic · Dhanbad, Jharkhand
                </h3>
                <div className="rounded-[10px] bg-white border border-dashed border-[#025EC1]/30 p-8 text-center space-y-2.5">
                  <MapPin className="h-8 w-8 text-[#025EC1] mx-auto" />
                  <p className="text-[14px] font-bold text-[#213245]">[MAP_EMBED_PLACEHOLDER]</p>
                  <p className="text-[13px] text-[#59616B]">
                    Replace with verified Google Maps iframe embed once [FULL_ADDRESS] in Dhanbad,
                    Jharkhand is finalized.
                  </p>
                </div>
                <p className="text-[14px] text-[#59616B]">
                  <strong className="text-[#213245]">Address:</strong> {CLINIC_INFO.fullAddress}
                </p>
              </div>

              <div className="navy-gradient rounded-[12px] p-7 text-white space-y-4">
                <h3 className="text-[20px] font-semibold text-white">
                  Direct WhatsApp Support
                </h3>
                <p className="text-[14px] leading-[23px] text-white/75">
                  Configure your verified clinic WhatsApp number in the project config to enable
                  one-tap patient messaging.
                </p>
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn white"
                >
                  <span className="btn-icon-disc" aria-hidden="true">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
