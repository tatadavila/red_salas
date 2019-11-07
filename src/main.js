import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Introduction", require("./components/Introduction.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
