import React, {useState, useEffect} from 'react'
import './NavDashboard.css'
import {Link } from "react-router-dom";

function NavDashboard() {
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
                    <Link to='/' className='image-logo'>
                        <i className='fab fa-typo3'onClick={closeMobileMenu}/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='navbar-item'>
                            <Link to='/' className='navbar-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                            </li>
                        <li className='navbar-item'>
                            <Link
                                to='/ListKuliah'
                                className='navbar-links'
                                onClick={closeMobileMenu}>
                                Kuliah
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link
                                to='/LihatKelas'
                                className='navbar-links'
                                onClick={closeMobileMenu}>
                                Kelas
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavDashboard;