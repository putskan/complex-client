import Vue from "vue";
import Vuex from "vuex";
import Api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pagesCount: 0,
    questionList: [],
  },
  mutations: {
    setPagesCount(state, pagesCount) {
      state.pagesCount = pagesCount;
    },
    setQuestionList(state, questionList) {
      state.questionList = questionList;
    }
  },
  actions: {
    async getQuestionList({ commit }, page) {
      const response = await Api.getQuestionList(page, 10)
      commit("setQuestionList", response.data.results)
      commit("setPagesCount", Math.ceil(response.data.count / 10))
      return response.data.results
    }
  },
  // modules: {},
});
