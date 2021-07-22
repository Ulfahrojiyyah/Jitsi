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
              //src='images/img-3.jpg'
              text='Kelas Aljabar Hari Senin jam 10.00'
              label='Aljabar'
              path='/ListKulaihMhs'
            />
            <CardItemMhs
              //src='images/img-4.jpg'
              text='Kelas Aljabar Hari Jumat jam 11.00'
              label='Multimedia'
              path='/ListKuliahMhs'
            />
            <CardItemMhs
              //src='images/img-8.jpg'
              text='Kelas Aljabar Hari senin jam 09.00'
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