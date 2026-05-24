// ==================== SERVICES DATA ====================
var services = [];

function initServices() {
  var stored = localStorage.getItem('ash_services');
  var version = localStorage.getItem('ash_services_version');
  if (stored && version === '3') {
    try {
      services = JSON.parse(stored);
      // Force reload if services have old short steps
      if (services.length > 0 && services[0].steps && services[0].steps.length < 5) {
        services = getDefaultServices();
      }
    } catch(e) {
      services = getDefaultServices();
    }
  } else {
    services = getDefaultServices();
    localStorage.setItem('ash_services_version', '2');
    saveServices();
  }
}

function getDefaultServices() {
  return [
    {
      id: "ui-ux",
      name: { en: "UI/UX Design", ar: "تصميم UI/UX" },
      description: { en: "Web & mobile app design", ar: "تصميم تطبيقات الويب والموبايل" },
      originalPrice: 3200,
      discountPercentage: 0,
      image: "images/services/ui-ux.svg",
      currency: "AED",
      steps: [
        { type: "radio", question: { en: "Project Type", ar: "نوع المشروع" }, options: [
          { id: "website", name: { en: "Website", ar: "موقع ويب" }, mod: 0 },
          { id: "mobile-app", name: { en: "Mobile App", ar: "تطبيق موبايل" }, mod: 1200 }
        ]},
        { type: "text", question: { en: "Company / Brand Name", ar: "اسم الشركة / العلامة التجارية" }, placeholder: { en: "e.g. TechZone", ar: "مثال: تك زون" } },
        { type: "text", question: { en: "Industry / Niche", ar: "المجال / التخصص" }, placeholder: { en: "e.g. E-commerce, Healthcare, Education", ar: "مثال: تجارة إلكترونية، صحة، تعليم" } },
        { type: "text", question: { en: "Target Audience", ar: "الجمهور المستهدف" }, placeholder: { en: "e.g. Young professionals in UAE", ar: "مثال: محترفون شباب في الإمارات" } },
        { type: "text", question: { en: "Preferred Colors", ar: "الألوان المفضلة" }, placeholder: { en: "e.g. Blue, White, Gold", ar: "مثال: أزرق، أبيض، ذهبي" } },
        { type: "radio", question: { en: "Design Style", ar: "أسلوب التصميم" }, options: [
          { id: "modern-minimal", name: { en: "Modern & Minimal", ar: "حديث وبسيط" }, mod: 0 },
          { id: "corporate", name: { en: "Professional / Corporate", ar: "احترافي / مؤسسي" }, mod: 0 },
          { id: "creative", name: { en: "Creative & Fun", ar: "إبداعي وممتع" }, mod: 0 },
          { id: "luxury", name: { en: "Luxury / Elegant", ar: "فاخر / أنيق" }, mod: 0 }
        ]},
        { type: "text", question: { en: "Pages / Screens Needed", ar: "الصفحات / الشاشات المطلوبة" }, placeholder: { en: "e.g. Home, About, Services, Contact", ar: "مثال: الرئيسية، من نحن، الخدمات، اتصل بنا" } },
        { type: "radio", question: { en: "Do you have brand guidelines?", ar: "هل لديك دليل هوية العلامة التجارية؟" }, options: [
          { id: "yes", name: { en: "Yes", ar: "نعم" }, mod: 0 },
          { id: "no", name: { en: "No", ar: "لا" }, mod: 0 }
        ]},
        { type: "text", question: { en: "Reference Websites / Apps (URLs)", ar: "مواقع / تطبيقات مرجعية (روابط)" }, placeholder: { en: "e.g. https://example.com", ar: "مثال: https://example.com" } },
        { type: "text", question: { en: "Deadline", ar: "الموعد النهائي" }, placeholder: { en: "e.g. 2 weeks, 1 month", ar: "مثال: أسبوعين، شهر" } }
      ]
    },
    {
      id: "branding",
      name: { en: "Branding", ar: "الهوية التجارية" },
      description: { en: "Complete branding solutions", ar: "حلول الهوية التجارية الكاملة" },
      originalPrice: 2400,
      discountPercentage: 10,
      image: "images/services/branding.svg",
      currency: "AED",
      steps: [
        { type: "radio", question: { en: "What do you need?", ar: "ماذا تحتاج؟" }, options: [
          { id: "logo-only", name: { en: "Logo Only", ar: "الشعار فقط" }, mod: 0 },
          { id: "full-brand", name: { en: "Full Branding (Logo + Identity)", ar: "هوية كاملة (شعار + هوية)" }, mod: 1800 }
        ]},
        { type: "text", question: { en: "Company / Brand Name", ar: "اسم الشركة / العلامة التجارية" }, placeholder: { en: "e.g. ASH CS", ar: "مثال: ASH CS" } },
        { type: "text", question: { en: "Industry", ar: "المجال" }, placeholder: { en: "e.g. Technology, Fashion, Real Estate", ar: "مثال: تكنولوجيا، أزياء، عقارات" } },
        { type: "text", question: { en: "Brand Values & Personality", ar: "قيم وشخصية العلامة التجارية" }, placeholder: { en: "e.g. Innovative, Trustworthy, Premium", ar: "مثال: مبتكر، موثوق، فاخر" } },
        { type: "text", question: { en: "Preferred Colors", ar: "الألوان المفضلة" }, placeholder: { en: "e.g. Deep Navy, Gold, White", ar: "مثال: كحلي غامق، ذهبي، أبيض" } },
        { type: "text", question: { en: "Preferred Fonts (if any)", ar: "الخطوط المفضلة (إن وجدت)" }, placeholder: { en: "e.g. Inter, Cairo, Playfair Display", ar: "مثال: Inter, Cairo, Playfair Display" } },
        { type: "radio", question: { en: "Logo Style Preference", ar: "تفضيل نمط الشعار" }, options: [
          { id: "minimal", name: { en: "Minimal / Clean", ar: "بسيط / نظيف" }, mod: 0 },
          { id: "modern", name: { en: "Modern / Contemporary", ar: "حديث / معاصر" }, mod: 0 },
          { id: "classic", name: { en: "Classic / Timeless", ar: "كلاسيكي / خالد" }, mod: 0 },
          { id: "playful", name: { en: "Playful / Creative", ar: "مرح / إبداعي" }, mod: 0 }
        ]},
        { type: "text", question: { en: "Competitor Brands to Reference", ar: "علامات تجارية منافسة كمرجع" }, placeholder: { en: "e.g. Apple, Nike, local brands", ar: "مثال: Apple, Nike, علامات محلية" } },
        { type: "text", question: { en: "Where will the branding be used?", ar: "أين ستستخدم الهوية التجارية؟" }, placeholder: { en: "e.g. Website, Social Media, Print, Packaging", ar: "مثال: موقع، تواصل اجتماعي، مطبوعات، تغليف" } },
        { type: "text", question: { en: "Deadline", ar: "الموعد النهائي" }, placeholder: { en: "e.g. 3 weeks, 2 months", ar: "مثال: 3 أسابيع، شهرين" } }
      ]
    },
    {
      id: "logos",
      name: { en: "Logos", ar: "الشعارات" },
      description: { en: "Custom logo design", ar: "تصميم شعار مخصص" },
      originalPrice: 1200,
      discountPercentage: 15,
      image: "images/services/logos.svg",
      currency: "AED",
      steps: [
        { type: "radio", question: { en: "Logo Type", ar: "نوع الشعار" }, options: [
          { id: "wordmark", name: { en: "Wordmark (Text-based)", ar: "ماركة نصية" }, mod: 0 },
          { id: "symbol", name: { en: "Symbol / Icon", ar: "رمز / أيقونة" }, mod: 300 },
          { id: "combination", name: { en: "Combination (Text + Icon)", ar: "مزيج (نص + رمز)" }, mod: 500 },
          { id: "mascot", name: { en: "Mascot / Character", ar: "شخصية كرتونية" }, mod: 800 }
        ]},
        { type: "text", question: { en: "Company / Brand Name", ar: "اسم الشركة / العلامة التجارية" }, placeholder: { en: "e.g. ASH CS", ar: "مثال: ASH CS" } },
        { type: "text", question: { en: "Tagline (if any)", ar: "الشعار التسويقي (إن وجد)" }, placeholder: { en: "e.g. Design & IT Solutions", ar: "مثال: حلول التصميم والتكنولوجيا" } },
        { type: "text", question: { en: "Industry", ar: "المجال" }, placeholder: { en: "e.g. Design, Tech, Food, Sports", ar: "مثال: تصميم، تقنية، طعام، رياضة" } },
        { type: "text", question: { en: "Color Preferences", ar: "الألوان المفضلة" }, placeholder: { en: "e.g. Gold, White, Dark Blue", ar: "مثال: ذهبي، أبيض، أزرق داكن" } },
        { type: "radio", question: { en: "Logo Style", ar: "أسلوب الشعار" }, options: [
          { id: "minimal", name: { en: "Minimal / Simple", ar: "بسيط / بسيط" }, mod: 0 },
          { id: "modern", name: { en: "Modern / Trendy", ar: "حديث / عصري" }, mod: 0 },
          { id: "classic", name: { en: "Classic / Traditional", ar: "كلاسيكي / تقليدي" }, mod: 0 },
          { id: "luxury", name: { en: "Luxury / Premium", ar: "فاخر / راقي" }, mod: 0 }
        ]},
        { type: "text", question: { en: "Font Preferences (if any)", ar: "تفضيلات الخط (إن وجدت)" }, placeholder: { en: "e.g. Bold, Sans-serif, Script", ar: "مثال: عريض، بدون زوائد، خط يدوي" } },
        { type: "text", question: { en: "Symbol / Icon Ideas", ar: "أفكار الرمز / الأيقونة" }, placeholder: { en: "e.g. Abstract shape, Letter mark, Animal", ar: "مثال: شكل تجريدي، حرف، حيوان" } },
        { type: "text", question: { en: "Reference Logos (URLs / descriptions)", ar: "شعارات مرجعية (روابط / أوصاف)" }, placeholder: { en: "e.g. brands you admire", ar: "مثال: علامات تعجبك" } },
        { type: "text", question: { en: "Deadline", ar: "الموعد النهائي" }, placeholder: { en: "e.g. 1 week, 10 days", ar: "مثال: أسبوع، 10 أيام" } }
      ]
    },
    {
      id: "business-cards",
      name: { en: "Business Cards", ar: "بطاقات العمل" },
      description: { en: "Premium business cards design", ar: "تصميم بطاقات عمل فاخرة" },
      originalPrice: 550,
      discountPercentage: 0,
      image: "images/services/business-cards.svg",
      currency: "AED",
      steps: [
        { type: "radio", question: { en: "Quantity", ar: "الكمية" }, options: [
          { id: "100", name: { en: "100 Cards", ar: "100 بطاقة" }, mod: 0 },
          { id: "500", name: { en: "500 Cards", ar: "500 بطاقة" }, mod: 450 }
        ]},
        { type: "text", question: { en: "Company Name", ar: "اسم الشركة" }, placeholder: { en: "e.g. ASH CS Creative Studio", ar: "مثال: استوديو ASH CS الإبداعي" } },
        { type: "text", question: { en: "Your Name & Job Title", ar: "الاسم والمسمى الوظيفي" }, placeholder: { en: "e.g. Ahmed — CEO", ar: "مثال: أحمد — المدير التنفيذي" } },
        { type: "text", question: { en: "Contact Details", ar: "بيانات الاتصال" }, placeholder: { en: "e.g. Phone, Email, Website, Address", ar: "مثال: هاتف، بريد، موقع، عنوان" } },
        { type: "radio", question: { en: "Design Style", ar: "أسلوب التصميم" }, options: [
          { id: "classic", name: { en: "Classic / Professional", ar: "كلاسيكي / احترافي" }, mod: 0 },
          { id: "modern", name: { en: "Modern / Minimal", ar: "حديث / بسيط" }, mod: 0 },
          { id: "luxury", name: { en: "Luxury / Premium", ar: "فاخر / راقي" }, mod: 100 },
          { id: "creative", name: { en: "Creative / Unique", ar: "إبداعي / فريد" }, mod: 100 }
        ]},
        { type: "text", question: { en: "Preferred Colors", ar: "الألوان المفضلة" }, placeholder: { en: "e.g. White, Navy, Gold", ar: "مثال: أبيض، كحلي، ذهبي" } },
        { type: "text", question: { en: "Logo (company logo file or description)", ar: "الشعار (ملف الشعار أو وصفه)" }, placeholder: { en: "e.g. Upload later or use our existing brand logo", ar: "مثال: سأرفع لاحقاً أو استخدم شعار علامتنا" } },
        { type: "radio", question: { en: "Double-sided?", ar: "وجهين؟" }, options: [
          { id: "single", name: { en: "Single-sided", ar: "وجه واحد" }, mod: 0 },
          { id: "double", name: { en: "Double-sided", ar: "وجهين" }, mod: 100 }
        ]},
        { type: "text", question: { en: "Additional Information", ar: "معلومات إضافية" }, placeholder: { en: "e.g. Social media handles, QR code, services list", ar: "مثال: حسابات التواصل، رمز QR، قائمة الخدمات" } },
        { type: "text", question: { en: "Deadline", ar: "الموعد النهائي" }, placeholder: { en: "e.g. 5 days, 2 weeks", ar: "مثال: 5 أيام، أسبوعين" } }
      ]
    },
    {
      id: "cv-design",
      name: { en: "CV Design", ar: "تصميم السيرة الذاتية" },
      description: { en: "Professional CV / Resume design", ar: "تصميم السيرة الذاتية الاحترافي" },
      originalPrice: 650,
      discountPercentage: 20,
      image: "images/services/cv-design.svg",
      currency: "AED",
      steps: [
        { type: "radio", question: { en: "Layout Style", ar: "نمط التخطيط" }, options: [
          { id: "classic", name: { en: "Classic / Traditional", ar: "كلاسيكي / تقليدي" }, mod: 0 },
          { id: "modern", name: { en: "Modern / Clean", ar: "حديث / نظيف" }, mod: 0 },
          { id: "creative", name: { en: "Creative / Infographic", ar: "إبداعي / إنفوغرافيك" }, mod: 100 },
          { id: "executive", name: { en: "Executive / Premium", ar: "تنفيذي / فاخر" }, mod: 150 }
        ]},
        { type: "text", question: { en: "Full Name", ar: "الاسم الكامل" }, placeholder: { en: "e.g. Ahmed Alshbah", ar: "مثال: أحمد الشبح" } },
        { type: "text", question: { en: "Job Title / Target Position", ar: "المسمى الوظيفي / المنصب المستهدف" }, placeholder: { en: "e.g. Senior UI/UX Designer", ar: "مثال: كبير مصممي UI/UX" } },
        { type: "text", question: { en: "Years of Experience", ar: "سنوات الخبرة" }, placeholder: { en: "e.g. 5+ years in design", ar: "مثال: أكثر من 5 سنوات في التصميم" } },
        { type: "text", question: { en: "Color Preference", ar: "الألوان المفضلة" }, placeholder: { en: "e.g. Blue & White, Dark theme", ar: "مثال: أزرق وأبيض، واجهة داكنة" } },
        { type: "text", question: { en: "Sections to Include", ar: "الأقسام المطلوب تضمينها" }, placeholder: { en: "e.g. Summary, Experience, Skills, Education, Certifications", ar: "مثال: ملخص، خبرة، مهارات، تعليم، شهادات" } },
        { type: "radio", question: { en: "Include Photo?", ar: "هل تريد تضمين صورة؟" }, options: [
          { id: "yes-photo", name: { en: "Yes, include photo", ar: "نعم، تضمين صورة" }, mod: 0 },
          { id: "no-photo", name: { en: "No photo", ar: "بدون صورة" }, mod: 0 }
        ]},
        { type: "text", question: { en: "Languages Spoken", ar: "اللغات التي تتحدثها" }, placeholder: { en: "e.g. Arabic (Native), English (Fluent)", ar: "مثال: العربية (أم)، الإنجليزية (بطلاقة)" } },
        { type: "text", question: { en: "Reference CV (link or description)", ar: "سيرة ذاتية مرجعية (رابط أو وصف)" }, placeholder: { en: "e.g. Link to existing CV or describe your style preference", ar: "مثال: رابط لسيرتك الحالية أو صف أسلوبك المفضل" } },
        { type: "text", question: { en: "Deadline", ar: "الموعد النهائي" }, placeholder: { en: "e.g. 3 days, 1 week", ar: "مثال: 3 أيام، أسبوع" } }
      ]
    }
  ];
}

