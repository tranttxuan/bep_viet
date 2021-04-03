import React from 'react'
import { Helmet } from 'react-helmet';
import "../../styles/Products/ProductList.scss";

const ProductsList = ({ products, category }) => {
    let listSEO = '';
    products.forEach(prod => {
        listSEO += `${prod.name}, `
    });
    console.log("check ", products)
    return (
        <div className="products">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bep Viet - {category} </title>
                <meta name="description" content={`Bep Viet - ${category} - ${listSEO}`} />
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {products.map(({ image, name, ingredients, price, isVegan }, i) => (
                <div key={i} className="products__product">
                    <img src={image} alt={`name-${name}`} className="products__product-image" />
                    <div className="products__product-information">
                        <h3 className="products__product-information__name">{name}</h3>
                        <p className="products__product-information__price">Price: {price}€</p>
                        <p className="products__product-information__ingredients">
                            <span>Ingredients:
                           </span> {ingredients.map((ing, i) => <span key={i}>{ing}{", "}
                            </span>)}
                        </p>
                        <p>{isVegan}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
