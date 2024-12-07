<template>
  <section id="hero" class="relative">
    <Navbar />

    <div data-aos="fade-up"
      class="container lg:max-w-4xl mx-auto flex flex-col justify-center items-center space-y-4 lg:space-y-8  text-center min-h-screen px-6 max-w-3xl"
    >
      <h1
        class="font-lato leading-[125%] font-bold text-center text-white text-4xl md:text-5xl lg:text-7xl"
      >
        Turn Your <span class="text-primary">Travel Dreams </span><br>
        into Reality
      </h1>
      <p class="font-roboto leading-[150%] md:text-lg text-white px-4">
        Ready for your dream trip? Explore amazing destinations, find great
        deals, and let us help you plan the perfect getaway. Your adventure
        starts now!
      </p>

      <div class="flex md:flex-row space-x-4">
        <Button>Get start</Button>
        <Button type="stroke">Explore now</Button>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style></style>
