import React from 'react';
import './CardsMhs.css';
import CardItemMhs from '../DashboardMhs/CardItemMhs';

function CardsMhs() {
  return (
    <div className='cards'>
      <h1>Reminder Pertemuan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemMhs
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              text='Pertemuan ke-4'
              text2= 'Selasa, 13 Maret, 10:30 WIB'
              label='Aljabar'
              path='/ListKulaihMhs'
            />
            <CardItemMhs
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              text='Pertemuan ke-3'
              text2= 'Selasa, 13 Maret, 10:30 WIB'
              label='Multimedia'
              path='/ListKuliahMhs'
            />
            <CardItemMhs
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              text='Pertemuan ke-9'
              text2= 'Selasa, 13 Maret, 10:30 WIB'
              label='Keamanan internet'
              path='/ListKuliahMhs'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsMhs;