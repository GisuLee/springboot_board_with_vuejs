import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArticleDetailView from '../views/ArticleDetailView.vue'
import ArticleUpdateView from '../views/ArticleUpdateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'ArticleDetailView',
    component: ArticleDetailView
  },
  {
    path: '/update',
    name: 'ArticleUpdateView',
    component: ArticleUpdateView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
