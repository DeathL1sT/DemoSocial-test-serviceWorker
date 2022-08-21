export default function registerServiceWorker(){

if ('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker
    .register('./sw_cached_pages.js')
    .then(register=>console.log('Service Worker: Registered'))
    .catch(err=>console.log(`Service worker:Error: ${err}`))
  })
}
}