import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = ({ onContactClick }) => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative overflow-hidden mt-20 md:mt-24">
      {/* Animated Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-grey via-gray-900 to-dark-grey">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neon-green/10 via-transparent to-blue-500/10 animate-gradient-shift"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green/20 rounded-full blur-3xl animate-float-orb"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-orb-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            
            {/* Brand Section - Glassmorphism Card */}
            <div className={`glass-card p-6 md:p-8 rounded-3xl transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-neon-green/50 animate-glow-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                  TagAlgo
                </h2>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL 
                  ? 'نحول أفكارك إلى واقع رقمي متميز. نحن متخصصون في تطوير المواقع والتطبيقات والحلول الرقمية.'
                  : 'Transforming your ideas into exceptional digital reality. We specialize in web development, apps, and digital solutions.'}
              </p>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3">
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@tagalgo.official" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/@tagalgo.official" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                  aria-label="YouTube"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/tagalgo.official/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a 
                  href="https://x.com/tagalgo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                  aria-label="X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/tagalgo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon group"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/201155277506" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon group"
                  aria-label="WhatsApp"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links - Glassmorphism Card */}
            <div className={`glass-card p-6 md:p-8 rounded-3xl transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-neon-green to-blue-500 rounded-full"></div>
                {isRTL ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-3">
                {[
                  { key: 'services', label: isRTL ? 'الخدمات' : 'Services', type: 'anchor' },
                  { key: 'technologies', label: isRTL ? 'التقنيات' : 'Technologies', type: 'anchor' },
                  { key: 'ourClients', label: isRTL ? 'عملاؤنا' : 'Our Clients', type: 'anchor' },
                  { key: 'contact', label: isRTL ? 'اتصل بنا' : 'Contact Us', type: 'modal' },
                  { key: 'about', label: isRTL ? 'من نحن' : 'About Us', type: 'page' },
                  { key: 'privacy', label: isRTL ? 'سياسة الخصوصية' : 'Privacy Policy', type: 'page' },
                  { key: 'delivery', label: isRTL ? 'سياسة التسليم' : 'Delivery Policy', type: 'page' },
                  { key: 'refund', label: isRTL ? 'سياسة الاسترجاع' : 'Refund Policy', type: 'page' }
                ].map((link, index) => (
                  <li key={link.key} className="group">
                    <a 
                      href={link.type === 'page' ? `#${link.key}` : link.type === 'modal' ? '#' : `#${link.key}`}
                      onClick={(e) => {
                        if (link.type === 'page') {
                          e.preventDefault();
                          window.location.hash = link.key;
                        } else if (link.type === 'modal' && onContactClick) {
                          e.preventDefault();
                          onContactClick();
                        }
                      }}
                      className="flex items-center gap-2 text-gray-300 hover:text-neon-green transition-all duration-300 group-hover:translate-x-1"
                      style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Glassmorphism Card */}
            <div className={`glass-card p-6 md:p-8 rounded-3xl transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-neon-green to-blue-500 rounded-full"></div>
                {isRTL ? 'معلومات الاتصال' : 'Contact Info'}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-green/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neon-green">
                      <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61 4.42 5.56 6.5 4.5C8.58 3.44 11.25 3.44 13.33 4.5C15.42 5.56 17 7.61 17 10C17 17 12 23 12 23S7 17 7 10C7 8.5 7.5 7 8.5 6C9.5 5 11 5 12 5C13 5 14.5 5 15.5 6C16.5 7 17 8.5 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{t('location')}</p>
                    <p className="text-white text-sm" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      Cairo, Egypt
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-green/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neon-green">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{t('email')}</p>
                    <a href="mailto:info@tagalgo.com" className="text-white text-sm hover:text-neon-green transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      info@tagalgo.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-neon-green/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-neon-green">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9844 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3768 21.9119 20.0964 21.9451 19.8173 21.9203C16.7422 21.5855 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27099 2.12 4.18C2.09522 3.90347 2.12788 3.62476 2.21649 3.36219C2.3051 3.09963 2.44756 2.85866 2.63476 2.6545C2.82196 2.45034 3.0498 2.28734 3.30379 2.17599C3.55777 2.06464 3.83233 2.00726 4.11 2.00726H7.11C7.59531 1.99522 8.06679 2.16708 8.43376 2.49153C8.80073 2.81599 9.03994 3.27412 9.11 3.76C9.23662 4.7606 9.47144 5.74342 9.81 6.69C9.94454 7.08815 9.97366 7.51543 9.89391 7.92676C9.81415 8.33808 9.62886 8.71671 9.36 9.02L8.09 10.29C9.51355 12.4884 11.5116 14.4865 13.71 15.91L14.98 14.64C15.2833 14.3711 15.6619 14.1858 16.0732 14.1061C16.4846 14.0263 16.9119 14.0554 17.31 14.19C18.2566 14.5286 19.2394 14.7634 20.24 14.89C20.7261 14.9596 21.1851 15.1992 21.5095 15.5667C21.8339 15.9341 22.0055 16.4063 21.99 16.89L21.99 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{t('contactUs')}</p>
                    <a href="tel:+201155277506" className="text-white text-sm hover:text-neon-green transition-colors duration-300" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                      +201155277506
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter/CTA - Glassmorphism Card */}
            <div className={`glass-card p-6 md:p-8 rounded-3xl transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                <div className="w-1 h-6 bg-gradient-to-b from-neon-green to-blue-500 rounded-full"></div>
                {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL 
                  ? 'جاهز لتحويل فكرتك إلى واقع؟ تواصل معنا الآن!'
                  : 'Ready to turn your idea into reality? Contact us now!'}
              </p>
              <a 
                href="https://wa.me/201155277506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-neon-green to-blue-500 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-neon-green transition-all duration-300 shadow-lg shadow-neon-green/30 hover:shadow-xl hover:shadow-neon-green/50 transform hover:scale-105 group"
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
              >
                {isRTL ? 'تواصل معنا' : 'Get in Touch'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Divider with Animation */}
          <div className="relative mb-8 md:mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
          </div>

          {/* Bottom Section */}
          <div className={`flex flex-col md:flex-row items-center justify-between gap-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-sm" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                © 2025 <span className="text-neon-green font-semibold">TagAlgo</span>. {isRTL ? 'جميع الحقوق محفوظة' : 'All rights reserved'}
              </p>
            </div>

            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-gray-400 text-sm group hover:text-neon-green transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-neon-green group-hover:scale-110 transition-transform duration-300">
                <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.6417 1.5487 7.04097 1.5487 8.5C1.5487 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.06211 22.0329 6.39467C21.7563 5.72722 21.351 5.1208 20.84 4.61Z" fill="currentColor"/>
              </svg>
              <span style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {t('designedBy')}: <span className="text-neon-green font-semibold">Mohamed Jensh</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
