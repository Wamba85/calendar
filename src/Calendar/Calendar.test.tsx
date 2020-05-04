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
})