import React from 'react';
import { Header } from '../navbar';

export default function App({ children }) {
  return (
    <div className="home-app">
      <Header />
      <div className="page-container">{children}</div>
    </div>
  );
}
