import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/sidebar.css";

Vue.config.productionTip = false;

Vue.component("Navbar", require("./components/Navbar.vue").default);

Vue.component(
  "MyVideo",
  require("./components/develop/vid/MyVideo.vue").default
);
Vue.component(
  "MyQuiz",
  require("./components/develop/quiz/MyQuiz.vue").default
);
Vue.component(
  "NewQuiz",
  require("./components/develop/quiz/NewQuiz.vue").default
);
Vue.component(
  "question",
  require("./components/develop/quiz/question.vue").default
);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
