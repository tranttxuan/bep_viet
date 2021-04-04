import React, { useState } from 'react'

function Allergenic({ allergenic }) {
    const [showNote, setShowNote] = useState(false);
    return (
        <div className="list-allergenic">
            {allergenic.map((ing, i) => {
                const icon = () => {
                    console.log("allergic ", ing)
                    switch (ing) {
                        case "sésame/cacahuète":
                            return "🥜";
                        case "porc":
                            return "🐖";
                        case "lait":
                            return "🥛";
                        case "poisson":
                            return "🐟"
                        default:
                            return "";
                    }
                }
                return <div className="allergenic">
                    <p onmouseover={() => showNote(true)} className="icon">{icon()}</p>
                    <p className="note">{ing}</p>
                </div>
            })}
        </div>
    )
}

export default Allergenic
