const CACHE_NAME = 'en-v3';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './manifest.json',
  './logo-header.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Quicksand:wght@400;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js'
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        // Cache local files only — CDN files cached on first fetch
        return cache.addAll(ASSETS.filter(a => a.startsWith('./')));
      });
    })
  );
  self.skipWaiting();
});

// Activate — clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache-first for assets, network-first for HTML
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Network-first for HTML (so updates are picked up)
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Cache-first for everything else
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // Cache Google Font files dynamically
        if (url.hostname.includes('gstatic.com') || url.hostname.includes('googleapis.com') || url.hostname.includes('cdnjs.cloudflare.com')) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
