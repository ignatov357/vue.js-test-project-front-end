<template>
    <div id="login-container">
        <h3 class="form-heading">Login</h3>
        <form @submit.prevent="handler()">
            <div class="row form">
                <div class="col-md-6">
                    <ValidateInput v-model="email" validate="required|email" name="email" placeholder="Your Email *"></ValidateInput>
                </div>
                <div class="col-md-6">
                    <ValidateInput v-model="password" validate="required" name="password" placeholder="Password *" type="password"></ValidateInput>
                    <input class="btn-submit" type="submit" value="Login">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import ValidateInput from "./ValidateInput";
    import form from '@/mixins/form';

    export default {
        name: 'SignIn',
        components: {
            ValidateInput
        },
        data: () => {
            return {
                email: '',
                password: ''
            }
        },
        mixins: [
            form
        ]
    }
</script>

<style scoped src="@/assets/css/form.css"></style>