import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  Clock,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { CLINIC_INFO, PageId, SERVICES_LIST } from '../data/clinicData';
import { LogoPlaceholder } from './PlaceholderVisual';

interface FooterProps {
  onNavigate: (page: PageId, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="navy-gradient text-white">
        <div className="site-container pt-16 pb-12 lg:pt-20 lg:pb-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Clinic Brand & Summary */}
            <div className="lg:col-span-4 space-y-5">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-left cursor-pointer"
                aria-label="ABC Clinic Home"
              >
                <LogoPlaceholder light />
              </button>
              <p className="text-[15px] leading-[25px] text-white/75 max-w-sm">
                ABC Clinic in {CLINIC_INFO.locationShort} provides organized outpatient consultations,
                diagnostic coordination, and patient-focused clinical care for [SERVICES].
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={CLINIC_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[50px] bg-white/10 px-4 py-2 text-[14px] font-semibold text-white hover:bg-[#025EC1] transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('appointment')}
                  className="inline-flex items-center gap-2 rounded-[50px] bg-[#025EC1] px-4 py-2 text-[14px] font-semibold text-white hover:bg-white hover:text-[#025EC1] transition-colors cursor-pointer"
                >
                  <span>Book Visit</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="lg:col-span-2">
              <h3 className="text-[18px] font-semibold text-white mb-5">Quick Links</h3>
              <ul className="space-y-3 text-[15px] text-white/75">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('home')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('about')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    About Clinic
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('doctors')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Medical Team
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('appointment')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Services Links */}
            <div className="lg:col-span-3">
              <h3 className="text-[18px] font-semibold text-white mb-5">Clinical Services</h3>
              <ul className="space-y-3 text-[15px] text-white/75">
                {SERVICES_LIST.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <button
                      type="button"
                      onClick={() => onNavigate('services', service.category)}
                      className="text-left hover:text-white transition-colors cursor-pointer"
                    >
                      {service.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Details */}
            <div className="lg:col-span-3">
              <h3 className="text-[18px] font-semibold text-white mb-5">Clinic Information</h3>
              <ul className="space-y-3.5 text-[15px] text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-[#F5F9FE] shrink-0" />
                  <span>{CLINIC_INFO.fullAddress}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#F5F9FE] shrink-0" />
                  <a href={CLINIC_INFO.phoneHref} className="hover:text-white transition-colors">
                    {CLINIC_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#F5F9FE] shrink-0" />
                  <a href={CLINIC_INFO.emailHref} className="hover:text-white transition-colors">
                    {CLINIC_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-[#F5F9FE] shrink-0" />
                  <span>Hours: {CLINIC_INFO.hours}</span>
                </li>
              </ul>

              {/* Social Media Placeholders */}
              <div className="mt-6 pt-5 border-t border-white/12">
                <p className="text-[13px] font-semibold text-white/70 mb-2.5">Social Channels</p>
                <div className="flex flex-wrap gap-2 text-[13px] text-white/75">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="rounded-[8px] border border-white/15 px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    title={CLINIC_INFO.social.instagram}
                  >
                    Instagram
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="rounded-[8px] border border-white/15 px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    title={CLINIC_INFO.social.facebook}
                  >
                    Facebook
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="rounded-[8px] border border-white/15 px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    title={CLINIC_INFO.social.youtube}
                  >
                    YouTube
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="rounded-[8px] border border-white/15 px-3 py-1.5 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                    title={CLINIC_INFO.social.linkedin}
                  >
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Project Source Archive Download */}
          <div className="mt-12 pt-6 border-t border-white/12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[14px] text-white/70">
            <p>
              © {new Date().getFullYear()} {CLINIC_INFO.name}, {CLINIC_INFO.locationShort}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Patient Privacy Notice
              </button>
              <span aria-hidden="true" className="text-white/30">·</span>
              <a
                href="/ABC-Clinic-Website.zip"
                download="ABC-Clinic-Website.zip"
                className="inline-flex items-center gap-1.5 font-semibold text-white/90 hover:text-white underline underline-offset-4 decoration-white/35 hover:decoration-white transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Standalone ZIP</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp + Back-to-Top Controls */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={CLINIC_INFO.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact ABC Clinic on WhatsApp"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#025EC1] text-white shadow-[0_8px_20px_rgba(1,38,77,0.28)] hover:bg-[#013874] hover:-translate-y-0.5 transition-all"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#213245] border border-[#213245]/12 shadow-[0_6px_18px_rgba(33,50,69,0.14)] hover:bg-[#025EC1] hover:text-white transition-all cursor-pointer ${
            showBackToTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </>
  );
};
