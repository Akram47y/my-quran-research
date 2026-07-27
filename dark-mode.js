// ডার্ক মোড এবং ভাষা টগল

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeBtn(true);
    }
    if (localStorage.getItem('lang') === 'en') {
        setEnglish();
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    updateDarkModeBtn(isDark);
}

function updateDarkModeBtn(isDark) {
    var icon = document.getElementById('dark-mode-icon');
    var text = document.getElementById('dark-mode-text');
    if (!icon || !text) return;
    if (isDark) {
        icon.innerHTML = '&#9728;';
        text.innerHTML = '&#2476;&#2466;&#2453;&#2494; &#2478;&#2494;&#2461;';
    } else {
        icon.innerHTML = '&#127769;';
        text.innerHTML = '&#2440;&#2466;&#2455;&#2494; &#2478;&#2494;&#2461;';
    }
}

function toggleLanguage() {
    var cur = localStorage.getItem('lang') || 'bn';
    if (cur === 'bn') setEnglish();
    else setBengali();
}

function setEnglish() {
    localStorage.setItem('lang', 'en');
    var lt = document.getElementById('lang-text');
    if (lt) lt.innerHTML = 'BN';
    var t = document.querySelector('.intro-box h2');
    if (t) t.innerHTML = 'Welcome';
    var p = document.querySelector('.intro-box p');
    if (p) p.innerHTML = 'Welcome to the Quran Research platform.';
}

function setBengali() {
    localStorage.setItem('lang', 'bn');
    var lt = document.getElementById('lang-text');
    if (lt) lt.innerHTML = 'EN';
    var t = document.querySelector('.intro-box h2');
    if (t) t.innerHTML = '\u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE';
    var p = document.querySelector('.intro-box p');
    if (p) p.innerHTML = '\u0995\u09C1\u09B0\u0986\u09A8 \u0997\u09AC\u09C7\u09B7\u09A3\u09BE \u0993 \u09B6\u09AC\u09CD\u09A6\u09BE\u09A8\u09C1\u09AC\u09BE\u09A6 \u09AA\u09CD\u09B2\u09CD\u09AF\u09BE\u099F\u09AB\u09B0\u09CD\u09AE\u09C7 \u0986\u09AA\u09A8\u09BE\u0995\u09C7 \u09B8\u09CD\u09AC\u09BE\u0997\u09A4\u09AE\u0964';
}
