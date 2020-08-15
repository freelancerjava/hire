import React from 'react';
import { shallow } from 'enzyme';
import { CategoryPage } from '../../../src/features/category/CategoryPage';

describe('category/CategoryPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      category: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CategoryPage {...props} />
    );

    expect(
      renderedComponent.find('.category-category-page').length
    ).toBe(1);
  });
});
