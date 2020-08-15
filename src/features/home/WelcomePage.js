import React from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Header } from '../navbar'
import { SearchPanel, CategoriesPanel } from './components/index'
import { VideosContainer } from '../video/VideosPage';
export default function WelcomePage() {

  return (
    <>
      <SearchPanel />
      <CategoriesPanel />
      <VideosContainer />
    </>
  );
}
