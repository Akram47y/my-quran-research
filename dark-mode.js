// Page load check
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

