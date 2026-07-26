// ==========================================
// ডার্ক মোড ফাংশন - সব পেজে কাজ করবে
// ==========================================

// পেজ লোড হলে চেক করুন
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
    }
});

// ডার্ক মোড টগল ফাংশন
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

// বাটন আপডেট ফাংশন
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
