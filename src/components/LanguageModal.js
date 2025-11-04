import React from 'react';

const LanguageModal = ({ onLanguageSelect }) => {
  const handleLanguageSelect = (language) => {
    localStorage.setItem('selectedLanguage', language);
    onLanguageSelect(language);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl transform transition-all duration-500 scale-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-dark-grey mb-2" style={{ fontFamily: 'Taskor, Inter, sans-serif' }}>
            Choose Your Language
          </h2>
          <p className="text-gray-600">
            اختر لغتك المفضلة
          </p>
        </div>

        {/* Language Options */}
        <div className="space-y-4">
          {/* English */}
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full p-4 rounded-2xl border-2 border-gray-200 hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">EN</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-dark-grey group-hover:text-neon-green transition-colors duration-300">
                  English
                </h3>
                <p className="text-sm text-gray-600">
                  Continue in English
                </p>
              </div>
            </div>
          </button>

          {/* Arabic */}
          <button
            onClick={() => handleLanguageSelect('ar')}
            className="w-full p-4 rounded-2xl border-2 border-gray-200 hover:border-neon-green hover:bg-neon-green/5 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ع</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-dark-grey group-hover:text-neon-green transition-colors duration-300">
                  العربية
                </h3>
                <p className="text-sm text-gray-600">
                  المتابعة باللغة العربية
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            You can change this later in settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;
