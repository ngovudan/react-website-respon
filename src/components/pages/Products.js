import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';

export default function Products() {
  return (
    <div className='cards'>
      <h1>Free Games</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn2.unrealengine.com/egs-railwayempire-gamingmindsstudios-g1a-00-1920x1080-829440088.jpg?h=1080&resize=1&w=1920'
              text='Railway Empire'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/27d2f156f77b4202b9bc78e40a408b03/offer/EGS_WhereTheWaterTastesLikeWine_DimBulbGames_S1-2560x1440-75b8bde822ddf61974fe34cc0fb6f26c.jpg?h=480&resize=1&w=854'
              text='Where The Water Tastes Like Wine'
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
            <CardItem
              src='https://www.greenmangaming.com/newsroom/wp-content/uploads/2018/12/fortnite-again-blog.jpg'
              text='Delores: A Thimbleweed Park mini-adventure'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://gameranx.com/wp-content/uploads/2017/08/Fortnite2-1024x576.png'
              text='3 out of 10, EP 5: "The Rig Is Up!"'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn1.epicgames.com/ad876f7812c946f6a362bf821b971b48/offer/EGS_StickItToTheMan_Zoink_S1-2560x1440-959c120e1befd416396488b6698f8113.jpg?h=480&resize=1&w=854'
              text='Stick It To The Man!'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/epic/offer/EGS_SLUDGELIFE_TerriVellmannDoseone_S1-2560x1440-d9ff8e9ba3ea57e017f1e7b94290d290.jpg?h=480&resize=1&w=854'
              text='Sludge Life'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/tulip/offer/Delores_Epic_2560x2440_v1-2560x1440-a282575c156f41cf03a022cb28ef2477.jpg?h=480&resize=1&w=854'
              text='Delores: A Thimbleweed Park mini-adventure'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn1.epicgames.com/fn/offer/14BR_BPLaunch_EGS_S2_1200x1600-1200x1600-d31d390c22d23717659df2b807342d25.jpg?h=854&resize=1&w=640'
              text='Fortnite'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/newt/offer/EGS_Spellbreak_ProletariatInc_S6-1200x1600-8cf5fbf5533eb5644cec429a257b6b69.jpg?h=854&resize=1&w=640'
              text='Spellbreak'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/epic/offer/EGS_Diabotical_TheGDStudio_S2-860x1148-4735874e9639619fd8c049cd8ebc72a8.jpg?h=854&resize=1&w=640'
              text='Diabotical'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/b04882669b2e495e9f747c8560488c93/offer/TM_StarterEdition_Store_Portrait_1200x1600-1200x1600-9afa6ef84b3de2468fee739e79942e91.jpg?h=854&resize=1&w=640'
              text='Trackmania'
              label='FREE NOW'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn1.epicgames.com/82225e5cb4714006b335a50d840208c6/offer/EPIC_Key_Art_Portrait_640x854-MNMCR-640x854-faddeaba1e194bf29c224ab81cd8450b.png?h=854&resize=1&w=640'
              text='Might & Magic: Chess Royale'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/076207fa2b5c4803a636af606c3c28b7/offer/Epic-SMITE-7.9-FeaturedCarousel-Mobile-510x680-510x680-2c06913e7cd4c77eecaa58d7eaffa638.jpg?h=854&resize=1&w=640'
              text='Auto Chess'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/badb0ee71b474ed591ec43212547cfc8/offer/Smite-EGS-RadiantStars-PortraitIMG-860x1148-860x1148-3af1153d53eafd6c07d1d6f4a7afb23e.jpg?h=854&resize=1&w=640'
              text='Paladins'
              label='FREE NOW'
              path='/products'
            />
            <CardItem
              src='https://cdn1.epicgames.com/azalea/offer/final_egsstore_tile_S03_source_final_s-2149x2756-e1961840a3caddad186623059ed2a54c.jpg?h=854&resize=1&w=640'
              text='Magic The Gathering Arena'
              label='FREE NOW'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
