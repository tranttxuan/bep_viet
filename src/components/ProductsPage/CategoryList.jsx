import React from 'react'
import { categoryList } from '../../utils/constants'

const CategoryList = ({ products }) => {
    // console.log(products)
    return (
        <ul>
            {categoryList.map((cat, i) => {
                const nameProductsByCat = products && [...products].filter(product => product.category === cat);

                return (
                    <li key={i}>
                        <a href={`/products?cat=${cat}`}>
                            <h2>{cat}  </h2>
                            <span> &#8594; </span>
                        </a>
                        <ul className="category-list__all-products">
                            {nameProductsByCat?.map(({ name, id, price, ingredients, category }) => (
                                <li key={id}>
                                    <a href={`/products?cat=${category}`} className="name">
                                        {name}</a>

                                    <p className="price">{Number(price).toFixed(2)} €</p>
                                    <p className="ingredients">
                                        {ingredients[0]}
                                        {ingredients.length > 0 && ", "}
                                        {ingredients[1]}
                                        {ingredients.length > 0 && "..."}
                                    </p>

                                </li>
                            ))}
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

export default CategoryList
