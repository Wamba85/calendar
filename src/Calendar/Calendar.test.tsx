import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Calendar from './Calendar'

describe('Calendar', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Calendar />)
  })

  it('should have week days text', () => {
    expect(wrapper.find('.weekday').first().text()).toBe('')
    expect(wrapper.find('.weekday').last().text()).toBe('Sat')
  })

  it('should have timetables', () => {
    expect(wrapper.find('.timetable').first().text()).toBe('00:00')
    expect(wrapper.find('.timetable').at(1).text()).toBe('01:00')
  })

  it('should have 168 slots', () => {
    expect(wrapper.find('.eventSlot').length).toEqual(168)
  })
})
