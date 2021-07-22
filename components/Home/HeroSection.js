import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h2>Video Conference</h2>
      <p>Jitsi Meet</p>
      <div className='btn'>
      <Link 
        className="btn btn-outline-light btn-lg"
        role="button"
        to="/Signin"
        > 
        Get Started
      </Link>
      </div>
    </div>
  );
}

export default HeroSection;