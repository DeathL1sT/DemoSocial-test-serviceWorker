const cachName = 'V1'
const cacheAssets =[
    'index.html',
    '/css/main.css',
    '/js/main.js'
]


// self.addEventListener('install',e=>{
//     console.log('Service Worker: Installed')
//     e.waitUntil(
//         caches.open(cachName).then(Cache=>{
//             console.log('service Worker: Caching Files')
//             Cache.addAll(cacheAssets)
//         })
//         .then(()=>self.skipWaiting())
//     )

// })

self.addEventListener('activate',e=>{
    console.log('Service Worker: Activated')
    caches.keys().then(cachNames=>{
        return Promise.all(
            cachNames.map(cache=>{
                if(cache !== cachName){
                    console.log('Service Worker: Clearing old Cache')
                    return caches.delete(cache)
                }
            })
        )
    })

})


self.addEventListener('fetch',e=>{
    console.log('Service worker: Fetching')
    e.respondWith(
        fetch(e.request).catch(()=>caches.match(e.request))
    )
})