<template>
  <section id="testimonial" class="container max-w-6xl mx-auto pt-20 min-h-screen">
    <div class="flex flex-col space-y-12 justify-center items-center">
      <h2  data-aos="fade-up"
        class="font-lato max-w-2xl text-center leading-[125%] font-bold text-black text-3xl md:text-4xl lg:text-5xl"
      >
        What Makes Us the Perfect Travel Partner for You
      </h2>
      <TestimonialSlider />
    </div>
  </section>
</template>

<script>
import TestimonialSlider from "../components/TestimonialSlider.vue";
export default {
  components: { TestimonialSlider },
};
</script>
