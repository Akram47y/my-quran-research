// dark-mode.js

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if(themeIcon) themeIcon.textContent = '🌙';
        if(themeText) themeText.textContent = 'ডার্ক মোড';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        if(themeIcon) themeIcon.textContent = '☀️';
        if(themeText) themeText.textContent = 'লাইট মোড';
    }

    if(themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if(themeIcon) themeIcon.textContent = '☀️';
                if(themeText) themeText.textContent = 'লাইট মোড';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if(themeIcon) themeIcon.textContent = '🌙';
                if(themeText) themeText.textContent = 'ডার্ক মোড';
            }
        });
    }
});
