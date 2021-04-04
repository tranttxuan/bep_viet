import React, { useState } from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import "../styles/Contact.scss";
import emailjs from 'emailjs-com';


const Map = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});


const Contact = () => {
    const [message, setMessage] = useState({
        name: "",
        message: "",
        email: "",
        tel: ""
    })

    const handleInput = (e) => {
        setMessage(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message)

        emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, message, process.env.EMAILJS_USER_ID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

    }

    return (
        <div className="contact-page">
            <div className="contact-page__contact">
                <ul className="horaires">
                    <h2>Horaires</h2>
                    <li>
                        <h3>Lundi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Mardi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Mercredi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Jeudi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Vendredi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Samedi</h3>
                        <p>11:30 - 13:30 / 18:00 - 20:00</p>
                    </li>
                    <li>
                        <h3>Dimanche</h3>
                        <p> 17:00 - 20:00</p>
                    </li>
                </ul>

                <div>
                    <h2 className="contact-nous">Contactez-nous!</h2>
                    <div className="contact-tel">
                        <label>Tel: </label>
                        &nbsp;&nbsp;
                        <a href="tel:0707070707"><h3>07-07-07-07-07</h3></a>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Votre nom: </label>
                        <input required id="name" name="name" value={message.name} onChange={handleInput} />
                        <label htmlFor="email">Votre email: </label>
                        <input required id="email" type="email" name="email" value={message.email} onChange={handleInput} />
                        <label htmlFor="tel">Votre numéro de téléphone : </label>
                        <input required id="tel" name="tel" value={message.tel} onChange={handleInput} />
                        <label htmlFor="message">Votre message: </label>
                        <textarea required id="message" name="message" value={message.message} onChange={handleInput} />
                        <button type="submit">Envoyer!</button>
                    </form>
                </div>


            </div>
            <div className="contact-page__map">
                <Map
                    style={"mapbox://styles/mapbox/streets-v9"}
                    zoom={[12]}
                    containerStyle={{
                        height: "100%",
                        width: "100%",
                    }}
                    center={[2.2371042700659154, 48.9221467502941]}
                >
                    <Marker
                        coordinates={[2.2371042700659154, 48.9221467502941]}

                    >
                        <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png" alt="map"></img>

                    </Marker>
                </Map>
                <div>
                    <p>   55 rue president - 92700 - Colombes</p>
                </div>
            </div>

        </div>
    )
}

export default Contact
