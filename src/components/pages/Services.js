import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Services() {
  return (
    <div className='cards'>
      <h1>Free Games</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn2.unrealengine.com/ubis-ucs18396-egst-eventassetsbundleshare-image-1920x1080-1920x1080-976331373.jpg?h=480&resize=1&w=854'
              text='Celebrate the latest Ubisoft Forward with great discounts on top Ubisoft titles. Fill in a gap in your collection, or try out a new franchise today!'
              label='SAVE UP TO 80%'
              path='/products'
            />
            <CardItem
              src='https://cdn2.unrealengine.com/en-egs-creatorschoice-store-featuredcarousel-1920x1080-1920x1080-957784257.jpg?h=480&resize=1&w=854'
              text='Creators Choice Sale Begins Today'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.greenmangaming.com/newsroom/wp-content/uploads/2018/10/fortnite-blog-5.jpg'
              text='Stick It To The Man!'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.greenmangaming.com/newsroom/wp-content/uploads/2018/12/fortnite-again-blog.jpg'
              text='Delores: A Thimbleweed Park mini-adventure'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://gameranx.com/wp-content/uploads/2017/08/Fortnite2-1024x576.png'
              text='3 out of 10, EP 5: "The Rig Is Up!"'
              label='FREE NOW'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
