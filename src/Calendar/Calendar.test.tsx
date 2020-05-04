import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import Calendar from './Calendar'

describe('Calendar', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(
      <Calendar />
    )
  })

  it('should render 8 divs', () => {
    expect(wrapper.find('div').length).toEqual(8)
  })

  it('should have week days text', () => {
    expect(wrapper.find('.weekday').first().text()).toBe('Sun')
    expect(wrapper.find('.weekday').last().text()).toBe('Sat')
  })
})