navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});

if ("caches" in window) {
  caches.keys().then(function(keyList) {
    return Promise.all(
      keyList.map(function(key) {
        return caches.delete(key);
      })
    );
  });
}
