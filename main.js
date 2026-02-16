/**
 * Tech-Again | Main Application Logic
 * Senior Refactor: WhatsApp Contact & Cart Integration
 */

// --- Configuration & Data ---
const TRANSLATIONS = {
    en: {
        nav_laptops: "Laptops",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_pill: "Certified Refurbished",
        hero_title: "Premium Tech.<br><span class=\"text-accent\">Planet Friendly.</span>",
        hero_desc: "Experience like-new performance at a fraction of the price. Each device passes our rigorous 30-point inspection.",
        hero_btn: "Shop Laptops",
        badge_warranty: "1-Year Warranty",
        badge_check: "30-Point Check",
        feat_1_title: "Pro Performance",
        feat_1_desc: "Verified specs and stress-tested components ensure peak power.",
        feat_2_title: "Eco-Conscious",
        feat_2_desc: "Saving e-waste one device at a time. Good for your wallet and the world.",
        feat_3_title: "Smart Savings",
        feat_3_desc: "Get the same tech for up to 40% less than retail prices.",
        shop_title: "Fresh Arrivals",
        shop_view_all: "View All",
        about_pill: "About Us",
        about_title: "Our Mission & Values",
        about_p1: "Welcome to <strong>Tech-Again</strong>, your trusted source for high-quality refurbished computers and laptops.",
        about_p2: "We specialize in providing reliable, affordable, and professionally tested used computers for students, professionals, and businesses. Every device we sell is carefully inspected, cleaned, and tested to ensure excellent performance and long-lasting durability.",
        about_p3: "At Tech-Again, we believe technology should be accessible to everyone. That’s why we focus on delivering premium devices at competitive prices while promoting eco-friendly solutions through refurbished electronics.",
        about_mission_header: "Our mission is simple",
        about_mission_text: "To give technology a second life &mdash; and give our customers the best value for their money.",
        about_footer: "Thank you for choosing Tech-Again",
        contact_pill: "Contact Us",
        contact_title: "Have a Question?",
        contact_desc: "Whether you're looking for a specific model or need technical advice, our team is ready to assist you via WhatsApp.",
        form_fname: "First Name",
        form_fname_placeholder: "John",
        form_lname: "Last Name",
        form_lname_placeholder: "Doe",
        form_email: "Email",
        form_email_placeholder: "john@example.com",
        form_msg: "Message",
        form_msg_placeholder: "How can we help you today?",
        form_btn: "Send Message",
        faq_pill: "FAQ",
        faq_title: "Frequently Asked Questions",
        faq_desc: "Everything you need to know about our products and services.",
        faq_q1: "What is the warranty on used computers?",
        faq_a1: "All our devices come with a standard 1-year warranty covering hardware issues. We also offer extended warranty plans for peace of mind.",
        faq_q2: "Are the batteries still in good condition?",
        faq_a2: "Yes, we test every battery. We only sell laptops with batteries that maintain a minimum of 80% of their original capacity.",
        faq_q3: "Do you offer delivery across Morocco?",
        faq_a3: "Absolutely! We provide secure shipping to all major cities in Morocco through our trusted logistics partners.",
        faq_q4: "Can I upgrade the RAM or SSD before buying?",
        faq_a4: "Yes, most of our professional models are upgradeable. Contact us via WhatsApp to customize your machine's specs.",
        footer_tagline: "Giving technology a second life.",
        footer_shop_header: "Shop",
        footer_support_header: "Support",
        footer_warranty: "Warranty",
        footer_returns: "Returns",
        footer_news_header: "Stay Updated",
        footer_news_placeholder: "Enter your email",
        footer_rights: "All rights reserved.",
        cart_title: "Your Cart",
        cart_total: "Total:",
        cart_checkout: "Checkout",
        cart_empty: "Your cart is empty.",
        search_placeholder: "Search products...",
        add_to_cart: "Add to Cart",
        added: "Added!",
        condition_excellent: "Excellent (10/10)",
        condition_clean: "Très Propre",
        condition_touch: "Tactile + Stylo",
        condition_backlit: "Backlit Keyboard"
    },
    fr: {
        nav_laptops: "Ordinateurs",
        nav_about: "À propos",
        nav_contact: "Contact",
        hero_pill: "Remis à neuf certifié",
        hero_title: "Technologie Premium.<br><span class=\"text-accent\">Ami de la planète.</span>",
        hero_desc: "Découvrez des performances comme neuves à une fraction du prix. Chaque appareil passe notre inspection rigoureuse en 30 points.",
        hero_btn: "Acheter des ordinateurs",
        badge_warranty: "Garantie 1 an",
        badge_check: "Vérification 30 points",
        feat_1_title: "Performance Pro",
        feat_1_desc: "Spécifications vérifiées et composants testés pour une puissance maximale.",
        feat_2_title: "Éco-responsable",
        feat_2_desc: "Réduire les déchets électroniques un appareil à la fois. Bon pour votre portefeuille et le monde.",
        feat_3_title: "Économies Intelligentes",
        feat_3_desc: "Obtenez la même technologie jusqu'à 40% moins cher que le prix de détail.",
        shop_title: "Nouveautés",
        shop_view_all: "Voir tout",
        about_pill: "À propos de nous",
        about_title: "Notre Mission et Valeurs",
        about_p1: "Bienvenue chez <strong>Tech-Again</strong>, votre source de confiance pour des ordinateurs et portables remis à neuf de haute qualité.",
        about_p2: "Nous nous spécialisons dans la fourniture d'ordinateurs d'occasion fiables, abordables et testés professionnellement pour les étudiants, les professionnels et les entreprises. Chaque appareil que nous vendons est soigneusement inspecté, nettoyé et testé pour garantir d'excellentes performances et une durabilité à long terme.",
        about_p3: "Chez Tech-Again, nous pensons que la technologie doit être accessible à tous. C'est pourquoi nous nous concentrons sur la livraison d'appareils haut de gamme à des prix compétitifs tout en promouvant des solutions éco-responsables grâce à l'électronique remise à neuf.",
        about_mission_header: "Notre mission est simple",
        about_mission_text: "Donner une seconde vie à la technologie — et offrir à nos clients le meilleur rapport qualité-prix.",
        about_footer: "Merci d'avoir choisi Tech-Again",
        contact_pill: "Contactez-nous",
        contact_title: "Une question ?",
        contact_desc: "Que vous recherchiez un modèle spécifique ou ayez besoin de conseils techniques, notre équipe est prête à vous aider via WhatsApp.",
        form_fname: "Prénom",
        form_fname_placeholder: "Jean",
        form_lname: "Nom",
        form_lname_placeholder: "Dupont",
        form_email: "Email",
        form_email_placeholder: "jean@example.com",
        form_msg: "Message",
        form_msg_placeholder: "Comment pouvons-nous vous aider aujourd'hui ?",
        form_btn: "Envoyer le message",
        faq_pill: "FAQ",
        faq_title: "Foire Aux Questions",
        faq_desc: "Tout ce que vous devez savoir sur nos produits et services.",
        faq_q1: "Quelle est la garantie sur les ordinateurs d'occasion ?",
        faq_a1: "Tous nos appareils sont livrés avec une garantie standard de 1 an couvrant les problèmes matériels.",
        faq_q2: "Les batteries sont-elles encore en bon état ?",
        faq_a2: "Oui, nous testons chaque batterie. Nous ne vendons que des ordinateurs dont les batteries conservent au moins 80% de leur capacité d'origine.",
        faq_q3: "Proposez-vous la livraison partout au Maroc ?",
        faq_a3: "Absolument ! Nous assurons une expédition sécurisée vers toutes les grandes villes du Maroc via nos partenaires logistiques de confiance.",
        faq_q4: "Puis-je augmenter la RAM ou le SSD avant l'achat ?",
        faq_a4: "Oui, la plupart de nos modèles professionnels sont évolutifs. Contactez-nous via WhatsApp pour personnaliser les spécifications de votre machine.",
        footer_tagline: "Donner une seconde vie à la technologie.",
        footer_shop_header: "Boutique",
        footer_support_header: "Support",
        footer_warranty: "Garantie",
        footer_returns: "Retours",
        footer_news_header: "Restez Informé",
        footer_news_placeholder: "Entrez votre email",
        footer_rights: "Tous droits réservés.",
        cart_title: "Votre Panier",
        cart_total: "Total:",
        cart_checkout: "Commander",
        cart_empty: "Votre panier est vide.",
        search_placeholder: "Rechercher des produits...",
        add_to_cart: "Ajouter au panier",
        added: "Ajouté !",
        condition_excellent: "Excellent (10/10)",
        condition_clean: "Très Propre",
        condition_touch: "Tactile + Stylet",
        condition_backlit: "Clavier rétroéclairé"
    },
    ar: {
        nav_laptops: "أجهزة لابتوب",
        nav_about: "من نحن",
        nav_contact: "اتصل بنا",
        hero_pill: "تم تجديده باحترافية",
        hero_title: "تكنولوجيا متميزة.<br><span class=\"text-accent\">صديق للبيئة</span>",
        hero_desc: "استمتع بأداء مثل الجديد بجزء بسيط من السعر. يمر كل جهاز بفحصنا الدقيق المكون من 30 نقطة.",
        hero_btn: "تسوق الأجهزة",
        badge_warranty: "ضمان سنة واحدة",
        badge_check: "فحص 30 نقطة",
        feat_1_title: "أداء احترافي",
        feat_1_desc: "مواصفات مؤكدة ومكونات تم اختبارها لضمان أقصى قوة.",
        feat_2_title: "صديق للبيئة",
        feat_2_desc: "تقليل النفايات الإلكترونية جهازًا تلو الآخر. جيد لمحفظتك وللعالم.",
        feat_3_title: "توفير ذكي",
        feat_3_desc: "احصل على نفس التكنولوجيا بخصم يصل إلى 40٪ عن سعر التجزئة.",
        shop_title: "أحدث المنتجات",
        shop_view_all: "عرض الكل",
        about_pill: "حول الشركة",
        about_title: "مهمتنا وقيمنا",
        about_p1: "مرحبًا بكم في <strong>تيك-أجين</strong>، مصدركم الموثوق لأجهزة الكمبيوتر واللابتوب المجددة عالية الجودة.",
        about_p2: "نحن متخصصون في توفير أجهزة كمبيوتر مستعملة موثوقة وبأسعار معقولة ومختبرة بشكل احترافي للطلاب والمحترفين والشركات. يتم فحص كل جهاز نبيعه وتنظيفه واختباره بعناية لضمان أداء ممتاز ومتانة طويلة الأمد.",
        about_p3: "في تيك-أجين، نؤمن بأن التكنولوجيا يجب أن تكون في متناول الجميع. لهذا السبب نركز على تقديم أجهزة متميزة بأسعار تنافسية مع تعزيز الحلول الصديقة للبيئة من خلال الإلكترونيات المجددة.",
        about_mission_header: "مهمتنا بسيطة",
        about_mission_text: "إعطاء التكنولوجيا حياة ثانية — ومنح عملائنا أفضل قيمة مقابل أموالهم.",
        about_footer: "شكراً لاختياركم تيك-أجين",
        contact_pill: "اتصل بنا",
        contact_title: "هل لديك سؤال؟",
        contact_desc: "سواء كنت تبحث عن طراز معين أو تحتاج إلى نصيحة فنية، فريقنا مستعد لمساعدتك عبر واتساب.",
        form_fname: "الاسم الأول",
        form_fname_placeholder: "أحمد",
        form_lname: "الاسم الأخير",
        form_lname_placeholder: "العربي",
        form_email: "البريد الإلكتروني",
        form_email_placeholder: "ahmed@example.com",
        form_msg: "الرسالة",
        form_msg_placeholder: "كيف يمكننا مساعدتك اليوم؟",
        form_btn: "إرسال الرسالة",
        faq_pill: "الأسئلة الشائعة",
        faq_title: "الأسئلة الأكثر شيوعًا",
        faq_desc: "كل ما تحتاج لمعرفته حول منتجاتنا وخدماتنا.",
        faq_q1: "ما هو الضمان على الأجهزة المستعملة؟",
        faq_a1: "تأتي جميع أجهزتنا مع ضمان قياسي لمدة سنة واحدة يغطي مشاكل الأجهزة.",
        faq_q2: "هل البطاريات لا تزال في حالة جيدة؟",
        faq_a2: "نعم، نحن نختبر كل بطارية. نبيع فقط أجهزة اللابتوب التي تحافظ بطارياتها على 80٪ على الأقل من سعتها الأصلية.",
        faq_q3: "هل تقدمون خدمة التوصيل في جميع أنحاء المغرب؟",
        faq_a3: "بالتأكيد! نحن نوفر شحنًا آمنًا إلى جميع المدن الكبرى في المغرب من خلال شركائنا اللوجستيين الموثوقين.",
        faq_q4: "هل يمكنني ترقية الرام أو الهارد قبل الشراء؟",
        faq_a4: "نعم، معظم موديلاتنا الاحترافية قابلة للترقية. اتصل بنا عبر واتساب لتخصيص مواصفات جهازك.",
        footer_tagline: "إعطاء التكنولوجيا حياة ثانية.",
        footer_shop_header: "المتجر",
        footer_support_header: "الدعم",
        footer_warranty: "الضمان",
        footer_returns: "الاسترجاع",
        footer_news_header: "ابق على اطلاع",
        footer_news_placeholder: "أدخل بريدك الإلكتروني",
        footer_rights: "جميع الحقوق محفوظة.",
        cart_title: "سلة التسوق",
        cart_total: "الإجمالي:",
        cart_checkout: "الدفع",
        cart_empty: "سلة التسوق فارغة.",
        search_placeholder: "ابحث عن منتجات...",
        add_to_cart: "أضف إلى السلة",
        added: "تمت الإضافة!",
        condition_excellent: "ممتاز (10/10)",
        condition_clean: "نظيف جداً",
        condition_touch: "لمس + قلم",
        condition_backlit: "لوحة مفاتيح مضيئة"
    }
};

