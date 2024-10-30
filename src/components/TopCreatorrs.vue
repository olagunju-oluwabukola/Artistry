<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div class="relative bg-white rounded-lg shadow-lg max-w-5xl w-full p-8 flex flex-col md:flex-row items-center md:items-start">
        <!-- Left Content -->
        <div class="md:w-1/2 w-full text-center md:text-left mb-4 md:mb-0">
          <h2 class="text-2xl font-bold text-gray-800">TOP CREATORS OF THE WEEK</h2>
          <p class="text-sm text-gray-600 mt-2">
            "Everything always looked better in black and white. It was as if it were the first time there's always gonna be a gig, more people at a football match, than a studio space always makes it seem more exciting." - Jack Lowden
          </p>
        </div>
  
        <!-- Center Image with Fade Transition -->
        <div class="relative w-full md:w-1/2 h-64 md:h-80 overflow-hidden">
          <transition name="fade" mode="out-in">
            <img
              :key="currentImageIndex"
              :src="images[currentImageIndex]"
              class="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </transition>
        </div>
  
        <!-- Right Content -->
        <div class="absolute top-8 right-8 md:static text-center md:text-right md:w-1/4">
          <ul class="text-lg font-semibold text-gray-700 space-y-1">
            <li>Editorials</li>
            <li>Fashion</li>
            <li>lifestyle</li>
            <li>Blueprint</li>
          </ul>
          <div class="text-6xl font-bold text-gray-800 mt-4">85</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          '/img1.png',
          '/img2.png',
          '/img3.png',
          '/img4.png'
        ],
        currentImageIndex: 0,
      };
    },
    mounted() {
      this.startImageLoop();
    },
    methods: {
      startImageLoop() {
        setInterval(() => {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        }, 3000); // Changes every 3 seconds
      },
    },
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>
  