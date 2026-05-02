// --- Data ---
const defaultProducts = [
    {
        id: 1,
        name: "Lord 100% Whey Protein",
        category: "protein",
        price: 59.99,
        image: "assets/product.png",
        desc: "Premium 100% whey protein isolate for fast recovery and muscle growth.",
        benefits: ["25g Protein per serving", "Zero sugar", "Fast absorption"]
    },
    {
        id: 2,
        name: "Titan Mass Gainer",
        category: "mass",
        price: 45.00,
        image: "assets/product.png",
        desc: "High-calorie mass gainer packed with complex carbs and protein to help you bulk up.",
        benefits: ["1000+ Calories", "50g Protein", "Added Creatine"]
    },
    {
        id: 3,
        name: "Explosive Pre-Workout",
        category: "preworkout",
        price: 34.99,
        image: "assets/product.png",
        desc: "Insane energy, laser focus, and skin-tearing pumps for your hardest workouts.",
        benefits: ["300mg Caffeine", "L-Citrulline for pumps", "Beta-Alanine for endurance"]
    },
    {
        id: 4,
        name: "Elite Multi-Vitamin",
        category: "vitamins",
        price: 24.99,
        image: "assets/product.png",
        desc: "Comprehensive vitamin and mineral complex designed for hard-training athletes.",
        benefits: ["Immune support", "Joint health", "Antioxidant blend"]
    },
    {
        id: 5,
        name: "Lord Casein Night Protein",
        category: "protein",
        price: 64.99,
        image: "assets/product.png",
        desc: "Slow-digesting casein protein to feed your muscles while you sleep.",
        benefits: ["Slow release amino acids", "Prevents muscle breakdown", "Great taste"]
    },
    {
        id: 6,
        name: "Pump Formula (Stim-Free)",
        category: "preworkout",
        price: 39.99,
        image: "assets/product.png",
        desc: "Stimulant-free pre-workout focused purely on increasing blood flow and muscle pumps.",
        benefits: ["No caffeine", "Massive pumps", "Can be taken at night"]
    }
];

let products = JSON.parse(localStorage.getItem('lordProducts'));
if (!products) {
    products = defaultProducts;
    localStorage.setItem('lordProducts', JSON.stringify(products));
}

let cart = JSON.parse(localStorage.getItem('lordCart')) || [];
let currentLang = localStorage.getItem('lordLang') || 'FR';

