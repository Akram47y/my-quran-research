// Page load e check
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
    if (localStorage.getItem('language') === 'en') {
        switchToEnglish();
    }
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        updateDarkModeButton(true);
    } else {
        localStorage.setItem('darkMode', 'disabled');
        updateDarkModeButton(false);
    }
}

// Update dark mode button
function updateDarkModeButton(isDark) {
    var icon = document.getElementById('dark-mode-icon');
    var text = document.getElementById('dark-mode-text');
    
    if (icon && text) {
        if (isDark) {
            icon.textContent = '☀️';
            text.textContent = 'লাইট মোড';
        } else {
            icon.textContent = '🌙';
            text.textContent = 'ডার্ক মোড';
        }
    }
}

// Language toggle
function toggleLanguage() {
    var lang = localStorage.getItem('language') || 'bn';
    if (lang === 'bn') {
        switchToEnglish();
    } else {
        switchToBengali();
    }
}

// Switch to English
function switchToEnglish() {
    localStorage.setItem('language', 'en');
    
    var langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = 'BN';
    
    var welcomeTitle = document.querySelector('.intro-box h2');
    if (welcomeTitle) welcomeTitle.textContent = 'Welcome';
    
    var welcomeText = document.querySelector('.intro-box p');
    if (welcomeText) {
        welcomeText.textContent = 'Welcome to the Quran Research and Word Translation platform. Click the links below to access research proposals on translation methodology, root-based grammatical analysis, thematic articles, and video research.';
    }
    
    var cards = document.querySelectorAll('.menu-card');
    if (cards[0]) {
        var h3 = cards[0].querySelector('h3');
        if (h3) h3.innerHTML = '📄 Research Proposal';
        var p = cards[0].querySelector('p');
        if (p) p.textContent = 'This research proposal explains the systematic pre-grammatical core-semantic approach and root-based as well as linguistic analysis methodology for Quranic word-by-word translation.';
        var btn = cards[0].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'Read →';
    }
    
    if (cards[1]) {
        var h3 = cards[1].querySelector('h3');
        if (h3) h3.innerHTML = '📖 1. Introduction';
        var p = cards[1].querySelector('p');
        if (p) p.textContent = 'Brief introduction to research purpose, methodology and translation principles.';
        var btn = cards[1].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'Read →';
    }
    
    if (cards[2]) {
        var h3 = cards[2].querySelector('h3');
        if (h3) h3.innerHTML = '📜 2. Bengali Translation';
        var p = cards[2].querySelector('p');
        if (p) p.textContent = 'List of 114 Surahs and word-by-word simple Bengali translation.';
        var btn = cards[2].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View 114 Surahs →';
    }
    
    if (cards[3]) {
        var h3 = cards[3].querySelector('h3');
        if (h3) h3.innerHTML = '🔍 3. Root Analysis';
        var p = cards[3].querySelector('p');
        if (p) p.textContent = 'Detailed discussion of Arabic word roots, morphology and semantic analysis.';
        var btn = cards[3].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View Analysis →';
    }
    
    if (cards[4]) {
        var h3 = cards[4].querySelector('h3');
        if (h3) h3.innerHTML = '✏️ 4. Thematic Articles';
        var p = cards[4].querySelector('p');
        if (p) p.textContent = 'Research-based articles on various important Quranic topics.';
        var btn = cards[4].querySelector('.card-btn');
        // Update about page if exists
    if (document.querySelector('.content-card')) {
        updateAboutPageContent('en');
    }
        if (btn) btn.innerHTML = 'Read Articles →';
    }
    
    if (cards[5]) {
        var h3 = cards[5].querySelector('h3');
        if (h3) h3.innerHTML = ' 5. Videos';
        var p = cards[5].querySelector('p');
        if (p) p.textContent = 'Various video discussions on Quran research and word translation.';
        var btn = cards[5].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View Gallery →';
    }
    
    var footer = document.querySelector('footer p');
    if (footer) footer.textContent = '© 2026 Quran Research & Word Translation | All Rights Reserved';
}

