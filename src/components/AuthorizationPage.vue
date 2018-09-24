<template>
    <div class="container authorization">
        <div class="row">
            <div class="col-md-3 left">
                <h3>{{ activeTab === 'register' ? 'Already have an account?' : 'Don\'t have an account yet?' }}</h3>
                <button @click="changeTab()">{{ activeTab === 'register' ? 'Login' : 'Sign up' }}</button>
                <br>
            </div>
            <div class="col-md-9 right">
                <SignUp v-if="activeTab === 'register'" :submit-handler="registerHandler"></SignUp>
                <SignIn v-if="activeTab === 'login'" :submit-handler="loginHandler"></SignIn>
            </div>
        </div>
    </div>
</template>

<script>
    import SignIn from './SignIn.vue';
    import SignUp from './SignUp.vue';
    import api from '../utils/api.js';
    import utils from "../utils/utils.js";

    export default {
        name: 'AuthorizationPage',
        components: {
            SignIn,
            SignUp
        },
        data: function () {
            return {
                activeTab: 'login'
            }
        },
        methods: {
            changeTab() {
                this.activeTab = (this.activeTab === 'register' ? 'login' : 'register');
            },
            registerHandler(data) {
                api.register(data, utils.handleApiCallResponse.bind(null, this, (componentReference) => {
                    componentReference.$store.dispatch('refreshUserData', componentReference);
                }));
            },
            loginHandler(data) {
                api.login(data, utils.handleApiCallResponse.bind(null, this, (componentReference) => {
                    componentReference.$store.dispatch('refreshUserData', componentReference);
                }));
            }
        }
    }
</script>

<style scoped>
    .authorization {
        background: -webkit-linear-gradient(left, #3931af, #00c6ff);
        margin-top: 3%;
        padding: 3%;
    }
    .left {
        text-align: center;
        color: #fff;
        margin: auto 0;
    }
    .left button {
        border: none;
        border-radius: 1.5rem;
        padding: 2%;
        width: 60%;
        background: #f8f9fa;
        font-weight: bold;
        color: #383d41;
        margin-top: 5%;
        margin-bottom: 3%;
        cursor: pointer;
    }
    .right {
        background: #f8f9fa;
        border-top-left-radius: 10% 50%;
        border-bottom-left-radius: 10% 50%;
    }
</style>