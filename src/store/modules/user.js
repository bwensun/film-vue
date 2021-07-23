import { getCaptcha, register } from "@/api/index";

export default {
  state: {
    user: {
      username: "",
      captcha: "",
      token: ""
    }
  },
  namespaced: true,
  getters: {
    user: state => {
      return state.user;
    },
    token: state => {
      return state.token;
    }
  },
  mutations: {
    SET_CAPTCHA: (state, captcha) => {
      state.user.captcha = captcha;
    },
    SET_TOKEN: (state, token) => {
      state.user.token = token;
    }
  },

  actions: {
    // 获取验证码
    async getCaptcha({ commit }, captcahDTO) {
      const captcha = await getCaptcha(captcahDTO);
      console.log(captcha);
      commit("SET_CAPTCHA", captcha);
    },
    //注册
    async register({ commit }, registerDTO) {
      const token = await register(registerDTO);
      commit("SET_TOKEN", token);
    }
  }
};
