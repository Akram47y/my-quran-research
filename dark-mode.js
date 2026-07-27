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

// Switch to English - FULL CONTENT
function switchToEnglish() {
    localStorage.setItem('language', 'en');
    
    // Update language button
    var langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = 'BN';
    
    // Welcome box
    var welcomeTitle = document.querySelector('.intro-box h2');
    if (welcomeTitle) welcomeTitle.textContent = 'Welcome';
    
    var welcomeText = document.querySelector('.intro-box p');
    if (welcomeText) {
        welcomeText.textContent = 'Welcome to the Quran Research and Word Translation platform. Click the links below to access research proposals on translation methodology, root-based grammatical analysis, thematic articles, and video research.';
    }
    
    // Research Proposal Card
    var researchCard = document.querySelectorAll('.menu-card')[0];
    if (researchCard) {
        var h3 = researchCard.querySelector('h3');
        if (h3) h3.innerHTML = ' Research Proposal';
        var p = researchCard.querySelector('p');
        if (p) p.textContent = 'This research proposal explains the systematic pre-grammatical core-semantic approach and root-based as well as linguistic analysis methodology for Quranic word-by-word translation.';
        var btn = researchCard.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'Read →';
    }
    
    // Card 1: Introduction
    var card1 = document.querySelectorAll('.menu-card')[1];
    if (card1) {
        var h3 = card1.querySelector('h3');
        if (h3) h3.innerHTML = '📖 1. Introduction';
        var p = card1.querySelector('p');
        if (p) p.textContent = 'Brief introduction to research purpose, methodology and translation principles.';
        var btn = card1.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'Read →';
    }
    
    // Card 2: Bengali Translation
    var card2 = document.querySelectorAll('.menu-card')[2];
    if (card2) {
        var h3 = card2.querySelector('h3');
        if (h3) h3.innerHTML = '📜 2. Bengali Translation';
        var p = card2.querySelector('p');
        if (p) p.textContent = 'List of 114 Surahs and word-by-word simple Bengali translation.';
        var btn = card2.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View 114 Surahs →';
    }
    
    // Card 3: Root Analysis
    var card3 = document.querySelectorAll('.menu-card')[3];
    if (card3) {
        var h3 = card3.querySelector('h3');
        if (h3) h3.innerHTML = '🔍 3. Root Analysis';
        var p = card3.querySelector('p');
        if (p) p.textContent = 'Detailed discussion of Arabic word roots, morphology and semantic analysis.';
        var btn = card3.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View Analysis →';
    }
    
    // Card 4: Articles
    var card4 = document.querySelectorAll('.menu-card')[4];
    if (card4) {
        var h3 = card4.querySelector('h3');
        if (h3) h3.innerHTML = '️ 4. Thematic Articles';
        var p = card4.querySelector('p');
        if (p) p.textContent = 'Research-based articles on various important Quranic topics.';
        var btn = card4.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'Read Articles →';
    }
    
    // Card 5: Videos
    var card5 = document.querySelectorAll('.menu-card')[5];
    if (card5) {
        var h3 = card5.querySelector('h3');
        if (h3) h3.innerHTML = '🎥 5. Videos';
        var p = card5.querySelector('p');
        if (p) p.textContent = 'Various video discussions on Quran research and word translation.';
        var btn = card5.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'View Gallery →';
    }
    
    // Footer
    var footer = document.querySelector('footer p');
    if (footer) footer.textContent = '© 2026 Quran Research & Word Translation | All Rights Reserved';
}

