const CACHE_NAME = 'hiking-app-v2';
const urlsToCache = [
  '/yamanakama/',
  '/yamanakama/index.html',
  '/yamanakama/manifest.json',
  '/yamanakama/icon.svg',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((res) => res || fetch(event.request)));
});