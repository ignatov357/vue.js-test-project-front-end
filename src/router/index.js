import Vue from 'vue';
import VueRouter from 'vue-router';
import AuthorizationPage from '@/components/AuthorizationPage';
import DashboardPage from '@/components/DashboardPage';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/authorization',
            name: 'authorization',
            component: AuthorizationPage
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardPage
        }
    ]
});