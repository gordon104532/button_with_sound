// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/share',
    name: 'share',
    // route level code-splitting
    // this generates a separate chunk (share.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "share" */ '../views/ShareView.vue')
  },
  {
    path: '/sound_pad',
    name: 'soundPad',
    component: () => import(/* webpackPrefetch: true */ '../views/SoundPadView.vue')
  },
  {
    path: '/snow',
    name: 'snow',
    component: () => import(/* webpackPrefetch: true */ '../views/SnowView.vue')
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
// 因用git提供靜態檔，沒有server-side可以設定，改用Hash mode

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
