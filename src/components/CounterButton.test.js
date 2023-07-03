import React from 'react';
import {shallow} from 'enzyme';
import CounterButton from './CounterButton';

it('Renders Without Crashing', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('Correctly Increments the Counter', () => {
  const wrapper = shallow(<CounterButton />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 1});
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({count: 3});
});
