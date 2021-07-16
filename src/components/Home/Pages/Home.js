import React from 'react';
import Navbar from '../Navbar';
import Cards from '../Cards'
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import '../../../App.js';


const Home = ()=>{
    return (
        <div className='Home-Navbar'>
            <Navbar/>
            <HeroSection/>
            <Cards/>
            <Footer/>
            </div>
           
           
    )
}
export default Home