// ==========================================
// ডার্ক মোড এবং ল্যাঙ্গুয়েজ টগল
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
    if (localStorage.getItem('language') === 'en') {
        switchToEnglish();
    }
});

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
            icon.textContent = '\u2600\uFE0F';
            text.textContent = '\u09B2\u09BE\u0987\u099F \u09AE\u09CB\u09A1';
        } else {
            icon.textContent = '\uD83C\uDF19';
            text.textContent = '\u09A1\u09BE\u09B0\u09CD\u0995 \u09AE\u09CB\u09A1';
        }
    }
}

function toggleLanguage() {
    var currentLang = localStorage.getItem('language') || 'bn';
    if (currentLang === 'bn') {
        switchToEnglish();
    } else {
        switchToBengali();
    }
}

function switchToEnglish() {
    localStorage.setItem('language', 'en');
    var langText = document.getElementById('lang-text');
    if (langText) langText.textContent = 'BN';
    
    var title = document.querySelector('.intro-box h2');
    if (title) title.textContent = 'Welcome';
    
    var text = document.querySelector('.intro-box p');
    if (text) text.textContent = 'Welcome to the Quran Research platform. Explore translation methodology, root-based grammar analysis, thematic articles, and video research.';
}

function switchToBengali() {
    localStorage.setItem('language', 'bn');
    var langText = document.getElementById('lang-text');
    if (langText) langText.textContent = 'EN';
    
    var title = document.querySelector('.intro-box h2');
    if (title) title.textContent = '\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE';
    
    var text = document.querySelector('.intro-box p');
    if (text) text.textContent = '\u0995\u09C1\u09B0\u0986\u09A8 \u0997\u09AC\u09C7\u09B7\u09A3\u09BE \u0993 \u09B6\u09AC\u09CD\u09A6\u09BE\u09A8\u09C1\u09AC\u09BE\u09A6 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u09C7 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE\u0964 \u0995\u09C1\u09B0\u0986\u09A8\u09C7\u09B0 \u0985\u09A8\u09C1\u09AC\u09BE\u09A6-\u09A8\u09C0\u09A4\u09BF\u09B0 \u0989\u09AA\u09B0 \u0997\u09AC\u09C7\u09B7\u09A3\u09BE \u09AA\u09CD\u09B0\u09B8\u09CD\u09A4\u09BE\u09AC, \u09AE\u09C2\u09B2 \u09B0\u09C1\u099F\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09AC\u09CD\u09AF\u09BE\u0995\u09B0\u09A3\u0997\u09A4 \u0986\u09B2\u09CB\u099A\u09A8\u09BE, \u09AC\u09BF\u09B7\u09DF\u09AD\u09BF\u09A4\u09CD\u09A4\u09BF\u0995 \u09AA\u09CD\u09B0\u09AC\u09A8\u09CD\u09A7 \u0993 \u09AD\u09BF\u09A1\u09BF\u0993 \u0997\u09AC\u09C7\u09B7\u09A3\u09BE\u09B0 \u09B8\u0982\u0995\u09B2\u09A8\u09C7\u09B0 \u09AE\u09C2\u09B2 \u09AC\u09BF\u09B7\u09DF\u09AC\u09B8\u09CD\u09A4\u09C1\u0997\u09C1\u09B2\u09CB\u09A4\u09C7 \u09AA\u09CD\u09B0\u09AC\u09C7\u09B6 \u0995\u09B0\u09A4\u09C7 \u09A8\u09BF\u099A\u09C7\u09B0 \u09B2\u09BF\u0982\u0995\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C1\u09A8\u0964';
}
