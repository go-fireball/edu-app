// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },

      {
        path: '/reading',
        name: 'Reading',
        component: () => import(/* webpackChunkName: "reading" */ '@/views/Reading/index.vue'),
      },

      {
        path: '/math',
        name: 'Math',
        component: () => import(/* webpackChunkName: "math" */ '@/views/Math/index.vue'),
      },

      {
        path: '/science',
        name: 'Science',
        component: () => import(/* webpackChunkName: "science" */ '@/views/Science/index.vue'),
      },
      {
        path: '/comprehension/:grade/:id',
        name: 'Comprehension',
        component: () => import(/* webpackChunkName: "comprehension" */ '@/views/Comprehension/comprehension.vue'),
      },

      {
        path: '/quiz/:context/:grade/:id',
        name: 'Quiz',
        component: () => import(/* webpackChunkName: "quiz" */ '@/views/Quiz/quiz.vue'),
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
