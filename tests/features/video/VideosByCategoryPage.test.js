import React from 'react';
import { shallow } from 'enzyme';
import { VideosByCategoryPage } from '../../../src/features/video/VideosByCategoryPage';

describe('video/VideosByCategoryPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <VideosByCategoryPage {...props} />
    );

    expect(
      renderedComponent.find('.video-videos-by-category-page').length
    ).toBe(1);
  });
});
