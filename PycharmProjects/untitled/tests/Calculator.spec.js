import { mount } from '@vue/test-utils'
import Calculator from '../../Calculator.vue'

describe('Calculator', () => {
  it('performs calculations correctly', async () => {
    const wrapper = mount(Calculator)

    // Helper function to find a button by its text content
    const findButtonByText = (text) => wrapper.findAll('button').wrappers.find(btn => btn.text() === text);

    // Test addition: 1 + 2 = 3
    await findButtonByText('1').trigger('click');
    await findButtonByText('+').trigger('click');
    await findButtonByText('2').trigger('click');
    await findButtonByText('=').trigger('click');
    expect(wrapper.find('input').element.value).toBe('3');

    // Test clearing: C
    await findButtonByText('C').trigger('click');
    expect(wrapper.find('input').element.value).toBe('');

    // Test division: 7 / 2 = 3.5
    await findButtonByText('7').trigger('click');
    await findButtonByText('/').trigger('click');
    await findButtonByText('2').trigger('click');
    await findButtonByText('=').trigger('click');
    expect(wrapper.find('input').element.value).toBe('3.5');
  })
})
