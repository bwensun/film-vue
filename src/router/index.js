import Vue from "vue";
import Router from "vue-router";

import FilmShow from "../components/film/FilmShow.vue";
import DetailsPage from "../components/film/DetailsPage.vue";
import UserCenter from "../components/user/UserCenter.vue";
import Constant from "@/utils/constant";
import * as userRoutes from "./user";
const home = Constant.home;
// console.log(Constant.home);

const _routes = [];

for (const key in userRoutes) {
  const value = userRoutes[key];
  // console.log("777777" + value.name);
  // console.log(value);
  _routes.push({
    path: `${value.name}`,
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
    component: UserCenter,
    children: _routes,
    redirect: "/user/:id/home"
  }
];

Vue.use(Router);
const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

//首页位置 方便后期维护
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL || home,
  routes
});

router.beforeEach((to, from, next) => {
  // if (to.path === "/user/:id/home") return next("/");
  const token = window.sessionStorage.getItem("token");
  // debugger;
  console.log("6666666" + from.path);
  if (to.path !== home && !token) {
    next(home);
    return;
  }
  next();
});
export default router;
