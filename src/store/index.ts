import Vue from "vue";
import Vuex from "vuex";
import coachesModule from "./modules/coaches/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coachesModule,
  },
});
