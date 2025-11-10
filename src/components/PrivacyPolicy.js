import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": isRTL ? "سياسة الخصوصية - TagAlgo" : "Privacy Policy - TagAlgo",
      "description": isRTL 
        ? "سياسة الخصوصية لـ TagAlgo - تاج ألغو"
        : "Privacy Policy for TagAlgo - تاج ألغو",
      "url": "https://tagalgo.com/#privacy",
      "isPartOf": {
        "@type": "WebSite",
        "name": "TagAlgo - تاج ألغو",
        "url": "https://tagalgo.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [isRTL]);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-8 text-center" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          <p className="text-sm text-gray-500 mb-6">
            {isRTL ? 'آخر تحديث: يناير 2025' : 'Last Updated: January 2025'}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mb-4">
              {isRTL ? 'مقدمة' : 'Introduction'}
            </h2>
            <p>
              {isRTL 
                ? 'نحن في TagAlgo ملتزمون بحماية خصوصيتك. تشرح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.'
                : 'At TagAlgo, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'المعلومات التي نجمعها' : 'Information We Collect'}
            </h2>
            <p>
              {isRTL 
                ? 'نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدماتنا، مثل الاسم والبريد الإلكتروني ورقم الهاتف.'
                : 'We collect information you provide directly when using our services, such as name, email, and phone number.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information'}
            </h2>
            <ul className="list-disc list-inside space-y-2 ms-4">
              <li>{isRTL ? 'تقديم وتحسين خدماتنا' : 'To provide and improve our services'}</li>
              <li>{isRTL ? 'التواصل معك بخصوص مشاريعك' : 'To communicate with you about your projects'}</li>
              <li>{isRTL ? 'إرسال التحديثات والعروض' : 'To send updates and offers'}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'حماية معلوماتك' : 'Protecting Your Information'}
            </h2>
            <p>
              {isRTL 
                ? 'نستخدم تقنيات أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف.'
                : 'We use advanced security technologies to protect your information from unauthorized access, alteration, or disclosure.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

