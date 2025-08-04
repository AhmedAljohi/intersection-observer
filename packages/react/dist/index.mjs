// src/LazyRender.tsx
import React from "react";

// src/useInView.tsx
import { useEffect, useRef, useState } from "react";
import { createInViewObserver } from "@intersection-observer/core";
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = createInViewObserver((entry) => {
      setInView(entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);
  return { ref, inView };
}

// src/LazyRender.tsx
function LazyRender({
  children,
  as = "div",
  onChange,
  threshold = 0,
  className,
  style
}) {
  const { ref, inView } = useInView({ threshold });
  React.useEffect(() => {
    if (onChange) onChange(inView);
  }, [inView]);
  const props = {
    ref,
    className,
    style
  };
  if (typeof children === "function") {
    return children({
      inView,
      ref: (node) => {
        if (ref && typeof ref === "object" && "current" in ref) {
          ref.current = node;
        }
      }
    });
  }
  return React.createElement(as, props, children);
}
export {
  LazyRender,
  useInView
};
