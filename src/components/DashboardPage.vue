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
    import api from "../utils/api";

    export default {
        name: "DashboardPage",
        data: () => {
            return {
                user
            }
        },
        methods: {
            logoutHandler() {
                api.logout(function(error, response) {
                    if(!error) {
                        if (response.status === 200) {
                            this.$snotify.success(response.data.message);
                            this.$router.replace('/authorization');
                        } else {
                            this.$snotify.error(response.data.errorMessage);
                        }
                    } else {
                        if (typeof error.response !== 'undefined') {
                            this.$snotify.error(error.response.data.errorMessage);
                        } else {
                            this.$snotify.error('Problem connecting to the server');
                        }
                    }
                }.bind(this));
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