const PRODUCTS = [
    {
        id: 1,
        title: "Toshiba Dynabook Satellite Pro",
        category: "Laptops",
        price: 2669,
        originalPrice: 3159,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB SSD", "15.6\" Screen"],
        image: "toshiba-satellite-pro-new.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 2,
        title: "HP EliteBook 840 G6",
        category: "Laptops",
        price: 2629,
        originalPrice: 2849,
        specs: ["i5 8th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Win 11 Pro"],
        image: "hp-elitebook-840-g6.jpg",
        condition: "Très Propre"
    },
    {
        id: 3,
        title: "Lenovo ThinkPad L380 YOGA",
        category: "2-in-1 Laptops",
        price: 2269,
        originalPrice: 2669,
        specs: ["i5 8th Gen", "8GB RAM", "256GB NVMe", "14\" FHD Touch", "Stylus Pen"],
        image: "lenovo-thinkpad-l380.jpg",
        condition: "Tactile + Stylo"
    },
    {
        id: 4,
        title: "Dell Inspiron 15 7000",
        category: "Laptops",
        price: 2950,
        originalPrice: 3349,
        specs: ["i7 8th Gen", "20GB RAM", "256GB NVMe", "MX150 2GB", "15.6\" FHD"],
        image: "dell-inspiron.jpg",
        condition: "Backlit Keyboard"
    },
    {
        id: 5,
        title: "Lenovo Thinkpad L380 YOGA",
        category: "2-in-1 Laptops",
        price: 2350,
        originalPrice: 2749,
        specs: ["i5 8th Gen", "8GB RAM", "256GB NVMe", "14\" FHD Touch", "Fingerprint"],
        image: "lenovo-l380-yoga-grade-b.jpg",
        condition: "Grade B (10/10 working)"
    },
    {
        id: 6,
        title: "Dell Latitude 5410",
        category: "Laptops",
        price: 2989,
        originalPrice: 3449,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD Touch", "Fingerprint"],
        image: "dell-latitude-5410.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 7,
        title: "Dell Latitude 5410 M",
        category: "Laptops",
        price: 2980,
        originalPrice: 3440,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD Touch", "Fingerprint"],
        image: "dell-latitude-5410-m.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 8,
        title: "HP EliteBook 840 G6",
        category: "Laptops",
        price: 2649,
        originalPrice: 2929,
        specs: ["i5 8th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Win 11 Pro"],
        image: "hp-elitebook-840-g6-new.jpg",
        condition: "Très Propre"
    },
    {
        id: 9,
        title: "Dell Latitude 5410 [P7]",
        category: "Laptops",
        price: 2989,
        originalPrice: 3449,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Fingerprint"],
        image: "dell-latitude-5410-p7.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 10,
        title: "HP EliteBook 840 G6",
        category: "Laptops",
        price: 2640,
        originalPrice: 2920,
        specs: ["i5 8th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Win 11 Pro"],
        image: "hp-elitebook-840-g6-2.jpg",
        condition: "Très Propre"
    },
    {
        id: 11,
        title: "Dell Latitude 5410",
        category: "Laptops",
        price: 2980,
        originalPrice: 3440,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Fingerprint"],
        image: "dell-latitude-5410-3.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 12,
        title: "HP EliteBook 840 G6",
        category: "Laptops",
        price: 2649,
        originalPrice: 2929,
        specs: ["i5 8th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Win 11 Pro"],
        image: "hp-elitebook-840-g6-3.jpg",
        condition: "Très Propre"
    },
    {
        id: 13,
        title: "Dell Latitude 5410",
        category: "Laptops",
        price: 2929,
        originalPrice: 3480,
        specs: ["i5 10th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Fingerprint"],
        image: "dell-latitude-5410-4.jpg",
        condition: "Excellent (10/10)"
    },
    {
        id: 14,
        title: "HP EliteBook 840 G6",
        category: "Laptops",
        price: 2640,
        originalPrice: 2920,
        specs: ["i5 8th Gen", "8GB DDR4", "256GB NVMe", "14\" FHD", "Win 11 Pro"],
        image: "hp-elitebook-840-g6-4.jpg",
        condition: "Très Propre"
    }
];

