import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Page1View from "../views/Page1View.vue";
import IndexView from "../views/IndexView.vue";
import AboutView from "../views/AboutView.vue";

import GantChartView from "../views/GantChartView.vue";

import HomePage from "../components/Home/Homepage.vue";
import SettingPage from "../views/SettingPage.vue";

import Abteilung from "../components/Setting/Abteilung.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "/",
        name: "indexpage",
        component: IndexView,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/calender",
    name: "calender",
    component: GantChartView,
  },

  {
    path: "/page1",
    name: "page1",
    component: Page1View,
  },

  {
    path: "/setting",
    name: "setting",
    component: SettingPage,
  },

  {
    path: "/abteilung",
    name: "abteilung",
    component: Abteilung,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.name != "login" &&
//     !store.state.isAuthenticated &&
//     to.meta.requiresAuth
//   ) {
//     next({
//       name: "login",
//     });
//   } else {
//     next();
//   }
// });

export default router;
