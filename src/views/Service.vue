<template>
  <section id="service"
    class="conatiner max-w-6xl mx-auto py-24 px-6 flex flex-col justify-between lg:flex-row"
  >
    <div  class="flex flex-col space-y-4 md:mx-12 lg:mx-0 lg:w-1/2">
      <div data-aos="fade-right">
        <h3
          class="font-roboto text-center font-semibold text-lg md:text-xl lg:text-left lg:text-2xl text-primary tracking-wider uppercase"
        >
          Our Travel Services
        </h3>
        <h2
          class="font-lato font-medium text-3xl md:text-4xl lg:text-5xl text-center lg:text-left text-black"
        >
          we offer best services
        </h2>
      </div>
      <p  data-aos="fade-right"
        class="font-roboto leading-[150%] text-center lg:text-left text-gray mb-4"
      >
        we offer a range of travel services designed to enhance your journey and
        ensure a seamless experience. Whether you’re seeking personalized travel
        planning, joining a group tour for shared adventures.
      </p>

      <div  data-aos="fade-up"
        v-for="service in services"
        :key="service.id"
        class="mx-auto lg:mx-0"
      >
        <div
          class="flex flex-col justify-between space-y-6 bg-[#DCDCDC] py-2 px-4 rounded-md max-w-lg"
        >
          <div class="flex items-center space-x-4">
            <div
              class="h-14 w-14 rounded-xl bg-primary flex justify-center items-center"
            >
              {{ service.icon }}
            </div>
            <div class="flex flex-col space-y-2 max-w-sm">
              <h3 class="font-lato font-medium text-black text-xl capitalize">
                {{ service.title }}
              </h3>
              <p class="font-roboto leading-[150%] text-[#868e96]">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  data-aos="fade-left" class="w-1/2 flex justify-center items-center mx-auto mt-12 lg:mt-0">
      <img
        src="../assets//images/service.png"
        alt="service image"
        class="object-cover min-h-[600px] min-w-96 lg:ml-36 "
      />
    </div>
  </section>
</template>

<script>
import { services } from "../data";
export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<style></style>
