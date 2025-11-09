import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const RefundCancellationPolicy = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": isRTL ? "سياسة الاسترجاع والإلغاء - TagAlgo" : "Refund & Cancellation Policy - TagAlgo",
      "description": isRTL 
        ? "سياسة الاسترجاع والإلغاء لـ TagAlgo - تاج ألغو"
        : "Refund & Cancellation Policy for TagAlgo",
      "url": "https://tagalgo.com/#refund"
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
          {isRTL ? 'سياسة الاسترجاع والإلغاء' : 'Refund & Cancellation Policy'}
        </h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
          <p className="text-sm text-gray-500 mb-6">
            {isRTL ? 'آخر تحديث: يناير 2025' : 'Last Updated: January 2025'}
          </p>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mb-4">
              {isRTL ? 'سياسة الإلغاء' : 'Cancellation Policy'}
            </h2>
            <p>
              {isRTL 
                ? 'يمكنك إلغاء طلبك في أي وقت قبل بدء العمل. بعد بدء المشروع، قد يتم تطبيق رسوم إلغاء حسب مرحلة التقدم.'
                : 'You can cancel your order at any time before work begins. After the project starts, cancellation fees may apply depending on the progress stage.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'سياسة الاسترجاع' : 'Refund Policy'}
            </h2>
            <p>
              {isRTL 
                ? 'نقدم استرجاع كامل للمبلغ المدفوع إذا تم الإلغاء قبل بدء العمل. بعد بدء المشروع، يتم احتساب الاسترجاع حسب العمل المنجز.'
                : 'We offer a full refund if cancellation occurs before work begins. After the project starts, refunds are calculated based on work completed.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'مدة معالجة الاسترجاع' : 'Refund Processing Time'}
            </h2>
            <p>
              {isRTL 
                ? 'يتم معالجة طلبات الاسترجاع خلال 5-10 أيام عمل. سيتم إرجاع المبلغ إلى نفس طريقة الدفع المستخدمة.'
                : 'Refund requests are processed within 5-10 business days. The amount will be refunded to the same payment method used.'}
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-dark-grey mt-8 mb-4">
              {isRTL ? 'الاتصال بنا' : 'Contact Us'}
            </h2>
            <p>
              {isRTL 
                ? 'لأي استفسارات حول الاسترجاع أو الإلغاء، يرجى التواصل معنا عبر البريد الإلكتروني أو الهاتف.'
                : 'For any inquiries regarding refunds or cancellations, please contact us via email or phone.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;