// --- State ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let activeContext = { type: null, data: null };
let currentLang = localStorage.getItem('lang') || 'en';

// --- DOM References ---
const ui = {
    productGrid: document.getElementById('product-grid'),
    cartOverlay: document.getElementById('cart-overlay'),
    cartItems: document.getElementById('cart-items'),
    cartTotal: document.getElementById('cart-total-price'),
    cartBadge: document.querySelector('.badge'),
    checkoutBtn: document.getElementById('checkout-btn'),
    contactForm: document.getElementById('contact-form'),
    contactOverlay: document.getElementById('contact-overlay'),
    menuToggle: document.getElementById('menu-toggle'),
    navMenu: document.querySelector('.nav'),
    searchWrapper: document.getElementById('nav-search-wrapper'),
    searchInput: document.getElementById('nav-search-input'),
    sectionTitle: document.getElementById('section-title'),
    newsletterForm: document.getElementById('newsletter-form'),
    langMenuBtn: document.getElementById('lang-menu-btn'),
    langDropdown: document.getElementById('lang-dropdown'),
    currentLangLabel: document.getElementById('current-lang-label')
};

// --- Internationalization ---

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.body.className = lang === 'ar' ? 'rtl' : '';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    updateLanguageUI();
    renderProducts();
    if (ui.cartOverlay.classList.contains('open')) renderCartItems();

    // Close dropdown
    ui.langDropdown.classList.remove('open');
    ui.currentLangLabel.textContent = lang.toUpperCase();
};

