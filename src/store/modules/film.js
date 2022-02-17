import { getFilmDetails } from "@/api/index";
export default {
  state: {
    film: {
      id: 0,
      filmName: "",
      director: "",
      screenwriter: 0,
      filmType: 0,
      mainActor: 2,
      screenLocation: "",
      screenDate: "",
      cover: "",
      introduction: ""
    },
    result: {
      success: false,
      message: "",
      code: "",
      data: null
    }
  },
  namespaced: true,
  getters: {
    film: state => {
      return state.film;
    },
    result: state => {
      return state.result;
    }
  },
  mutations: {
    SET_FILM: (state, film) => {
      console.log("434344");
      console.log(film);
      state.film = film;
    },
    SET_RESULT: (state, result) => {
      state.result = result;
    }
  },

  actions: {
    // 获取电影详情
    async getFilmDetail({ commit }, id) {
      const FilmDetail = await getFilmDetails(id);
      console.log("777777" + FilmDetail);
      commit("SET_FILM", FilmDetail);
    }
  }
};
