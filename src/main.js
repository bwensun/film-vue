// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Vuex from "vuex";
import store from "./store";
import ElementUI from "element-ui";
// import vueCookie from "vue-cookies";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/icon/iconfont.css";
import "./assets/css/base.css";
import "./assets/symbolicon/iconfont.css";
require("./assets/icon/iconfont.js");
import "./assets/symbolicon/iconfont";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
// Vue.use(vueCookie);
/* eslint-disable no-new */

new Vue({
  el: "#app",
  router: router,
  store,
  components: { App },
  template: "<App/>"
});
