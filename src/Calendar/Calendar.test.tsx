import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Calendar from './Calendar'

describe('Calendar', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<Calendar timeslot={60} weekdays={[]} />)
  })

  it('should have timetables based on timeslot', () => {
    expect(wrapper.find('.timetable').first().text()).toBe('0:00')
    expect(wrapper.find('.timetable').at(1).text()).toBe('1:00')
    expect(wrapper.find('.timetable').length).toEqual(24)
    wrapper.setProps({ timeslot: 30 })
    expect(wrapper.find('.timetable').length).toEqual(48)
  })

  it('should have timetable length times 7 event slots', () => {
    let timetablesLength = wrapper.find('.timetable').length
    expect(wrapper.find('.eventSlot').length).toEqual(timetablesLength * 7)
    wrapper.setProps({ timeslot: 30 })
    timetablesLength = wrapper.find('.timetable').length
    expect(wrapper.find('.eventSlot').length).toEqual(timetablesLength * 7)
  })

  it('should renderer weekdays', () => {
    wrapper.setProps({ weekdays: [12, 13, 14, 15, 16, 17, 18] })
    expect(wrapper.find('.weekdayNumber').at(0).text()).toBe('12')
    expect(wrapper.find('.weekdayString').first().text()).toBe('Sun')
    expect(wrapper.find('.weekdayString').last().text()).toBe('Sat')
  })
})
