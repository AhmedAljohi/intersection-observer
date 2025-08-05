// src/LazyRender.tsx
import React, { ReactNode, RefObject } from "react";
import { useInView } from "./useInView";

type RenderProps = {
  inView: boolean;
  ref: (node: HTMLElement | null) => void;
};

type LazyRenderProps = {
  children: React.ReactNode | ((props: RenderProps) => React.ReactNode);
  as?: keyof React.JSX.IntrinsicElements;
  onChange?: (inView: boolean) => void;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
};

export function LazyRender({
  children,
  as = "div",
  onChange,
  threshold = 0,
  className,
  style,
}: LazyRenderProps) {
  const { ref, inView } = useInView({ threshold });

  React.useEffect(() => {
    if (onChange) onChange(inView);
  }, [inView]);

  const props = {
    ref,
    className,
    style,
  };

  if (typeof children === "function") {
    return children({
      inView: inView,
      ref: (node: HTMLElement | null) => {
        if (ref && typeof ref === "object" && "current" in ref) {
          (ref as any).current = node;
        }
      },
    });
  }

  return React.createElement(as, props, children);
}
