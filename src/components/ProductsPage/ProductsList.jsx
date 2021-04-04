import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "../../styles/Products/ProductList.scss";

const ProductsList = ({ products, category }) => {
    let listSEO = '';
    products.forEach(prod => {
        listSEO += `${prod.name}, `
    });

    return (
        <div className="products">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bep Viet - {category} </title>
                <meta name="description" content={`Bep Viet - ${category} - ${listSEO}`} />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            {products.map(({ image, name, ingredients, price, isVegan, _id }, i) => (
                <div key={i} className="products__product">
                    <Link to={`/product/${_id}`} className="products__product-image">
                        <img src={image} alt={`name-${name}`} />
                    </Link>
                    <div className="products__product-information">
                        <Link to={`/product/${_id}`}>
                            <h3 className="products__product-information__name"> {name}</h3>
                        </Link>
                        <p className="products__product-information__price">Price: {price}€</p>
                        <p className="products__product-information__ingredients">
                            <span>Ingredients:
                           </span> {ingredients.map((ing, i) => <span key={i}>{ing}{", "}
                            </span>)}
                        </p>
                        {isVegan && <p>🥬 Veggie </p>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
