<template>
  <component
    v-if="!isRenderProp"
    :is="as"
    :ref="elementRef"
    :class="className"
    :style="style"
  >
    <slot />
  </component>

  <template v-else>
    <slot :inView="inView" :ref="setNode" />
  </template>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useInView } from "./useInView";

export default defineComponent({
  name: "LazyRender",
  props: {
    as: { type: String, default: "div" },
    threshold: { type: [Number, Array], default: 0 },
    onChange: Function,
    className: String,
    style: [String, Object],
  },
  setup(props, { slots }) {
    const { ref: elementRef, inView } = useInView({
      threshold: props.threshold as number | number[],
    });

    const isRenderProp = computed(() => typeof slots.default === "function");

    const setNode = (el: HTMLElement | null) => {
      elementRef.value = el;
    };

    // Watch for inView changes and call onChange callback
    watch(inView, (newInView) => {
      if (props.onChange) {
        props.onChange(newInView);
      }
    });

    return {
      elementRef,
      inView,
      isRenderProp,
      setNode,
    };
  },
});
</script>
