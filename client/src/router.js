import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import( /* webpackChunkName: "form" */ './views/Form.vue'),
      children: [{
          path: 'login',
          name: 'login',
          component: () => import( /* webpackChunkName: "login" */ './components/Login.vue'),
        },
        {
          path: 'register',
          name: 'regis',
          component: () => import( /* webpackChunkName: "regis" */ './components/Regis.vue'),
        }
      ]
    }
  ]
})
