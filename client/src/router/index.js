import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import HotelForm from '../components/HotelForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hotels',
    name: 'API',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "hotels" */ '../views/Hotels.vue'),
  },
  {
    path: '/hotel/:propertyCode',
    name: 'Hotel',
    component: HotelForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
