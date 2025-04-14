import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Documentation from '../views/Documentation.vue'
import Blog from '../views/Blog.vue'
import Community from '../views/Community.vue'
import RoleSelectionView from '../views/RoleSelectionView.vue'
import Prices from '../views/Prices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: Documentation,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/community',
      name: 'community',
      component: Community,
    },
    {
      path: '/role-selection',
      name: 'role-selection',
      component: RoleSelectionView
    },
    {
      path: '/prices',
      name: 'prices',
      component: Prices
    },
  ],
})

export default router
