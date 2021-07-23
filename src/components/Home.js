import React from 'react';
import Navbar from './Navbar';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import '../../../App.js';
import Footer from '../Footer';
import Header from './Header';
import Feature from './Feature';
import About from './About';
import aboutimage from '../../../images/contact.svg'

const Home = ()=>{
    return (
        <div className='Home'>
            <Header/>
            <Feature/>
            <About image={aboutimage} title='Come yoo' button='Get The Contact'/>
            {/* <HeroSection/>
            <Cards/>
            <Footer/> */}

            </div>      
    )
}
export default Home