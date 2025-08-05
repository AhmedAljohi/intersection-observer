export interface InViewOptions {
  threshold?: number | number[]
  rootMargin?: string
  root?: Element | null
}

export function createInViewObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: InViewOptions = {}
) {
  // Ensure IntersectionObserver is available
  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver is not supported in this environment');
    return {
      observe: () => {},
      unobserve: () => {},
      disconnect: () => {},
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: () => [],
    } as unknown as IntersectionObserver;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, options);
  
  return observer;
}