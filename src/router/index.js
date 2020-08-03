import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import { Notify } from 'quasar'
import store from '../store/store'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach((to, from, next) => {
    // ...
    if (to.matched.some(x => x.meta.requiresAuth) && !store.getters.access_token) {
      //  && !store.state.token
      // if (store.getters.user.access_token === '') {
      if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
        next({
          path: '/'
        })
        Notify.create({
          icon: 'icon-close',
          color: 'negative',
          message: 'Login to access this page',
          actions: [{ icon: 'icon', color: 'white' }]
        })
      } else {
        next()
      }
    } else {
      next()
    }
  })

  return Router
}
