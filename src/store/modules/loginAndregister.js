export default {
  state: {
    userShow: false
  },
  namespaced: true,
  getters: {
    userShow: state => {
      return state.userShow;
    }
  },
  mutations: {
    SET_USERSHOW: (state, userShow) => {
      state.userShow = userShow;
    }
  }
};
