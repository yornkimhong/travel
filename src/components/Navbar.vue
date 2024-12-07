<template>
  <header
    :class="{ 'bg-primaryHover': isScrolled, 'bg-transparent': !isScrolled }"
    class="fixed top-0 left-0 right-0 max-w-screen px-6 z-10"
  >
    <nav
      class="relative z-10 flex items-center justify-between max-w-6xl mx-auto font-bold text-white py-2"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
       <img src="../assets/images/logo.png" class="object-contain h-14" alt="logo image">
      </a>

      <!-- Menu for Desktop -->
      <div
        class="hidden font-roboto font-medium lg:flex lg:space-x-8 text-white z-20"
      >
        <div class="group lg:relative inline-block">
          <a href="#hero" class="relative">Home</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
        <div class="group lg:relative inline-block">
          <a href="#destination" class="relative">Destination</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
        <div class="group lg:relative inline-block">
          <a href="#offer" class="relative">Offer</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
        <div class="group lg:relative inline-block">
          <a href="#service" class="relative">Service</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
        <div class="group lg:relative inline-block">
          <a href="#contact" class="relative">Contact</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
        <div class="group lg:relative inline-block">
          <a href="#testimonial" class="relative">Testimonials</a>
          <div
            class="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"
          ></div>
        </div>
      </div>

      <!-- Hamburger Button for Mobile -->
      <div class="lg:hidden">
        <button
          @click="toggleMenu"
          :class="{ open: isMenuOpen }"
          type="button"
          class="hamburger focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Normal Button -->
      <button
        class="hidden lg:block bg-btnColor text-white px-4 py-2 rounded-full"
      >
        Contact Us
      </button>
    </nav>
  </header>

  <!-- Mobile Menu -->
   <transition name="fade-down">
  <div
    v-if="isMenuOpen"
    class="fixed top-0 left-0 w-full h-full bg-primary opacity-95 z-30"
  >
    <div
      class="relative flex flex-col items-center justify-center h-full space-y-6 text-white font-roboto"
    >
      <a href="#hero" @click="toggleMenu" class="text-xl">Home</a>
      <a href="#destination" @click="toggleMenu" class="text-xl">Destination</a>
      <a href="#offer" @click="toggleMenu" class="text-xl">Offer</a>
      <a href="#service" @click="toggleMenu" class="text-xl">Service</a>
      <a href="#contact" @click="toggleMenu" class="text-xl">Contact</a>
      <a href="#testimonial" @click="toggleMenu" class="text-xl"
        >Testimonials</a
      >

      <div class="absolute -top-3 right-7">
        <button
          @click="toggleMenu"
          :class="{ open: isMenuOpen }"
          type="button"
          class="hamburger focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 30;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: #fff;
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.4s ease;
}
.fade-down-enter-from,
.fade-down-leave-to {
  /* opacity: 0; */
  transform: translateY(-750px);
}

</style>
