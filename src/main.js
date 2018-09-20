import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueSnotify from 'vue-snotify';

import App from './App.vue';
import router from '@/router/index';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueSnotify);

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app');
