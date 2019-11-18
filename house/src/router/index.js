import Vue from 'vue'
import VueRouter from 'vue-router'
import House from '../views/House'
import HouseDetail from "../views/HouseDetail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'house',
    component: House
  },
  {
    path: '/house_detail',
    name: 'house_detail',
    component: HouseDetail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
