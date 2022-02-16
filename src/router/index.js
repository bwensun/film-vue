import Vue from "vue";
import Router from "vue-router";

import FilmShow from "../components/film/FilmShow.vue";
import DetailsPage from "../components/film/DetailsPage.vue";

const routes = [
  {
    path: "/",
    component: FilmShow
  },
  {
    path: "/film/:id",
    component: DetailsPage
  }
];

Vue.use(Router);
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

export const router = new Router({
  mode: "history",
  base: process.env.BASE_URL || "/",
  routes
});

export default router;
