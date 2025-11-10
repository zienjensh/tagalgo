import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import coverImage from '../assets/cover.png';

// Preload the cover image (LCP element) immediately
if (typeof window !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = coverImage;
  link.fetchPriority = 'high';
  if (!document.querySelector(`link[href="${coverImage}"]`)) {
    document.head.appendChild(link);
  }
}

const Hero = ({ onViewExamples }) => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Handle WhatsApp consultation
  const handleGetConsultation = () => {
    const phoneNumber = '201155277506';
    const message = isRTL 
      ? 'مرحباً، أريد الحصول على استشارة مجانية حول خدماتكم'
      : 'Hello, I would like to get a free consultation about your services';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Remove unused variable to satisfy ESLint
          // const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Get the hero section element
          const heroElement = document.querySelector('.hero-section');
          const nextSection = document.querySelector('#our-top-clients');
          
          if (heroElement && nextSection) {
            // const heroRect = heroElement.getBoundingClientRect();
            const nextSectionRect = nextSection.getBoundingClientRect();
            
            // Hide hero when next section is visible (when it reaches the top of viewport)
            if (nextSectionRect.top <= window.innerHeight * 0.3) {
              setIsHeroVisible(false);
            }
            // Show hero when scrolling up or when next section is not visible
            else if (currentScrollY < lastScrollY || nextSectionRect.top > window.innerHeight * 0.5) {
              setIsHeroVisible(true);
            }
          }
          
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
    <div className={`hero-section bg-dark-grey rounded-3xl ms-6 me-6 mt-20 md:mt-24 mb-20 md:mb-24 relative overflow-hidden transform transition-all duration-700 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100 scale-100 rotate-0' : 'translate-y-20 opacity-0 scale-95 rotate-1'
    } ${isHeroVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-90'}`} style={{
      animation: isVisible ? 'slideInUp 1.5s ease-out' : 'none'
    }}>
      {/* Decorative Lines */}
      <div className="decorative-lines">
        <div className={`decorative-line line-1 transition-all duration-2000 delay-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
        <div className={`decorative-line line-2 transition-all duration-2000 delay-1200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}></div>
      </div>

      {/* Glow effect when visible */}
      <div className={`absolute inset-0 bg-gradient-to-r from-neon-green/5 to-blue-500/5 transition-all duration-700 ${
        isHeroVisible ? 'opacity-100' : 'opacity-0'
      }`}></div>
      
      {/* Fade out effect */}
      <div className={`absolute inset-0 bg-dark-grey transition-all duration-700 ${
        isHeroVisible ? 'opacity-0' : 'opacity-50'
      }`}></div>
      

      {/* Watermark Image with Green Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-5 hidden sm:block">
        <div className="relative w-full h-full">
          <img 
            src={coverImage} 
            alt="TagAlgo - تاج ألغو Watermark" 
            className="w-full h-full object-contain filter blur-sm"
            fetchPriority="high"
            decoding="async"
            style={{
              opacity: 0.15,
              boxShadow: '0 0 25px rgba(0, 255, 136, 0.3), 0 0 50px rgba(0, 255, 136, 0.15)',
              animation: 'pulse-glow 4s ease-in-out infinite'
            }}
          />
          {/* Green Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-neon-green/10 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Mobile Watermark with Green Glow */}
      <div className="absolute top-0 right-0 w-3/4 h-full z-5 block sm:hidden">
        <div className="relative w-full h-full">
          <img 
            src={coverImage} 
            alt="TagAlgo - تاج ألغو Watermark" 
            className="w-full h-full object-contain filter blur-sm"
            fetchPriority="high"
            decoding="async"
            style={{
              opacity: 0.2,
              boxShadow: '0 0 20px rgba(0, 255, 136, 0.4), 0 0 40px rgba(0, 255, 136, 0.2)',
              animation: 'pulse-glow 4s ease-in-out infinite'
            }}
          />
          {/* Green Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-neon-green/15 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Main Headline */}
          <div className="space-y-6" data-animate>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                  <span className={`text-white block transform transition-all duration-1000 delay-200 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}>
                    {(() => {
                      const title = t('heroTitle');
                      // Check if it's English or Arabic
                      if (title.includes('reality')) {
                        return title.split('reality').map((part, index) => (
                          index === 0 ? (
                            <span key={index}>
                              {part}
                              <span className="neon-glow text-neon-green">reality</span>
                            </span>
                          ) : (
                            <span key={index}>{part}</span>
                          )
                        ));
                      } else if (title.includes('واقعا')) {
                        // Split by '...' first to handle the ellipsis properly
                        const parts = title.split('...');
                        if (parts.length > 1) {
                          const afterEllipsis = parts[1].trim(); // Remove leading/trailing spaces
                          const realityIndex = afterEllipsis.indexOf('واقعا');
                          if (realityIndex !== -1) {
                            const beforeReality = afterEllipsis.substring(0, realityIndex).trim();
                            const afterReality = afterEllipsis.substring(realityIndex + 5).trim();
                            return (
                              <>
                                <span>{parts[0].trim()}...</span>
                                <span className="mx-2">{beforeReality}</span>
                                <span className="neon-glow text-neon-green mx-1">واقعا</span>
                                <span className="mx-1">{afterReality}</span>
                              </>
                            );
                          }
                        }
                        // Fallback to original logic if no ellipsis
                        return title.split('واقعا').map((part, index) => (
                          index === 0 ? (
                            <span key={index}>
                              {part.trim()}
                              <span className="neon-glow text-neon-green mx-1">واقعا</span>
                            </span>
                          ) : (
                            <span key={index} className="mx-1">{part.trim()}</span>
                          )
                        ));
                      }
                      return title;
                    })()}
                  </span>
                </h1>
          </div>

          {/* Right Side - Supporting Content */}
          <div className="space-y-6">
          </div>
        </div>

            {/* Main Action Buttons Only */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 transform transition-all duration-1000 delay-1600 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`} data-animate>
              {/* Main Action Buttons */}
              <button 
                onClick={onViewExamples}
                className="bg-dark-grey text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-neon-green/30 flex-1 sm:flex-none btn-animated hover-lift border-2 border-transparent hover:border-neon-green/30" 
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-semibold flex items-center justify-center gap-2">
                  {t('viewExamples')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-90"></div>
              </button>
              <button 
                onClick={handleGetConsultation}
                className="bg-white text-dark-grey px-6 py-3.5 rounded-full text-sm font-semibold border-2 border-dark-grey hover:bg-gray-50 hover:border-neon-green hover:text-neon-green hover:scale-105 active:scale-95 transition-all duration-300 group relative overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-dark-grey/20 flex-1 sm:flex-none btn-animated hover-lift" 
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
              >
                <span className="relative z-10 group-hover:text-neon-green transition-colors duration-300 font-semibold flex items-center justify-center gap-2">
                  {t('getConsultation')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-neon-green/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </div>

      {/* Floating Scroll Arrows */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 delay-2000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <div className="text-xs text-white font-medium opacity-70">Scroll</div>
          <div className="flex flex-col space-y-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neon-green animate-bounce">
              <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-neon-green animate-bounce" style={{animationDelay: '0.2s'}}>
              <path d="M7 14L12 19L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
