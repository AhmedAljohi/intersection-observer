interface InViewOptions {
    threshold?: number | number[];
    rootMargin?: string;
}
declare function createInViewObserver(callback: (entry: IntersectionObserverEntry) => void, options?: InViewOptions): IntersectionObserver;

export { type InViewOptions, createInViewObserver };
