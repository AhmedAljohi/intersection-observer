import React from 'react';

interface LazyRenderProps {
    children: React.ReactNode;
    className?: string;
}
declare const LazyRender: React.FC<LazyRenderProps>;

export { LazyRender };
