const CACHE_NAME = 'quran-research-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/prasangkik-kotha.html',
  '/research-proposal.html',
  '/dark-mode.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache addAll failed:', err);
      })
  );
});

// Fetch event - এটিই মূল সমস্যার সমাধান
self.addEventListener('fetch', event => {
  // শুধুমাত্র GET request handle করুন
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // ক্যাশে পেলে ক্যাশ থেকে দেখাও
        if (response) {
          return response;
        }

        // ক্যাশে না থাকলে নেটওয়ার্ক থেকে আনো
        return fetch(event.request)
          .then(response => {
            // সঠিক response না আসলে
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // ক্যাশে জমা করো
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // নেটওয়ার্কও না থাকলে মূল index.html দেখাও (SPA fallback)
            return caches.match('/index.html');
          });
      })
  );
});

// Activate event - পুরনো ক্যাশ মুছে ফেলুন
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
