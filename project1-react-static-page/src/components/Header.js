import React from 'react';
import ReactLogo from '../images/react-logo.png';

export default function Header(){
    return (
      <nav className='nav'>
        <div className='logo-text-comb'>
          <img 
              src={ReactLogo}
              alt='react-logo' 
              className='react-logo'
            />
          <h1>ReactFacts</h1>
        </div>
        <h2 className="course-name">React Course - Project 1</h2>
      </nav>
    )
}