import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Develop from "../views/Develop.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
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
    component: Develop,
    children: [
      {
        path: "estructuraclasificacion",
        name: "internaldebt",
        component: () => import("../components/develop/StructureClas.vue")
      },
      {
        path: "deudainterna",
        name: "structureclas",
        component: () => import("../components/develop/InternalDebt.vue")
      },
      {
        path: "deudaexterna",
        name: "externaldebt",
        component: () => import("../components/develop/ExternalDebt.vue")
      },
      {
        path: "porcentajepib",
        name: "pibpercentage",
        component: () => import("../components/develop/PibPercentage.vue")
      },
      {
        path: "amortizaciondeuda",
        name: "pibpercentage",
        component: () => import("../components/develop/DebtAmortiz.vue")
      },
      {
        path: "serviciodeuda",
        name: "debtservice",
        component: () => import("../components/develop/DebtService.vue")
      },
      {
        path: "deudapublicaterritorial",
        name: "pubterridebt",
        component: () => import("../components/develop/PublicTerriDebt.vue")
      },
      {
        path: "deudapublicatlantico",
        name: "publicdebt",
        component: () => import("../components/develop/PublicAtlDebt.vue")
      },
      {
        path: "videoyquiz",
        name: "quizvideo",
        component: () => import("../components/develop/VideoQuiz.vue")
      }
    ]
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
    component: () => import("../components/Credits.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
