import Vue from 'vue';
import Vuex from 'vuex';
import api from "../utils/api";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        loaded: false,
        userData: null
    },
    mutations:{
        setUserData: (state, userData) => {
            state.userData = userData;
        },
        loaded: (state) => {
            state.loaded = true;
        }
    },
    actions: {
        refreshUserData(store, context) {
            api.getUserData(function(error, response) {
                if (!error && response.status === 200) {
                    store.commit('setUserData', response.data);
                    context.$router.replace('/dashboard');
                } else {
                    context.$router.replace('/authorization');
                }
                store.commit('loaded');
            });
        }
    }
})