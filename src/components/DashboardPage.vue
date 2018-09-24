<template>
    <div>
        <p v-if="user">Name: <b>{{user.name}}</b></p>
        <p v-if="user">Username: <b>{{user.username}}</b></p>
        <p v-if="user">Email: <b>{{user.email}}</b></p>
        <p v-if="user">Phone number: <b>{{user.phone}}</b></p>
        <br>
        <a class="a-link" @click.prevent="logoutHandler()">Logout</a>
    </div>
</template>

<script>
    import api from "../utils/api.js";
    import utils from "../utils/utils.js";

    export default {
        name: "DashboardPage",
        data() {
            return {
                user: this.$store.state.userData
            }
        },
        methods: {
            logoutHandler() {
                api.logout(utils.handleApiCallResponse.bind(null, this, (componentReference) => {
                    componentReference.$router.replace('/authorization');
                }));
            }
        }
    }
</script>

<style scoped>
    p {
        margin-bottom: 0.3rem;
    }
    a {
        color: #007bff !important;
        cursor: pointer;
    }
</style>