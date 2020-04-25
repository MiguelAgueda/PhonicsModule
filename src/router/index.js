import Vue from 'vue';
import VueRouter from 'vue-router';
import AlphabetCards from '@/components/AlphabetCards.vue';
import Home from '@/components/Home.vue';
import MathPage from '@/components/MathPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/MathPage',
    name: 'MathPage',
    component: MathPage,
  },
  {
    path: '/AlphabetCards',
    name: 'AlphabetCards',
    component: AlphabetCards,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
