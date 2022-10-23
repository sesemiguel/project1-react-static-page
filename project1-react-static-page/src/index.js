import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Import custom components
import Header from './components/Header'
import MainContent from './components/MainContent';
import Footer from './components/Footer';

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