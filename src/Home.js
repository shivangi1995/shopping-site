import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt='https://m.media-amazon.com/images/G/01/digital/video/sonata/PV_IN_WhatsyourmoodGridVersion/bf51097d-b07b-435c-a0b8-21d01d21affe._UR3000,600_SX1500_FMwebp_.jpg' />

            <div className='home__row'>
                <Product id={12345}
                    title='You are not alone'
                    price={11.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlTLoY6cgJXtgNkmFOh7lM-j2aub8l-dSG7A&usqp=CAU'
                />

                <Product id={12346}
                    title='Amazon Echo Dot'
                    price={110.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQuqJdCQLLG674LcyTCqyDjJokm3nzYrF1xg&usqp=CAU'
                />
            </div>

            <div className='home__row'>
                <Product id={12347}
                    title='Wonderchef Mixer Grinder'
                    price={11.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT824W835XGnpcIW5Pb1enXV45pOf_qhrLzbLs3yq8WbJesV1AKYix-UaXEwfXH2RlXLzmasAzL&usqp=CAc'
                />

                <Product id={12348}
                    title='Love Ruin'
                    price={11.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQKxtrvxWppH_7nn-KNzB-wHS1ISZqNR6CoA&usqp=CAU'
                />

                <Product id={1234}
                    title='Knowing God'
                    price={11.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCUSbTYT2Xdptyr2Tj2uHh80hPTiGozsV-kw&usqp=CAU'
                />
            </div>

            <div className='home__row'>
                <Product id={123455}
                    title='You are not alone'
                    price={11.96}
                    rating={5}
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlTLoY6cgJXtgNkmFOh7lM-j2aub8l-dSG7A&usqp=CAU'
                />
            </div>

        </div>
    )
}

export default Home
