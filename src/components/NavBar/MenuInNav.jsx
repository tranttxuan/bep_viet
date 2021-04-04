import React from 'react';
import "../../styles/NavBar/MenuInNav.scss";
import CategoryList from '../ProductsPage/CategoryList';
import { Link, NavLink } from 'react-router-dom';

const Menu = ({ displayMenu, closeToggleBar }) => {
    const handleToggleBar = () => {
        closeToggleBar(false);
    }

    return (
        <div className="menu-in-nav">
            <div className={displayMenu ? "menu-list expanded" : "menu-list"}>
                <ul>
                    <li onClick={handleToggleBar} className="menu">
                        <Link to="/products"><h3>Carte</h3></Link>
                        <CategoryList />
                    </li>
                    <li><NavLink onClick={handleToggleBar} to="/"><h3>Histories</h3></NavLink></li>
                    <li><NavLink onClick={handleToggleBar} to="/contact"><h3>Contacter</h3></NavLink></li>
                </ul>
                <div className="out-side-menu"></div>
            </div>
            <div className={displayMenu ? "left-menu-list expanded" : "left-menu-list"} onClick={handleToggleBar}></div>
        </div>
    )
}

export default Menu
