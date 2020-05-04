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

  it('should render 32 divs', () => {
    expect(wrapper.find('div').length).toEqual(32)
  })

  it('should have week days text', () => {
    expect(wrapper.find('.weekday').first().text()).toBe('Sun')
    expect(wrapper.find('.weekday').last().text()).toBe('Sat')
  })

  it('should have timetables', () => {
    expect(wrapper.find('.timetables').first().text()).toBe('00:00')
    expect(wrapper.find('.timetables').at(1).text()).toBe('01:00')
  })
})