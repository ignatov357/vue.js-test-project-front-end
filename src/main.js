import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueSnotify from 'vue-snotify';

import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/index';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueSnotify);

new Vue({
    router,
    store,
    render: (h) => h(App),
    async created() {
        this.$store.dispatch('refreshUserData', this);
    },
}).$mount('#app');