// Save services
function saveServices() {
  localStorage.setItem('ash_services', JSON.stringify(services));
}

// ==================== PRICING ====================
function calculateFinalPrice(service) {
  if (!service) return 0;
  var discount = service.discountPercentage || 0;
  return Math.round(service.originalPrice * (1 - discount / 100));
}

function getDiscountedPriceHTML(service) {
  var finalPrice = calculateFinalPrice(service);
  var originalPrice = service.originalPrice;
  var discount = service.discountPercentage || 0;
  
  if (discount > 0) {
    return '<span style="text-decoration:line-through;color:#6B7280;">AED ' + originalPrice + '</span> ' +
      '<span style="color:#D4AF37;font-weight:bold;">AED ' + finalPrice + '</span> ' +
      '<span style="background:#D4AF37;color:#0A192F;padding:2px 8px;border-radius:4px;font-size:12px;">' + discount + '% OFF</span>';
  } else {
    return '<span style="color:#D4AF37;font-weight:bold;">AED ' + originalPrice + '</span>';
  }
}

// ==================== AUTH ====================
function isAdmin() {
  return localStorage.getItem('isAdminLoggedIn') === 'true';
}

// ==================== SERVICE MANAGEMENT ====================
function updateServicePrice(serviceId, newPrice, newDiscount) {
  for (var i = 0; i < services.length; i++) {
    if (services[i].id === serviceId) {
      services[i].originalPrice = parseInt(newPrice) || services[i].originalPrice;
      services[i].discountPercentage = parseInt(newDiscount) || 0;
      return true;
    }
  }
  return false;
}

