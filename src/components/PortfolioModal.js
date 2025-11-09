import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import client1 from '../assets/Client/1.svg';
import client2 from '../assets/Client/2.svg';
import client3 from '../assets/Client/3.svg';
import client4 from '../assets/Client/4.svg';
import client5 from '../assets/Client/5.svg';

const PortfolioModal = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  // Portfolio items with their websites
  const portfolioItems = [
    { id: 1, logo: client1, name: 'Falusy - فلوسي', website: 'https://falusy.site' },
    { id: 2, logo: client2, name: 'Mr.Qr - مستر كيو ار', website: 'https://www.example2.com' },
    { id: 3, logo: client3, name: 'TagX - تاج اكس', website: 'https://www.example3.com' },
    { id: 4, logo: client4, name: 'Kuni Alawl - كن الاول', website: 'https://manasa-six.vercel.app/' },
    { id: 5, logo: client5, name: 'Client 5', website: 'https://www.example5.com' },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle click on portfolio item
  const handleItemClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 md:p-8 max-w-6xl w-full mx-4 shadow-2xl transform transition-all duration-500 scale-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark-grey mb-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {t('ourTopClients')}
            </h2>
            <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Close modal"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600 group-hover:text-neon-green transition-colors"
            >
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.website)}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-neon-green hover:scale-105 transform"
            >
              {/* Logo Container */}
              <div className="w-full h-32 md:h-40 flex items-center justify-center mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl group-hover:from-neon-green/10 group-hover:to-blue-500/10 transition-all duration-300">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Client Name */}
              <h3 className="text-lg font-semibold text-dark-grey text-center group-hover:text-neon-green transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {item.name}
              </h3>

              {/* Hover Effect Indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white"
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-sm text-gray-500" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
            {t('portfolioFooter') || (isRTL ? 'انقر على أي مشروع لزيارة الموقع' : 'Click on any project to visit the website')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;

