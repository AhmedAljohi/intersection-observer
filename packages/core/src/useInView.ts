export interface InViewOptions {
    threshold?: number | number[]
    rootMargin?: string
  }
  
  export function createInViewObserver(
    callback: (entry: IntersectionObserverEntry) => void,
    options: InViewOptions = {}
  ) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(callback)
    }, options)
    return observer
  }