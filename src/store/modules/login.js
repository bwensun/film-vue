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
    SET_VISIBLE: (state, visible) => {
      state.visible = visible;
    }
  },

  actions: {}
};
