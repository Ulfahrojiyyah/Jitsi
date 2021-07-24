import React from 'react'
import Navbar from './Navbar'
import './Style.css'
function Header() {
    return (
            <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Video Conference</span></h1>
                <p className='details'>Jitsi Meet</p>
                <a href='/Signin' className='cv-btn' style={{ textDecoration: 'none' }}>Sign In</a>
            </div>
            </div>
        
    )
}

export default Header