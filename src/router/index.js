import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers.js'
Vue.use(VueRouter)

let routerConfig = {
  mode: '', //history
  routes
}

export default new VueRouter(routerConfig)