// --- i18n Translations ---
const translations = {
    EN: {
        home: "Home", shop: "Shop", about: "About Us", contact: "Contact",
        hero_title: "FUEL YOUR POWER", hero_subtitle: "Premium sports nutrition for elite athletes.",
        shop_now: "Shop Now",
        top_categories: "Top Categories",
        best_sellers: "Best Sellers",
        view_all: "View All Products",
        cat_protein: "Protein", cat_mass: "Mass Gainers", cat_preworkout: "Pre-Workout", cat_vitamins: "Vitamins", cat_pack: "Packs",
        categories: "Categories", all_products: "All Products",
        order_now: "Order Now", benefits: "Benefits",
        shopping_cart: "Shopping Cart", order_summary: "Order Summary",
        subtotal: "Subtotal", shipping: "Shipping", free: "Free", total: "Total",
        proceed_checkout: "Proceed to Checkout", checkout: "Checkout",
        full_name: "Full Name", phone_number: "Phone Number", address: "Address", city: "City",
        payment_method: "Payment Method", cod: "Cash on Delivery (COD)", confirm_order: "Confirm Order",
        our_story: "Our Story", 
        about_text: "We are an online store specialized in sports nutrition, dedicated to helping athletes and fitness enthusiasts achieve their goals.",
        about_mission: "Our mission is to offer high-quality dietary supplements at special prices, making performance accessible to everyone. We carefully select our products: proteins, pre-workouts, gainers, and other essential supplements.",
        about_delivery: "We provide fast delivery throughout Tunisia, with a maximum delay of 24 to 48 hours, so you can enjoy your products without waiting.",
        about_values: "Our online store is built on simple values: quality, trust, and customer satisfaction. Whether you are a beginner or a seasoned athlete, we are here to advise and guide you on your journey.",
        online_store_badge: "Premium Online Store",
        email: "Email", message: "Message", send_message: "Send Message",
        footer_slogan: "Fuel Your Power.", order_success: "Order Confirmed!",
        order_success_desc: "Thank you for your order. We will contact you shortly to confirm delivery.",
        continue_shopping: "Continue Shopping", empty_cart: "Your cart is empty."
    },
    FR: {
        home: "Accueil", shop: "Boutique", about: "À Propos", contact: "Contact",
        hero_title: "ALIMENTEZ VOTRE PUISSANCE", hero_subtitle: "Nutrition sportive premium pour les athlètes de haut niveau.",
        shop_now: "Acheter",
        top_categories: "Catégories Principales",
        best_sellers: "Meilleures Ventes",
        view_all: "Voir Tous Les Produits",
        cat_protein: "Protéines", cat_mass: "Gainer", cat_preworkout: "Pre-Workout", cat_vitamins: "Vitamines", cat_pack: "Packs",
        categories: "Catégories", all_products: "Tous les Produits",
        order_now: "Commander", benefits: "Avantages",
        shopping_cart: "Panier", order_summary: "Résumé de la Commande",
        subtotal: "Sous-total", shipping: "Livraison", free: "Gratuit", total: "Total",
        proceed_checkout: "Passer à la Caisse", checkout: "Caisse",
        full_name: "Nom Complet", phone_number: "Numéro de Téléphone", address: "Adresse", city: "Ville",
        payment_method: "Mode de Paiement", cod: "Paiement à la Livraison (COD)", confirm_order: "Confirmer la Commande",
        our_story: "Notre Histoire", 
        about_text: "Nous sommes un store en ligne spécialisé en nutrition sportive, dédié à accompagner les sportifs et les passionnés de fitness dans l’atteinte de leurs objectifs.",
        about_mission: "Notre mission est de proposer des compléments alimentaires de haute qualité à des prix spéciaux, afin de rendre la performance accessible à tous. Nous sélectionnons avec soin nos produits : protéines, pre-workout, gainers et autres suppléments essentiels.",
        about_delivery: "Nous assurons une livraison rapide sur toute la Tunisie, avec un délai de 24 à 48 heures maximum, pour que vous puissiez profiter de vos produits sans attendre.",
        about_values: "Notre store repose sur des valeurs simples : qualité, confiance et satisfaction client. Que vous soyez débutant ou athlète confirmé, nous sommes là pour vous conseiller et vous accompagner dans votre parcours.",
        online_store_badge: "Boutique en ligne premium",
        email: "Email", message: "Message", send_message: "Envoyer le Message",
        footer_slogan: "Alimentez Votre Puissance.", order_success: "Commande Confirmée !",
        order_success_desc: "Merci pour votre commande. Nous vous contacterons sous peu pour confirmer la livraison.",
        continue_shopping: "Continuer les Achats", empty_cart: "Votre panier est vide."
    },
    AR: {
        home: "الرئيسية", shop: "المتجر", about: "من نحن", contact: "اتصل بنا",
        hero_title: "زود طاقتك", hero_subtitle: "تغذية رياضية متميزة لنخبة الرياضيين.",
        shop_now: "تسوق الآن",
        top_categories: "أفضل الفئات",
        best_sellers: "الأكثر مبيعاً",
        view_all: "عرض كل المنتجات",
        cat_protein: "بروتين", cat_mass: "زيادة الوزن", cat_preworkout: "قبل التمرين", cat_vitamins: "فيتامينات", cat_pack: "مجموعات",
        categories: "الفئات", all_products: "كل المنتجات",
        order_now: "اطلب الآن", benefits: "الفوائد",
        shopping_cart: "عربة التسوق", order_summary: "ملخص الطلب",
        subtotal: "المجموع الفرعي", shipping: "الشحن", free: "مجاني", total: "المجموع",
        proceed_checkout: "متابعة الدفع", checkout: "الدفع",
        full_name: "الاسم الكامل", phone_number: "رقم الهاتف", address: "العنوان", city: "المدينة",
        payment_method: "طريقة الدفع", cod: "الدفع عند الاستلام (COD)", confirm_order: "تأكيد الطلب",
        our_story: "قصتنا", 
        about_text: "نحن متجر على الإنترنت متخصص في التغذية الرياضية، مكرس لمساعدة الرياضيين وعشاق اللياقة البدنية على تحقيق أهدافهم.",
        about_mission: "مهمتنا هي تقديم مكملات غذائية عالية الجودة بأسعار خاصة، مما يجعل الأداء في متناول الجميع. نختار منتجاتنا بعناية: البروتينات ومكملات قبل التمرين وضخامة العضلات والمكملات الأساسية الأخرى.",
        about_delivery: "نحن نضمن توصيل سريع في جميع أنحاء تونس، بحد أقصى 24 إلى 48 ساعة، حتى تتمكن من الاستمتاع بمنتجاتك دون انتظار.",
        about_values: "يعتمد متجرنا على قيم بسيطة: الجودة والثقة ورضا العملاء. سواء كنت مبتدئًا أو رياضيًا متمرسًا، نحن هنا لتقديم المشورة ومرافقتك في رحلتك.",
        online_store_badge: "متجر إلكتروني متميز",
        email: "البريد الإلكتروني", message: "رسالة", send_message: "إرسال رسالة",
        footer_slogan: "زود طاقتك.", order_success: "تم تأكيد الطلب!",
        order_success_desc: "شكرا لطلبك. سنتصل بك قريباً لتأكيد التوصيل.",
        continue_shopping: "متابعة التسوق", empty_cart: "عربة التسوق فارغة."
    }
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    renderProducts();
    renderBestSellers();
    updateCartCount();
    updateLanguage();
    
    // Mobile Menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        document.getElementById('mobileNav').classList.toggle('open');
    });

    document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
    
    function updateLangBtn() {
        let displayLang = 'AR';
        if (currentLang === 'EN') displayLang = 'FR';
        if (currentLang === 'FR') displayLang = 'AR';
        if (currentLang === 'AR') displayLang = 'EN';
        document.getElementById('langToggle').innerText = displayLang;
    }
    
    updateLangBtn();
    
    // Language Toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        if (currentLang === 'EN') currentLang = 'FR';
        else if (currentLang === 'FR') currentLang = 'AR';
        else currentLang = 'EN';
        
        localStorage.setItem('lordLang', currentLang);
        updateLangBtn();
        document.documentElement.dir = currentLang === 'AR' ? 'rtl' : 'ltr';
        updateLanguage();
    });

    // Category Filter
    document.querySelectorAll('#categoryList li').forEach(li => {
        li.addEventListener('click', (e) => {
            document.querySelectorAll('#categoryList li').forEach(el => el.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts(e.target.dataset.cat);
        });
    });

    // Forms
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const phone = document.getElementById('contactPhone').value;
        const message = document.getElementById('contactMessage').value;
        
        let messages = JSON.parse(localStorage.getItem('lordMessages')) || [];
        messages.push({
            id: Date.now(),
            date: new Date().toLocaleString(),
            name,
            email,
            phone,
            message,
            isRead: false
        });
        localStorage.setItem('lordMessages', JSON.stringify(messages));
        
        alert('Message sent successfully!');
        e.target.reset();
    });
});

