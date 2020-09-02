import Vue from 'vue'
import Vuex from 'vuex'
import localPath from './localPath/localPath'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
    INITLOCALPATH (state) {

    }
  },
  actions: {
  },
  modules: {
    localPath: localPath
  }
})
