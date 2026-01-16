import { createRouter, createWebHistory } from 'vue-router'
import Default from '@/views/Default.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Default,
    },
  ],
})