// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from './store'
import "./assets/icon/iconfont.css"
import "./assets/css/base.css"
require ('./assets/icon/iconfont.js')



Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  store,
  components: { App },
  template: '<App/>'
})
