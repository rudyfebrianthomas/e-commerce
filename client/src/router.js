import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import( /* webpackChunkName: "detail" */ './views/Detail.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import( /* webpackChunkName: "signin" */ './views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import( /* webpackChunkName: "signup" */ './views/Regis.vue')
    },
    {
      path: '/addproduct',
      name: 'addproduct',
      component: () => import( /* webpackChunkName: "signup" */ './views/Addproduct.vue')
    }
  ]
})
