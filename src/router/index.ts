import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'PostView',
    component: () => import(/* webpackChunkName: "PostView" */ '../views/PostView.vue'),
    props : true
  },
  {
    path:'/categories/:name',
    name:"CategoryView",
    component: () => import(/* webpackChunkName: "CategoryView" */ '../views/CategoryView.vue'),
    props : true
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
