<template>
  <swiper
    ref="mySwiper"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :loop="true"
    :breakpoints="breakpoints"
    :modules="modules"
    @swiper="onSwiper"
    class="mySwiper"

  >
    <swiper-slide
     data-aos="fade-up"
    v-for="testimonial in testimonials" :key="testimonial.id" class="grid grid-cols-3 px-2 min-h-[425px]">
      <div
        class="rounded-lg shadow-lg shadow-[#adb5bd] flex flex-col justify-center items-center space-y-4 p-4"
      >
        <div class="h-48 w-48 rounded-full overflow-hidden">
          <img
           :src="testimonial.image"
            alt=""
            class="object-contain pt-4 rounded-full "

          />
        </div>
        <h3 class="font-lato font-semibold text-xl text-black">{{ testimonial.title }}</h3>
        <p class="font-roboto text-grey text-center">
        {{ testimonial.description }}
        </p>
      </div>
    </swiper-slide>

    <!-- Pagination bullets will render here -->
    <div class="bg-red mt-12"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../data";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination],
      testimonials,
      swiperInstance: null,
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        
        976: {
          slidesPerView: 3,
          spaceBetween: 16,
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

<style>
.mySwiper {
  width: 100%;
  height: 100%;
  position: relative;
}

/* Custom styles for pagination bullets */
.swiper-pagination-bullet {
  background-color: #010101; /* Inactive bullet color */
}

/* Optionally, customize active bullet color */
.swiper-pagination-bullet-active {
  background-color: #ff5722; /* Active bullet color */
  opacity: 1;
}
</style>
