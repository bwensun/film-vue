import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import login from "./modules/login";
import register from "./modules/register";
import loginAndregister from "./modules/loginAndregister";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    login,
    register,
    loginAndregister
  }
});

export default store;
