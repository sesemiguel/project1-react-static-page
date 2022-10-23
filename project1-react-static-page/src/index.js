import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import custom components
import Header from './Header'
import MainContent from './MainContent';
import Footer from './Footer';

// Build page
const page = (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

ReactDOM.render(
  page,
  document.getElementById("root")
);