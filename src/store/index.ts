import Vue from "vue";
import Vuex from "vuex";
import coachesModule from "./modules/coaches/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "c3",
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
});
