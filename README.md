# TagAlgo Website

موقع ويب احترافي مطابق للتصميم المطلوب باستخدام React و Tailwind CSS.

## المميزات

- تصميم مطابق تماماً للصورة المرجعية
- استخدام React مع Tailwind CSS
- تصميم متجاوب (Responsive Design)
- ألوان مخصصة (Neon Green, Dark Grey)
- خطوط عصرية (Inter Font)
- تأثيرات تفاعلية

## التثبيت والتشغيل

### المتطلبات
- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. تثبيت المتطلبات:
```bash
npm install
```

2. تشغيل المشروع:
```bash
npm start
```

3. فتح المتصفح على:
```
http://localhost:3000
```

### بناء المشروع للإنتاج

```bash
npm run build
```

## هيكل المشروع

```
src/
├── components/
│   ├── Header.js      # شريط التنقل العلوي
│   └── Hero.js        # المنطقة الرئيسية
├── App.js             # المكون الرئيسي
├── index.js           # نقطة البداية
└── index.css          # ملف الأنماط الرئيسي
```

## الألوان المستخدمة

- **Neon Green**: #00ff88
- **Dark Grey**: #2a2a2a
- **White**: #ffffff
- **Light Grey**: #f5f5f5

## الخطوط

- **Inter**: خط عصرية ونظيفة
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900

## المكونات

### Header
- شعار BaltuDev مع أيقونة
- قائمة التنقل (Services, How we work, Cases)
- أيقونات التواصل الاجتماعي (Telegram, WhatsApp)

### Hero Section
- عنوان رئيسي كبير مع كلمة "WEBSITES" باللون الأخضر النيون
- نص داعم
- أزرار المميزات (Strengthening your brand, Boost conversions, Communicating value)
- أزرار الدعوة للعمل (View examples, Get a consultation)
- خطوط زخرفية في الزاوية اليمنى العلوية

## التخصيص

يمكن تخصيص الألوان من خلال ملف `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'neon-green': '#00ff88',
      'dark-grey': '#2a2a2a',
      'light-grey': '#f5f5f5'
    }
  }
}
```
"# tagalgo" 
