import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/sidebar.css";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("PurpInfo", require("./components/PurpInfo.vue").default);
Vue.component("DevTopic", require("./components/DevTopic.vue").default);
Vue.component("InternalDebt", require("./components/develop/InternalDebt.vue").default);
Vue.component("InternalDebt", require("./components/develop/ExternalDebt.vue").default);
Vue.component("InternalDebt", require("./components/develop/InternalDebt.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
