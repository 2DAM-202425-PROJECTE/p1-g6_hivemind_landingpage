import { mount } from '@vue/test-utils'
import Users from '../src/components/Users.vue'
import axios from 'axios'

jest.mock('axios')

describe('Users', () => {
  it('fetches and displays users', async () => {
    axios.get.mockResolvedValue({
      data: {
        users: [{ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890' }]
      }
    })

    const wrapper = mount(Users)

    // Wait for the API call to resolve
    await new Promise(resolve => setTimeout(resolve, 0))

    expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/users')
    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('john@example.com')
    expect(wrapper.text()).toContain('1234567890')
  })
})