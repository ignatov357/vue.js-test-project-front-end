<template>
    <div class="form-group">
        <p class="control has-icon has-icon-right">
            <input :value="value" @input="$emit('input', $event.target.value)" v-validate="validate" :name="name" :class="{'input': true, 'is-danger': errors.has(name) }" class="form-control" :placeholder="placeholder" :type="type" value="">
            <i v-show="errors.has(name)" class="fa fa-warning"></i>
            <span v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "ValidateInput",
        props: {
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
            validate: {
                required: true
            }
        },
        inject: [
            '$validator'
        ],
    }
</script>