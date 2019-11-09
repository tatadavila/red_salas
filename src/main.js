import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/sidebar.css";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("Introduction", require("./components/Introduction.vue").default);
Vue.component("WeInfo", require("./components/WeInfo.vue").default);
Vue.component("PurpInfo", require("./components/PurpInfo.vue").default);
Vue.component("DevTopic", require("./components/DevTopic.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
