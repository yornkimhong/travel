<template>
  <section
    id="contact"
    class="my-20 px-6 min-h-screen flex items-center justify-center"
  >
    <div
      class="conatiner mx-auto max-w-6xl flex flex-col justify-center md:flex-row"
    >
      <div
        data-aos="fade-right"
        class="md:w-1/2 flex flex-col items-center justify-center space-y-4 pt-8 text-center md:text-left"
      >
        <div>
          <h3
            class="font-roboto font-semibold text-lg md:text-xl lg:text-2xl text-primary tracking-wider uppercase"
          >
            Get in Touch with Us
          </h3>
          <h2
            class="font-lato font-bold leading-[125%] text-3xl md:text-4xl lg:text-5xl text-white"
          >
            We’re Here to Help You Plan Your Next Adventure
          </h2>
        </div>
        <p class="font-roboto text-[#f8f9fa] leading-[150%]">
          need help with your booking, or simply want to learn more? Fill out
          the form below, and our team will get back to you as soon as
          possible.Whether you’re ready to start planning or just have a quick
          inquiry, we’re excited to assist you on your travel journey!
        </p>
      </div>
      <div
        data-aos="fade-left"
        class="md:w-1/2 flex flex-col md:items-end justify-center items-center space-y-4 pt-8"
      >
        <div class="max-w-[560px] md:max-w-2xl backdrop-blur-lg p-8 rounded-lg">
          <h3 class="font-lato text-3xl text-white mb-8">
            Book the Adventure now
          </h3>

          <div class="flex flex-col space-y-4">
            <div class="flex flex-col space-y-1">
              <label for="fullName" class="text-white ml-2">Full Name :</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                class="px-4 outline-none rounded-full h-10"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="phoneNumber" class="text-white ml-2"
                >Phone Number :</label
              >
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                class="px-4 outline-none rounded-full h-10"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-white ml-2">Email : </label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                class="px-4 outline-none rounded-full h-10"
              />
            </div>
          </div>
          <Button class="mt-6" fullWidth type="full">Submit</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
