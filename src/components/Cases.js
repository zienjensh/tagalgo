import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Cases = ({ onViewAllProjects, onStartProject }) => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('services');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsScrolled(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-20 md:py-24 px-6 ms-6 me-6 mb-20 md:mb-24 relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100/50 shadow-sm">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-green rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white rounded-full animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-green/30 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-500/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-neon-green/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-white/30 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon-green/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20 relative">
          {/* Background Text */}
          <div className={`absolute inset-0 flex items-center justify-center transform transition-all duration-1500 ${
            isScrolled ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black" style={{
              fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif',
              color: 'transparent',
              WebkitTextStroke: isScrolled ? '2px rgba(0, 255, 136, 0.6)' : '1px rgba(0, 255, 136, 0.3)',
              textShadow: isScrolled ? '0 0 20px rgba(0, 255, 136, 0.4)' : '0 0 5px rgba(0, 255, 136, 0.2)',
              transition: 'all 1.5s ease-out'
            }}>
              {t('work')}
            </h1>
          </div>
          
          <h2 className={`relative z-20 text-4xl md:text-5xl font-bold text-dark-grey mb-4 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
            {t('services')}
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-neon-green to-blue-500 mx-auto transform transition-all duration-1000 delay-300 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* UI/UX Design Service */}
          <div className="relative group hover:scale-105 transition-all duration-500 hover:rotate-1 hover-lift" data-animate>
            {/* Enhanced Glass Effect */}
            <div className="absolute inset-0 glass-light rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <div className="relative">
                <div className="absolute top-4 left-4 glass-button text-dark-grey px-4 py-2 rounded-full text-sm font-semibold">
                  Design
                </div>
                <div className="absolute top-4 right-4 w-11 h-11 glass-button rounded-full flex items-center justify-center group-hover:bg-neon-green group-hover:text-white transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-dark-grey group-hover:text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Service Content */}
                <div className="mt-10">
                  <div className="bg-gradient-to-br from-purple-50/90 to-pink-50/90 backdrop-blur-sm p-6 rounded-2xl border border-purple-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                          {t('uiUxDesign')}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      {t('uiUxDescription')}
                    </p>
                  </div>
                </div>
                
                {/* Decorative Icons */}
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Web/App Development Service */}
          <div className="relative group hover:scale-105 transition-all duration-500 hover:-rotate-1 hover-lift" data-animate>
            {/* Enhanced Glass Effect */}
            <div className="absolute inset-0 glass-light rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm text-dark-grey px-4 py-2 rounded-full text-sm font-medium border border-white/50">
                  Development
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-neon-green transition-all duration-300 border border-white/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-dark-grey group-hover:text-white">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Service Content */}
                <div className="mt-10">
                  <div className="bg-gradient-to-br from-blue-50/90 to-cyan-50/90 backdrop-blur-sm p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                          {t('webAppDevelopment')}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      {t('webAppDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing & Social Media Service */}
          <div className="relative group hover:scale-105 transition-all duration-500 hover:rotate-1 hover-lift" data-animate>
            {/* Enhanced Glass Effect */}
            <div className="absolute inset-0 glass-light rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm text-dark-grey px-4 py-2 rounded-full text-sm font-medium border border-white/50">
                  Marketing
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-neon-green transition-all duration-300 border border-white/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-dark-grey group-hover:text-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Service Content */}
                <div className="mt-10">
                  <div className="bg-gradient-to-br from-green-50/90 to-emerald-50/90 backdrop-blur-sm p-6 rounded-2xl border border-green-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-600 mb-2 group-hover:text-green-700 transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                          {t('marketingSocialMedia')}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      {t('marketingDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Strategy Service */}
          <div className="relative group hover:scale-105 transition-all duration-500 hover:-rotate-1 hover-lift" data-animate>
            {/* Enhanced Glass Effect */}
            <div className="absolute inset-0 glass-light rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-sm text-dark-grey px-4 py-2 rounded-full text-sm font-medium border border-white/50">
                  Branding
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-neon-green transition-all duration-300 border border-white/50">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-dark-grey group-hover:text-white">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Service Content */}
                <div className="mt-10">
                  <div className="bg-gradient-to-br from-orange-50/90 to-red-50/90 backdrop-blur-sm p-6 rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-orange-600 mb-2 group-hover:text-orange-700 transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                          {t('brandStrategy')}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      {t('brandDescription')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} data-animate>
          <button 
            onClick={onViewAllProjects}
            className="glass-button text-dark-grey px-8 py-4 rounded-full font-semibold hover:text-neon-green transition-all duration-300 group relative overflow-hidden shadow-lg hover:scale-110 hover:shadow-2xl btn-animated hover-lift active:scale-95" 
            style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
          >
            <span className="relative z-10 group-hover:text-neon-green transition-colors duration-300 flex items-center justify-center gap-2">
              {t('viewAllProjects')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-80"></div>
          </button>
          <button 
            onClick={onStartProject}
            className="bg-gradient-to-r from-neon-green to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-500 hover:to-neon-green transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-neon-green/40 border-2 border-transparent hover:border-white/30 hover:scale-110 btn-animated hover-lift active:scale-95" 
            style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
          >
            <span className="relative z-10 group-hover:text-dark-grey transition-colors duration-300 flex items-center justify-center gap-2">
              {t('startYourProject')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-90"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;