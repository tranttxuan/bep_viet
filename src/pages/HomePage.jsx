import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Gallery from '../components/HomePage./Gallery';
import "../styles/HomePage/HomePage.scss";
import { Link } from 'react-router-dom';
import ButtonList from '../components/HomePage./ButtonList';
import axios from 'axios';

const HomePage = () => {
    const [selectedCat, setSelectedCat] = useState('All');


    const sortByCat = (id) => {
        setSelectedCat(id)
    }

    return (
        <div className="home-page">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bep Viet Colombes</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Bep Viet, Colombes, cuisine vietnamienne" />
                <meta name="geo.region" content="W6CP+VR Colombes, France" />
                <meta name="geo.placename" content="Colombes" />
                <meta name="og:street-address" content="55 rue du Président Salvador Allende, 92700 Colombes " />
                <meta name="geo.position" content="48.9221467502941, 2.2371042700659154" />
                <meta name="rating" content="General" />
                <meta name="copyright" content="Bep Viet Colombes"></meta>

                <meta name="og:phone_number" content="650-123-4567" />
                <meta name="og:site_name" content="Bep Viet Colombes" />
                <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
                <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />

            </Helmet>
            {/* ORDER PART  */}
            <div className="home-page__order-ways">
                <div className="option">
                    <div className="option-overlay">
                        <h2>Commander en ligne</h2>
                    </div>
                    <div className="option-information">
                        <a href="https://www.just-eat.fr/livraison/repas/bezons-centre" className="link">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Uber_eats_logo_2017_06_22.jpg" alt="ubereat"></img>
                        </a>
                        <a href="https://www.just-eat.fr/livraison/repas/bezons-centre" className="link">
                            <img src="https://i.pinimg.com/originals/1f/22/88/1f22889a6babb1166286b13db517a555.png" alt="deliveroo"></img>
                        </a>
                    </div>
                </div>
                <div className="option">
                    <div className="option-overlay">
                        <h2>Commander par telephone</h2>
                    </div>
                    <div className="option-information">
                        <a href="tel:0707070707" className="link tel"><h2>07-07-07-07-07</h2></a>
                    </div>
                </div>

            </div>

            {/* PRODUCTS PART  */}
            <ButtonList sortByCat={sortByCat} />

            <div className="home-page__products">
                <Gallery selectedCat={selectedCat} />
            </div>


        </div>
    )
}

export default HomePage
