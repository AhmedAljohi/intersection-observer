import React from "react";
import { useInView } from "./useInView";

interface LazyRenderProps {
  children: React.ReactNode;
  className?: string;
}

export const LazyRender: React.FC<LazyRenderProps> = ({
  children,
  className,
}) => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className || ""} ${inView ? "in-view" : ""}`}
    >
      {inView ? children : null}
    </div>
  );
};
