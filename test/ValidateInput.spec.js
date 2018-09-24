import { createLocalVue, mount } from '@vue/test-utils';
import VeeValidate from 'vee-validate';
import ValidateInput from '../src/components/ValidateInput.vue';

const localVue = createLocalVue();
localVue.use(VeeValidate);

const v = new VeeValidate.Validator();
describe('ValidateInput.vue', () => {
    it('Renders the input field', () => {
        const wrapper = mount(ValidateInput, {
            propsData: {
                value: '',
                name: 'test',
                validate: 'required',
                placeholder: 'Test field'
            },
            localVue,
            provide: () => ({
                $validator: v
            })
        });
        expect(wrapper.contains('input')).toBe(true);
    });
});