const updateLanguageUI = () => {
    const texts = TRANSLATIONS[currentLang];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (texts[key]) el.innerHTML = texts[key];
    });

    // Update all placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (texts[key]) el.placeholder = texts[key];
    });
};

// --- Core Functionality ---

const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
};

const updateCartUI = () => {
    const count = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (ui.cartBadge) {
        ui.cartBadge.textContent = count;
        ui.cartBadge.style.opacity = count > 0 ? '1' : '0';
    }
    if (ui.cartTotal) ui.cartTotal.textContent = `${total} DH`;
};

const addToCart = (id) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (product) {
        cart.push(product);
        saveCart();
    }
};

const removeFromCart = (id) => {
    const index = cart.findIndex(p => p.id === id);
    if (index > -1) {
        cart.splice(index, 1);
        saveCart();
        renderCartItems();
    }
};

const removeAllFromCart = (id) => {
    cart = cart.filter(p => p.id !== id);
    saveCart();
    renderCartItems();
};

const getTranslatedCondition = (cond) => {
    if (!cond) return 'In Stock';
    const c = cond.toLowerCase();
    if (c.includes('excellent')) return TRANSLATIONS[currentLang].condition_excellent;
    if (c.includes('propre')) return TRANSLATIONS[currentLang].condition_clean;
    if (c.includes('tactile')) return TRANSLATIONS[currentLang].condition_touch;
    if (c.includes('backlit')) return TRANSLATIONS[currentLang].condition_backlit;
    return cond;
};