function deleteService(serviceId) {
  for (var i = 0; i < services.length; i++) {
    if (services[i].id === serviceId) {
      services.splice(i, 1);
      return true;
    }
  }
  return false;
}

function addService(newService) {
  var service = {
    id: newService.id || 'service-' + Date.now(),
    name: newService.name || { en: "New Service", ar: "خدمة جديدة" },
    description: newService.description || { en: "Service description", ar: "وصف الخدمة" },
    originalPrice: parseInt(newService.originalPrice) || 0,
    discountPercentage: parseInt(newService.discountPercentage) || 0,
    image: newService.image || "images/services/ui-ux.svg",
    currency: "AED",
    steps: newService.steps || []
  };
  services.push(service);
  return service;
}

// ==================== CONFIGURATOR ====================
var currentStep = 0;
var selectedOptions = [];
var currentService = null;

function openConfigurator(serviceId) {
  for (var i = 0; i < services.length; i++) {
    if (services[i].id === serviceId) {
      currentService = services[i];
      break;
    }
  }
  if (!currentService) {
    alert("Error: Service not found");
    return;
  }
  currentStep = 0;
  selectedOptions = [];
  renderStep();
  var modal = document.getElementById("service-configurator");
  if (modal) {
    modal.classList.add("active");
  }
}

