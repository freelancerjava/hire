import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="courses-layout">
      <div className="examples-page-container">{children}</div>
    </div>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};
