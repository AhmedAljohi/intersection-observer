import * as React from 'react';
import React__default from 'react';

interface LazyRenderProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const LazyRender: React__default.FC<LazyRenderProps>;

declare function useInView(options?: IntersectionObserverInit): {
    ref: React.RefObject<HTMLElement | null>;
    inView: boolean;
};

export { LazyRender, useInView };
