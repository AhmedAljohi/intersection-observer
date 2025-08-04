<template>
  <div style="padding: 24px">
    <h1>Product List</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error" style="color: red">{{ error }}</p>

    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 24px;
      "
    >
      <!--
        The reason you see the first 30 items rendered immediately is because
        the <LazyRender> component is being used in a v-for loop, and each instance
        is mounted at once. The IntersectionObserver will only trigger after the DOM
        is painted, but by default, Vue will render all 30 <LazyRender> wrappers
        (and their children) into the DOM, even if their content is not in view.

        To avoid rendering all 30 ProductCards at once, you should move the v-for
        to a wrapper element and use a single <LazyRender> for each product card.
        However, the current <LazyRender> implementation is correct: it only renders
        the <ProductCard> when inView is true. The outer <div :ref="ref"> is always
        rendered, but the ProductCard inside is not.

        If you want to avoid even mounting the outer <div> for items not in view,
        you would need to change the structure or use a virtual scroller.

        Below is a minimal rewrite to clarify that only the ProductCard is conditionally rendered.
      -->
      <LazyRender
        v-for="product in products"
        :key="product.id"
        v-slot="{ inView, ref }"
        :threshold="0"
      >
        <div :ref="ref" style="min-height: 200px">
          <ProductCard
            v-if="inView"
            :title="product.title"
            :price="product.price"
            :description="product.description"
            :thumbnail="product.thumbnail"
          />
        </div>
      </LazyRender>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { LazyRender } from "@intersection-observer/vue";
import ProductCard from "./Components/ProductCard.vue";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
}

const products = ref<Product[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=1000");
    const data = await res.json();
    products.value = data.products || [];
  } catch (err) {
    error.value = "Failed to fetch products";
  } finally {
    loading.value = false;
  }
});
</script>
