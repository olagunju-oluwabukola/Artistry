<template>
    <div class="flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
      <!-- Newsletter Section -->
      <div class="w-full max-w-2xl border border-gray-300 p-8 rounded-lg text-center mb-12">
        <h2 class="text-lg font-semibold text-gray-800">NEWSLETTER</h2>
        <p class="text-gray-600 mt-2">Subscribe to get daily updates on new drops & exciting deals</p>
        <div class="flex justify-center mt-4">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            class="border border-gray-400 p-2 w-3/4 md:w-2/3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button class="bg-gray-800 text-white px-4 py-2 rounded-r-md">SUBSCRIBE</button>
        </div>
      </div>
  
      <!-- Footer Section -->
      <footer class="w-full max-w-5xl text-center md:text-left">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          <!-- Left Links -->
          <div class="flex flex-col items-center md:items-start space-y-2">
            <router-link to="/" class="text-gray-700 hover:text-gray-900">Home</router-link>
            <router-link to="/marketplace" class="text-gray-700 hover:text-gray-900">Marketplace</router-link>
            <router-link to="/auctions" class="text-gray-700 hover:text-gray-900">Auctions</router-link>
            <router-link to="/drops" class="text-gray-700 hover:text-gray-900">Drops</router-link>
          </div>
          
          <!-- Logo Section -->
          <div class="text-3xl font-bold text-gray-800">ARTSY.</div>
          
          <!-- Right Links -->
          <div class="flex flex-col items-center md:items-start space-y-2">
            <router-link to="/blog" class="text-gray-700 hover:text-gray-900">Blog</router-link>
            <router-link to="/wallets" class="text-gray-700 hover:text-gray-900">Wallets</router-link>
            <router-link to="/rates" class="text-gray-700 hover:text-gray-900">Rates</router-link>
            <router-link to="/high-bids" class="text-gray-700 hover:text-gray-900">High bids</router-link>
          </div>
        </div>
  
        <!-- Contact Info -->
        <div class="flex flex-col md:flex-row justify-center md:justify-between items-center mt-8 space-y-4 md:space-y-0">
          <div class="flex items-center space-x-2">
            <span class="text-gray-700">artystudios@gmail.com</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-gray-700">Lagos, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
 