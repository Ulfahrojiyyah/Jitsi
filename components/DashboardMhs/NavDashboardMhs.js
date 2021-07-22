import React, {useState, useEffect} from 'react'
import './NavDashboardMhs.css'
import '../Home/Pages/Home'
import {Link } from "react-router-dom";

function NavDashboardMhs() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


    return (
        <>
            <nav className='navbar-dashboard'>
                <div className='container-navbar'>
                    <div className='nav-left'>
                        <Link to='/' className='navbar_logo' onClick={closeMobileMenu}>
                            <i class='nav-logo' />
                            <img src="images/logo.png" alt='spaceship'/>
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className='nav-right'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='navbar-item'>
                            <Link to='/' className='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                            </li>
                        <li className='navbar-item'>
                            <Link
                                to='/ListKuliahMhs'
                                className='navbar-links'
                                onClick={closeMobileMenu}>
                                Kuliah
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link
                                to='/'
                                className='navbar-links'
                                onClick={closeMobileMenu}>
                                Logout
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavDashboardMhs;