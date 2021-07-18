import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='Left'>
        <h2>Video Conference</h2>
        <p>Jitsi Meet</p>
        <div className='hero-btns'>
          <Button
            to='/Signin'
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            Sign In
          </Button>
        </div>
      </div>
      
      <div className='Right'>
        <img className="home-img" src="images/Home.svg"/>
      </div>
    </div>
  );
}

export default HeroSection;