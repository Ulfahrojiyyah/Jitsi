import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Reminder Pertemuan</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              //src='images/img-3.jpg'
              text='Kelas Aljabar Hari Senin jam 10.00'
              label='Aljabar'
              path='/ListKulaih'
            />
            <CardItem
              //src='images/img-4.jpg'
              text='Kelas Aljabar Hari Jumat jam 11.00'
              label='Multimedia'
              path='/ListKuliah'
            />
            <CardItem
              //src='images/img-8.jpg'
              text='Kelas Aljabar Hari senin jam 09.00'
              label='Kelas Keamanan internet'
              path='/ListKuliah'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;