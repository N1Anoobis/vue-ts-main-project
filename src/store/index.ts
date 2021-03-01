import Vue from "vue";
import Vuex from "vuex";
import coachesModule from "./modules/coaches/index";
import requestsModule from "./modules/requests/index";

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
    requests: requestsModule,
  },
});
