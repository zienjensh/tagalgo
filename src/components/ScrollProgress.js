import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-neon-green rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{
        background: `conic-gradient(from 0deg, #00ff88 ${scrollProgress * 3.6}deg, rgba(0, 255, 136, 0.2) ${scrollProgress * 3.6}deg)`
      }}
    >
      {/* Progress Circle */}
      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-neon-green group-hover:scale-110 transition-transform duration-300"
        >
          <path 
            d="M12 19V5M5 12l7-7 7 7" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      
      {/* Progress Text */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-grey text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {Math.round(scrollProgress)}%
      </div>
    </button>
  );
};

export default ScrollProgress;
