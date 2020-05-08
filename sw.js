const staticCacheName ='site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets=[
    '/',
    '/index.html',
    '/pages/search.html',
    '/pages/new_data.html',
    '/js/app.js',
    '/js/ui.js',
    '/pages/detail.html',
    '/js/materialize.min.js',
    '/css/styles.css',
    '/css/materialize.min.css',
    '/image/search.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
    '/pages/fallback.html',
];

//cache size limit function
const limitCacheSize =(name, size)=>{
    caches.open(name).then(cache =>{
        cache.keys().then(keys => {
            if(keys.length > size){
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        })
    })
};

self.addEventListener('install',evt=>{
    evt.waitUntil(
    //console.log('Service worker has been installed');
    caches.open(staticCacheName).then(cache =>{
        console.log('catching shell assets');
        cache.addAll(assets)
    })
    );
});
self.addEventListener('activate',evt=>{
    //console.log('service worker has been activated');
    evt.waitUntil(
        caches.keys().then(keys =>{
            //console.log(keys);
            return Promise.all(keys
                .filter(key => key!== staticCacheName && key!== dynamicCacheName)
                .map(key => caches.delete(key))
                )
        })
    );
});
self.addEventListener('fetch',evt=>{
   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request).then(fetchRes =>{
            return caches.open(dynamicCacheName).then(cache =>{
                cache.put(evt.request.url, fetchRes.clone());
                limitCacheSize(dynamicCacheName,15);
                return fetchRes;
            })
        });
        }).catch(() => {
            if(evt.request.url.indexOf('.html') > -1){
            return caches.match('/pages/fallback.html');
            }
        })
    );
   }
});