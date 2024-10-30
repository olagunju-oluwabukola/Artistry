<!-- eslint-disable vue/multi-word-component-names -->
 <template>
        <div class="bg-gradient-to-r from-blue-200 to-orange-200 p-6 rounded-lg mt-4 md:my-14">
          <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">See Upcoming Auctions and Exhibitions</h1>
          <div class="relative w-full  shadow-lg rounded-lg">
            <img :src="currentSlide.image" alt="Exhibition Image" class="w-full h-64 md:h-96 object-cover ">
            <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div class="text-white text-center px-4">
                <h2 class="text-lg md:text-2xl font-semibold">{{ currentSlide.title }}</h2>
                <p class="text-sm md:text-base mt-2">{{ currentSlide.description }}</p>
                <div class="mt-5 md:mt-20 flex justify-end space-x-4 text-sm md:text-lg">
                  <router-link to="/drop" class="px-4 py-4 underline font-semibold rounded-lg">See More</router-link>
                  <button @click="setReminder" class="px-4 py-2  text-white font-semibold rounded-lg">Set a Reminder</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full max-w-3xl flex items-center justify-between mt-4">
            <button @click="prevSlide" class="p-2 text-gray-500 hover:text-gray-700">◀</button>
            <div class="relative w-1/2 md:1/3 bg-gray-200 h-1 rounded">
              <div :style="{ width: progressBarWidth }" class="bg-blue-500 h-full rounded transition-all duration-300"></div>
            </div>
            <button @click="nextSlide" class="p-2 text-gray-500 hover:text-gray-700">▶</button>
          </div>
        </div>
      </template>
    <script>
    export default {
      data() {
        return {
          slides: [
            {
              image: '/Rectangle 91.png', // Replace with actual image path
              title: 'MONALISA REDEFINED IN STYLE',
              description: 'Get exclusive viewing of contemporary art and connect with investors and auctioneers...',
            },
            {
          image: "/Rectangle 91.png",
          title: "Mona Lisa Redefined in Style",
          date: "Start on: 08:00 GMT, Monday",
          description: "Get exclusive viewing of contemporary art...",
        },
        {
          image: "/Rectangle 91.png",
          title: "Modern Art Auction",
          date: "Start on: 10:00 GMT, Wednesday",
          description: "Join the exciting modern art auction...",
        },
        {
          image: "/Rectangle 91.png",
          title: "Abstract Wonders",
          date: "Start on: 15:00 GMT, Friday",
          description: "Explore a collection of stunning abstract art pieces by renowned artists.",
        },
        {
          image: "/Rectangle 91.png",
          title: "Vintage Collection Showcase",
          date: "Start on: 12:00 GMT, Saturday",
          description: "Discover rare vintage artworks curated for art enthusiasts.",
        },
            
          ],
          currentIndex: 0,
        };
      },
      computed: {
        currentSlide() {
          return this.slides[this.currentIndex];
        },
        progressBarWidth() {
          return `${((this.currentIndex + 1) / this.slides.length) * 100}%`;
        },
      },
      methods: {
        nextSlide() {
          if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
          } else {
            this.currentIndex = 0; // Loop back to first slide
          }
        },
        prevSlide() {
          if (this.currentIndex > 0) {
            this.currentIndex--;
          } else {
            this.currentIndex = this.slides.length - 1; // Loop to last slide
          }
        },
        setReminder() {
          alert("Reminder set for this exhibition!"); // Replace with actual reminder functionality
        },
      },
    };
    </script>
      