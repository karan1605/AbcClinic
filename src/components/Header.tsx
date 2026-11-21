import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Video,
  X,
} from 'lucide-react';
import { CLINIC_INFO, PageId } from '../data/clinicData';
import { LogoPlaceholder } from './PlaceholderVisual';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setOpenDesktopDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (page: PageId, hash?: string) => {
    onNavigate(page, hash);
    setMobileMenuOpen(false);
    setOpenDesktopDropdown(null);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Information Bar (Desktop) */}
      <div
        className="hidden lg:block text-white text-[13px] font-medium"
        style={{ backgroundColor: '#01264D' }}
      >
        <div className="site-container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2 text-white/85 whitespace-nowrap">
              <MapPin className="h-3.5 w-3.5 text-[#F5F9FE]" />
              <span>{CLINIC_INFO.locationShort}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-white/85 whitespace-nowrap">
              <Clock className="h-3.5 w-3.5 text-[#F5F9FE]" />
              <span>Hours: {CLINIC_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5 text-[#ED2E27]" />
              <span>Helpline: {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={CLINIC_INFO.emailHref}
              className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{CLINIC_INFO.email}</span>
            </a>
            <button
              type="button"
              onClick={() => handleLinkClick('appointment', 'telemedicine')}
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-[#F5F9FE] underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <Video className="h-3.5 w-3.5" />
              <span>Telemedicine</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Header */}
      <div
        className={`w-full bg-white transition-all duration-300 border-b ${
          isScrolled
            ? 'border-[#213245]/10 shadow-[0_6px_24px_rgba(33,50,69,0.08)] py-3'
            : 'border-[#213245]/8 py-4'
        }`}
      >
        <div className="site-container flex items-center justify-between gap-6">
          {/* Brand Logo Placeholder */}
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className="text-left cursor-pointer shrink-0 focus-visible:outline-[#025EC1]"
            aria-label="ABC Clinic Home"
          >
            <LogoPlaceholder />
          </button>

          {/* Desktop Navigation Menu */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Primary Navigation"
          >
            <button
              type="button"
              onClick={() => handleLinkClick('home')}
              className={`text-[15px] font-semibold transition-colors whitespace-nowrap cursor-pointer py-1 ${
                activePage === 'home'
                  ? 'text-[#025EC1]'
                  : 'text-[#213245] hover:text-[#025EC1]'
              }`}
              aria-current={activePage === 'home' ? 'page' : undefined}
            >
              Home
            </button>

            {/* About Dropdown */}
            <div
              className={`relative nav-dropdown-group ${
                openDesktopDropdown === 'about' ? 'is-open' : ''
              }`}
              onMouseEnter={() => setOpenDesktopDropdown('about')}
              onMouseLeave={() => setOpenDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('about')}
                aria-expanded={openDesktopDropdown === 'about'}
                className={`inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  activePage === 'about'
                    ? 'text-[#025EC1]'
                    : 'text-[#213245] hover:text-[#025EC1]'
                }`}
              >
                <span>About</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </button>

              <div className="nav-dropdown-panel absolute left-0 top-full pt-3 w-64 z-50">
                <div className="rounded-[12px] bg-white p-2 shadow-[0_12px_32px_rgba(33,50,69,0.12)] border border-[#213245]/8">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('about')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>About ABC Clinic</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('about', 'why-choose')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Why Choose Us</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('about', 'infrastructure')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Clinic Infrastructure</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className={`relative nav-dropdown-group ${
                openDesktopDropdown === 'services' ? 'is-open' : ''
              }`}
              onMouseEnter={() => setOpenDesktopDropdown('services')}
              onMouseLeave={() => setOpenDesktopDropdown(null)}
            >
              <button
                type="button"
                onClick={() => handleLinkClick('services')}
                aria-expanded={openDesktopDropdown === 'services'}
                className={`inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors whitespace-nowrap cursor-pointer py-1 ${
                  activePage === 'services'
                    ? 'text-[#025EC1]'
                    : 'text-[#213245] hover:text-[#025EC1]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </button>

              <div className="nav-dropdown-panel absolute left-0 top-full pt-3 w-72 z-50">
                <div className="rounded-[12px] bg-white p-2 shadow-[0_12px_32px_rgba(33,50,69,0.12)] border border-[#213245]/8">
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-semibold text-[#025EC1] hover:bg-[#F5F9FE] transition-colors cursor-pointer"
                  >
                    <span>All Services — [SERVICES]</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services', 'Consultations')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Outpatient Consultations</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services', 'Diagnostics')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Diagnostic Assessment</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('services', 'Specialized Care')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Specialized & Preventive Care</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLinkClick('appointment', 'telemedicine')}
                    className="flex w-full items-center justify-between rounded-[8px] px-3.5 py-2.5 text-left text-[14px] font-medium text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
                  >
                    <span>Telemedicine Consultation</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLinkClick('doctors')}
              className={`text-[15px] font-semibold transition-colors whitespace-nowrap cursor-pointer py-1 ${
                activePage === 'doctors'
                  ? 'text-[#025EC1]'
                  : 'text-[#213245] hover:text-[#025EC1]'
              }`}
              aria-current={activePage === 'doctors' ? 'page' : undefined}
            >
              Doctors
            </button>

            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className={`text-[15px] font-semibold transition-colors whitespace-nowrap cursor-pointer py-1 ${
                activePage === 'contact'
                  ? 'text-[#025EC1]'
                  : 'text-[#213245] hover:text-[#025EC1]'
              }`}
              aria-current={activePage === 'contact' ? 'page' : undefined}
            >
              Contact
            </button>
          </nav>

          {/* Primary CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleLinkClick('appointment')}
              className="primary-btn hidden sm:inline-flex"
            >
              <span className="btn-icon-disc" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>Book Appointment</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-[10px] border border-[#D1D8E0] text-[#213245] hover:bg-[#F5F9FE] hover:text-[#025EC1] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-b border-[#213245]/10 shadow-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="site-container py-5 space-y-2 overflow-y-auto max-h-[80vh]">
          <button
            type="button"
            onClick={() => handleLinkClick('home')}
            className={`block w-full rounded-[10px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
              activePage === 'home'
                ? 'bg-[#F5F9FE] text-[#025EC1]'
                : 'text-[#213245] hover:bg-[#F5F9FE]'
            }`}
          >
            Home
          </button>

          {/* Mobile About Accordion */}
          <div>
            <button
              type="button"
              onClick={() =>
                setOpenMobileDropdown((prev) => (prev === 'about' ? null : 'about'))
              }
              aria-expanded={openMobileDropdown === 'about'}
              className={`flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
                activePage === 'about'
                  ? 'bg-[#F5F9FE] text-[#025EC1]'
                  : 'text-[#213245] hover:bg-[#F5F9FE]'
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openMobileDropdown === 'about' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openMobileDropdown === 'about' && (
              <div className="mt-1 ml-4 space-y-1 border-l border-[#D1D8E0] pl-3">
                <button
                  type="button"
                  onClick={() => handleLinkClick('about')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  About ABC Clinic
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('about', 'why-choose')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  Why Choose Us
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('about', 'infrastructure')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  Clinic Infrastructure
                </button>
              </div>
            )}
          </div>

          {/* Mobile Services Accordion */}
          <div>
            <button
              type="button"
              onClick={() =>
                setOpenMobileDropdown((prev) => (prev === 'services' ? null : 'services'))
              }
              aria-expanded={openMobileDropdown === 'services'}
              className={`flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
                activePage === 'services'
                  ? 'bg-[#F5F9FE] text-[#025EC1]'
                  : 'text-[#213245] hover:bg-[#F5F9FE]'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  openMobileDropdown === 'services' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openMobileDropdown === 'services' && (
              <div className="mt-1 ml-4 space-y-1 border-l border-[#D1D8E0] pl-3">
                <button
                  type="button"
                  onClick={() => handleLinkClick('services')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] font-semibold text-[#025EC1]"
                >
                  All Services — [SERVICES]
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('services', 'Consultations')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  Outpatient Consultations
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('services', 'Diagnostics')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  Diagnostic Assessment
                </button>
                <button
                  type="button"
                  onClick={() => handleLinkClick('appointment', 'telemedicine')}
                  className="block w-full rounded-[8px] px-3 py-2 text-left text-[15px] text-[#59616B] hover:text-[#025EC1]"
                >
                  Telemedicine Consultation
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleLinkClick('doctors')}
            className={`block w-full rounded-[10px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
              activePage === 'doctors'
                ? 'bg-[#F5F9FE] text-[#025EC1]'
                : 'text-[#213245] hover:bg-[#F5F9FE]'
            }`}
          >
            Doctors
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className={`block w-full rounded-[10px] px-4 py-3 text-left text-[16px] font-semibold transition-colors ${
              activePage === 'contact'
                ? 'bg-[#F5F9FE] text-[#025EC1]'
                : 'text-[#213245] hover:bg-[#F5F9FE]'
            }`}
          >
            Contact
          </button>

          <div className="pt-3 border-t border-[#213245]/10 space-y-3">
            <button
              type="button"
              onClick={() => handleLinkClick('appointment')}
              className="primary-btn w-full justify-center"
            >
              <span className="btn-icon-disc" aria-hidden="true">
                <ArrowRight className="h-4 w-4" />
              </span>
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-1 gap-2 rounded-[10px] bg-[#F5F9FE] p-3.5 text-[13px] text-[#59616B]">
              <a href={CLINIC_INFO.phoneHref} className="inline-flex items-center gap-2 font-semibold text-[#213245]">
                <Phone className="h-4 w-4 text-[#025EC1]" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
              <a href={CLINIC_INFO.emailHref} className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#025EC1]" />
                <span>{CLINIC_INFO.email}</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#025EC1]" />
                <span>{CLINIC_INFO.hours}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
