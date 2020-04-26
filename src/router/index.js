import Vue from 'vue';
import VueRouter from 'vue-router';
import AlphabetCards from '@/components/AlphabetCards.vue';
import Home from '@/components/Home.vue';
import NumberLines from '@/components/NumberLines.vue';
import SpeechRecog from '@/components/SpeechRecog.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/AlphabetCards',
    name: 'AlphabetCards',
    component: AlphabetCards,
  },
  {
    path: '/NumberLines',
    name: 'NumberLines',
    component: NumberLines,
  },
  {
    path: '/SpeechRecog',
    name: 'SpeechRecog',
    component: SpeechRecog,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
