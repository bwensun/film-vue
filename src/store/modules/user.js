import { getCaptcha, register, login, getUserInfo } from "@/api/index";

export default {
  state: {
    user: {
      id: 0,
      username: "",
      nickname: "",
      level: 0,
      activity: 0,
      sex: 2,
      email: "",
      phoneNumber: "",
      status: "",
      avatar: "",
      captcha: "",
      token: ""
    },
    result: {
      success: false,
      code: "",
      data: null,
      message: ""
    }
  },
  namespaced: true,
  getters: {
    user: state => {
      return state.user;
    },
    token: state => {
      return state.user.token;
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_CAPTCHA: (state, captcha) => {
      state.user.captcha = captcha;
    },
    SET_TOKEN: (state, token) => {
      state.user.token = token;
    }
  },

  actions: {
    // 获取验证码
    //这个函数谁调用的？？？？？？
    async getCaptcha({ commit }, captcahDTO) {
      const captcha = await getCaptcha(captcahDTO);
      console.log(captcha);
      commit("SET_CAPTCHA", captcha);
    },
    //注册
    async register({ commit }, registerDTO) {
      const registerResult = await register(registerDTO);
      console.log("register result: %o", registerResult);
      const userInfo = await getUserInfo(registerResult.data);
      commit("SET_USER", userInfo);
      console.log("user: %o", state.user);
    },
    //登录
    async login({ commit }, loginDTO) {
      const loginResult = await login(loginDTO);
      console.log("login result: %o", loginResult);
      console.log("头部值" + loginResult.data);
      localStorage.setItem("loginResult", loginResult.data);
      const userResult = await getUserInfo(loginResult.data);
      console.log("user: %o", userResult);
      commit("SET_USER", userResult.data);
    }
  }
};
