import React from 'react';
import { Link } from 'react-router-dom';
import CardFourItemMhs from '../DashboardMhs/CardFourItemMhs';

function CardFourMhs(props) {
  return (
    <>
    <div class="container">
        <h1>Kuliah</h1>
            <div className='cards'>
                <div className="card-columns">
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                    <CardFourItemMhs/>
                </div>
            </div>
        </div>
    </>
  );
}

export default CardFourMhs;