// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/s0825',
    name: 's0825',
    // 라우트 레벨 코드 스플리팅
    component: () => import('../study/s01/S0825.vue')
  },
  {
    path: '/',
    name: 'index',
    component: () => import('../study/s01/S0825.vue')
  },

  {
    path: '/hook01',
    name: 'hook01',
    component: () => import('../study/s01/Hook01.vue')
  },
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/helloWorld',
    name: 'HelloWorld',
    component: () => import('../views/HelloWorld.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../study/s01/Test.vue')
  },
  {
    path: '/test02',
    name: 'test02',
    component: () => import('../study/s01/Test02.vue')
  },
  {
    path: '/test03',
    name: 'test03',
    component: () => import('../study/s01/Test03.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },

]

const router = createRouter({
  history: createWebHistory('/vue-project/'),
  routes
})

export default router