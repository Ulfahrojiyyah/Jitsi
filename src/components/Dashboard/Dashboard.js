import React from 'react';
import "./Dashboard.css";
//import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Dashboard = ()=>{
    return (
        <div className='container-dashboard'>
          <h3>Selamat datang Ulfah Rojiyyah di.... </h3> 
            <h4>Reminder Pertemuan</h4>
                <div class='card-1'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">H-1</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class='card-2'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">H-2</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class='card-3'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">H-3</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class='card-4'>
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">H-4</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
       </div>
    )
}
export default Dashboard