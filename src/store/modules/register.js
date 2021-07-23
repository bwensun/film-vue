export default {
  state: {
    visible: false,
  },
  namespaced: true,
  getters: {
    visible : (state) => {
      return state.visible;
    }
  },
  mutations: {
    SET_VISIBLE: (state, visible) => {
      console.log("visible");
      state.visible = visible;
    },
  },

  actions: {
  }
};
