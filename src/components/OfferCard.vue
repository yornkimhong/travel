<template>
  <div>
    <div data-aos="fade-up" class="flex flex-col justify-center items-center mb-8">
      <div class="flex flex-wrap space-x-4 gap-y-4 lg:space-y-0 items-center justify-center">
        <div v-for="(offer, index) in offers" :key="index">
          <button
            @click="selectCategory(offer)"
            :class="[
              'flex space-x-2 px-4 py-2 rounded-full justify-center items-center bg-gray hover:bg-primary',
              selectedCategory === offer ? 'bg-primary' : '',
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
            <p class="text-white text-lg">{{ offer }}</p>
          </button>
        </div>
      </div>
    </div>

    <!-- Display Selected Category Items -->
    <transition name="fade-up" mode="out-in" >
      <div data-aos="fade-up" :key="selectedCategory" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="relative group h-80 md:h-90 bg-gray-200 overflow-hidden rounded-lg shadow-lg"
        >
          <img :src="item.image" :alt="item.title" class="object-cover rounded-lg h-full w-full hover:scale-125 duration-500"  loading="lazy" />
          <div class="absolute bottom-3 left-3 right-3 bg-white h-24 bg-opacity-90 p-2 rounded shadow-xl group-hover:bg-opacity-100 transition-all duration-300">
            <div class="flex flex-col space-y-2">
              <h3 class="font-roboto text-black font-medium capitalize">{{ item.title }}</h3>
              <div class="flex justify-between items-center">
                <div class="flex space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <p>{{ item.location }}</p>
                </div>
                <h3 class="font-lato text-primary font-semibold text-lg">{{ item.price }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { countrys, campings, adventures, hikings, groupTrips } from "../data";
export default {
  data() {
    return {
      offers: ["countrys", "campings", "adventures", "hikings", "groupTrips"],
      selectedCategory: "countrys",
      countrys,
      campings,
      adventures,
      hikings,
      groupTrips,
    };
  },
  computed: {
    filteredItems() {
      switch (this.selectedCategory) {
        case "countrys":
          return this.countrys;
        case "campings":
          return this.campings;
        case "adventures":
          return this.adventures;
        case "hikings":
          return this.hikings;
        case "groupTrips":
          return this.groupTrips;
        default:
          return [];
      }
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style>
/* Down-to-Up Animation for Content */
.fade-up-enter-active, .fade-up-leave-active {
  transition: all .5s ease;
}

.fade-up-enter, .fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}


</style>
