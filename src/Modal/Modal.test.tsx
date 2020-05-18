import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Modal from './Modal'
import { Dialog } from '@material-ui/core'

describe('Calendar', () => {
  let wrapper: ShallowWrapper
  const mock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Modal open={false} handleClose={mock} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a Dialog', () => {
    expect(wrapper.find(Dialog).length).toEqual(1)
  })
})
