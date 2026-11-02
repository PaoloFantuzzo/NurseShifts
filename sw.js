const CACHE_NAME = 'nurseshifts-pwa-v12';
const ICS_CACHE_NAME = 'nurseshifts-ics-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== ICS_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Intercetta la richiesta del file calendario .ics per far aprire nativamente il Calendario su iPhone
  if (event.request.url.includes('turni-nurseshifts.ics')) {
    event.respondWith(
      caches.open(ICS_CACHE_NAME).then((cache) =>
        cache.match('./turni-nurseshifts.ics', { ignoreSearch: true }).then((res) => {
          if (res) return res;
          return new Response('BEGIN:VCALENDAR\r\nVERSION:2.0\r\nEND:VCALENDAR', {
            status: 200,
            headers: {
              'Content-Type': 'text/calendar; charset=utf-8',
              'Content-Disposition': 'inline; filename="turni.ics"'
            }
          });
        })
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
