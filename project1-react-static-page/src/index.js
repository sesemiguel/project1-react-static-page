import React from 'react';
import ReactDOM from 'react-dom';

function Header(){
  return (
    <nav>
      <img src="./logo512.png" alt='react-logo' width='40-px'></img>
    </nav>
  )
}

function MainContent(){
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walk</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function Footer(){
  return (
    <footer>
      Created by Miguel Karlo Sese
    </footer>
  )
}

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