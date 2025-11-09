import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import LanguageModal from './components/LanguageModal';
import PortfolioModal from './components/PortfolioModal';
import ContactModal from './components/ContactModal';
import ContactUsModal from './components/ContactUsModal';
import SEO from './components/SEO';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeliveryShippingPolicy from './components/DeliveryShippingPolicy';
import RefundCancellationPolicy from './components/RefundCancellationPolicy';
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
  const [showContactUsModal, setShowContactUsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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

  // Handle page navigation
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['about', 'privacy', 'delivery', 'refund'].includes(hash)) {
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    } else {
      setCurrentPage('home');
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['about', 'privacy', 'delivery', 'refund'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

      {/* Contact Us Modal */}
      <ContactUsModal 
        isOpen={showContactUsModal} 
        onClose={() => setShowContactUsModal(false)} 
      />
      
      {/* SEO Component */}
      {currentPage === 'home' ? (
        <SEO 
          title={isRTL ? 'TagAlgo - تاج ألغو | تطوير مواقع ويب متقدمة وحلول تقنية مبتكرة' : 'TagAlgo - تاج ألغو | Advanced Web Development & Innovative Technical Solutions'}
          description={isRTL ? 'TagAlgo - تاج ألغو: شركة رائدة في تطوير المواقع الإلكترونية وتطبيقات الهاتف المحمول. نقدم خدمات تطوير مواقع ويب احترافية، تطبيقات أندرويد وآيفون، حلول التجارة الإلكترونية، تصميم واجهات المستخدم، التسويق الرقمي. خبرة واسعة في React, Node.js, Python, MongoDB. استشارة مجانية!' : 'TagAlgo - تاج ألغو: Leading company in web development and mobile applications. We offer professional web development services, Android and iOS apps, e-commerce solutions, UI/UX design, and digital marketing. Extensive experience in React, Node.js, Python, MongoDB. Free consultation!'}
          keywords={isRTL ? 'تطوير مواقع ويب, تطوير تطبيقات, برمجة, تقنية, Tag Algo, تاج ألغو, React, Node.js, Python, MongoDB, تطبيقات الهاتف, التجارة الإلكترونية, تصميم مواقع, برمجة مواقع, شركة تقنية, حلول تقنية, تطوير برمجيات, تطبيقات ويب, مواقع إلكترونية, تطوير تطبيقات الجوال' : 'web development, mobile app development, programming, technology, Tag Algo, React, Node.js, Python, MongoDB, mobile applications, e-commerce, website design, software development, tech company, technical solutions, web applications, digital solutions'}
          url="https://tagalgo.com/"
        />
      ) : currentPage === 'about' ? (
        <SEO 
          title={isRTL ? 'من نحن - TagAlgo | تاج ألغو' : 'About Us - TagAlgo | تاج ألغو'}
          description={isRTL ? 'تعرف على TagAlgo - تاج ألغو: رؤيتنا، مهمتنا، وقيمنا. نحن شركة رائدة في تطوير المواقع والتطبيقات والحلول الرقمية.' : 'Learn about TagAlgo - تاج ألغو: our vision, mission, and values. We are a leading company in web development, applications, and digital solutions.'}
          url="https://tagalgo.com/#about"
        />
      ) : currentPage === 'privacy' ? (
        <SEO 
          title={isRTL ? 'سياسة الخصوصية - TagAlgo | تاج ألغو' : 'Privacy Policy - TagAlgo | تاج ألغو'}
          description={isRTL ? 'سياسة الخصوصية لـ TagAlgo - تاج ألغو. تعرف على كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.' : 'Privacy Policy for TagAlgo - تاج ألغو. Learn how we collect, use, and protect your personal information.'}
          url="https://tagalgo.com/#privacy"
        />
      ) : currentPage === 'delivery' ? (
        <SEO 
          title={isRTL ? 'سياسة التسليم والشحن - TagAlgo | تاج ألغو' : 'Delivery & Shipping Policy - TagAlgo | تاج ألغو'}
          description={isRTL ? 'سياسة التسليم والشحن لـ TagAlgo - تاج ألغو. تعرف على مدة التسليم وطرق التسليم المتاحة.' : 'Delivery & Shipping Policy for TagAlgo - تاج ألغو. Learn about delivery timeframes and available delivery methods.'}
          url="https://tagalgo.com/#delivery"
        />
      ) : currentPage === 'refund' ? (
        <SEO 
          title={isRTL ? 'سياسة الاسترجاع والإلغاء - TagAlgo | تاج ألغو' : 'Refund & Cancellation Policy - TagAlgo | تاج ألغو'}
          description={isRTL ? 'سياسة الاسترجاع والإلغاء لـ TagAlgo - تاج ألغو. تعرف على شروط الإلغاء والاسترجاع.' : 'Refund & Cancellation Policy for TagAlgo - تاج ألغو. Learn about cancellation and refund terms.'}
          url="https://tagalgo.com/#refund"
        />
      ) : null}

      {/* Page Content */}
      {currentPage === 'home' ? (
        <>
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
          <Footer onContactClick={() => setShowContactUsModal(true)} />
        </>
      ) : (
        <>
          {/* Header */}
          <Header />
          
          {/* Page Content */}
          {currentPage === 'about' && <AboutUs />}
          {currentPage === 'privacy' && <PrivacyPolicy />}
          {currentPage === 'delivery' && <DeliveryShippingPolicy />}
          {currentPage === 'refund' && <RefundCancellationPolicy />}
          
          {/* Footer */}
          <Footer onContactClick={() => setShowContactUsModal(true)} />
        </>
      )}
      
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
