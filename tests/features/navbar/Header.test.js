import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../../src/features/navbar';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Header />);
  expect(renderedComponent.find('.navbar-header').length).toBe(1);
});
