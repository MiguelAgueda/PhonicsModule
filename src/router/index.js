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
    path: '/SpellingHelp',
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
