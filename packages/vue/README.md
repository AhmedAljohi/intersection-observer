# @intersection-observer/vue

Vue utilities for observing DOM elements using Intersection Observer API. This package provides composables and components to easily detect when elements enter or leave the viewport.

## Installation

```bash
npm install @intersection-observer/vue
# or
yarn add @intersection-observer/vue
# or
pnpm add @intersection-observer/vue
```

## Features

- 🎯 **useInView Composable**: Vue 3 composable for intersection observer functionality
- 🎨 **LazyRender Component**: Pre-built component for lazy loading and visibility detection
- 📦 **TypeScript Support**: Full TypeScript support with type definitions
- 🚀 **Vue 3 Compatible**: Built for Vue 3 Composition API
- ⚡ **Lightweight**: Minimal bundle size with no external dependencies

## Usage

### useInView Composable

The `useInView` composable provides a reactive way to detect when an element enters or leaves the viewport.

```vue
<template>
  <div ref="targetRef" class="my-element">
    {{ inView ? 'Element is visible!' : 'Element is hidden' }}
  </div>
</template>

<script setup lang="ts">
import { useInView } from '@intersection-observer/vue'

const { ref: targetRef, inView } = useInView({
  threshold: 0.5, // Trigger when 50% of element is visible
  rootMargin: '10px' // Add 10px margin to the root
})
</script>
```

#### API

```typescript
function useInView(options?: InViewOptions): {
  ref: Ref<HTMLElement | null>
  inView: Ref<boolean>
}
```

**Options:**
- `threshold`: Number or array of numbers (0-1) indicating at what percentage of the target's visibility the observer's callback should be executed
- `rootMargin`: String similar to CSS margin (e.g., "10px 20px 30px 40px")
- `root`: Element to use as the viewport (defaults to browser viewport)

### LazyRender Component

The `LazyRender` component provides a declarative way to render content based on visibility.

#### Basic Usage

```vue
<template>
  <LazyRender>
    <div class="lazy-content">
      This content will only render when it comes into view
    </div>
  </LazyRender>
</template>

<script setup lang="ts">
import { LazyRender } from '@intersection-observer/vue'
</script>
```

#### With Custom Element

```vue
<template>
  <LazyRender as="section" class="my-section">
    <h2>Lazy loaded section</h2>
    <p>This section will render when visible</p>
  </LazyRender>
</template>
```

#### With Render Props

```vue
<template>
  <LazyRender v-slot="{ inView, ref }">
    <div :ref="ref" class="conditional-content">
      <div v-if="inView">
        Content is now visible!
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </LazyRender>
</template>
```

#### With Callback

```vue
<template>
  <LazyRender 
    :threshold="0.5" 
    :onChange="handleVisibilityChange"
  >
    <div class="tracked-content">
      This element will trigger callbacks when visibility changes
    </div>
  </LazyRender>
</template>

<script setup lang="ts">
import { LazyRender } from '@intersection-observer/vue'

const handleVisibilityChange = (isVisible: boolean) => {
  console.log('Element visibility changed:', isVisible)
}
</script>
```

#### LazyRender Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `string` | `'div'` | HTML element to render |
| `threshold` | `number \| number[]` | `0` | Visibility threshold (0-1) |
| `onChange` | `(isVisible: boolean) => void` | - | Callback when visibility changes |
| `className` | `string` | - | CSS class name |
| `style` | `string \| object` | - | Inline styles |

## Examples

### Lazy Loading Images

```vue
<template>
  <div class="image-gallery">
    <LazyRender v-for="image in images" :key="image.id">
      <img :src="image.src" :alt="image.alt" />
    </LazyRender>
  </div>
</template>

<script setup lang="ts">
import { LazyRender } from '@intersection-observer/vue'

const images = [
  { id: 1, src: '/image1.jpg', alt: 'Image 1' },
  { id: 2, src: '/image2.jpg', alt: 'Image 2' },
  // ... more images
]
</script>
```

### Infinite Scroll

```vue
<template>
  <div class="infinite-scroll">
    <div v-for="item in items" :key="item.id" class="item">
      {{ item.content }}
    </div>
    
    <LazyRender :onChange="loadMore" :threshold="0.1">
      <div class="loading-indicator">
        Loading more items...
      </div>
    </LazyRender>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LazyRender } from '@intersection-observer/vue'

const items = ref([/* initial items */])

const loadMore = (isVisible: boolean) => {
  if (isVisible) {
    // Load more items
    fetchMoreItems()
  }
}
</script>
```

### Analytics Tracking

```vue
<template>
  <div class="content-sections">
    <LazyRender 
      v-for="section in sections" 
      :key="section.id"
      :onChange="(visible) => trackSectionView(section.id, visible)"
    >
      <section class="content-section">
        <h2>{{ section.title }}</h2>
        <p>{{ section.content }}</p>
      </section>
    </LazyRender>
  </div>
</template>

<script setup lang="ts">
import { LazyRender } from '@intersection-observer/vue'

const trackSectionView = (sectionId: string, isVisible: boolean) => {
  if (isVisible) {
    analytics.track('section_viewed', { sectionId })
  }
}
</script>
```

## Browser Support

This package uses the Intersection Observer API, which is supported in all modern browsers:

- Chrome 51+
- Firefox 55+
- Safari 12.1+
- Edge 15+

For older browsers, consider using a polyfill like `intersection-observer`.

## License

MIT
