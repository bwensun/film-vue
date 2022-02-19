import Vue from "vue";
import Router from "vue-router";

import FilmShow from "../components/film/FilmShow.vue";
import DetailsPage from "../components/film/DetailsPage.vue";
import UserCenter from "../components/user/UserCenter.vue";

import * as userRoutes from "./user";

const _routes = [];

for (const key in userRoutes) {
  const value = userRoutes[key];
  console.log(value);
  _routes.push({
    path: "/",
    component: value
  });
}

const routes = [
  {
    path: "/",
    component: FilmShow
  },
  {
    path: "/film/:id",
    component: DetailsPage
  },
  {
    path: "/user/:id",
    component: UserCenter
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
