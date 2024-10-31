import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/marketplace',
      name: 'marketplace',
      component: () => import('../views/marketPlaceView.vue'),
    },
    {
      path: '/auctions',
      name: 'auctions',
      component: () => import('../views/AuctionsView.vue'),
    },
    {
      path: '/drop',
      name: 'drop',
      component: () => import('../views/Drop.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue'), 
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/Cart.vue'), 
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/Notififcation.vue'), 
    },
    { path: '/product/:id',
       name: 'ProductDetail',
        component: () => import('../components/ProductDetails.vue'), 
        props: true },
  ],
});

export default router;
