import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import login from "./modules/login";
import register from "./modules/register";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    login,
    register
  }
});

export default store;
