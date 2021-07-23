import { register, login } from "@/api/index";

export default {
  state: {
    userinfo: {},
    visible: false
  },
  namespaced: true,
  getters: {
    visible: state => {
      return state.visible;
    }
  },
  mutations: {
    SET_USER: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_VISIBLE: (state, visible) => {
      state.visible = visible;
    }
  },

  actions: {
    // 登录
    Login({ commit }, loginDTO) {
      login(loginDTO).then(response => {
      });
    },
    // 注册
    Register({ commit }, userInfo) {
      register(userInfo).then(response => {
        commit("SET_USER", userInfo);
      });
    }
  }
};
