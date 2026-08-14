const CACHE_NAME = 'quran-research-v1';
const urlsToCache = [
  '/',
  'index.html',
  'prasangkik-kotha.html', // আপনার ফাইলের নাম অনুযায়ী এটি পরিবর্তন করুন (যেমন: about.html)
  '/dark-mode.js',
  '/manifest.json'
];

// ইনস্টলেশনের সময় ফাইলগুলো ক্যাশে জমা করবে
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// নেটওয়ার্ক রিকোয়েস্ট ইন্টারসেপ্ট করে ক্যাশ থেকে দেখাবে (অফলাইন সাপোর্ট)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ক্যাশে পেলে ক্যাশ থেকে দেখাবে, না পেলে নেটওয়ার্ক থেকে আনবে
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// পুরনো ক্যাশ মুছে ফেলার জন্য (যখন আপনি নতুন ভার্সন আপডেট করবেন)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
