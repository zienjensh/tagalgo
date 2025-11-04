import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import client1 from '../assets/Client/1.svg';
import client2 from '../assets/Client/2.svg';
import client3 from '../assets/Client/3.svg';
import client4 from '../assets/Client/4.svg';
import client5 from '../assets/Client/5.svg';

const OurTopClients = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('our-top-clients');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsScrolled(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { id: 1, logo: client1, name: 'Client 1' },
    { id: 2, logo: client2, name: 'Client 2' },
    { id: 3, logo: client3, name: 'Client 3' },
    { id: 4, logo: client4, name: 'Client 4' },
    { id: 5, logo: client5, name: 'Client 5' },
  ];

  return (
    <section id="our-top-clients" className="py-16 px-6 relative overflow-hidden rounded-3xl mx-6 my-6" style={{
      backgroundColor: '#f0fdf4'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-green rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-blue-500 rounded-full animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
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
              {t('clients')}
            </h1>
        </div>
        
        {/* Main Title */}
        <h2 className={`relative z-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-dark-grey mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          {t('ourTopClients')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-neon-green to-blue-500 mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}></div>
      </div>

      {/* Clients Carousel */}
      <div className="relative z-10">
        <div className="overflow-hidden">
          <div className={`flex animate-scroll transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* First set of clients */}
            {clients.map((client) => (
              <div key={`first-${client.id}`} className="flex-shrink-0 mx-8 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div key={`second-${client.id}`} className="flex-shrink-0 mx-8 group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Text */}
      <div className={`relative z-10 text-center mt-16 transform transition-all duration-1000 delay-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-700 italic font-medium leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          "{t('storyQuote')}"
        </blockquote>
        <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          {t('storyText')}
        </p>
        
        {/* New Button */}
        <div className={`mt-8 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-gradient-to-r from-neon-green to-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-500 hover:to-neon-green hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              {t('becomeOne')}
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-0 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-neon-green rounded-full animate-bounce"></div>
    </section>
  );
};

export default OurTopClients;
