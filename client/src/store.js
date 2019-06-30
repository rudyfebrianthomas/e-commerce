import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products = []
  },
  mutations: {
    getproducts(state, data){
      state.products = data
    }
  },
  actions: {

  }
})
