// import Home from './../views/Home/Index.vue'
// import Error1 from './../components/error/404.vue'
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // component: Home
    component: () => import(/* webpackChunkName: "customer-repair" */ '@/components/LayoutComp')
  },
  {
    path: '/404',
    name: '404',
    // component: Error1
    component: () => import(/* webpackChunkName: "customer-repair" */ '@/components/error/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]