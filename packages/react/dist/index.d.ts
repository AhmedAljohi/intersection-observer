import * as React from 'react';
import React__default from 'react';

type RenderProps = {
    inView: boolean;
    ref: (node: HTMLElement | null) => void;
};
type LazyRenderProps = {
    children: React__default.ReactNode | ((props: RenderProps) => React__default.ReactNode);
    as?: keyof React__default.JSX.IntrinsicElements;
    onChange?: (inView: boolean) => void;
    threshold?: number;
    className?: string;
    style?: React__default.CSSProperties;
};
declare function LazyRender({ children, as, onChange, threshold, className, style, }: LazyRenderProps): React__default.ReactNode;

declare function useInView(options?: IntersectionObserverInit): {
    ref: React.RefObject<HTMLElement | null>;
    inView: boolean;
};

export { LazyRender, useInView };
