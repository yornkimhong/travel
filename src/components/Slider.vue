<template>
  <swiper
    ref="mySwiper"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :loop="true"
    :pagination="{ clickable: true }"
    :breakpoints="breakpoints"
    :modules="modules"
    @swiper="onSwiper"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(product, index) in products"
      :key="index"
      class="flex flex-col items-center shadow-md max-h-72 w-36"
      data-aos="fade-up"
      data-aos-duration="5000"
    >
      <div class="h-64 w-full relative shadow-md group overflow-hidden">
        <img
          :src="product.image"
          alt="Product"
          class="object-cover h-full w-full rounded-md group-hover:scale-125 duration-500"
        />
        <!-- Gradient overlay -->
        <div
          class="absolute inset-0 rounded-md bg-gradient-to-b from-[rgb(0,0,0,0.1)] to-[rgb(0,0,0,0.6)] z-1"
        ></div>
      </div>
      <h2
        class="font-semibold mt-2 text-center absolute bottom-3 left-3 text-white z-100"
      >
        {{ product.name }}
      </h2>
    </swiper-slide>
    <!-- Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
    <div class="bg-red mt-12"></div>
  </swiper>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "../data";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination],
      products,
      swiperInstance: null,
      breakpoints: {
        360: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        976: {
          slidesPerView: 6,
          spaceBetween: 8,
        },
        1440: {
          slidesPerView: 7,
          spaceBetween: 8,
        },
      },
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiperInstance = swiper;
    },
    goPrev() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    goNext() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
  },
};
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
}
</style>
