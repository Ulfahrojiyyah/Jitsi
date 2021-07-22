import React from 'react';
import "./DashboardMhs.css";
import NavDashboardMhs from './NavDashboardMhs';
import CardsMhs from './CardsMhs';
import FooterMhs from './FooterMhs';

const DashboardMhs = ()=>{
    return (
        <div>
            <NavDashboardMhs/>
            <div className='dashboardmhs'>
                <h2>Selamat Datang</h2>
                <p>Ulfah Rojiyyah</p>
            </div>
            <CardsMhs/>
            <FooterMhs/>
        </div>

    );
}
export default DashboardMhs