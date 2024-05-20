// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import QuizView from '../views/QuizView.vue'
import EmptyView from '../views/EmptyView.vue'

const routes = [
  {
    path: '/',
    name: 'empty',
    component: EmptyView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import(/* webpackChunkName: "share" */ '../views/QuizView.vue')
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
    path: '/mole',
    name: 'mole',
    component: () => import(/* webpackPrefetch: true */ '../views/WackMoleView.vue')
  },
  {
    path: '/easter_egg',
    name: 'easter_egg',
    component: () => import(/* webpackPrefetch: true */ '../views/EasterEggView.vue')
  },
  {
    path: '/easter_ai',
    name: 'easter_ai',
    component: () => import(/* webpackPrefetch: true */ '../views/EasterAiView.vue')
  },
  {
    path: '/pope_hbd_2023',
    component: () => import(/* webpackPrefetch: true */ '../views/LastYearView.vue')
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
