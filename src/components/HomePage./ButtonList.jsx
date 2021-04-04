import React from 'react'
import "../../styles/HomePage/ButtonList.scss";

const ButtonList = ({ sortByCat }) => {
    const sortByType = (e) => {
        sortByCat(e.target.id)
    };

    return (
        <div className="button-list">
            <button onClick={sortByType} id="All">
                🍽&nbsp;&nbsp;La&nbsp;carte
                    </button>
            <button onClick={sortByType} id="Menus">
                🍱&nbsp;&nbsp;Menus
                    </button>
            <button onClick={sortByType} id="Entrees" >
                🥗&nbsp;&nbsp;Entrées
                    </button>
            <button onClick={sortByType} id="Plats">
                🍝&nbsp;&nbsp;Plats
                    </button>
            <button onClick={sortByType} id="Desserts" >
                🍰&nbsp;&nbsp;Desserts
                    </button>
            <button onClick={sortByType} id="Boissons" >
                🍹&nbsp;&nbsp;Boissons
                    </button>
        </div>
    )
}

export default ButtonList
