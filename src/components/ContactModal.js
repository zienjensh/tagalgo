import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactModal = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    companyName: '',
    workType: '',
    country: '',
    bestTime: ''
  });

  const [errors, setErrors] = useState({});

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        companyName: '',
        workType: '',
        country: '',
        bestTime: ''
      });
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = isRTL ? 'الاسم الأول مطلوب' : 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = isRTL ? 'الاسم الأخير مطلوب' : 'Last name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = isRTL ? 'رقم الهاتف مطلوب' : 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = isRTL ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isRTL ? 'البريد الإلكتروني غير صحيح' : 'Invalid email';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = isRTL ? 'اسم المشروع/الشركة مطلوب' : 'Company/Project name is required';
    }
    if (!formData.workType.trim()) {
      newErrors.workType = isRTL ? 'نوع العمل مطلوب' : 'Work type is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = isRTL ? 'الدولة مطلوبة' : 'Country is required';
    }
    if (!formData.bestTime.trim()) {
      newErrors.bestTime = isRTL ? 'أفضل وقت للتواصل مطلوب' : 'Best time to contact is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Format message for WhatsApp
    const phoneNumber = '201155277506';
    const message = isRTL 
      ? `مرحباً، أريد بدء مشروع جديد

الاسم: ${formData.firstName} ${formData.lastName}
رقم الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
اسم المشروع/الشركة: ${formData.companyName}
نوع العمل: ${formData.workType}
الدولة: ${formData.country}
أفضل وقت للتواصل: ${formData.bestTime}`
      : `Hello, I would like to start a new project

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Company/Project Name: ${formData.companyName}
Work Type: ${formData.workType}
Country: ${formData.country}
Best Time to Contact: ${formData.bestTime}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Close modal after sending
    onClose();
  };

  if (!isOpen) return null;

  const workTypes = isRTL 
    ? ['تصميم UI/UX', 'تطوير مواقع', 'تطوير تطبيقات', 'تسويق رقمي', 'هوية تجارية', 'أخرى']
    : ['UI/UX Design', 'Web Development', 'App Development', 'Digital Marketing', 'Branding', 'Other'];

  const timeSlots = isRTL
    ? ['صباحاً (9 ص - 12 م)', 'ظهراً (12 م - 3 م)', 'بعد الظهر (3 م - 6 م)', 'مساءً (6 م - 9 م)', 'أي وقت']
    : ['Morning (9 AM - 12 PM)', 'Noon (12 PM - 3 PM)', 'Afternoon (3 PM - 6 PM)', 'Evening (6 PM - 9 PM)', 'Any Time'];

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 max-w-4xl w-full mx-4 shadow-2xl transform transition-all duration-500 scale-100 my-8 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-green/5 to-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/5 to-neon-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        {/* Header */}
        <div className="relative z-10 flex items-center justify-between mb-8 md:mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-neon-green to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-grey mb-1" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'ابدأ مشروعك' : 'Start Your Project'}
              </h2>
              <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'املأ النموذج وسنتواصل معك قريباً' : 'Fill out the form and we\'ll contact you soon'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-110 group flex-shrink-0"
            aria-label="Close modal"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-gray-600 group-hover:text-neon-green transition-colors"
            >
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5 md:space-y-6">
          {/* Name Fields - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* First Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'الاسم الأول' : 'First Name'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                placeholder={isRTL ? 'أدخل الاسم الأول' : 'Enter first name'}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'الاسم الأخير' : 'Last Name'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                placeholder={isRTL ? 'أدخل الاسم الأخير' : 'Enter last name'}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Phone and Email - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'رقم الهاتف' : 'Phone Number'} <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                placeholder={isRTL ? 'مثال: +201234567890' : 'Example: +201234567890'}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'البريد الإلكتروني' : 'Email'} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                placeholder={isRTL ? 'example@email.com' : 'example@email.com'}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Company/Project Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {isRTL ? 'اسم المشروع / الشركة' : 'Company / Project Name'} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
              }`}
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
              placeholder={isRTL ? 'أدخل اسم المشروع أو الشركة' : 'Enter company or project name'}
            />
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Work Type and Country - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Work Type */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'نوع العمل' : 'Work Type'} <span className="text-red-500">*</span>
              </label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.workType ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
              >
                <option value="">{isRTL ? 'اختر نوع العمل' : 'Select work type'}</option>
                {workTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.workType && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.workType}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
                {isRTL ? 'الدولة' : 'Country'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                  errors.country ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
                }`}
                style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
                placeholder={isRTL ? 'أدخل الدولة' : 'Enter country'}
              />
              {errors.country && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {errors.country}
                </p>
              )}
            </div>
          </div>

          {/* Best Time to Contact */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-dark-grey" style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}>
              {isRTL ? 'أفضل وقت للتواصل' : 'Best Time to Contact'} <span className="text-red-500">*</span>
            </label>
            <select
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-green/50 bg-gray-50 hover:bg-white ${
                errors.bestTime ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-neon-green'
              }`}
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              <option value="">{isRTL ? 'اختر أفضل وقت' : 'Select best time'}</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.bestTime && (
              <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="inline">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {errors.bestTime}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3.5 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-[1.02]"
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              {isRTL ? 'إلغاء' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-neon-green to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-neon-green transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] relative overflow-hidden group"
              style={{ fontFamily: isRTL ? 'Tajawal, Cairo, Inter, sans-serif' : 'Taskor, Inter, sans-serif' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isRTL ? 'إرسال' : 'Send'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;

