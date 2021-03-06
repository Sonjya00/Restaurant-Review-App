let staticCacheName = 'restaurant-static-v1';
let urlsToCache = [
	'/',
	'index.html',
	'restaurant.html',
	'config.js',
	'leaflet/leaflet.css',
	'leaflet/leaflet.js',
	'css/styles.css',
	'css/responsive.css',
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
	'img/cover_img/1.jpg',
	'img/cover_img/2.jpg',
	'img/cover_img/3.jpg',
	'img/cover_img/4.jpg',
	'img/cover_img/5.jpg',
	'img/cover_img/6.jpg',
	'img/cover_img/7.jpg',
	'img/cover_img/8.jpg',
	'img/cover_img/9.jpg',
	'img/cover_img/10.jpg',
	'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyCMIT4ttDfCmxA.woff2',
	'https://fonts.gstatic.com/s/raleway/v12/1Ptug8zYS_SKggPNyC0IT4ttDfA.woff2',
	'https://fonts.googleapis.com/css?family=Raleway',
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
				cacheNames.filter(cacheName => cacheName.startsWith('restaurant-static') &&
        cacheName != staticCacheName)
					.map(cacheName => caches.delete(cacheName))
			))
			.catch(error => console.log(error))
	);
});

self.addEventListener('fetch', event => {
	let cacheRequest = event.request;
	event.respondWith(
		caches.match(cacheRequest)
			.then(response => response || fetch(cacheRequest))
	);
});
