if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  window.navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(r => r.unregister());
  });
}
