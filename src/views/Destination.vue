<template>
  <section id="destination" class="conatiner max-w-6xl mx-auto py-20 px-6">
    <div class="flex flex-col items-center justify-between md:flex-row">
      <div class="flex flex-col space-y-1">
        <h3 data-aos="fade-right"
          class="font-roboto text-center font-semibold text-lg md:text-xl md:text-left lg:text-2xl text-primary tracking-wider uppercase"
        >
          Top Destination
        </h3>
        <h2
        data-aos="fade-right"
          class="font-lato font-medium text-3xl md:text-4xl lg:text-5xl text-center md:text-left text-black"
        >
          Explores Top destination
        </h2>
      </div>
      <div data-aos="fade-left" class="hidden md:flex space-x-4">
        <button
          class="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white hover:bg-primaryHover"
        @click="handlePrev"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button
          class="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white hover:bg-primaryHover"
         @click="handleNext"
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="my-20">
      <Slider ref="slider" />
    </div>
  </section>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  components: { Slider },
  methods: {
    handlePrev() {
      this.$refs.slider.goPrev(); 
    },
    handleNext() {
      this.$refs.slider.goNext(); 
    },
  }
};
</script>

<style></style>
