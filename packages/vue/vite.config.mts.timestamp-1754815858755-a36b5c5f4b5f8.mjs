// vite.config.mts
import { defineConfig } from "file:///Users/ahmedaljohi/Desktop/viewport-utils/node_modules/.pnpm/vite@4.5.14/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/ahmedaljohi/Desktop/viewport-utils/node_modules/.pnpm/@vitejs+plugin-vue@6.0.1_vite@4.5.14_vue@3.5.18_typescript@5.9.2_/node_modules/@vitejs/plugin-vue/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "/Users/ahmedaljohi/Desktop/viewport-utils/packages/vue";
var vite_config_default = defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@intersection-observer/vue": path.resolve(
        __vite_injected_original_dirname,
        "../../packages/vue/src/index.ts"
      )
    }
  },
  optimizeDeps: {
    include: ["@intersection-observer/vue"]
  },
  build: {
    lib: {
      entry: "src/index.ts",
      name: "IntersectionObserverVue",
      fileName: (format) => `intersection-observer-vue.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2FobWVkYWxqb2hpL0Rlc2t0b3Avdmlld3BvcnQtdXRpbHMvcGFja2FnZXMvdnVlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYWhtZWRhbGpvaGkvRGVza3RvcC92aWV3cG9ydC11dGlscy9wYWNrYWdlcy92dWUvdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9haG1lZGFsam9oaS9EZXNrdG9wL3ZpZXdwb3J0LXV0aWxzL3BhY2thZ2VzL3Z1ZS92aXRlLmNvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGludGVyc2VjdGlvbi1vYnNlcnZlci92dWVcIjogcGF0aC5yZXNvbHZlKFxuICAgICAgICBfX2Rpcm5hbWUsXG4gICAgICAgIFwiLi4vLi4vcGFja2FnZXMvdnVlL3NyYy9pbmRleC50c1wiXG4gICAgICApLFxuICAgIH0sXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGluY2x1ZGU6IFtcIkBpbnRlcnNlY3Rpb24tb2JzZXJ2ZXIvdnVlXCJdLFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IFwic3JjL2luZGV4LnRzXCIsXG4gICAgICBuYW1lOiBcIkludGVyc2VjdGlvbk9ic2VydmVyVnVlXCIsXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGludGVyc2VjdGlvbi1vYnNlcnZlci12dWUuJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbXCJ2dWVcIl0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZ2xvYmFsczoge1xuICAgICAgICAgIHZ1ZTogXCJWdWVcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVixTQUFTLG9CQUFvQjtBQUNuWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBRmpCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLDhCQUE4QixLQUFLO0FBQUEsUUFDakM7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsNEJBQTRCO0FBQUEsRUFDeEM7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLDZCQUE2QixNQUFNO0FBQUEsSUFDM0Q7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