// Switch to Bengali
function switchToBengali() {
    localStorage.setItem('language', 'bn');
    
    var langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = 'EN';
    
    var welcomeTitle = document.querySelector('.intro-box h2');
    if (welcomeTitle) welcomeTitle.textContent = 'স্বাগতম';
    
    var welcomeText = document.querySelector('.intro-box p');
    if (welcomeText) {
        welcomeText.textContent = 'কুরআন গবেষণা ও শব্দানুবাদ প্ল্যাটফর্মে আপনাকে স্বাগতম। কুরআনের অনুবাদ-নীতির উপর গবেষণা প্রস্তাব, মূল রুটভিত্তিক ব্যাকরণগত আলোচনা, বিষয়ভিত্তিক প্রবন্ধ ও ভিডিও গবেষণার সংকলনের মূল বিষয়বস্তুগুলোতে প্রবেশ করতে নিচের লিংকে ক্লিক করুন।';
    }
    
    var cards = document.querySelectorAll('.menu-card');
    if (cards[0]) {
        var h3 = cards[0].querySelector('h3');
        if (h3) h3.innerHTML = ' গবেষণা প্রস্তাব (Research Proposal)';
        var p = cards[0].querySelector('p');
        if (p) p.textContent = 'এই গবেষণা প্রকল্পে কুরআন শব্দানুবাদের জন্য রসমভিত্তিক প্রি-গ্রাম্যাটিক্যাল কোর-সেমান্টিক পদ্ধতি ও রুটভিত্তিক এবং ভাষাতাত্ত্বিক বিশ্লেষণ নীতিমালা ধাপে ধাপে ব্যাখ্যা করা হয়েছে। আলোচনাটি কোনো চূড়ান্ত সিদ্ধান্ত দাবি করে না। এই গবেষণার সকল প্রস্তাব ভাষাতাত্ত্বিক বিশ্লেষণ ও কোরআনিক প্রয়োগের আলোকে যাচাইযোগ্য একটি গবেষণা মডেল হিসেবে উপস্থাপিত হয়েছে।';
        var btn = cards[0].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'পড়ুন →';
    }
    
    if (cards[1]) {
        var h3 = cards[1].querySelector('h3');
        if (h3) h3.innerHTML = '📖 ১. প্রাসঙ্গিক কথা';
        var p = cards[1].querySelector('p');
        if (p) p.textContent = 'গবেষণার মূল উদ্দেশ্য, নীতিমালা ও অনুবাদ সংক্রান্ত সংক্ষিপ্ত পরিচিতি।';
        var btn = cards[1].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'পড়ুন →';
    }
    
    if (cards[2]) {
        var h3 = cards[2].querySelector('h3');
        if (h3) h3.innerHTML = '📜 ২. বাংলা অনুবাদ';
        var p = cards[2].querySelector('p');
        if (p) p.textContent = '১১৪টি সূরার তালিকা এবং শব্দে শব্দে প্রাঞ্জল বাংলা অনুবাদ।';
        var btn = cards[2].querySelector('.card-btn');
        if (btn) btn.innerHTML = '১১৪টি সূরার তালিকা দেখুন →';
    }
    
    if (cards[3]) {
        var h3 = cards[3].querySelector('h3');
        if (h3) h3.innerHTML = '🔍 ৩. রুট বিশ্লেষণ মূলক আলোচনা';
        var p = cards[3].querySelector('p');
        if (p) p.textContent = 'আরবি শব্দের মূল রুট, রূপান্তর ও অর্থভিত্তিক সুনির্দিষ্ট আলোচনা।';
        var btn = cards[3].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'আলোচনা দেখুন →';
    }
    
    if (cards[4]) {
        var h3 = cards[4].querySelector('h3');
        if (h3) h3.innerHTML = '✏️ ৪. বিষয় ভিত্তিক প্রবন্ধ';
        var p = cards[4].querySelector('p');
        if (p) p.textContent = 'কুরআনিক বিভিন্ন গুরুত্বপূর্ণ বিষয়ের ওপর বিষয়ভিত্তিক গবেষণামূলক প্রবন্ধ।';
        var btn = cards[4].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'প্রবন্ধসমূহ পড়ুন →';
    }
    
    if (cards[5]) {
        var h3 = cards[5].querySelector('h3');
        if (h3) h3.innerHTML = '🎥 ৫. ভিডিও';
        var p = cards[5].querySelector('p');
        if (p) p.textContent = 'কুরআন গবেষণা ও শব্দানুবাদের ওপর বিভিন্ন ধারাবাহিক ভিডিও আলোচনা।';
        var btn = cards[5].querySelector('.card-btn');
        if (btn) btn.innerHTML = 'ভিডিও গ্যালারি দেখুন →';
    }
    
    var footer = document.querySelector('footer p');
    if (footer) footer.textContent = '© ২০২৬ কুরআন গবেষণা ও শব্দানুবাদ | সর্বস্বত্ব সংরক্ষিত';
            }
