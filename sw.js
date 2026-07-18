const CACHE = 'npte-v3';  // 버전 올려서 기존 캐시 강제 삭제
const BASE = '/NPTE-Study';
const ASSETS = [
  BASE + '/',
  BASE + '/index.html',
  BASE + '/manifest.json',
  BASE + '/icon-192.png',
  BASE + '/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('docs.google.com') || e.request.url.includes('script.google.com')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // index.html은 항상 네트워크 우선 (최신 버전 보장)
  if (e.request.url.endsWith('/') || e.request.url.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
