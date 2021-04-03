import React, { useEffect, useState } from 'react'
import "../../styles/NavBar/ToggleBar.scss";

const ToggleBar = ({ opened, closeToggleBar }) => {
    const [openToggleBar, setOpenToggleBar] = useState(false);
    const handleToggleBar = () => {
        console.log("in toggle", !openToggleBar)
        setOpenToggleBar(!openToggleBar);
        closeToggleBar(!openToggleBar);
    }
    useEffect(() => {
        setOpenToggleBar(opened);
    }, [opened])

    return (
        <div
            onClick={handleToggleBar}
            className={openToggleBar ? "nav-toggle expanded" : "nav-toggle"}>
            <div className="nav-toggle-bar">
            </div>
        </div>
    )
}

export default ToggleBar


