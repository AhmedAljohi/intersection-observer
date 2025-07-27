// src/useInView.ts
function createInViewObserver(callback, options = {}) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);
  return observer;
}
export {
  createInViewObserver
};
