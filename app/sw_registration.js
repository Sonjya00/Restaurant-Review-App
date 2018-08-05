if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register('sw.js')
		.then(registration => console.log('SW Registered: ' + registration.scope))
		.catch(error => console.log('SW Registration Failed: ' + error));
}