function renderStep() {
  if (!currentService || !currentService.steps) return;
  var step = currentService.steps[currentStep];
  var container = document.getElementById("step-container");
  if (!container) return;
  var totalSteps = currentService.steps.length;
  
  var progressFill = document.getElementById("progress-fill");
  if (progressFill) {
    progressFill.style.width = ((currentStep + 1) / totalSteps) * 100 + "%";
  }
  
  var lang = 'en';
  if (typeof currentLang !== 'undefined') {
    lang = currentLang;
  }
  
  var currentTotal = calculateFinalPrice(currentService);
  for (var j = 0; j < selectedOptions.length; j++) {
    currentTotal += selectedOptions[j].mod || 0;
  }
  
  var html = '<div>';
  html += '<h3 style="color:white;margin-bottom:16px;">Step ' + (currentStep + 1) + ': ' + (step.question[lang] || step.question.en) + '</h3>';
  html += '<p style="color:#D4AF37;font-weight:bold;margin-bottom:16px;">' + (typeof t === 'function' ? t('step.price-total') : 'Current total: AED ') + currentTotal + '</p>';
  
  if (step.type === "text") {
    var ph = (step.placeholder && step.placeholder[lang]) || (step.placeholder && step.placeholder.en) || '';
    html += '<input type="text" id="step-text-input" placeholder="' + ph + '" style="width:100%;padding:12px;border:2px solid #D4AF37;border-radius:8px;font-size:16px;min-height:44px;background:rgba(10,25,47,0.6);color:white;">';
  } else {
    for (var k = 0; k < step.options.length; k++) {
      var opt = step.options[k];
      html += '<label style="display:block;padding:12px;margin:8px 0;cursor:pointer;border:2px solid rgba(212,175,55,0.3);border-radius:8px;transition:border-color 0.2s;color:white;" onmouseover="this.style.borderColor=\'#D4AF37\'" onmouseout="this.style.borderColor=\'rgba(212,175,55,0.3)\'">';
      html += '<input type="radio" name="step-option" value="' + opt.id + '" data-mod="' + (opt.mod || 0) + '" style="margin-right:8px;width:18px;height:18px;accent-color:#D4AF37;">';
      html += '<span style="font-size:16px;color:white;">' + (opt.name[lang] || opt.name.en) + (opt.mod ? " (+AED " + opt.mod + ")" : "") + '</span>';
      html += '</label>';
    }
  }
  html += '</div>';
  container.innerHTML = html;
  
  var nextBtn = document.getElementById("next-btn");
  if (nextBtn) {
    nextBtn.textContent = currentStep === totalSteps - 1 ? (typeof t === 'function' ? t('btn.add-to-cart') : 'Add to Cart') : (typeof t === 'function' ? t('btn.next') : 'Next');
  }
  
  var backBtn = document.getElementById("back-btn");
  if (backBtn) {
    backBtn.textContent = typeof t === 'function' ? t('btn.back') : 'Back';
    backBtn.style.display = currentStep === 0 ? "none" : "inline-block";
  }
}

