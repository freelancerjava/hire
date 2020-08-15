import React from 'react';
import { shallow } from 'enzyme';
import { VideosPage } from '../../../src/features/video/Videos';

describe('video/VideosPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      video: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <VideosPage {...props} />
    );

    expect(
      renderedComponent.find('.video-videos').length
    ).toBe(1);
  });
});