// ==========================================
// About page content translation
// ==========================================
function updateAboutPageContent(lang) {
    if (lang === 'en') {
        // Page title
        var pageTitle = document.querySelector('header h1');
        if (pageTitle) pageTitle.textContent = 'Research Proposal';
        
        // Section 1
        var section1Title = document.querySelectorAll('.content-card h2')[0];
        if (section1Title) section1Title.innerHTML = '1. Main Objectives and Purpose';
        
        var section1Text = document.querySelectorAll('.content-card p')[0];
        if (section1Text) section1Text.textContent = 'The main goal of this project is to present the message of the Holy Quran by connecting it with its original linguistic and grammatical roots, providing word-by-word translation and contextual explanation.';
        
        // Section 2
        var section2Title = document.querySelectorAll('.content-card h2')[1];
        if (section2Title) section2Title.innerHTML = '2. Research and Translation Methodology';
        
        // Section 3
        var section3Title = document.querySelectorAll('.content-card h2')[2];
        if (section3Title) section3Title.innerHTML = '3. Feedback and Consent';
        
        var section3Text = document.querySelectorAll('.content-card p')[2];
        if (section3Text) section3Text.textContent = '"Your valuable feedback will further enrich this research."';
        
        // Back button
        var backBtn = document.querySelector('.nav-btn');
        if (backBtn) backBtn.textContent = '← Back to Main List';
        
    } else {
        // Bengali content
        var pageTitle = document.querySelector('header h1');
        if (pageTitle) pageTitle.textContent = 'গবেষণা প্রস্তাব (Research Proposal)';
        
        var section1Title = document.querySelectorAll('.content-card h2')[0];
        if (section1Title) section1Title.innerHTML = '. মূল লক্ষ্য ও উদ্দেশ্য';
        
        var section1Text = document.querySelectorAll('.content-card p')[0];
        if (section1Text) section1Text.textContent = 'এই প্রকল্পের মূল লক্ষ্য হলো পবিত্র কুরআনের বার্তাকে তার মূল ভাষাগত ও ব্যাকরণগত শেকড়ের (Root) সাথে সংযুক্ত করে শব্দে শব্দে অনুবাদ উপস্থাপন করা এবং প্রাসঙ্গিক ব্যাখ্যা অন্তর্ভুক্ত করা।';
        
        var section2Title = document.querySelectorAll('.content-card h2')[1];
        if (section2Title) section2Title.innerHTML = '২. গবেষণা ও অনুবাদ পদ্ধতি';
        
        var section3Title = document.querySelectorAll('.content-card h2')[2];
        if (section3Title) section3Title.innerHTML = '৩. মতামত ও সম্মতি';
        
        var section3Text = document.querySelectorAll('.content-card p')[2];
        if (section3Text) section3Text.textContent = '"আপনার মূল্যবান মতামত এই গবেষণাকে আরও সমৃদ্ধ করবে।"';
        
        var backBtn = document.querySelector('.nav-btn');
        if (backBtn) backBtn.textContent = '← মূল তালিকায় ফিরুন';
    }
}
