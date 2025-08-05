# 🧭 intersection-observer

A lightweight and modular monorepo for managing intersection observer utilities across JavaScript, React, and Vue ecosystems.

## ✨ Features

- 🎯 **Cross-Platform Support**: Works with vanilla JavaScript, React, and Vue
- 📦 **Modular Design**: Install only what you need
- 🚀 **TypeScript Ready**: Full TypeScript support with type definitions
- ⚡ **Lightweight**: Minimal bundle size with no external dependencies
- 🎨 **Flexible Components**: Pre-built components for common use cases
- 🔧 **Customizable**: Full control over intersection observer options

## 📁 Packages

| Package | Description | Size |
|---------|-------------|------|
| [`@intersection-observer/core`](./packages/core) | Core utilities for working with the Intersection Observer API | ~2KB |
| [`@intersection-observer/react`](./packages/react) | React hooks and components for intersection observers | ~3KB |
| [`@intersection-observer/vue`](./packages/vue) | Vue composables and components for intersection observers | ~3KB |

## 📦 Installation

Each package is published separately. You can install what you need:

```bash
# Core utilities only
npm install @intersection-observer/core

# React support
npm install @intersection-observer/react

# Vue support
npm install @intersection-observer/vue

# Or using yarn
yarn add @intersection-observer/core
yarn add @intersection-observer/react
yarn add @intersection-observer/vue

# Or using pnpm
pnpm add @intersection-observer/core
pnpm add @intersection-observer/react
pnpm add @intersection-observer/vue
```

## 🚀 Quick Start

### Core Package

```javascript
import { createInViewObserver } from '@intersection-observer/core'

const observer = createInViewObserver((entry) => {
  console.log('Element is visible:', entry.isIntersecting)
}, {
  threshold: 0.5,
  rootMargin: '10px'
})

observer.observe(document.querySelector('.my-element'))
```

### React Package

```jsx
import { useInView, LazyRender } from '@intersection-observer/react'

function MyComponent() {
  const { ref, inView } = useInView({
    threshold: 0.5
  })

  return (
    <div ref={ref}>
      {inView ? 'Visible!' : 'Hidden'}
    </div>
  )
}

// Or use the LazyRender component
function LazyComponent() {
  return (
    <LazyRender threshold={0.5}>
      <div>This content renders when visible</div>
    </LazyRender>
  )
}
```

### Vue Package

```vue
<template>
  <div ref="targetRef">
    {{ inView ? 'Visible!' : 'Hidden' }}
  </div>
</template>

<script setup>
import { useInView } from '@intersection-observer/vue'

const { ref: targetRef, inView } = useInView({
  threshold: 0.5
})
</script>
```

## 📚 API Reference

### Core Package

#### `createInViewObserver(callback, options?)`

Creates an intersection observer with a simplified API.

```typescript
function createInViewObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: InViewOptions
): IntersectionObserver
```

**Options:**
- `threshold`: Number or array of numbers (0-1)
- `rootMargin`: String similar to CSS margin
- `root`: Element to use as viewport

### React Package

#### `useInView(options?)`

React hook for intersection observer functionality.

```typescript
function useInView(options?: InViewOptions): {
  ref: RefObject<HTMLElement>
  inView: boolean
}
```

#### `LazyRender`

React component for lazy rendering based on visibility.

```typescript
interface LazyRenderProps {
  children: ReactNode | ((props: RenderProps) => ReactNode)
  as?: keyof JSX.IntrinsicElements
  onChange?: (inView: boolean) => void
  threshold?: number
  className?: string
  style?: CSSProperties
}
```

### Vue Package

#### `useInView(options?)`

Vue composable for intersection observer functionality.

```typescript
function useInView(options?: InViewOptions): {
  ref: Ref<HTMLElement | null>
  inView: Ref<boolean>
}
```

#### `LazyRender`

Vue component for lazy rendering based on visibility.

```vue
<LazyRender 
  as="section" 
  :threshold="0.5" 
  :onChange="handleVisibilityChange"
>
  <div>Content that renders when visible</div>
</LazyRender>
```

## 🎯 Use Cases

### Lazy Loading Images

```jsx
// React
<LazyRender>
  <img src="image.jpg" alt="Lazy loaded image" />
</LazyRender>

// Vue
<LazyRender>
  <img src="image.jpg" alt="Lazy loaded image" />
</LazyRender>
```

### Infinite Scroll

```jsx
// React
function InfiniteList() {
  const [items, setItems] = useState([])
  
  return (
    <div>
      {items.map(item => <Item key={item.id} {...item} />)}
      <LazyRender onChange={(inView) => inView && loadMore()}>
        <div>Loading more...</div>
      </LazyRender>
    </div>
  )
}
```

### Analytics Tracking

```jsx
// React
<LazyRender onChange={(inView) => inView && analytics.track('section_viewed')}>
  <section>Important content</section>
</LazyRender>

// Vue
<LazyRender :onChange="(inView) => inView && analytics.track('section_viewed')">
  <section>Important content</section>
</LazyRender>
```

### Performance Monitoring

```javascript
// Core
const observer = createInViewObserver((entry) => {
  if (entry.isIntersecting) {
    performance.mark('content-visible')
  }
})
```

## 🌐 Browser Support

This package uses the Intersection Observer API, which is supported in all modern browsers:

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+

For older browsers, consider using a polyfill like `intersection-observer`.

## 📦 Bundle Size

| Package | Minified | Gzipped |
|---------|----------|---------|
| Core | ~2KB | ~1KB |
| React | ~3KB | ~1.5KB |
| Vue | ~3KB | ~1.5KB |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## 📄 License

MIT License - see the [LICENSE](./LICENSE) file for details.

## 🔗 Links

- [Core Package](./packages/core)
- [React Package](./packages/react)
- [Vue Package](./packages/vue)
- [Examples](./examples)