function nextStep() {
  var step = currentService.steps[currentStep];
  
  if (step.type === "text") {
    var input = document.getElementById("step-text-input");
    var value = input ? input.value.trim() : '';
    if (!value) {
      alert(typeof t === 'function' ? t('step.fill-field') : "Please fill in this field");
      return;
    }
    selectedOptions.push({
      step: step.question,
      type: "text",
      answer: value,
      mod: 0
    });
  } else {
    var selected = document.querySelector('input[name="step-option"]:checked');
    if (!selected) {
      alert(typeof t === 'function' ? t('step.select-option') : "Please select an option");
      return;
    }
    var mod = parseInt(selected.dataset.mod) || 0;
    var chosenOption = null;
    for (var i = 0; i < step.options.length; i++) {
      if (step.options[i].id === selected.value) {
        chosenOption = step.options[i];
        break;
      }
    }
    selectedOptions.push({
      step: step.question,
      type: "radio",
      option: chosenOption,
      mod: mod
    });
  }
  
  if (currentStep < currentService.steps.length - 1) {
    currentStep++;
    renderStep();
  } else {
    addToCartItem();
    closeModal();
  }
}

function previousStep() {
  if (currentStep === 0) return;
  currentStep--;
  selectedOptions.pop();
  renderStep();
}

