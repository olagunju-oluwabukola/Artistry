
     
        <template>
            <div class="flex p-6">
              <!-- Sidebar Filter Section -->
              <aside class="w-1/4 pr-4">
                <h2 class="font-bold text-lg mb-4">Filter</h2>
          
                <!-- Category Filter -->
                <div class="mb-4">
                  <h3 class="font-semibold text-sm mb-2">By category</h3>
                  <ul>
                    <li v-for="category in categories" :key="category" class="flex items-center mb-2">
                      <input
                        type="checkbox"
                        v-model="selectedCategories"
                        :value="category"
                        class="mr-2"
                      />
                      <span>{{ category }}</span>
                    </li>
                  </ul>
                </div>
          
                <!-- Price Filter -->
                <div class="mb-4">
                  <h3 class="font-semibold text-sm mb-2">By price</h3>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    v-model="priceRange"
                    class="w-full"
                  />
                  <p class="text-xs mt-1">Price: ${{ priceRange }}</p>
                </div>
          
                <!-- Artist Filter -->
                <div class="mb-4">
                  <h3 class="font-semibold text-sm mb-2">By artist</h3>
                  <ul>
                    <li v-for="artist in artists" :key="artist" class="flex items-center mb-2">
                      <input
                        type="checkbox"
                        v-model="selectedArtists"
                        :value="artist"
                        class="mr-2"
                      />
                      <span>{{ artist }}</span>
                    </li>
                  </ul>
                </div>
          
                <!-- Collection Year Filter -->
                <div>
                  <h3 class="font-semibold text-sm mb-2">Collection year</h3>
                  <select v-model="selectedYear" class="w-full border rounded p-2">
                    <option v-for="year in years" :key="year" :value="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </aside>
          
              <!-- Product Grid Section -->
              <main class="w-3/4">
                <div v-if="filteredProducts.length > 0" class="grid grid-cols-3 gap-4">
                  <div
                    v-for="product in productsToShow"
                    :key="product.id"
                    class="bg-white shadow-lg rounded-lg overflow-hidden"
                  >
                    <img :src="product.image" alt="" class="w-full h-48 object-cover" />
                    <div class="p-4">
                      <h3 class="text-sm font-medium">{{ product.name }}</h3>
                      <p class="text-gray-500 text-xs">${{ product.price }}</p>
                    </div>
                  </div>
                </div>
                <!-- Message if no products match filters -->
                <p v-else class="text-center text-gray-500">Nothing to see here</p>
          
                <!-- See more button -->
                <div class="text-center mt-4" v-if="productsToShow.length < filteredProducts.length">
                  <button @click="loadMore" class="px-4 py-2 bg-gray-300 text-gray-700 rounded">See more</button>
                </div>
              </main>
            </div>
          </template>
          
          <script>
          import { ref, computed } from 'vue';
          
          export default {
            setup() {
              const categories = ref(["Editorial", "Fashion", "Optics", "Art & Museum", "Nature"]);
              const selectedCategories = ref([]);
              const priceRange = ref(50);
              const artists = ref(["Artist A", "Artist B", "Artist C"]);
              const selectedArtists = ref([]);
              const years = ref(["2022", "2021", "2020"]);
              const selectedYear = ref("");
              
              // Initial product data
              const products = ref([
              
        { id: 1, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 2, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 3, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 4, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 5, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 6, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 7, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 8, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 9, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 10, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 11, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 12, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 13, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 14, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 15, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 16, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 17, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 18, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
        { id: 19, name: "PHILOMENA '22", price: 3.9, image: "/Oloibiri.png", category: "Art & Museum", artist: "Artist A", year: "2022" },
        { id: 20, name: "BOOLEAN EGYPTIAN", price: 50, image: "/Oloibiri.png", category: "Fashion", artist: "Artist B", year: "2021" },
        { id: 21, name: "BLANC", price: 120, image: "/Oloibiri.png", category: "Nature", artist: "Artist C", year: "2020" },
              ]);
          
              const itemsPerPage = ref(9);
              const filteredProducts = computed(() => {
                return products.value.filter((product) => {
                  const matchesCategory =
                    selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category);
                  const matchesPrice = product.price <= priceRange.value;
                  const matchesArtist =
                    selectedArtists.value.length === 0 || selectedArtists.value.includes(product.artist);
                  const matchesYear = !selectedYear.value || product.year === selectedYear.value;
          
                  return matchesCategory && matchesPrice && matchesArtist && matchesYear;
                });
              });
              
              const productsToShow = ref([]);
          
              const loadMore = () => {
                const currentCount = productsToShow.value.length;
                productsToShow.value = filteredProducts.value.slice(0, currentCount + itemsPerPage.value);
              };
          
              // Load initial set of products
              loadMore();
          
              return {
                categories,
                selectedCategories,
                priceRange,
                artists,
                selectedArtists,
                years,
                selectedYear,
                products,
                filteredProducts,
                productsToShow,
                loadMore,
              };
            },
          };
          </script>
          