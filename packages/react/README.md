# @intersection-observer/react

![Version](https://img.shields.io/npm/v/@intersection-observer/react.svg)
![License](https://img.shields.io/npm/l/@intersection-observer/react.svg)
![Downloads](https://img.shields.io/npm/dm/@intersection-observer/react.svg)

> A performant, flexible React wrapper for the Intersection Observer API.
---

## ✨ Features

- 🪝 **Hook** — Use `useInView`
- ⚡️ **Optimized Performance** — Reuses observer instances
- 🔧 **API Match** — Based on native Intersection Observer API
- 🔠 **TypeScript Support** — Fully typed for TS projects
- 🌳 **Tree-shakeable** — Only the code you use

---

## 📦 Installation

```bash
# With pnpm
pnpm add @intersection-observer/react

# Or npm
npm install @intersection-observer/react
```

---

### `useInView` hook

```tsx
import { useInView } from '@intersection-observer/react';

const MyComponent = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return <div ref={ref}>{inView ? 'Visible' : 'Hidden'}</div>;
};
```

## 📚 Recipes

- Lazy-load images
- Trigger animations
- Scroll-based analytics
- Viewport-based transitions

---

## 🌐 Browser Support

Supported in all modern browsers. You can use a polyfill:

```bash
pnpm add intersection-observer
```

```ts
import 'intersection-observer';
```

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
