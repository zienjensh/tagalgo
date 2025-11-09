import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageModal from './components/LanguageModal';
import PortfolioModal from './components/PortfolioModal';
import ContactModal from './components/ContactModal';
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import OurTopClients from './components/OurTopClients';
import Cases from './components/Cases';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ScrollProgressBar from './components/ScrollProgressBar';
import ScrollAnimations from './components/ScrollAnimations';

const AppContent = () => {
  // eslint-disable-next-line no-unused-vars
  const { changeLanguage, isRTL } = useLanguage();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showPortfolioModal, setShowPortfolioModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Check if language was already selected
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (!selectedLanguage) {
      setShowLanguageModal(true);
    }
  }, []);

  const handleLanguageSelect = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
    setShowLanguageModal(false);
  };

  return (
    <div className="min-h-screen bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />
      
      {/* Scroll Animations */}
      <ScrollAnimations />
      
      {/* Language Modal */}
      {showLanguageModal && (
        <LanguageModal onLanguageSelect={handleLanguageSelect} />
      )}

      {/* Portfolio Modal */}
      <PortfolioModal 
        isOpen={showPortfolioModal} 
        onClose={() => setShowPortfolioModal(false)} 
      />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
      
      {/* Main container with rounded corners and border */}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero onViewExamples={() => setShowPortfolioModal(true)} />

        {/* Technologies Section */}
        <Technologies />
        
        {/* Our Top Clients Section */}
        <OurTopClients />
        
        {/* Cases Section */}
        <Cases 
          onViewAllProjects={() => setShowPortfolioModal(true)}
          onStartProject={() => setShowContactModal(true)}
        />
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll Progress Button */}
      <ScrollProgress />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
