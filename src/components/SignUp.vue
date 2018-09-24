<template>
    <div id="register-container">
        <h3 class="form-heading">Sign up</h3>
        <form @submit.prevent="handler()">
            <div class="row form">
                <div class="col-md-6">
                    <ValidateInput v-model="name" validate="required|min:4" name="name" placeholder="Your Name *"></ValidateInput>
                    <ValidateInput v-model="email" validate="required|email" name="email" placeholder="Your Email *"></ValidateInput>
                    <ValidateInput v-model="password" validate="required|min:6" name="password" placeholder="Password *" type="password"></ValidateInput>
                </div>
                <div class="col-md-6">
                    <ValidateInput v-model="username" validate="required|min:4" name="username" placeholder="Username *"></ValidateInput>
                    <ValidateInput v-model="phone" validate="required" name="phone" placeholder="Your Phone *"></ValidateInput>
                    <ValidateInput v-model="passwordConfirmation" :validate="{required: true, is: password}" name="password confirmation" placeholder="Confirm Password *" type="password"></ValidateInput>
                    <input class="btn-submit" type="submit" value="Sign up">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import ValidateInput from "./ValidateInput.vue";
    import form from "../mixins/form.js";

    export default {
        name: 'SignUp',
        components: {
            ValidateInput
        },
        data: function () {
            return {
                name: '',
                username: '',
                email: '',
                phone: '',
                password: '',
                passwordConfirmation: ''
            }
        },
        mixins: [
            form
        ]
    }
</script>

<style scoped src="../assets/css/Form.css"></style>