import React from 'react';
import { shallow } from 'enzyme';
import { VideoSinglePage } from '../../../src/features/video/VideoSinglePage';

describe('video/VideoSinglePage', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <VideoSinglePage {...props} />
    );

    expect(
      renderedComponent.find('.video-video-single-page').length
    ).toBe(1);
  });
});
