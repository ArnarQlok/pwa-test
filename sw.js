const cacheName = 'v2';
const cacheAssets = [
  './index.html',
  './about.html',
  './css/style.css',
  './js/main.js'
];

self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      console.log('Service Worker: Caching Files')
      cache.addAll(cacheAssets)
    })
    .then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
})

// call på fetch event för att se cache offline
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching')
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  )
})