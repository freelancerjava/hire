import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/courses';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.courses-layout').length).toBe(1);
});
