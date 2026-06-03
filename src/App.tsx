import React, { useState } from 'react';
import { ActiveSection } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import InteractiveFresco from './components/InteractiveFresco';
import SoapsCatalog from './components/SoapsCatalog';
import AboutUs from './components/AboutUs';
import WhyHandmade from './components/WhyHandmade';
import ContactModal from './components/ContactModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Smooth scroll to top when section changes
  const handleSectionChange = (section: ActiveSection) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-vanilla text-moss-dark selection:bg-moss/20 selection:text-moss-dark">
      {/* Persistent Elegant Header */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Dynamic View Area */}
      <main className="flex-grow">
        {activeSection === 'home' && (
          <InteractiveFresco onNavigate={handleSectionChange} />
        )}
        
        {activeSection === 'soaps' && (
          <SoapsCatalog />
        )}
        
        {activeSection === 'about' && (
          <AboutUs />
        )}
        
        {activeSection === 'benefits' && (
          <WhyHandmade />
        )}


      </main>

      {/* Elegant Footer */}
      <Footer 
        setActiveSection={handleSectionChange} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Inquiry Form Modal Drawer Popup */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

