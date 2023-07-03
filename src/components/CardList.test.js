import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

const filteredRobots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
  },
];

it('Renders Without Crashing', () => {
  expect(shallow(<CardList robots={filteredRobots} />)).toMatchSnapshot();
});
