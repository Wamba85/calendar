import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import Modal from './Modal'
import { Dialog, DialogTitle, DialogContentText } from '@material-ui/core'

describe('Calendar', () => {
  let wrapper: ShallowWrapper
  const mock = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Modal open={false} handleClose={mock} oraDa={''} oraA={''} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a Dialog', () => {
    expect(wrapper.find(Dialog).length).toEqual(1)
  })

  it('should have a title', () => {
    expect(wrapper.find(DialogTitle).text()).toBe('Nuova Visita')
  })

  it('should display the correct time range', () => {
    wrapper.setProps({ oraDa: '10:00', oraA: '10:10' })
    expect(wrapper.find(DialogContentText).text()).toBe('ora da: 10:00 ora a: 10:10')
  })
})
