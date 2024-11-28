// Service Worker to handle push notifications
self.addEventListener('install', event => {
    console.log('Service Worker installed.');
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated.');
});

self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Default Title';
    const body = data.body || 'Default Body';
    const icon = data.icon || '/icon.png';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
        })
    );
});
