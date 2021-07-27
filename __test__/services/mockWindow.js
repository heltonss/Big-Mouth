let key = true;

Object.defineProperty(window.navigator, "platform", {
  writable: true,
  value: "MacIntel",
});

Object.defineProperty(window.navigator, "language", {
  writable: true,
  value: "en-US",
});

Object.defineProperty(window.navigator, "deviceMemory", {
  writable: true,
  value: 8,
});

Object.defineProperty(window.navigator, "cookieEnabled", {
  writable: true,
  value: true,
});
