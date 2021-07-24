import React from 'react';
import "./DashboardMhs.css";
import NavDashboardMhs from './NavDashboardMhs';
import CardsMhs from './CardsMhs';
import CardFourMhs from './CardFourMhs';
import FooterMhs from './FooterMhs';
import CardThreeMhs from './CardThreeMhs';

const DashboardMhs = ()=>{
    return (
        <div>
            <NavDashboardMhs/>
            <div className='dashboardmhs'>
                <h2>Selamat Datang</h2>
                <p>Ulfah Rojiyyah</p>
            </div>
            <CardsMhs/>
            <CardFourMhs/>
            <CardThreeMhs/>
            <FooterMhs/>
        </div>

    );
}
export default DashboardMhs