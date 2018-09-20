export default {
    props: {
        submitHandler: {
            type: Function,
            required: true
        }
    },
    methods: {
        handler() {
            this.$validator.validateAll().then((result) => {
                if (this.errors.items.length > 0) {
                    return;
                }

                this.submitHandler(this.$data);
            });
        }
    },
    provide() {
        return {
            '$validator': this.$validator
        }
    }
}