function addToCartItem() {
  var total = calculateFinalPrice(currentService);
  for (var i = 0; i < selectedOptions.length; i++) {
    total += selectedOptions[i].mod || 0;
  }
  
  var cartItem = {
    cartItemId: currentService.id + '-' + Date.now(),
    id: currentService.id,
    serviceName: currentService.name,
    originalPrice: currentService.originalPrice,
    discountPercentage: currentService.discountPercentage,
    finalPrice: calculateFinalPrice(currentService),
    currency: currentService.currency,
    selectedOptions: selectedOptions,
    totalPrice: total,
    timestamp: new Date().toISOString()
  };
  
  var cart = [];
  try {
    cart = JSON.parse(localStorage.getItem('cart') || '[]');
  } catch(e) {
    cart = [];
  }
  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
  
  var toast = document.getElementById('cart-toast');
  if (toast) {
    toast.textContent = (typeof t === 'function' ? t('order.added-toast') : 'Added to cart — AED ') + total;
    toast.style.opacity = '1';
    setTimeout(function() {
      toast.style.opacity = '0';
    }, 2500);
  }
}

function closeModal() {
  var modal = document.getElementById("service-configurator");
  if (modal) { modal.classList.remove("active"); }
}

// ==================== AI PROMPT GENERATION ====================
function generateAIPrompt(customerName, customerEmail, customerPhone, customerNotes, cartItems) {
  var prompt = "You are an expert design and digital product assistant at Ash CS Creative Studio. Your task is to deliver exactly what the customer requested in the order below. Follow the customer selections exactly — do not invent new features. Keep the output focused on the requested deliverables.\n\n";
  prompt += "=== CUSTOMER INFORMATION ===\n";
  prompt += "Name: " + customerName + "\n";
  prompt += "Email: " + (customerEmail || "N/A") + "\n";
  prompt += "WhatsApp: " + customerPhone + "\n";
  prompt += "Location: UAE\n";
  prompt += "Notes: " + (customerNotes || "No additional notes.") + "\n\n";
  
  prompt += "=== ORDER DETAILS ===\n";
  
  if (!cartItems || cartItems.length === 0) {
    prompt += "No items in cart.\n";
    return prompt;
  }
  
  for (var idx = 0; idx < cartItems.length; idx++) {
    var item = cartItems[idx];
    var nameEn = (item.serviceName && item.serviceName.en) || item.serviceName || "Service";
    prompt += "\n--- SERVICE " + (idx + 1) + ": " + nameEn.toUpperCase() + " ---\n";
    prompt += "Service ID: " + (item.id || "unknown") + "\n";
    prompt += "Base Price: AED " + (item.originalPrice || 0) + "\n";
    if (item.discountPercentage) {
      prompt += "Discount: " + item.discountPercentage + "% OFF\n";
    }
    prompt += "Total Price: AED " + ((item.totalPrice || item.total || 0)).toLocaleString() + "\n";
    
    var options = item.selectedOptions || [];
    if (options.length > 0) {
      prompt += "\nCustomer Requirements:\n";
      for (var oi = 0; oi < options.length; oi++) {
        var opt = options[oi];
        var question = (opt.step && (opt.step.en || opt.step)) || "";
        if (opt.type === "text") {
          prompt += "  " + (oi + 1) + ". " + question + ": " + (opt.answer || "N/A") + "\n";
        } else if (opt.option) {
          var answer = (opt.option.name && opt.option.name.en) || opt.option.name || "N/A";
          prompt += "  " + (oi + 1) + ". " + question + ": " + answer + "\n";
        }
      }
    }
  }
  
  prompt += "\n=== DELIVERY INSTRUCTIONS ===\n";
  prompt += "- Follow the customer selections exactly.\n";
  prompt += "- Do not add unrelated services or extra features.\n";
  prompt += "- Use the requested style, colors, and deliverables.\n";
  prompt += "- If a detail is missing, choose the simplest professional option that matches.\n";
  prompt += "- Return the final content or design instructions suitable for execution.\n\n";
  prompt += "=== STUDIO INFO ===\n";
  prompt += "Ash CS Creative Studio | +971507052670 | finalproject900@gmail.com\n";
  
  return prompt;
}

