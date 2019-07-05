import Vue from 'vue'
import Vuex from 'vuex'
import ax from "./api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    GETALLPRODUCTS(state, data) {
      state.products = data
    }
  },
  actions: {
    REGISTER(context, data){
      ax.post('/users/signup',data)
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
    },
    LOGIN(context, data){
      ax.post('/users/signin',data)
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
    },
    USERDATA(context, data){
      ax.get('/users/userdata')
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
    },
    GETALLPRODUCTS(context) {
      ax.get("/products", {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLPRODUCTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
