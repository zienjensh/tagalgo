import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-dark-grey text-white py-16 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-white/10 via-transparent to-neon-green/20"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-green rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main Title and Tagline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mr-4" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              TagAlgo
            </h2>
            <div className="w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
            {t('tagline')}
          </p>
        </div>

        {/* Contact Information */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Location */}
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61 4.42 5.56 6.5 4.5C8.58 3.44 11.25 3.44 13.33 4.5C15.42 5.56 17 7.61 17 10C17 17 12 23 12 23S7 17 7 10C7 8.5 7.5 7 8.5 6C9.5 5 11 5 12 5C13 5 14.5 5 15.5 6C16.5 7 17 8.5 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {t('location')}
            </h3>
            <p className="text-gray-300">
              Cairo, Egypt
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {t('email')}
            </h3>
            <p className="text-gray-300">
              info@tagalgo.com
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 bg-neon-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0964 21.9451 19.8173 21.9203C16.7422 21.5855 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09522 3.90347 2.12788 3.62476 2.21649 3.36219C2.3051 3.09963 2.44756 2.85866 2.63476 2.6545C2.82196 2.45034 3.0498 2.28734 3.30379 2.17599C3.55777 2.06464 3.83233 2.00726 4.11 2.00726H7.11C7.59531 1.99522 8.06679 2.16708 8.43376 2.49153C8.80073 2.81599 9.03994 3.27412 9.11 3.76C9.23662 4.7606 9.47144 5.74342 9.81 6.69C9.94454 7.08815 9.97366 7.51543 9.89391 7.92676C9.81415 8.33808 9.62886 8.71671 9.36 9.02L8.09 10.29C9.51355 12.4884 11.5116 14.4865 13.71 15.91L14.98 14.64C15.2833 14.3711 15.6619 14.1858 16.0732 14.1061C16.4846 14.0263 16.9119 14.0554 17.31 14.19C18.2566 14.5286 19.2394 14.7634 20.24 14.89C20.7261 14.9596 21.1851 15.1992 21.5095 15.5667C21.8339 15.9341 22.0055 16.4063 21.99 16.89L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {t('contactUs')}
            </h3>
            <p className="text-gray-300">
              +201289963550
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex justify-center space-x-6">
            {/* Facebook */}
            <a href="#" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-green transition-all duration-300 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:scale-110 transition-transform duration-300">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-green transition-all duration-300 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:scale-110 transition-transform duration-300">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/201289963550" className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-green transition-all duration-300 group">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:scale-110 transition-transform duration-300">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Developer Credits */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neon-green mr-2">
              <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72722 21.351 5.1208 20.84 4.61Z" fill="currentColor"/>
            </svg>
            <p className="text-gray-300 text-sm" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {t('designedBy')}: Mohamed Jensh
            </p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-gray-300 text-sm" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              Mohamed Jensh: {t('developedBy')}
            </p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neon-green ml-2">
              <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72722 21.351 5.1208 20.84 4.61Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-12">
        {/* Animated Gradient Border */}
        <div className="h-px animated-border opacity-60"></div>
        
        {/* Copyright Content */}
        <div className="relative py-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 left-1/4 w-1 h-1 bg-neon-green rounded-full animate-float-dot"></div>
            <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float-dot"></div>
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-neon-green rounded-full animate-float-dot"></div>
            <div className="absolute top-6 left-1/2 w-0.5 h-0.5 bg-neon-green rounded-full animate-pulse"></div>
          </div>
          
          <div className="text-center relative z-10">
            {/* Main Copyright Text */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-float-dot"></div>
              <p className="text-gray-300 text-sm font-medium tracking-wider" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                © ٢٠٢٥
              </p>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-float-dot"></div>
            </div>
            
            {/* Company Name with Advanced Effects */}
            <h3 className="text-xl font-bold gradient-text mb-3 copyright-glow cursor-pointer" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              TagAlgo
            </h3>
            
            {/* Rights Text with Modern Styling */}
            <p className="text-gray-400 text-xs tracking-widest uppercase font-light" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              جميع الحقوق محفوظة
            </p>
            
            {/* Enhanced Decorative Line */}
            <div className="flex items-center justify-center mt-6 space-x-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-neon-green to-transparent"></div>
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent via-neon-green to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
