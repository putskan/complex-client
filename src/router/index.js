import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Questions from "../views/Questions"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/questions/:page",
    name: "Questions",
    component: Questions,
    props: route => {
      const page = Number.parseInt(route.params.page, 10)
      if (Number.isNaN(page)) {
        return 1
      }
      return { page }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
