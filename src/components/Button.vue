<template>
  <button
    :class="buttonClass" 
    :style="fullWidth ? 'width: 100%' : ''" 
    @click="handleClick"
  >
    <slot></slot> 
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal",
      validator: (value) => ["normal", "stroke", "full"].includes(value),
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      let baseClass = "py-3 px-6 text-center font-medium uppercase rounded-full transition-all duration-300";
      let normalClass = "bg-btnColor text-white hover:bg-primaryHover";
      let strokeClass = "border-2 border-primary text-primary hover:bg-btnColor hover:border-transparent transition-all duration-300 ease-in hover:text-white overflow-hidden";
      let fullWidthClass = this.fullWidth ? "w-full" : "";

      switch (this.type) {
        case "stroke":
          return `${baseClass} ${strokeClass} ${fullWidthClass}`;
        case "full":
          return `${baseClass} ${normalClass} ${fullWidthClass}`;
        default:
          return `${baseClass} ${normalClass}`;
      }
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>
