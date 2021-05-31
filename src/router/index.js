import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const createRouter = routes => new Router({
  routes
})
export default createRouter(routes)
