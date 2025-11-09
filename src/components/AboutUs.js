import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": isRTL ? "من نحن - TagAlgo" : "About Us - TagAlgo",
      "description": isRTL 
        ? "تعرف على TagAlgo - تاج ألغو: رؤيتنا، مهمتنا، وقيمنا"
        : "Learn about TagAlgo - تاج ألغو: our vision, mission, and values",
      "url": "https://tagalgo.com/#about",
      "mainEntity": {
        "@type": "Organization",
        "name": "TagAlgo - تاج ألغو"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [isRTL]);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-grey mb-8 text-center" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          {isRTL ? 'من نحن' : 'About Us'}
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          <p className="text-lg">
            {isRTL 
              ? 'TagAlgo هي شركة رائدة في مجال تطوير المواقع والتطبيقات والحلول الرقمية. نحن متخصصون في تحويل الأفكار إلى واقع رقمي متميز.'
              : 'TagAlgo is a leading company in web development, applications, and digital solutions. We specialize in transforming ideas into exceptional digital reality.'}
          </p>
          
          <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
            {isRTL ? 'رؤيتنا' : 'Our Vision'}
          </h2>
          <p>
            {isRTL 
              ? 'أن نكون الشركة الرائدة في مجال التطوير الرقمي والحلول التقنية في المنطقة، وأن نساعد عملاءنا على تحقيق أهدافهم من خلال حلول مبتكرة وعصرية.'
              : 'To be the leading company in digital development and technical solutions in the region, helping our clients achieve their goals through innovative and modern solutions.'}
          </p>
          
          <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
            {isRTL ? 'مهمتنا' : 'Our Mission'}
          </h2>
          <p>
            {isRTL 
              ? 'نقدم حلولاً رقمية متكاملة وعالية الجودة تساعد الشركات والأفراد على النمو والتطور في العالم الرقمي. نحن ملتزمون بتقديم أفضل الخدمات وأحدث التقنيات.'
              : 'We provide integrated, high-quality digital solutions that help companies and individuals grow and develop in the digital world. We are committed to delivering the best services and latest technologies.'}
          </p>
          
          <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
            {isRTL ? 'قيمنا' : 'Our Values'}
          </h2>
          <ul className="list-disc list-inside space-y-2 ms-4">
            <li>{isRTL ? 'الجودة والتميز في كل ما نقدمه' : 'Quality and excellence in everything we offer'}</li>
            <li>{isRTL ? 'الابتكار والتطوير المستمر' : 'Innovation and continuous development'}</li>
            <li>{isRTL ? 'الشفافية والصدق مع عملائنا' : 'Transparency and honesty with our clients'}</li>
            <li>{isRTL ? 'الالتزام بمواعيد التسليم' : 'Commitment to delivery deadlines'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

