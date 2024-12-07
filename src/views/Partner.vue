<template>
  <div class="container max-w-6xl mx-auto py-8">
    <div
      class="grid grid-cols-3 grid-rows-2 mx-auto px-6 gap-4 place-content-center lg:grid-cols-5 lg:grid-rows-1"
    >
      <div data-aos="zoom-in" v-for="partner in partners" :key="partner.id" class="flex items-center justify-center">
        <img :src="partner.logo" alt="partner logo" class="object-contain" />
      </div>
    </div>
  </div>
</template>


<script>
import { partners } from "../data";
export default {
  data() {
    return {
      partners,
    };
  },
};
</script>
