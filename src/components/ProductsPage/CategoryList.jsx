import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { categoryList } from '../../utils/constants'

const CategoryList = ({ products }) => {
    const history = useHistory();

    const handleNavigation = (e, cat) => {
        setTimeout(() => {
            history.push(`/products?cat=${cat}`);
        }, 2000);

    }
    return (
        <ul>
            {categoryList.map((cat, i) => {
                const nameProductsByCat = products && [...products].filter(product => product.category === cat);

                return (
                    <li key={`${cat}-${i}`}>
                        <div className="category" onClick={(e) => handleNavigation(e, cat)} >
                            <h2>{cat}  </h2>
                            {/* <span> &#8594; </span> */}
                            <span>⏩</span>
                        </div>
                        <ul className="category-list__all-products">
                            {nameProductsByCat?.map(({ name, _id, price, ingredients }) => (
                                <li key={_id}>
                                    <Link to={`/product/${_id}`} className="name">
                                        {name}
                                    </Link>

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