const renderProducts = (categoryLimit = null) => {
    if (!ui.productGrid) return;

    let filtered = PRODUCTS;
    const texts = TRANSLATIONS[currentLang];

    if (categoryLimit) {
        const lower = categoryLimit.toLowerCase();
        filtered = PRODUCTS.filter(p => p.category.toLowerCase().includes(lower));
        if (ui.sectionTitle) ui.sectionTitle.textContent = categoryLimit === 'Laptop' ? texts.nav_laptops : categoryLimit;
    } else if (ui.sectionTitle) {
        ui.sectionTitle.textContent = texts.shop_title;
    }

    ui.productGrid.innerHTML = filtered.map(p => `
        <article class="product-card">
            <div class="product-badge">${getTranslatedCondition(p.condition)}</div>
            <div class="product-image"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>
            <div class="product-info">
                <div class="product-category">${p.category}</div>
                <h3 class="product-title">${p.title}</h3>
                <div class="product-specs">${p.specs.map(s => `<span class="spec-tag">${s}</span>`).join('')}</div>
                <div class="product-price">
                    <span class="current-price">${p.price} DH</span>
                    <span class="original-price">${p.originalPrice} DH</span>
                </div>
                <button class="add-btn" data-id="${p.id}">${texts.add_to_cart}</button>
            </div>
        </article>
    `).join('');
};

