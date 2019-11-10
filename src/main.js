import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/sidebar.css";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component(
  "StructureClas",
  require("./components/develop/StructureClas.vue").default
);
Vue.component(
  "InternalDebt",
  require("./components/develop/InternalDebt.vue").default
);
Vue.component(
  "ExternalDebt",
  require("./components/develop/ExternalDebt.vue").default
);
Vue.component(
  "PibPercentage",
  require("./components/develop/PibPercentage.vue").default
);
Vue.component(
  "DebtAmortiz",
  require("./components/develop/DebtAmortiz.vue").default
);
Vue.component(
  "DebtService",
  require("./components/develop/DebtService.vue").default
);
Vue.component(
  "PublicTerriDebt",
  require("./components/develop/PublicTerriDebt.vue").default
);
Vue.component(
  "PublictAtlDebt",
  require("./components/develop/PublicAtlDebt.vue").default
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
