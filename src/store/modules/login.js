import { register, login } from "@/api/index";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: [],
    permissions: [],
    userinfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_USER: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 登录
    Login({ commit }, loginDTO) {
      login(loginDTO).then(response => {
        console.log("login success! ");
        //todo: 调用用户详情接口提交mutations来补全用户信息
      });
    },
    // 注册
    Register({ commit }, userInfo) {
      register(userInfo).then(response => {
        console.log("success!");
        commit("SET_USER", userInfo);
      });
    }
  }
};
