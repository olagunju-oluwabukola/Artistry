<template>
    <div class="flex p-6">
       <div class="w-1/2">
          <img :src="product.image" alt="" class="w-full h-full object-cover" />
       </div>
       <div class="w-1/2 pl-6">
          <h1 class="text-2xl font-bold">{{ product.name }}</h1>
          <p class="text-lg font-semibold">${{ product.price }}</p>
          <button class="mt-4 px-4 py-2 bg-black text-white rounded">Add to cart</button>
          <!-- Additional product details here -->
       </div>
    </div>
 </template>
 
 <script>
 import { ref, onMounted } from 'vue';
 import { useRoute } from 'vue-router';
 
 export default {
    setup() {
       const route = useRoute();
       const product = ref(null);
 
       onMounted(() => {
          // Replace with actual logic to fetch product by ID
          const productId = route.params.id;
          product.value = products.find((p) => p.id == productId);
       });
 
       return { product };
    },
 };
 </script>
 