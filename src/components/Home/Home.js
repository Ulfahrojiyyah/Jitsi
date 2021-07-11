import React from 'react';
import Navbar from './Navbar';
import './Home.css';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";


const Home = ()=>{
    return (
        <div className='Home-Navbar'>
            <Navbar/>
                <h1>Video Converence</h1>
                <div className="btn-home">
                    <Link className="btn btn-primary" to={"/Signin"}>Sign In</Link>
                </div>
                <img className="home-img" src="img/home.svg"/>
            </div>
    )
}
export default Home