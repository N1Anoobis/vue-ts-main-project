import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [
const routes = [
  {
    path: "/",
    redirect: "/coaches",
    // name: "Home",
    component: null,
  },
  {
    path: "/coaches",
    // name: "Home",
    component: null,
  },
  {
    path: "/coaches/:id",
    // name: "About",
    component: null,
    children: [
      {
        path: "/contact",
        // name: "Home",
        component: null,
      },
    ],
  },
  {
    path: "/register",
    // name: "Home",
    component: null,
  },
  {
    path: "/requests",
    // name: "Home",
    component: null,
  },
  {
    path: "/:notFound(.*)",
    // name: "Home",
    component: null,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
