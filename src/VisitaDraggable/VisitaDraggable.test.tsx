import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import VisitaDraggable from './VisitaDraggable'
import Draggable from 'react-draggable'

describe('VisitaDraggable', () => {
  let wrapper: ShallowWrapper
  const mock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<VisitaDraggable width={500} id={1} day={'Sun'} time={'10:00'} handleEndDrag={mock} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a Draggable', () => {
    expect(wrapper.find(Draggable).length).toEqual(1)
  })
})
