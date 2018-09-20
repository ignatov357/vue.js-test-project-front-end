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

                if (typeof this.submitHandler === 'function') {
                    this.submitHandler(this._data);
                }
            });
            return false;
        }
    },
    provide() {
        return {
            '$validator': this.$validator
        }
    }
}