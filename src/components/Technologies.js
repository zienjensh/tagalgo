import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

// Logo paths
const logos = {
  'Tailwind CSS': '/logoLang/Tailwind_CSS_Logo.svg.png',
  'React': '/logoLang/React-icon.svg.png',
  'Node.js': '/logoLang/Node.js_logo.svg.png',
  'Next.js': '/logoLang/Nextjs-logo.svg.png',
  'TypeScript': '/logoLang/Typescript_logo_2020.svg.png',
  'MongoDB': '/logoLang/MongoDB_Logo.svg.png',
  'Python': '/logoLang/Python_logo.svg.png'
};

const Technologies = () => {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('technologies-section');
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

  const technologies = [
    { name: 'Tailwind CSS', color: '#06b6d4', logo: logos['Tailwind CSS'] },
    { name: 'React', color: '#61dafb', logo: logos['React'] },
    { name: 'Node.js', color: '#339933', logo: logos['Node.js'] },
    { name: 'Next.js', color: '#000000', logo: logos['Next.js'] },
    { name: 'TypeScript', color: '#3178c6', logo: logos['TypeScript'] },
    { name: 'MongoDB', color: '#47a248', logo: logos['MongoDB'] },
    { name: 'Python', color: '#3776ab', logo: logos['Python'] }
  ];

  return (
    <section id="technologies-section" className="py-20 md:py-24 px-6 ms-6 me-6 mb-20 md:mb-24 bg-white/80 backdrop-blur-sm relative overflow-hidden rounded-3xl border border-gray-100/50 shadow-sm">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-neon-green rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-neon-green rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/3 w-14 h-14 bg-blue-500 rounded-full animate-pulse"></div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-16 md:mb-20">
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
              {t('Languages')}
            </h1>
        </div>
        
        {/* Main Title */}
        <h2 className={`relative z-20 text-4xl md:text-5xl font-black text-dark-grey mb-4 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`} style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          {t('technologiesTitle')}
        </h2>
        <div className={`w-24 h-1 bg-gradient-to-r from-neon-green to-blue-500 mx-auto transform transition-all duration-1000 delay-300 ${
          isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}></div>
      </div>

      {/* Technologies Grid */}
      <div className="relative z-10">
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group transform transition-all duration-500 hover:scale-110 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-light rounded-2xl p-6 card-hover group">
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon with enhanced effect */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative overflow-hidden"
                    style={{ 
                      backgroundColor: tech.color,
                      boxShadow: `0 4px 20px ${tech.color}50, 0 0 0 1px rgba(255, 255, 255, 0.2) inset`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert relative z-10"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Name */}
                  <span className="text-gray-700 text-sm font-semibold text-center group-hover:text-neon-green transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-0 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-neon-green rounded-full animate-bounce"></div>
    </section>
  );
};

export default Technologies;
