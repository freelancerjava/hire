import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// import PropTypes from 'prop-types';
import { } from './redux/hooks';
import { useQuery } from 'react-query';
import { getVideosByCategory } from './query'

export default withRouter(function CoursesByCategoryPage({ history, children }) {
  const id = history.location.pathname.split('courses/')[1];
  const videos = useQuery(['svideos', { id: id }], getVideosByCategory)
  return (
    <div className="courses-courses-by-category-page">
      {videos.data && videos.data.map((item, index) => {
        return (
          <>
          
          </>
        )
      })}
    </div>
  );
});

