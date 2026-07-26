import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: { name: 'Hello Vitest', sex: 1 } } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
