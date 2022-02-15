import Vue from "vue";
import Router from "vue-router";

import Index from "../views/Index";

const routes = [
  {
    path: "/",
    component: Index
  }
];

const VueRouterPush = Router.prototype.push;
Router.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};

export default new Router({
  routes
});
