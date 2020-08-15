import React from 'react';
import { SearchPanel } from './components';
// import PropTypes from 'prop-types';

export default function SearchPage() {
  return (
    <div className="home-search-page">
      <SearchPanel onlyInput />
    </div>
  );
};

