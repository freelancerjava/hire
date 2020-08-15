import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/video/Layout';

describe('video/Layout', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Layout {...props} />
    );

    expect(
      renderedComponent.find('.video-layout').length
    ).toBe(1);
  });
});
