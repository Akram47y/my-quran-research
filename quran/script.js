/* ==========================================
   Quran Research Project - Main Script
   File: script.js
   ========================================== */

// ১. উচ্চারণ দেখান/লুকান ফাংশন
function toggleTransliteration() {
    const transBoxes = document.querySelectorAll('.transliteration-box');
    const btn = document.getElementById('transToggleBtn');
    
    if (transBoxes.length === 0) return;

    const isHidden = window.getComputedStyle(transBoxes[0]).display === 'none';
    
    transBoxes.forEach(box => {
        box.style.display = isHidden ? 'block' : 'none';
    });
    
    if (btn) {
        btn.innerHTML = isHidden ? '🙈 উচ্চারণ লুকান' : '👁️ উচ্চারণ দেখান';
    }
}

// ২. উপলব্ধি দেখান/লুকান ফাংশন (নিরাপদ উপায়)
function toggleInsight(button) {
    const card = button.closest('.verse-card');
    const insightBox = card.querySelector('.insight-box');
    if (!insightBox) return;

    const isHidden = window.getComputedStyle(insightBox).display === 'none';
    insightBox.style.display = isHidden ? 'block' : 'none';
    button.innerHTML = isHidden ? '🙈 উপলব্ধি লুকান' : '💡 উপলব্ধি দেখুন';
}

// ৩. ডায়নামিক কপি করার ফাংশন
function copyVerse(button) {
    const card = button.closest('.verse-card');
    const verseNum = card.querySelector('.verse-num')?.innerText || '';
    const fullTranslation = card.querySelector('.full-translation')?.innerText || '';
    
    const wordBoxes = card.querySelectorAll('.word-box');
    let wordMeanings = [];
    wordBoxes.forEach(box => {
        const ar = box.querySelector('.arabic-word')?.innerText || '';
        const bn = box.querySelector('.verified-meaning, .unverified-meaning')?.innerText || '';
        if(ar && bn) wordMeanings.push(`${ar} (${bn})`);
    });

    const textToCopy = `আয়াত: ${verseNum}\nশব্দানুবাদ: ${wordMeanings.join(' ')}\nঅনুবাদ: ${fullTranslation}\n— কুরআন গবেষণা ও শব্দানুবাদ`;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '✅ কপি হয়েছে!';
        setTimeout(() => { button.innerHTML = originalText; }, 2000);
    });
}

// ৪. ডায়নামিক শেয়ার করার ফাংশন
function shareVerse(button) {
    const card = button.closest('.verse-card');
    const verseNum = card.querySelector('.verse-num')?.innerText || '';
    const fullTranslation = card.querySelector('.full-translation')?.innerText || '';
    const surahTitle = document.querySelector('.header h1')?.innerText || 'কুরআন গবেষণা';

    const shareData = {
        title: `${surahTitle} - আয়াত ${verseNum}`,
        text: `${surahTitle} | আয়াত ${verseNum}:\n${fullTranslation}`,
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData).catch(() => {});
    } else {
        navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
        alert('আয়াতের লিংক ও অনুবাদ কপি করা হয়েছে!');
    }
}

// ৫. পেজ লোড হলে স্বয়ংক্রিয়ভাবে বাটন বসানো এবং পঠিত সূরা সেভ করা
document.addEventListener('DOMContentLoaded', () => {
    
    // ক) প্রতি আয়াতে স্বয়ংক্রিয়ভাবে কপি ও শেয়ার বাটন যুক্ত করা
    const verseCards = document.querySelectorAll('.verse-card');
    verseCards.forEach(card => {
        if (!card.querySelector('.action-buttons')) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'action-buttons';
            buttonContainer.style.cssText = 'display: flex; gap: 8px; margin-top: 10px;';

            buttonContainer.innerHTML = `
                <button class="trans-toggle-btn" style="margin: 0;" onclick="copyVerse(this)">📋 কপি</button>
                <button class="trans-toggle-btn" style="margin: 0; background-color: #2d3748;" onclick="shareVerse(this)">🔗 শেয়ার</button>
            `;

            card.appendChild(buttonContainer);
        }
    });

    // খ) ডায়নামিকভাবে বর্তমান সূরার তথ্য LocalStorage-এ সেভ করা
    const pageTitle = document.querySelector('.header h1')?.innerText || document.title;
    const pageUrl = window.location.pathname.split('/').pop() || 'index.html';

    if (pageUrl !== 'index.html' && pageUrl !== '') {
        const currentSurah = {
            surahName: pageTitle,
            surahUrl: pageUrl
        };

        let surahList = JSON.parse(localStorage.getItem('lastReadQuranList')) || [];
        surahList = surahList.filter(item => item.surahUrl !== currentSurah.surahUrl);
        surahList.unshift(currentSurah);

        if (surahList.length > 5) {
            surahList.pop();
        }

        localStorage.setItem('lastReadQuranList', JSON.stringify(surahList));
    }
});
