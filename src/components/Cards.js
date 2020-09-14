import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Epic Game Store</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.insider.com/5cc1a8b4d1a2f838f922c767?width=1100&format=jpeg&auto=webp'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://s.yimg.com/ny/api/res/1.2/Gnaor6elkRLCZbzjvvpyOA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjMwO2g9NDIw/https://media.zenfs.com/en/variety_finance_606/37c1c7b90ace824f56a121e2b336ca86'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.greenmangaming.com/newsroom/wp-content/uploads/2018/10/fortnite-blog-5.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://www.greenmangaming.com/newsroom/wp-content/uploads/2018/12/fortnite-again-blog.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://gameranx.com/wp-content/uploads/2017/08/Fortnite2-1024x576.png'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
