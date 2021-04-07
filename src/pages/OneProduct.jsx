import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import Allergenic from '../components/Allergenic';
import "../styles/OneProduct.scss";


const OneProduct = (props) => {
    const idProd = props.match.params.idProducts;
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
   
    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_URL + `/api/products/` + idProd)
            .then(data => setProduct(data.data))
            .catch(err => setError(err.message))
    }, [])
    return (
        <div className="product-page">
            {!product
                ? <>Loading ...</>
                : error
                    ? <>{error}</>
                    : <>
                        <div className="product-page__image">
                            <img src={product.image} />
                        </div>
                        <div className="product-page__details">
                            <div className="product-page__details-goBack">
                                <p onClick={() => props.history.goBack()}>⏮️ </p>
                            </div>
                            <div className="product-page__details-name">
                                <h2>{product.name}</h2>
                            </div>
                            <div className="product-page__details-price">
                                <h3>{product.price} €</h3>
                            </div>
                            {product?.ingredients.length !== 0
                                && <div className="product-page__details-ingredients">
                                    <h3>Composition: </h3>
                                    {product.ingredients.map((ing, i) => (
                                        <p key={`ing-${i}`} > {ing}</p>
                                    ))}
                                </div>
                            }
                            {product?.description
                                && <div className="product-page__details-description">
                                    <h3>Description: </h3>
                                    <p>{product.description}</p>
                                </div>
                            }
                            <div className="product-page__details-vegan">
                                {product.isVegan && <p>🥬 Veggie </p>}
                            </div>

                            {product.allergenic.length !== 0 && <div className="product-page__details-allergenic">
                                <h3>Allergène: </h3>
                                <Allergenic allergenic={product.allergenic} />
                            </div>}
                        </div>
                    </>}
        </div >
    )
}

export default withRouter(OneProduct);