const renderCartItems = () => {
    if (!ui.cartItems) return;
    const texts = TRANSLATIONS[currentLang];

    if (cart.length === 0) {
        ui.cartItems.innerHTML = `<div class="empty-cart-msg"><i class="ph ph-shopping-cart"></i><p>${texts.cart_empty}</p></div>`;
        return;
    }

    const groups = cart.reduce((acc, item) => {
        if (!acc[item.id]) acc[item.id] = { ...item, quantity: 0 };
        acc[item.id].quantity++;
        return acc;
    }, {});

    ui.cartItems.innerHTML = Object.values(groups).map(item => `
        <div class="cart-item">
            <div class="cart-item-image"><img src="${item.image}" alt="${item.title}"></div>
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.title}</h4>
                <div class="cart-item-price">${item.price} DH</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="removeFromCart(${item.id})">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="addToCart(${item.id}); renderCartItems()">+</button>
                    <button class="remove-btn" onclick="removeAllFromCart(${item.id})">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
};

// --- WhatsApp & Modal Logic ---

const openWhatsAppModal = (type, data = null) => {
    activeContext = { type, data };
    if (ui.contactOverlay) ui.contactOverlay.classList.add('open');
};

const closeWhatsAppModal = () => {
    if (ui.contactOverlay) ui.contactOverlay.classList.remove('open');
    activeContext = { type: null, data: null };
};

const formatInternationalPhone = (phone) => phone.replace(/\D/g, '');

const handleWhatsAppSend = (phoneNumber) => {
    const cleanPhone = formatInternationalPhone(phoneNumber);
    let message = "";
    const texts = TRANSLATIONS[currentLang];

    if (activeContext.type === 'contact') {
        const { firstName, lastName, email, userMessage } = activeContext.data;
        const greeting = currentLang === 'ar' ? 'مرحباً تيك-أجين' : (currentLang === 'fr' ? 'Bonjour Tech-Again' : 'Hello Tech-Again');
        message = `${greeting},\n\n${texts.form_fname}: ${firstName} ${lastName}\n${texts.form_email}: ${email}\n\n${texts.form_msg}:\n${userMessage}`;
    } else if (activeContext.type === 'checkout') {
        const groups = cart.reduce((acc, item) => {
            if (!acc[item.id]) acc[item.id] = { ...item, qty: 0 };
            acc[item.id].qty++;
            return acc;
        }, {});

        const total = cart.reduce((sum, i) => sum + i.price, 0);
        const intro = currentLang === 'ar' ? 'مرحباً تيك-أجين، أود طلب ما يلي:' : (currentLang === 'fr' ? 'Bonjour Tech-Again, je souhaite commander :' : 'Hello Tech-Again, I would like to order:');
        message = `${intro}\n\n`;
        Object.values(groups).forEach(item => {
            message += `${item.title} (x${item.qty}) - ${item.price * item.qty} DH\n`;
        });
        message += `\n${texts.cart_total} ${total} DH`;
    }

    if (!message) return;

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // Cleanup
    if (activeContext.type === 'contact') ui.contactForm.reset();
    closeWhatsAppModal();
};

// --- Initialization & Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    setLanguage(currentLang);
    updateCartUI();

    // Language Switcher Events
    ui.langMenuBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        ui.langDropdown.classList.toggle('open');
    });

    document.querySelectorAll('.lang-opt').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
        });
    });

    // Close language menu on click outside
    document.addEventListener('click', () => {
        ui.langDropdown?.classList.remove('open');
    });

    // Navigation & Mobile Menu
    if (ui.menuToggle) {
        ui.menuToggle.addEventListener('click', () => {
            ui.navMenu.classList.toggle('open');
            const icon = ui.menuToggle.querySelector('i');
            icon.classList.toggle('ph-list');
            icon.classList.toggle('ph-x');
        });
    }

    // Search Interaction
    document.getElementById('search-toggle-btn')?.addEventListener('click', () => {
        ui.searchWrapper.classList.add('active');
        setTimeout(() => ui.searchInput.focus(), 100);
    });

    document.getElementById('close-search-nav')?.addEventListener('click', (e) => {
        e.stopPropagation();
        ui.searchWrapper.classList.remove('active');
        ui.searchInput.value = '';
        renderProducts();
    });

    ui.searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) return renderProducts();
        const filtered = PRODUCTS.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.specs.some(s => s.toLowerCase().includes(query))
        );
        ui.productGrid.innerHTML = filtered.length ? "" : `<p class="no-results">No matches found.</p>`;
        if (filtered.length) {
            ui.productGrid.innerHTML = filtered.map(p => `
                <article class="product-card">
                    <div class="product-badge">${p.condition || 'In Stock'}</div>
                    <div class="product-image"><img src="${p.image}" alt="${p.title}"></div>
                    <div class="product-info"><h3>${p.title}</h3><button class="add-btn" data-id="${p.id}">Add to Cart</button></div>
                </article>
            `).join('');
        }
    });

    // Cart Events
    document.getElementById('cart-btn')?.addEventListener('click', () => {
        renderCartItems();
        ui.cartOverlay.classList.add('open');
        document.body.classList.add('cart-open');
    });

    document.getElementById('close-cart')?.addEventListener('click', () => {
        ui.cartOverlay.classList.remove('open');
        document.body.classList.remove('cart-open');
    });

    ui.checkoutBtn?.addEventListener('click', () => {
        if (cart.length > 0) openWhatsAppModal('checkout');
    });

    // Contact Form
    ui.contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            firstName: document.getElementById('contact-firstname').value.trim(),
            lastName: document.getElementById('contact-lastname').value.trim(),
            email: document.getElementById('contact-email').value.trim(),
            userMessage: document.getElementById('contact-message').value.trim()
        };

        if (!formData.firstName || !formData.lastName || !formData.email || !formData.userMessage) return;

        openWhatsAppModal('contact', formData);
    });

    // Newsletter Form
    ui.newsletterForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput?.value.trim();

        if (!email) return;

        // Visual Feedback
        const btn = ui.newsletterForm.querySelector('button');
        const originalIcon = btn.innerHTML;

        btn.innerHTML = '<i class="ph ph-check"></i>';
        btn.classList.add('success');
        emailInput.value = '';
        emailInput.placeholder = "Great! You're subscribed.";
        emailInput.disabled = true;

        // In a real app, you would send this to a backend/API
        console.log('Newsletter subscription for:', email);

        setTimeout(() => {
            btn.innerHTML = originalIcon;
            btn.classList.remove('success');
            emailInput.placeholder = "Enter your email";
            emailInput.disabled = false;
        }, 3000);
    });

    // Shared Modal Listeners
    document.getElementById('close-contact-modal')?.addEventListener('click', closeWhatsAppModal);
    document.querySelectorAll('.contact-option-btn').forEach(btn => {
        btn.addEventListener('click', () => handleWhatsAppSend(btn.dataset.phone));
    });

    // Global UI Helpers
    ui.productGrid?.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
            const btn = e.target;
            const old = btn.textContent;
            btn.textContent = "Added!";
            btn.classList.add('bg-accent');
            setTimeout(() => {
                btn.textContent = old;
                btn.classList.remove('bg-accent');
            }, 1000);
        }
    });

    // Smooth Scroll & Category Filter
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Handle Category Filtering logic first
            if (href === '#laptops') {
                e.preventDefault();
                renderProducts('Laptop');
                ui.productGrid?.scrollIntoView({ behavior: 'smooth' }); // Scroll directly to the results
            } else if (href === '#shop') {
                e.preventDefault();
                renderProducts();
                document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Default smooth scroll for other internal links
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Close mobile menu
            if (ui.navMenu?.classList.contains('open')) {
                ui.navMenu.classList.remove('open');
                const icon = ui.menuToggle?.querySelector('i');
                if (icon) {
                    icon.classList.add('ph-list');
                    icon.classList.remove('ph-x');
                }
            }
        });
    });

});

// --- Global API for onclicks ---
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.removeAllFromCart = removeAllFromCart;
window.renderCartItems = renderCartItems;
