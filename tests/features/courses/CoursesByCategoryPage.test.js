import React from 'react';
import { shallow } from 'enzyme';
import { CoursesByCategoryPage } from '../../../src/features/courses/CoursesByCategoryPage';

describe('courses/CoursesByCategoryPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      courses: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CoursesByCategoryPage {...props} />
    );

    expect(
      renderedComponent.find('.courses-courses-by-category-page').length
    ).toBe(1);
  });
});
