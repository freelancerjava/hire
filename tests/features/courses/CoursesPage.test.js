import React from 'react';
import { shallow } from 'enzyme';
import { CoursesPage } from '../../../src/features/courses/CoursesPage';

describe('courses/CoursesPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      courses: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CoursesPage {...props} />
    );

    expect(
      renderedComponent.find('.courses-courses-page').length
    ).toBe(1);
  });
});
