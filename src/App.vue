<template>
  <nav class="fixed md:px-10 top-0 left-0 w-full bg-white shadow-md z-10 p-4 flex items-center justify-between">
   
    <button class="md:hidden text-2xl" @click="toggleMenu">
      <font-awesome-icon :icon="menuOpen ? 'times' : 'bars'" />
    </button>

    <div class="text-2xl font-bold">ARTSY.</div>

    
    <div class="hidden md:flex space-x-8">
      <RouterLink to="/" class="hover:underline">Home</RouterLink>
      <RouterLink to="/marketplace" class="hover:underline">Marketplace</RouterLink>
      <RouterLink to="/auctions" class="hover:underline">Auctions</RouterLink>
      <RouterLink to="/drop" class="hover:underline">Drop</RouterLink>
    </div>

    
    <div class="flex gap-5">
      <RouterLink to="/search"><font-awesome-icon icon="search" class="text-xl" /></RouterLink>
      <RouterLink to="/cart"><font-awesome-icon icon="shopping-cart" class="text-xl" /></RouterLink>
      <RouterLink to="/notifications"><font-awesome-icon icon="bell" class="text-xl" /></RouterLink>
    </div>

   
    <div v-if="menuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden">
      <RouterLink to="/" class="block py-2 hover:underline" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/marketplace" class="block py-2 hover:underline" @click="toggleMenu">Marketplace</RouterLink>
      <RouterLink to="/auctions" class="block py-2 hover:underline" @click="toggleMenu">Auctions</RouterLink>
      <RouterLink to="/drop" class="block py-2 hover:underline" @click="toggleMenu">Drop</RouterLink>
    </div>
  </nav>

  <div class="pt-20 mx-10">
    <RouterView />
    <footer>
      <div class="flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <!-- Newsletter Section -->
      <div class="w-full max-w-2xl border border-gray-300 p-8 rounded-lg text-center mb-12">
        <h2 class="md:text-lg font-semibold text-gray-800">NEWSLETTER</h2>
        <p class="text-gray-600 mt-2 text-sm md:text-base">Subscribe to get daily updates on new drops & exciting deals</p>
        <div class="flex justify-center mt-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            class="border border-gray-400 p-2 w-3/4 md:w-2/3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button class="bg-gray-800 text-white px-4 py-2 rounded-r-md">Subscribe</button>
        </div>
      </div>
  
      <!-- Footer Section -->
      <footer class="w-full max-w-5xl text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <div class="text-3xl font-bold text-gray-800">ARTSY.</div>
          <!-- Left Links -->
          <div class="flex flex-col items-center md:items-start space-y-2">
            <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
            <router-link to="/marketplace" class="text-gray-700 hover:text-gray-900">Marketplace</router-link>
            <router-link to="/auctions" class="text-gray-700 hover:text-gray-900">Auctions</router-link>
            <router-link to="/drops" class="text-gray-700 hover:text-gray-900">Drops</router-link>
          </div>

          <!-- Right Links -->
          <div class="flex flex-col items-center md:items-start space-y-2">
            <router-link to="/blog" class="text-gray-700 hover:text-gray-900">Blog</router-link>
            <router-link to="/wallets" class="text-gray-700 hover:text-gray-900">Wallets</router-link>
            <router-link to="/rates" class="text-gray-700 hover:text-gray-900">Rates</router-link>
            <router-link to="/high-bids" class="text-gray-700 hover:text-gray-900">High bids</router-link>
          </div>

          <div class=" flex-col md:flex-row justify-center md:justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div class="items-center space-x-2">
            <p class="text-gray-700">artystudios@gmail.com</p>
            <p class="text-gray-700">Lagos, Nigeria</p>
          </div>
        
        </div>
        </div>
  
        <!-- Contact Info -->
       

      </footer>
    </div>
    </footer>
  </div>
  
</template>

<script setup>

import { ref } from 'vue';

    const menuOpen = ref(false);
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    // return { menuOpen, toggleMenu };

</script>

<style>
body {
  margin: 0;
}
</style>
