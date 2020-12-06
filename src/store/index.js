import Vue from 'vue'
import Vuex from 'vuex'
import post from "./post"
import user from "./user"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
	  post, user
  }
})
