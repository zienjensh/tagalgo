import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import logoImage from '../assets/logo.png';

const Header = () => {
  const { t, isRTL, language, changeLanguage } = useLanguage();
  const toggleLanguage = () => {
    changeLanguage(language === 'ar' ? 'en' : 'ar');
  };
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Only trigger if scroll difference is significant (more than 3px)
          if (scrollDifference > 3) {
            // Show header when scrolling up or at top
            if (currentScrollY < lastScrollY || currentScrollY < 30) {
              setIsHeaderVisible(true);
            } 
            // Hide header when scrolling down (after 50px)
            else if (currentScrollY > lastScrollY && currentScrollY > 50) {
              setIsHeaderVisible(false);
            }
          }
          
          setScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-3 left-3 right-3 md:top-4 md:left-4 md:right-4 z-50 transition-all duration-500 ease-out ${
      isHeaderVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'
    }`}>
      {/* Oval Container */}
      <div className={`relative mx-auto max-w-7xl bg-white/90 backdrop-blur-xl shadow-xl border border-gray-200/50 transition-all duration-500 ease-out overflow-hidden ${
        scrolled ? 'shadow-2xl border-gray-300 py-2 md:py-2.5' : 'shadow-lg py-2.5 md:py-3.5'
      }`} style={{
        borderRadius: '9999px',
        minHeight: '56px'
      }}>
        {/* Animated bottom line */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon-green via-blue-500 to-neon-green transition-all duration-700 rounded-full ${
          scrolled ? 'w-[90%] opacity-100' : 'w-0 opacity-0'
        }`} style={{
          boxShadow: scrolled ? '0 0 10px rgba(0, 255, 136, 0.5)' : 'none'
        }}></div>
        
        {/* Subtle glow effect when visible */}
        <div className={`absolute inset-0 bg-gradient-to-r from-neon-green/3 via-transparent to-blue-500/3 transition-all duration-500 pointer-events-none rounded-full ${
          isHeaderVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{
          borderRadius: '9999px'
        }}></div>
        
        {/* Top accent line */}
        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-neon-green/30 to-transparent transition-all duration-500 rounded-full ${
          isHeaderVisible ? 'w-[90%] translate-y-0 opacity-100' : 'w-0 translate-y-1 opacity-0'
        }`}></div>

        {/* Content Container */}
        <div className="relative z-10 px-6 md:px-8 lg:px-12 py-2">
          <div className="flex items-center justify-between">
          {/* Logo and Brand - Left Side */}
          <div className={`flex items-center space-x-3 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="w-12 h-12 hover:scale-110 transition-all duration-300">
              <img 
                src={logoImage} 
                alt="TagAlgo Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl hover:text-neon-green transition-all duration-300 text-black" style={{ fontFamily: 'Taskor, Inter, sans-serif' }}>
              TagAlgo
            </span>
          </div>

          {/* Navigation - Center */}
          <nav className={`hidden md:flex items-center space-x-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
          }`}>
            <button 
              onClick={() => scrollToSection('technologies-section')}
              className="font-medium transition-all duration-300 relative group px-5 py-2.5 rounded-full hover:bg-neon-green/10 hover:text-neon-green text-gray-700 hover:scale-105 active:scale-95"
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              {t('technologies')}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-green to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('our-top-clients')}
              className="font-medium transition-all duration-300 relative group px-5 py-2.5 rounded-full hover:bg-neon-green/10 hover:text-neon-green text-gray-700 hover:scale-105 active:scale-95"
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              {t('ourClients')}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-green to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-medium transition-all duration-300 relative group px-5 py-2.5 rounded-full hover:bg-neon-green/10 hover:text-neon-green text-gray-700 hover:scale-105 active:scale-95"
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              {t('services')}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-green to-blue-500 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
            </button>
          </nav>

              {/* Right Side: Language Toggle + Social Icons */}
              <div className={`flex items-center gap-3 md:gap-4 transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
                {/* Language Toggle */}
                <button
                  onClick={toggleLanguage}
                  aria-label="Toggle language"
                  title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
                  className="relative group w-11 h-11 rounded-full border-2 border-gray-200 hover:border-neon-green bg-white shadow-md hover:shadow-lg hover:shadow-neon-green/20 flex items-center justify-center transition-all duration-300 overflow-hidden hover:scale-110 active:scale-95"
                  style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-neon-green/0 to-blue-500/0 group-hover:from-neon-green/15 group-hover:to-blue-500/15 transition-opacity duration-300 rounded-full"></span>
                  {/* Globe icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-700 group-hover:text-neon-green transition-colors relative z-10">
                    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C14.5 5.5 14.5 18.5 12 22C9.5 18.5 9.5 5.5 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {/* Language chip */}
                  <span className="absolute -bottom-0.5 -right-0.5 text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-neon-green to-blue-500 text-white shadow-md font-bold z-20 border-2 border-white">
                    {language === 'ar' ? 'AR' : 'EN'}
                  </span>
                </button>
                {/* Facebook Icon */}
                <a 
                  href="https://www.facebook.com" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 hover:bg-neon-green/10 border-2 border-transparent hover:border-neon-green/30 transition-all duration-300 group hover:scale-110 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-600 group-hover:text-neon-green transition-colors duration-300"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                {/* WhatsApp Icon */}
                <a 
                  href="https://wa.me/201289963550" 
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-50 hover:bg-neon-green/10 border-2 border-transparent hover:border-neon-green/30 transition-all duration-300 group hover:scale-110 active:scale-95"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-600 group-hover:text-neon-green transition-colors duration-300"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
