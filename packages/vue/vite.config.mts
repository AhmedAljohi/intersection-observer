import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@intersection-observer/vue": path.resolve(
        __dirname,
        "../../packages/vue/src/index.ts"
      ),
    },
  },
  optimizeDeps: {
    include: ["@intersection-observer/vue"],
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "IntersectionObserverVue",
      fileName: (format) => `intersection-observer-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
