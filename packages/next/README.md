
# @intersection-observer/next

![Version](https://img.shields.io/npm/v/@intersection-observer/next.svg)
![License](https://img.shields.io/npm/l/@intersection-observer/next.svg)
![Downloads](https://img.shields.io/npm/dm/@intersection-observer/next.svg)

> A performant, flexible Next.js wrapper for the Intersection Observer API.

---

## ✨ Features

- 🪝 **Hook** — Use `useInView` for reactive intersection detection in Next.js
- 🎨 **Component** — Use `LazyRender` for declarative lazy loading
- ⚡️ **Optimized Performance** — Reuses observer instances efficiently
- 🔧 **API Match** — Based on native Intersection Observer API
- 🔠 **TypeScript Support** — Fully typed for TS projects
- 🌳 **Tree-shakeable** — Only the code you use gets bundled
- 🚀 **Zero Dependencies** — Lightweight with no external deps

---

## 📦 Installation

```bash
# With pnpm
pnpm add @intersection-observer/next

# Or npm
npm install @intersection-observer/next

# Or yarn
yarn add @intersection-observer/next
```

---

## 🚀 Quick Start (Next.js)

### Basic Usage with `useInView`

```tsx
import { useInView } from '@intersection-observer/next';

export default function MyComponent() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="my-element">
      {inView ? 'Element is visible!' : 'Element is hidden'}
    </div>
  );
}
```

### Lazy Loading with `LazyRender`

```tsx
import { LazyRender } from '@intersection-observer/next';

export default function LazyImage() {
  return (
    <LazyRender>
      <img src="image.jpg" alt="Lazy loaded image" />
    </LazyRender>
  );
}
```

---

## 📚 API Reference

### `useInView(options?)`

A Next.js hook that returns a ref and boolean indicating if the element is in view.

```tsx
function useInView(options?: InViewOptions): {
  ref: RefObject<HTMLElement>
  inView: boolean
}
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `threshold` | `number \| number[]` | `0` | Percentage of element visibility (0-1) |
| `rootMargin` | `string` | `'0px'` | Margin around the root (e.g., "10px 20px") |
| `root` | `Element \| null` | `null` | Element to use as viewport |

#### Example with Options

```tsx
const { ref, inView } = useInView({
  threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds
  rootMargin: '50px', // Trigger 50px before element enters viewport
  root: document.querySelector('.scroll-container') // Custom root
});
```

### `LazyRender`

A component that renders children only when they come into view.

```tsx
interface LazyRenderProps {
  children: ReactNode | ((props: RenderProps) => ReactNode)
  as?: keyof JSX.IntrinsicElements
  onChange?: (inView: boolean) => void
  threshold?: number
  className?: string
  style?: CSSProperties
}

interface RenderProps {
  inView: boolean
  ref: (node: HTMLElement | null) => void
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode \| Function` | - | Content to render or render function |
| `as` | `string` | `'div'` | HTML element to render |
| `onChange` | `(inView: boolean) => void` | - | Callback when visibility changes |
| `threshold` | `number` | `0` | Visibility threshold (0-1) |
| `className` | `string` | - | CSS class name |
| `style` | `CSSProperties` | - | Inline styles |

---

## 🎯 Next.js Example

### Lazy Loading Product Cards

```tsx
import { LazyRender } from '@intersection-observer/next';

export default function ProductList({ products }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <LazyRender key={product.id}>
          {({ inView, ref }) => (
            <div ref={ref}>
              {inView && (
                <ProductCard {...product} />
              )}
            </div>
          )}
        </LazyRender>
      ))}
    </div>
  );
}
```

---

## 🌐 Browser Support

This package uses the Intersection Observer API, which is supported in all modern browsers:

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+

For older browsers, you can use a polyfill:

```bash
npm install intersection-observer
```

```tsx
// Add this to your app entry point
import 'intersection-observer';
```

---

## 🛠 Development

This package is part of a monorepo. To link it locally:

```bash
pnpm install
pnpm dev # or use your Next.js example app
```

---

## 📝 License

MIT — Made with ❤️ by Ahmed Aljohi (https://github.com/AhmedAljhoi)
