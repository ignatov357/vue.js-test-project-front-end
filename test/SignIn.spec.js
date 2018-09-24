import { createLocalVue, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import VeeValidate from 'vee-validate';
import SignIn from '../src/components/SignIn.vue';

const localVue = createLocalVue();
localVue.use(VeeValidate);

const v = new VeeValidate.Validator();

describe('SignIn.vue', () => {
    it('Renders the form', () => {
        const wrapper = shallowMount(SignIn, {
            propsData: {
                submitHandler: () => {}
            },
            localVue,
            provide: () => ({
                $validator: v
            })
        });
        expect(wrapper.contains('form')).toBe(true);
    });
    it('Calls method "handler" on form submit', () => {
        const wrapper = shallowMount(SignIn, {
            propsData: {
                submitHandler: () => {}
            },
            localVue,
            provide: () => ({
                $validator: v
            }),
            methods: {
                handler: () => {}
            }
        });

        let spy = sinon.spy(wrapper.vm, 'handler');
        wrapper.find('form').trigger('submit');
        expect(spy.called).toBe(true);
    });
});