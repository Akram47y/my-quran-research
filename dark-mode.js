// ডার্ক মোড ফাংশন
document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton(true);
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
