import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';

describe('should render Calendar', () => {
  let wrapper: ShallowWrapper

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('should render a Calendar', () => {
    expect(wrapper.find('Calendar').length).toEqual(1)
  })
});
