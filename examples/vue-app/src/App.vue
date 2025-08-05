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
      <LazyRender
        v-for="product in products"
        :key="product.id"
        v-slot="{ inView, ref }"
        :threshold="0"
      >
        <div :ref="ref" style="min-height: 400px">
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
