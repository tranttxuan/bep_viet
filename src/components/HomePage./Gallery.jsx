import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import "../../styles/HomePage/Gallery.scss";


const Gallery = ({ selectedCat }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState("");
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL + `/api/products`)
            .then(data => {
                setAllProducts(data.data)
            })
            .catch(err => setError(err.message))
    }, [])

    useEffect(() => {
        if (selectedCat === "All") {
            setSortedProducts(allProducts);
        } else {
            setSortedProducts([...allProducts].filter(prod => prod.category === selectedCat))
        }
    }, [selectedCat]);


    const responsive = {
        0: { items: 1 },
        // 400: { items: 2 },
        // 1024: { items: 3 },
    };

    const renderItems = (list) => {
        return (
            list.map(({ _id, image, category, name, price }, i) => {
                return (
                    <div className="alice-carousel__stage-item__added">
                        <Link to={`/product/${_id}`}>
                            {selectedCat !== "Boissons" && <div className="overlay"></div>}
                            <img key={i} src={`${image}`} alt={_id}
                                style={{
                                    objectFit: selectedCat === "Boissons" ? "scale-down" : "cover",
                                }}></img>
                        </Link>
                        <div className="information">
                            <div>
                                <p>{name}</p>
                                <p>{price}</p>
                            </div>
                            <Link to={`/product/${_id}`}>See more</Link>
                        </div>
                    </div>
                )
            })
        )
    }

    const items = sortedProducts.length !== 0 ? renderItems(sortedProducts) : renderItems(allProducts);

    return (
        allProducts.length === 0
            ? <div>Loading ...</div>
            : error
                ? <div>{error}</div>
                : <AliceCarousel
                    autoPlayInterval={3000}
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                    infinite
                    autoWidth
                    items={items}
                    responsive={responsive}
                    disableDotsControls
                    innerWidth={266.5}
                />
    )
}

export default Gallery
