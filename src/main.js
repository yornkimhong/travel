import { createApp } from "vue";
import "./style.css";
import "./assets/input.css";
import Button from "./components/Button.vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
const app = createApp(App);
app.component("Button", Button);
app.mount("#app");
AOS.init({
  duration: 2000, // Animation duration
  once: true, // If true, animation will only happen once
});
