import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  noindex = false 
}) => {
  const { isRTL } = useLanguage();
  const siteUrl = 'https://tagalgo.com';
  const defaultImage = `${siteUrl}/og-image.jpg`;
  const defaultTitle = isRTL 
    ? 'TagAlgo - تاج ألغو | تطوير مواقع ويب متقدمة وحلول تقنية مبتكرة'
    : 'TagAlgo - تاج ألغو | Advanced Web Development & Innovative Technical Solutions';
  const defaultDescription = isRTL
    ? 'TagAlgo - تاج ألغو: شركة رائدة في تطوير المواقع الإلكترونية وتطبيقات الهاتف المحمول. نقدم خدمات تطوير مواقع ويب احترافية، تطبيقات أندرويد وآيفون، حلول التجارة الإلكترونية، تصميم واجهات المستخدم، التسويق الرقمي. خبرة واسعة في React, Node.js, Python, MongoDB. استشارة مجانية!'
    : 'TagAlgo - تاج ألغو: Leading company in web development and mobile applications. We offer professional web development services, Android and iOS apps, e-commerce solutions, UI/UX design, and digital marketing. Extensive experience in React, Node.js, Python, MongoDB. Free consultation!';

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || siteUrl;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('title', finalTitle);
    updateMetaTag('description', finalDescription);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph Tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', finalUrl, true);
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:image', finalImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'TagAlgo - تاج ألغو', true);
    updateMetaTag('og:locale', isRTL ? 'ar_SA' : 'en_US', true);
    updateMetaTag('og:locale:alternate', isRTL ? 'en_US' : 'ar_SA', true);

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', finalUrl, true);
    updateMetaTag('twitter:title', finalTitle, true);
    updateMetaTag('twitter:description', finalDescription, true);
    updateMetaTag('twitter:image', finalImage, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalUrl);

    // Language alternates
    const addAlternate = (lang, href) => {
      let alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.setAttribute('rel', 'alternate');
        alternate.setAttribute('hreflang', lang);
        document.head.appendChild(alternate);
      }
      alternate.setAttribute('href', href);
    };

    addAlternate('ar', `${finalUrl}?lang=ar`);
    addAlternate('en', `${finalUrl}?lang=en`);
    addAlternate('x-default', finalUrl);

  }, [finalTitle, finalDescription, finalImage, finalUrl, type, noindex, isRTL, keywords]);

  return null;
};

export default SEO;

