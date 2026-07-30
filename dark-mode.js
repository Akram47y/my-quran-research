// Page load e check
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
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

}
