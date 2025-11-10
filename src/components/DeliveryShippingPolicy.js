import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DeliveryShippingPolicy = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": isRTL ? "سياسة التسليم والشحن - TagAlgo" : "Delivery & Shipping Policy - TagAlgo",
      "description": isRTL 
        ? "سياسة التسليم والشحن لـ TagAlgo - تاج ألغو"
        : "Delivery & Shipping Policy for TagAlgo",
      "url": "https://tagalgo.com/#delivery"
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
          {isRTL ? 'سياسة التسليم والشحن' : 'Delivery & Shipping Policy'}
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          <p className="text-sm text-gray-500 mb-6">
            {isRTL ? 'آخر تحديث: يناير 2025' : 'Last Updated: January 2025'}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mb-4">
              {isRTL ? 'مدة التسليم' : 'Delivery Timeframe'}
            </h2>
            <p>
              {isRTL 
                ? 'نلتزم بتسليم جميع المشاريع في المواعيد المتفق عليها. تختلف مدة التسليم حسب نوع المشروع وتعقيده.'
                : 'We are committed to delivering all projects on the agreed deadlines. Delivery timeframes vary depending on the type and complexity of the project.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'طرق التسليم' : 'Delivery Methods'}
            </h2>
            <ul className="list-disc list-inside space-y-2 ms-4">
              <li>{isRTL ? 'تسليم رقمي عبر الإنترنت' : 'Digital delivery via the internet'}</li>
              <li>{isRTL ? 'تسليم مباشر للعملاء المحليين' : 'Direct delivery for local clients'}</li>
              <li>{isRTL ? 'تسليم عبر البريد الإلكتروني' : 'Delivery via email'}</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'التأخير في التسليم' : 'Delivery Delays'}
            </h2>
            <p>
              {isRTL 
                ? 'في حالة حدوث أي تأخير غير متوقع، سنقوم بإبلاغك فوراً واتخاذ الإجراءات اللازمة لضمان التسليم في أقرب وقت ممكن.'
                : 'In case of any unexpected delays, we will notify you immediately and take necessary actions to ensure delivery as soon as possible.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeliveryShippingPolicy;

