import { mount } from '@vue/test-utils'
import Comments from '../src/components/Comments.vue'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Test Comment', body: 'This is a test', email: 'test@example.com' }]),
  })
)

describe('Comments', () => {
  it('fetches and displays comments', async () => {
    const wrapper = mount(Comments)

    // Wait for the API call to resolve
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/comments')
    expect(wrapper.text()).toContain('Test Comment')
    expect(wrapper.text()).toContain('This is a test')
    expect(wrapper.text()).toContain('test@example.com')
  })
})