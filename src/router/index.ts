import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CoachesDetail from "../pages/coaches/CoachesDetail.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";
import RequestsRecived from "../pages/requestes/RequestsRecived.vue";
import ContactCoach from "../pages/requestes/ContactCoach.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // const routes = [
  {
    path: "/",
    redirect: "/coaches",
    // name: "Home",
  },
  {
    path: "/coaches",
    // name: "Home",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    // name: "About",
    component: CoachesDetail,
    children: [
      {
        path: "/contact",
        // name: "Home",
        component: ContactCoach,
      },
    ],
  },
  {
    path: "/register",
    // name: "Home",
    component: CoachRegistration,
  },
  {
    path: "/requests",
    // name: "Home",
    component: RequestsRecived,
  },
  {
    path: "/:notFound(.*)",
    // name: "Home",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
