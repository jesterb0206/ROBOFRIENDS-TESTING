import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

it('Renders Without Crashing', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
