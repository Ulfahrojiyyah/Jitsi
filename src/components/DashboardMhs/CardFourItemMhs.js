import React from 'react';
import { Link } from 'react-router-dom';
import CardItemMhs from '../DashboardMhs/CardItemMhs';

function CardFourItemMhs(props) {
  return (
    <>
        <div class="card">
            <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="cardtitle">{props.title}</h5>
                    <p class="card-texbal"></p>
                    <a href="#" class="btn btn-primary">Detail</a>
                </div>
        </div>

    </>
  );
}

export default CardFourItemMhs;