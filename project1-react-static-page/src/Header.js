import React from 'react';

export default function Header(){
    return (
      <nav className='nav'>
        <img src="./logo512.png" alt='react-logo' className='react-logo'/>
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    )
}