import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';
import zingchartVue from 'zingchart-vue';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
// Vue.use(zingchartVue);
Vue.component('zingchart', zingchartVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
