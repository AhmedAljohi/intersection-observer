<template>
    <div class="product-card">
      <img :src="thumbnail" :alt="title" class="thumbnail" />
      <h2 class="title">{{ title }}</h2>
      <p class="price">\${{ price }}</p>
      <p class="description">{{ description }}</p>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{
    title: string
    price: number
    description: string
    thumbnail: string
  }>()
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 16px;
    max-width: 300px;
  }
  .thumbnail {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 4px;
  }
  .title {
    font-size: 18px;
    margin: 12px 0 4px;
  }
  .price {
    color: #888;
    margin: 4px 0;
  }
  .description {
    font-size: 14px;
    color: #555;
  }
  </style>
  