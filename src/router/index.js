// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: '/',
    component: () => import('../study/s01/S0827.vue')
  },
  {
    path: '/s0826',
    name: 's0826',
    component: () => import('../study/s01/S0826.vue')
  },
  {
    path: '/s0827',
    name: 's0827',
    component: () => import('../study/s01/S0827.vue')
  },
  {
    path: '/studentLink',
    name: 'studentLink',
    component: () => import('../views/StudentLink.vue')
  },
  {
    path: '/userList',
    name: 'userList',
    component: () => import('../views/UserList.vue')
  },
  {
    path: '/userDetail',
    name: 'userDetail',
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/userDetailId/:id',
    name: 'userDetailId',
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/s0825',
    name: 's0825',
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