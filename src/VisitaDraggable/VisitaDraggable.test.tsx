import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import VisitaDraggable from './VisitaDraggable'
import Draggable from 'react-draggable'

describe('VisitaDraggable', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(<VisitaDraggable />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a Draggable', () => {
    expect(wrapper.find(Draggable).length).toEqual(1)
  })
})
