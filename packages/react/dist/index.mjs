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
import { jsx } from "react/jsx-runtime";
var LazyRender = ({
  children,
  className
}) => {
  const { ref, inView } = useInView();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `${className || ""} ${inView ? "in-view" : ""}`,
      children: inView ? children : null
    }
  );
};
export {
  LazyRender,
  useInView
};
