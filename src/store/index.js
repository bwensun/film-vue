import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import login from "./modules/login";
import register from "./modules/register";
import loginAndregister from "./modules/loginAndregister";
import film from "./modules/film";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    login,
    register,
    loginAndregister,
    film
  }
});

export default store;