// --- Routing (SPA) ---
function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

function handleRoute() {
    let hash = window.location.hash || '#home';
    const paramsString = hash.split('?')[1];
    hash = hash.split('?')[0];

    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    
    // Handle specific routes
    if (hash === '#product') {
        const urlParams = new URLSearchParams(paramsString);
        const productId = parseInt(urlParams.get('id'));
        if(productId) renderProductDetail(productId);
    } else if (hash === '#cart') {
        renderCart();
    } else if (hash === '#shop') {
        if(paramsString) {
            const urlParams = new URLSearchParams(paramsString);
            const cat = urlParams.get('cat');
            if(cat) {
                document.querySelectorAll('#categoryList li').forEach(el => {
                    el.classList.toggle('active', el.dataset.cat === cat);
                });
                renderProducts(cat);
            }
        } else {
             renderProducts();
        }
    }

    // Show active section
    const targetSection = document.querySelector(hash);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    } else {
        document.getElementById('home').classList.add('active');
    }
    
    // Close mobile nav
    document.getElementById('mobileNav').classList.remove('open');
}

// --- Render Logic ---
function renderProducts(category = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const filtered = category === 'all' ? products : products.filter(p => p.category === category);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="window.location.hash='#product?id=${product.id}'" style="cursor:pointer;">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="btn btn-primary w-100" onclick="addToCart(${product.id})" data-i18n="order_now">${translations[currentLang].order_now}</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderProductDetail(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailTitle').innerText = product.name;
    document.getElementById('detailPrice').innerText = `$${product.price.toFixed(2)}`;
    document.getElementById('detailDesc').innerText = product.desc;
    
    const benefitsList = document.getElementById('detailBenefits');
    benefitsList.innerHTML = '';
    product.benefits.forEach(b => {
        const li = document.createElement('li');
        li.innerText = b;
        benefitsList.appendChild(li);
    });

    const btn = document.getElementById('detailAddToCart');
    btn.onclick = () => {
        addToCart(product.id);
        window.location.hash = '#cart';
    };
}

function renderCart() {
    const container = document.getElementById('cartItems');
    container.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        container.innerHTML = `<p>${translations[currentLang].empty_cart}</p>`;
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} TND</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fas fa-trash"></i></button>
            `;
            container.appendChild(el);
        });
    }

    document.getElementById('cartSubtotal').innerText = `${total.toFixed(2)} TND`;
    document.getElementById('cartTotal').innerText = `${total.toFixed(2)} TND`;
}

function renderBestSellers() {
    const bestSellersGrid = document.getElementById('bestSellersGrid');
    if(!bestSellersGrid) return;
    
    let products = JSON.parse(localStorage.getItem('lordProducts')) || [];
    bestSellersGrid.innerHTML = '';
    
    products.slice(0, 3).forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
            <img src="${p.image}" alt="${p.name}" class="product-image" onclick="window.location.hash='#product?id=${p.id}'" style="cursor:pointer">
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="product-price" style="font-weight: bold; color: var(--primary-color); margin: 10px 0;">${p.price.toFixed(2)} TND</p>
                <button class="btn btn-primary" style="width: 100%; border-radius: var(--radius-md);" onclick="addToCart(${p.id})">
                    <i class="fas fa-shopping-cart"></i> Add
                </button>
            </div>
        `;
        bestSellersGrid.appendChild(div);
    });
}

// --- Cart Logic ---
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        saveCart();
        alert('Added to cart!');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('lordCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cartCount').innerText = cart.length;
}

// --- Checkout ---
function handleCheckout(e) {
    e.preventDefault();
    if(cart.length === 0) {
        alert('Cart is empty!');
        return;
    }
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    let orders = JSON.parse(localStorage.getItem('lordOrders')) || [];
    orders.push({
        id: Date.now(),
        date: new Date().toLocaleString(),
        name,
        phone,
        address,
        city,
        items: [...cart],
        total,
        isRead: false
    });
    localStorage.setItem('lordOrders', JSON.stringify(orders));
    
    // Simulate API call for order
    cart = [];
    saveCart();
    
    document.getElementById('successModal').classList.add('active');
    e.target.reset();
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
    window.location.hash = '#home';
}

// --- Language ---
function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerText = translations[currentLang][key];
            }
        }
    });
}
