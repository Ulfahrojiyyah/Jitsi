import React from 'react';
import "./Dashboard.css";
import NavDashboard from './NavDashboard';
import Cards from './Cards';
import Footer from './Footer';

const Dashboard = ()=>{
    return (
        <div>
            <NavDashboard/>
            <div className='dashboard'>
                <h2>Selamat Datang</h2>
                <p></p>
            </div>
            <Cards/>
            <Footer/>
        </div>

    );
}
export default Dashboard