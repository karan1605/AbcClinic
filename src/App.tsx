import { useCallback, useEffect, useState } from 'react';
import { PageId } from './data/clinicData';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { ContactPage } from './pages/ContactPage';
import { AppointmentPage } from './pages/AppointmentPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [pageContext, setPageContext] = useState<string | undefined>(undefined);

  useScrollReveal(`${activePage}-${pageContext ?? ''}`);

  const handleNavigate = useCallback((page: PageId, context?: string) => {
    setActivePage(page);
    setPageContext(context);

    if (context && (context === 'why-choose' || context === 'infrastructure')) {
      setTimeout(() => {
        const target = document.getElementById(context);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'ABC Clinic | Healthcare Clinic in Dhanbad, Jharkhand',
      about: 'About ABC Clinic | Dhanbad, Jharkhand',
      services: 'Services & Care — [SERVICES] | ABC Clinic',
      doctors: 'Doctors & Specialists | ABC Clinic, Dhanbad',
      contact: 'Contact Us | ABC Clinic, Dhanbad, Jharkhand',
      appointment: 'Book Appointment | ABC Clinic, Dhanbad',
    };
    document.title = pageTitles[activePage];
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#59616B]">
      <Header activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activePage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'services' && (
          <ServicesPage initialCategory={pageContext} onNavigate={handleNavigate} />
        )}
        {activePage === 'doctors' && <DoctorsPage onNavigate={handleNavigate} />}
        {activePage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {activePage === 'appointment' && (
          <AppointmentPage
            initialMode={pageContext === 'telemedicine' ? 'telemedicine' : 'in-clinic'}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
