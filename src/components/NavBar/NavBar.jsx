import React, { useState } from 'react'
import MenuInNav from './MenuInNav'
import ToggleBar from './ToggleBar';
import { Link } from "react-router-dom";
import "../../styles/NavBar/NavBar.scss";

const NavBar = () => {
    const [openedToggleBar, setOpenedToggleBar] = useState(false);

    const handleToggleBar = (boolean) => {
        console.log(boolean)
        setOpenedToggleBar(boolean);
    }


    return (
        <div className="nav-bar">
            <ToggleBar closeToggleBar={handleToggleBar} opened={openedToggleBar} />
            <MenuInNav displayMenu={openedToggleBar} closeToggleBar={handleToggleBar} />
            <div className="logo">

                <Link to="/"><h1><span>B</span>ep <span>V</span>iet</h1></Link>
                <Link to="/">  <p>Saveur asiatique</p></Link>
            </div>
        </div>
    )
}

export default NavBar
