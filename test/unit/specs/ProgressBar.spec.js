import { shallow } from 'vue-test-utils'
import ProgressBar from '@/components/ProgressBar'

const propsData = {
  value: 50
}

describe('ProgressBar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(ProgressBar, { propsData })
    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.props().value).toBe(propsData.value)

    const bar = wrapper.find('.progressbar-bar')
    expect(bar.isVueInstance()).toBe(false)
    expect(bar.exists()).toBe(true)
    expect(bar.is('div')).toBe(true)
    expect(bar.classes()).toContain('progressbar-bar')
  })
})
