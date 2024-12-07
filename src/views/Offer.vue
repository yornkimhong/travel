<template>
  <section id="offer" class="container mx-auto max-w-6xl px-6 flex flex-col justify-center items-center py-20">
    <div data-aos="fade-up" class="space-y-2 text-center max-w-3xl mb-16">
      <h3
        class="font-roboto font-semibold md:text-xl lg:text-2xl text-primary tracking-wider uppercase"
      >
        Your Journey Begins Here
      </h3>
      <h2
        class="font-lato leading-[125%] font-medium text-3xl md:text-4xl lg:text-5xl text-black"
      >
        Explore the World with Our Latest Tour Offers
      </h2>
    </div>
    <OfferCard />
</section>
</template>

<script>
import OfferCard from '../components/OfferCard.vue';
export default {
    components: { OfferCard },
    data() {
      return {};
    },
};
</script>


