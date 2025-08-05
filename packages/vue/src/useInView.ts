import { ref as vueRef, onUnmounted, onMounted } from "vue";
import { createInViewObserver } from "@intersection-observer/core";

export function useInView(options?: IntersectionObserverInit) {
  const target = vueRef<HTMLElement | null>(null);
  const inView = vueRef(false);

  onMounted(() => {
    if (!target.value) return;
  
    const observer = createInViewObserver((entry) => {
      inView.value = entry.isIntersecting;
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, options);
  
    observer.observe(target.value);
  
    onUnmounted(() => {
      observer.disconnect();
    });
  });

  return {
    ref: target,
    inView,
  };
}