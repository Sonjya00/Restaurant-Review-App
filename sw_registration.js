if (navigator.serviceWorker) {
  navigator.serviceWorker
  .register('sw.js')
  .then(registration => console.log('SW registration successful: ' + registration.scope))
  .catch(error => console.log('SW registration failed: ' + error));
}
