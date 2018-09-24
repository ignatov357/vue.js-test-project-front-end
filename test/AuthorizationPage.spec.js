import { shallowMount } from '@vue/test-utils';
import AuthorizationPage from '../src/components/AuthorizationPage.vue';

describe('AuthorizationPage.vue', () => {
    it('Renders the container', () => {
        const wrapper = shallowMount(AuthorizationPage);

        expect(wrapper.contains('div.container.authorization')).toBe(true);
    });
    it('Renders the text on the left above the button', () => {
        const wrapper = shallowMount(AuthorizationPage);

        expect(wrapper.find('div.left h3').isEmpty()).toBe(false);
    });
    it('Renders the button on the left', () => {
        const wrapper = shallowMount(AuthorizationPage);

        expect(wrapper.contains('div.left button')).toBe(true);
    });
    it('Switches the tabs once button on the left is clicked', () => {
        const wrapper = shallowMount(AuthorizationPage);

        let oldActiveTab = wrapper.vm.activeTab;
        wrapper.find('div.left button').trigger('click');
        expect(oldActiveTab).not.toBe(wrapper.vm.activeTab);
    });
});