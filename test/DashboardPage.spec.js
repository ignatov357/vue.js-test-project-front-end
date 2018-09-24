import { createLocalVue, shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import DashboardPage from '../src/components/DashboardPage.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('DashboardPage.vue', () => {
    let store;

    beforeEach(() => {
        store = new Vuex.Store({
            state: {
                userData: {
                    name: 'Test',
                    username: 'test',
                    email: 'test@test.com',
                    phone: '+79999999999'
                }
            },
        })
    });

    it('Renders user\'s data', () => {
        const wrapper = shallowMount(DashboardPage, {
            localVue,
            store
        });

        let p_s = wrapper.findAll('p');

        expect(p_s.at(0).text()).toBe('Name: Test');
        expect(p_s.at(1).text()).toBe('Username: test');
        expect(p_s.at(2).text()).toBe('Email: test@test.com');
        expect(p_s.at(3).text()).toBe('Phone number: +79999999999');
    });
    it('Renders logout link', () => {
        const wrapper = shallowMount(DashboardPage, {
            localVue,
            store
        });

        expect(wrapper.contains('a')).toBe(true);
    });
    it('Calls method "logoutHandler" on the click on logout link', () => {
        const wrapper = shallowMount(DashboardPage, {
            localVue,
            store,
            methods: {
                logoutHandler: () => {}
            }
        });

        let spy = sinon.spy(wrapper.vm, 'logoutHandler');
        wrapper.find('a.a-link').trigger('click');
        expect(spy.called).toBe(true);
    });
});