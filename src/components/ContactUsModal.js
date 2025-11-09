import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactUsModal = ({ isOpen, onClose }) => {
  const { isRTL } = useLanguage();

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

  const phoneNumber = '201155277506';

  const handlePhoneCall = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = isRTL 
      ? 'مرحباً، أريد التواصل معكم'
      : 'Hello, I would like to contact you';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-8 md:p-10 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-500 scale-100 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-neon-green/10 to-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/10 to-neon-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0964 21.9451 19.8173 21.9203C16.7422 21.5855 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09522 3.90347 2.12788 3.62476 2.21649 3.36219C2.3051 3.09963 2.44756 2.85866 2.63476 2.6545C2.82196 2.45034 3.0498 2.28734 3.30379 2.17599C3.55777 2.06464 3.83233 2.00726 4.11 2.00726H7.11C7.59531 1.99522 8.06679 2.16708 8.43376 2.49153C8.80073 2.81599 9.03994 3.27412 9.11 3.76C9.23662 4.7606 9.47144 5.74342 9.81 6.69C9.94454 7.08815 9.97366 7.51543 9.89391 7.92676C9.81415 8.33808 9.62886 8.71671 9.36 9.02L8.09 10.29C9.51355 12.4884 11.5116 14.4865 13.71 15.91L14.98 14.64C15.2833 14.3711 15.6619 14.1858 16.0732 14.1061C16.4846 14.0263 16.9119 14.0554 17.31 14.19C18.2566 14.5286 19.2394 14.7634 20.24 14.89C20.7261 14.9596 21.1851 15.1992 21.5095 15.5667C21.8339 15.9341 22.0055 16.4063 21.99 16.89L21.99 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark-grey mb-1" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </h2>
              <p className="text-gray-600 text-sm" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'اختر طريقة التواصل المفضلة' : 'Choose your preferred contact method'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group flex-shrink-0"
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

        {/* Contact Options */}
        <div className="relative z-10 space-y-4">
          {/* Phone Call */}
          <button
            onClick={handlePhoneCall}
            className="w-full p-6 bg-gradient-to-r from-neon-green to-blue-500 rounded-2xl text-white font-semibold hover:from-blue-500 hover:to-neon-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
            style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0964 21.9451 19.8173 21.9203C16.7422 21.5855 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09522 3.90347 2.12788 3.62476 2.21649 3.36219C2.3051 3.09963 2.44756 2.85866 2.63476 2.6545C2.82196 2.45034 3.0498 2.28734 3.30379 2.17599C3.55777 2.06464 3.83233 2.00726 4.11 2.00726H7.11C7.59531 1.99522 8.06679 2.16708 8.43376 2.49153C8.80073 2.81599 9.03994 3.27412 9.11 3.76C9.23662 4.7606 9.47144 5.74342 9.81 6.69C9.94454 7.08815 9.97366 7.51543 9.89391 7.92676C9.81415 8.33808 9.62886 8.71671 9.36 9.02L8.09 10.29C9.51355 12.4884 11.5116 14.4865 13.71 15.91L14.98 14.64C15.2833 14.3711 15.6619 14.1858 16.0732 14.1061C16.4846 14.0263 16.9119 14.0554 17.31 14.19C18.2566 14.5286 19.2394 14.7634 20.24 14.89C20.7261 14.9596 21.1851 15.1992 21.5095 15.5667C21.8339 15.9341 22.0055 16.4063 21.99 16.89L21.99 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-right flex-1">
                <div className="text-lg font-bold">{isRTL ? 'اتصال هاتفي' : 'Phone Call'}</div>
                <div className="text-sm opacity-90">+{phoneNumber}</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="w-full p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white font-semibold hover:from-green-600 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
            style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                </svg>
              </div>
              <div className="text-right flex-1">
                <div className="text-lg font-bold">{isRTL ? 'واتساب' : 'WhatsApp'}</div>
                <div className="text-sm opacity-90">+{phoneNumber}</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;