// ==================== ORDER SUBMISSION ====================
function submitOrder() {
  var name = document.getElementById('order-name');
  var email = document.getElementById('order-email');
  var phone = document.getElementById('order-phone');
  var notes = document.getElementById('order-notes');
  
  if (!name || !phone) return;
  
  var nameVal = name.value.trim();
  var phoneVal = phone.value.trim();
  
  if (!nameVal || !phoneVal) {
    alert(typeof t === 'function' ? t('order.required') : 'Please enter name and phone');
    return;
  }
  
  var cart = [];
  try {
    cart = JSON.parse(localStorage.getItem('cart') || '[]');
  } catch(e) { cart = []; }
  
  if (cart.length === 0) {
    alert(typeof t === 'function' ? t('order.empty-cart') : "Your cart is empty");
    return;
  }
  
  var emailVal = email ? email.value.trim() : '';
  var notesVal = notes ? notes.value.trim() : '';
  
  var aiPrompt = generateAIPrompt(nameVal, emailVal, phoneVal, notesVal, cart);
  
  // Store prompt for hidden field
  var promptField = document.getElementById('ai-prompt-field');
  if (promptField) promptField.value = aiPrompt;
  
  // Send order details to Formspree
  var detailsField = document.getElementById('order-details-field');
  if (detailsField) {
    var details = "Customer: " + nameVal + " | Phone: " + phoneVal + " | Email: " + emailVal + "\n";
    details += "Total Items: " + cart.length + "\n";
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].totalPrice || cart[i].total || 0;
    }
    details += "Total: AED " + total.toLocaleString();
    detailsField.value = details;
  }
  
  var replyField = document.getElementById('replyto-field');
  if (replyField) replyField.value = emailVal || phoneVal;
  
  // Submit form to Formspree
  var form = document.getElementById('order-form');
  if (form) {
    // Use native FormData submission
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log('Order sent to Formspree');
      }
    };
    xhr.send(formData);
  }
  
  // Clear cart
  localStorage.removeItem('cart');
  if (typeof renderCart === 'function') renderCart();
  
  alert(typeof t === 'function' ? t('order.success') : 'Order submitted! We will review your order and contact you soon.');
}

// Initialize
initServices();
console.log('services.js loaded, services count:', services.length);
