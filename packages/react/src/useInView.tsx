import { useEffect, useRef, useState } from "react";

import { createInViewObserver, InViewOptions } from "@intersection-observer/core";

export function useInView(options?: InViewOptions) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = createInViewObserver((entry: IntersectionObserverEntry) => {
      setInView(entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    }, options)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}