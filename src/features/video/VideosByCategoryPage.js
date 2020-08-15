import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { withRouter } from 'react-router-dom';

export default withRouter(function VideosByCategoryPage({ history }) {
  const category = history.location.pathname.split("category/")[1]
  return (
    <div className="video-videos-by-category-page">
      Component content: video/VideosByCategoryPage category: {category}
    </div>
  );
})

