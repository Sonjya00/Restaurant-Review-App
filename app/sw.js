let staticCacheName = 'restaurant-static-v1';
let urlsToCache = [
	'/',
	'index.html',
	'restaurant.html',
	//toremove
	'config.js',
	'leaflet/leaflet.css',
	'leaflet/leaflet.js',
	'css/styles.css',
	'data/restaurants.json',
	'sw_registration.js',
	'js/dbhelper.js',
	'js/main.js',
	'js/restaurant_info.js',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'img/cover/1.jpg',
	'img/cover/2.jpg',
	'img/cover/3.jpg',
	'img/cover/4.jpg',
	'img/cover/5.jpg',
	'img/cover/6.jpg',
	'img/cover/7.jpg',
	'img/cover/8.jpg',
	'img/cover/9.jpg',
	'img/cover/10.jpg',
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(staticCacheName)
			.then(cache => cache.addAll(urlsToCache))
			.catch(error => console.log(error))
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys()
			.then(cacheNames => Promise.all(
				cacheNames.filter(cacheName => cacheName.startsWith('restaurant-') &&
        cacheName != staticCacheName)
					.map(cacheName => caches.delete(cacheName))
			))
			.catch(error => console.log(error))
	);
});

self.addEventListener('fetch', event => {
	let cacheRequest = event.request;
	// if (cacheRequest.url.indexOf('restaurant.html') !== -1) {
	//   cacheRequest = new Request('restaurant.html')
	// }
	event.respondWith(
		caches.match(cacheRequest)
			.then(response => response || fetch(cacheRequest))
	);
});
