// ==========================================
// ডার্ক মোড এবং ল্যাঙ্গুয়েজ টগল ফাংশন
// ==========================================

// পেজ লোড হলে চেক করুন
document.addEventListener('DOMContentLoaded', function() {
    // ডার্ক মোড চেক
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
    
    // ল্যাঙ্গুয়েজ চেক
    if (localStorage.getItem('language') === 'en') {
        switchToEnglish();
    }
});

// ==========================================
// ডার্ক মোড ফাংশন
// ==========================================

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

// ==========================================
// ল্যাঙ্গুয়েজ টগল ফাংশন
// ==========================================

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'bn';
    
    if (currentLang === 'bn') {
        switchToEnglish();
    } else {
        switchToBengali();
    }
}

function switchToEnglish() {
    localStorage.setItem('language', 'en');
    document.getElementById('lang-text').textContent = 'BN';
    
    // কন্টেন্ট আপডেট
    const welcomeTitle = document.querySelector('.intro-box h2');
    const welcomeText = document.querySelector('.intro-box p');
    
    if (welcomeTitle) welcomeTitle.textContent = 'Welcome';
    if (welcomeText) welcomeText.textContent = 'Welcome to the Quran Research and Word Translation platform. Here you will find research proposals on Quran translation methodology, root-based grammatical analysis, thematic articles, and video research. Click the links below to access the main topics.';
}

function switchToBengali() {
    localStorage.setItem('language', 'bn');
    document.getElementById('lang-text').textContent = 'EN';
    
    // কন্টেন্ট আপডেট
    const welcomeTitle = document.querySelector('.intro-box h2');
    const welcomeText = document.querySelector('.intro-box p');
    
    if (welcomeTitle) welcomeTitle.textContent = 'স্বাগতম';
    if (welcomeText) welcomeText.textContent = 'কুরআন গবেষণা ও শব্দানুবাদ প্ল্যাটফর্মে আপনাকে স্বাগতম। কুরআনের অনুবাদ-নীতির উপর গবেষণা প্রস্তাব, মূল রুটভিত্তিক ব্যাকরণগত আলোচনা, বিষয়ভিত্তিক প্রবন্ধ ও ভিডিও গবেষণার সংকলনের মূল বিষয়বস্তুগুলোতে প্রবেশ করতে নিচের লিংকে ক্লিক করুন।';
}