// Switch to Bengali - FULL CONTENT
function switchToBengali() {
    localStorage.setItem('language', 'bn');
    
    // Update language button
    var langBtn = document.getElementById('lang-text');
    if (langBtn) langBtn.textContent = 'EN';
    
    // Welcome box
    var welcomeTitle = document.querySelector('.intro-box h2');
    if (welcomeTitle) welcomeTitle.textContent = 'স্বাগতম';
    
    var welcomeText = document.querySelector('.intro-box p');
    if (welcomeText) {
        welcomeText.textContent = 'কুরআন গবেষণা ও শব্দানুবাদ প্ল্যাটফর্মে আপনাকে স্বাগতম। কুরআনের অনুবাদ-নীতির উপর গবেষণা প্রস্তাব, মূল রুটভিত্তিক ব্যাকরণগত আলোচনা, বিষয়ভিত্তিক প্রবন্ধ ও ভিডিও গবেষণার সংকলনের মূল বিষয়বস্তুগুলোতে প্রবেশ করতে নিচের লিংকে ক্লিক করুন।';
    }
    
    // Research Proposal Card
    var researchCard = document.querySelectorAll('.menu-card')[0];
    if (researchCard) {
        var h3 = researchCard.querySelector('h3');
        if (h3) h3.innerHTML = '📄 গবেষণা প্রস্তাব (Research Proposal)';
        var p = researchCard.querySelector('p');
        if (p) p.textContent = 'এই গবেষণা প্রকল্পে কুরআন শব্দানুবাদের জন্য রসমভিত্তিক প্রি-গ্রাম্যাটিক্যাল কোর-সেমান্টিক পদ্ধতি ও রুটভিত্তিক এবং ভাষাতাত্ত্বিক বিশ্লেষণ নীতিমালা ধাপে ধাপে ব্যাখ্যা করা হয়েছে। আলোচনাটি কোনো চূড়ান্ত সিদ্ধান্ত দাবি করে না। এই গবেষণার সকল প্রস্তাব ভাষাতাত্ত্বিক বিশ্লেষণ ও কোরআনিক প্রয়োগের আলোকে যাচাইযোগ্য একটি গবেষণা মডেল হিসেবে উপস্থাপিত হয়েছে।';
        var btn = researchCard.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'পড়ুন →';
    }
    
    // Card 1: Introduction
    var card1 = document.querySelectorAll('.menu-card')[1];
    if (card1) {
        var h3 = card1.querySelector('h3');
        if (h3) h3.innerHTML = ' ১. প্রাসঙ্গিক কথা';
        var p = card1.querySelector('p');
        if (p) p.textContent = 'গবেষণার মূল উদ্দেশ্য, নীতিমালা ও অনুবাদ সংক্রান্ত সংক্ষিপ্ত পরিচিতি।';
        var btn = card1.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'পড়ুন →';
    }
    
    // Card 2: Bengali Translation
    var card2 = document.querySelectorAll('.menu-card')[2];
    if (card2) {
        var h3 = card2.querySelector('h3');
        if (h3) h3.innerHTML = '📜 ২. বাংলা অনুবাদ';
        var p = card2.querySelector('p');
        if (p) p.textContent = '১১৪টি সূরার তালিকা এবং শব্দে শব্দে প্রাঞ্জল বাংলা অনুবাদ।';
        var btn = card2.querySelector('.card-btn');
        if (btn) btn.innerHTML = '১১৪টি সূরার তালিকা দেখুন →';
    }
    
    // Card 3: Root Analysis
    var card3 = document.querySelectorAll('.menu-card')[3];
    if (card3) {
        var h3 = card3.querySelector('h3');
        if (h3) h3.innerHTML = '🔍 ৩. রুট বিশ্লেষণ মূলক আলোচনা';
        var p = card3.querySelector('p');
        if (p) p.textContent = 'আরবি শব্দের মূল রুট, রূপান্তর ও অর্থভিত্তিক সুনির্দিষ্ট আলোচনা।';
        var btn = card3.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'আলোচনা দেখুন →';
    }
    
    // Card 4: Articles
    var card4 = document.querySelectorAll('.menu-card')[4];
    if (card4) {
        var h3 = card4.querySelector('h3');
        if (h3) h3.innerHTML = '️ ৪. বিষয় ভিত্তিক প্রবন্ধ';
        var p = card4.querySelector('p');
        if (p) p.textContent = 'কুরআনিক বিভিন্ন গুরুত্বপূর্ণ বিষয়ের ওপর বিষয়ভিত্তিক গবেষণামূলক প্রবন্ধ।';
        var btn = card4.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'প্রবন্ধসমূহ পড়ুন →';
    }
    
    // Card 5: Videos
    var card5 = document.querySelectorAll('.menu-card')[5];
    if (card5) {
        var h3 = card5.querySelector('h3');
        if (h3) h3.innerHTML = '🎥 . ভিডিও';
        var p = card5.querySelector('p');
        if (p) p.textContent = 'কুরআন গবেষণা ও শব্দানুবাদের ওপর বিভিন্ন ধারাবাহিক ভিডিও আলোচনা।';
        var btn = card5.querySelector('.card-btn');
        if (btn) btn.innerHTML = 'ভিডিও গ্যালারি দেখুন →';
    }
    
    // Footer
    var footer = document.querySelector('footer p');
    if (footer) footer.textContent = '© ২০২৬ কুরআন গবেষণা ও শব্দানুবাদ | সর্বস্বত্ব সংরক্ষিত';
    }
