if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    //returns installed service workers
    if (registrations.length) {
      for (let registration of registrations) {
        registration.unregister();
      }
    }
  });
}

if ("caches" in window) {
  caches.keys().then(function(keyList) {
    return Promise.all(
      keyList.map(function(key) {
        return caches.delete(key);
      })
    );
  });
}
