import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/bienvenida",
    name: "welcome",
    component: () => import("../views/Welcome.vue")
  },
  {
    path: "/contenido",
    name: "content",
    component: () => import("../views/Content.vue")
  },
  {
    path: "/proposito",
    name: "purpose",
    component: () => import("../views/Purpose.vue")
  },
  {
    path: "/desarrollo",
    name: "develop",
    component: () => import("../views/Develop.vue")
  },
  {
    path: "/conclusion",
    name: "closure",
    component: () => import("../views/Closure.vue")
  },
  {
    path: "/referencias",
    name: "references",
    component: () => import("../views/References.vue")
  },
  {
    path: "/creditos",
    name: "credits",
    component: () => import("../views/Credits.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
