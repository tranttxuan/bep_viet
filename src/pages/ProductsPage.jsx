import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import CategoryList from '../components/ProductsPage/CategoryList'
import ProductsList from '../components/ProductsPage/ProductsList';
import "../styles/Products/ProductsPage.scss";
import { Helmet } from "react-helmet";


const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const location = useLocation();
    const category = location.search && location.search.split("=")[1];

    useEffect(() => {
        //fetch food by category
        axios.get(process.env.REACT_APP_BACKEND_URL + `/api/products` + location.search)
            .then(data => { setProducts(data.data) })
            .catch(err => setError(err.message))

    }, [category, location.search]);

    return (
        location.search
            ? <div className="products-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bep Viet Colombes</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="description" content="Bep Viet, Colombes, cuisine vietnamienne" />
                </Helmet>
                <a href="/products" className="btn-back">
                    <h2>⏮️  Nos produits: {" "}{category}</h2>
                </a>
                <div>
                    {error && <div>{error}</div>}
                    <ProductsList products={products} category={category} />
                </div>
            </div>
            : <div className="products-page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Bep Viet - Plats</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="description" content="Bep Viet, Colombes, cuisine vietnamienne" />
                </Helmet>
                <div className="category-list">
                    <CategoryList products={products || []} />
                </div>
            </div>

    )

}

export default ProductsPage;
