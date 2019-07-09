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
    REGISTER(context, data) {
      ax.post('/users/signup', data)
        .then(resp => {
          console.log(resp)
        })
        .catch(err => {
          console.log(err)
        })
    },
    LOGIN(context, data) {
      ax.post('/users/signin', data)
        .then(resp => {
          console.log(resp)
        })
        .catch(err => {
          console.log(err)
        })
    },
    USERDATA(context, data) {
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
    },
    GETONEPRODUCTS(context, id) {
      ax.get("/products/" + id, {
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
    },
    ADDPRODUCTS(context, data) {
      ax.post("/products", data, {
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
    },
    UPDATEPRODUCTS(context, data) {
      ax.patch("/products/" + data.id, data.data, {
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
    },
    DELETEPRODUCTS(context, data) {
      ax.delete("/products/" + data.id, data.data, {
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
    },
    GETALLCARTITEMS(context) {
      ax.get("/cartitems", {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GETONECARTITEMS(context, id) {
      ax.get("/cartitems/" + id, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ADDCARTITEMS(context, data) {
      ax.post("/cartitems", data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    UPDATECARTITEMS(context, data) {
      ax.patch("/cartitems/" + data.id, data.data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    DELETECARTITEMS(context, data) {
      ax.delete("/cartitems/" + data.id, data.data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTITEMS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GETALLCARTS(context) {
      ax.get("/carts", {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    GETONECARTS(context, id) {
      ax.get("/carts/" + id, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ADDCARTS(context, data) {
      ax.post("/carts", data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    UPDATECARTS(context, data) {
      ax.patch("/carts/" + data.id, data.data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    DELETECARTS(context, data) {
      ax.delete("/carts/" + data.id, data.data, {
          headers: {
            token: localStorage.token
          }
        })
        .then(({
          data
        }) => {
          console.log(data)
          context.commit('GETALLCARTS', data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
