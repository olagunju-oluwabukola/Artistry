<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="flex flex-col items-center text-center my-8">
    <h1 class="text-[32px] md:text-7xl font-semibold">
      Photography is poetry & beautiful untold stories
    </h1>
    <p class="mt-2 md:mt-9 text-sm md:text-xl text-gray-600 max-w-lg">
      Flip through more than 10,000 vintage shots, old photographs, historic images and captures seamlessly in one place. Register to get top access.
    </p>
    <div class="w-full overflow-hidden mt-6 relative">
      <div class="carousel-container flex items-center gap-4">
        <!-- Repeat the images twice to create the infinite loop -->
        <div
          v-for="(image, index) in doubleImages"
          :key="index"
          class="w-56 h-auto md:h-[500px] md:w-[300px] flex-shrink-0"
        >
          <img
            :src="image"
            alt="Carousel image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const images = [
  '/carousel1.svg',
  '/Carousel2.svg',
  '/carousel3.svg',
  '/carousel4.svg',
  '/carousel5.svg'
];

// Duplicate the images to create a seamless infinite effect
const doubleImages = [...images, ...images];
</script>

<style scoped>
/* Define the keyframes for a smooth, infinite scroll */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.carousel-container {
  display: flex;
  gap: 1rem;
  animation: scroll 30s linear infinite;
  width: calc(200% + 1rem); /* Ensures smooth scroll without gaps */
}

@media (max-width: 768px) {
  .carousel-container {
    flex-direction: row;
    animation-duration: 20s; /* Adjusts speed for smaller screens */
  }
}
</style>
