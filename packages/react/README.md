# @intersection-observer/react

![Version](https://img.shields.io/npm/v/@intersection-observer/react.svg)
![License](https://img.shields.io/npm/l/@intersection-observer/react.svg)
![Downloads](https://img.shields.io/npm/dm/@intersection-observer/react.svg)

> A performant, flexible React wrapper for the Intersection Observer API.

---

## ✨ Features

- 🪝 **Hook** — Use `useInView` for reactive intersection detection
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
pnpm add @intersection-observer/react

# Or npm
npm install @intersection-observer/react

# Or yarn
yarn add @intersection-observer/react
```

---

## 🚀 Quick Start

### Basic Usage with `useInView`

```tsx
import { useInView } from '@intersection-observer/react';

const MyComponent = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="my-element">
      {inView ? 'Element is visible!' : 'Element is hidden'}
    </div>
  );
};
```

### Lazy Loading with `LazyRender`

```tsx
import { LazyRender } from '@intersection-observer/react';

const LazyImage = () => {
  return (
    <LazyRender>
      <img src="image.jpg" alt="Lazy loaded image" />
    </LazyRender>
  );
};
```

---

## 📚 API Reference

### `useInView(options?)`

A React hook that returns a ref and boolean indicating if the element is in view.

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

## 🎯 Use Cases & Examples

### 1. Lazy Loading Images

```tsx
import { LazyRender } from '@intersection-observer/react';

const ImageGallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image) => (
        <LazyRender key={image.id}>
          <img 
            src={image.src} 
            alt={image.alt}
            loading="lazy"
          />
        </LazyRender>
      ))}
    </div>
  );
};
```

### 2. Infinite Scroll

```tsx
import { LazyRender } from '@intersection-observer/react';

const InfiniteList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    const newItems = await fetchMoreItems();
    setItems(prev => [...prev, ...newItems]);
    setLoading(false);
  };

  return (
    <div className="infinite-list">
      {items.map(item => (
        <Item key={item.id} {...item} />
      ))}
      
      <LazyRender onChange={(inView) => inView && loadMore()}>
        <div className="loading-indicator">
          {loading ? 'Loading...' : 'Scroll for more'}
        </div>
      </LazyRender>
    </div>
  );
};
```

### 3. Scroll-Based Animations

```tsx
import { useInView } from '@intersection-observer/react';

const AnimatedSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: '50px'
  });

  return (
    <section 
      ref={ref}
      className={`animate-section ${inView ? 'animate-in' : 'animate-out'}`}
    >
      <h2>Animated Content</h2>
      <p>This section animates when it comes into view</p>
    </section>
  );
};
```

### 4. Analytics Tracking

```tsx
import { LazyRender } from '@intersection-observer/react';

const TrackedSection = ({ sectionId, children }) => {
  const handleVisibilityChange = (inView) => {
    if (inView) {
      analytics.track('section_viewed', { sectionId });
    }
  };

  return (
    <LazyRender onChange={handleVisibilityChange}>
      <section className="tracked-section">
        {children}
      </section>
    </LazyRender>
  );
};
```

### 5. Conditional Rendering with Render Props

```tsx
import { LazyRender } from '@intersection-observer/react';

const ConditionalContent = () => {
  return (
    <LazyRender threshold={0.5}>
      {({ inView, ref }) => (
        <div ref={ref} className="conditional-content">
          {inView ? (
            <div className="visible-content">
              <h3>Content is now visible!</h3>
              <p>This content only renders when 50% visible</p>
            </div>
          ) : (
            <div className="loading-placeholder">
              <div className="skeleton" />
            </div>
          )}
        </div>
      )}
    </LazyRender>
  );
};
```

### 6. Performance Monitoring

```tsx
import { useInView } from '@intersection-observer/react';

const PerformanceTracker = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: '100px'
  });

  useEffect(() => {
    if (inView) {
      performance.mark('content-visible');
      performance.measure('content-load', 'navigationStart', 'content-visible');
    }
  }, [inView]);

  return (
    <div ref={ref} className="performance-tracked">
      <h2>Performance Tracked Content</h2>
      <p>This section tracks when it becomes visible</p>
    </div>
  );
};
```

---

## 🔧 Advanced Usage

### Custom Root Element

```tsx
const CustomRootExample = () => {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    root: containerRef.current,
    threshold: 0.5
  });

  return (
    <div ref={containerRef} className="scroll-container">
      <div ref={ref} className="tracked-element">
        {inView ? 'In container view' : 'Outside container view'}
      </div>
    </div>
  );
};
```

### Multiple Thresholds

```tsx
const MultiThresholdExample = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  return (
    <div ref={ref} className="multi-threshold">
      <p>This element tracks multiple visibility levels</p>
      <p>Current visibility: {inView ? 'Visible' : 'Hidden'}</p>
    </div>
  );
};
```

### Cleanup and Memory Management

```tsx
const CleanupExample = () => {
  const { ref, inView } = useInView();

  // The hook automatically handles cleanup when the component unmounts
  // or when the ref changes

  return (
    <div ref={ref}>
      {inView ? 'Visible' : 'Hidden'}
    </div>
  );
};
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

## 📦 Bundle Size

- **Minified**: ~3KB
- **Gzipped**: ~1.5KB
- **Tree-shakeable**: Only imports what you use

---

## 🛠 Development

This package is part of a monorepo. To link it locally:

```bash
pnpm install
pnpm dev # or use your examples app
```

---

## 📝 License

MIT — Made with ❤️ by Ahmed Aljohi (https://github.com/AhmedAljhoi)
