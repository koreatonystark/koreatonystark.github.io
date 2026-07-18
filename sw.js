const CACHE='npte-v'+Date.now();
const CORE=['/','/index.html'];

self.addEventListener('install',e=>{
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

// 항상 네트워크 우선, 실패 시 캐시
self.addEventListener('fetch',e=>{
  const url=e.request.url;
  if(url.includes('docs.google')||url.includes('googleapis')||url.includes('translate')){
    return;
  }
  e.respondWith(
    fetch(e.request).then(r=>{
      const clone=r.clone();
      caches.open(CACHE).then(c=>c.put(e.request,clone).catch(()=>{}));
      return r;
    }).catch(()=>caches.match(e.request))
  );
});
