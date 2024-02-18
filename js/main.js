// Make sure service workers are supported
if('serviceWorker' in navigator) {
  //console.log("Service Workers supported");

  // registrerar vi service workern på sw.js när sidan laddas
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}