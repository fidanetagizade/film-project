<<<<<<< HEAD
=======
import React, { useState } from "react";
import "./Favorite.css";

function Favorite({ favoriteMovies, onRemoveFromFavorite, onCreateList, onShowLists, lists }) {
    const [listName, setListName] = useState("");

    
    const isLookDisabled = !lists || lists.length === 0;

    return (
        <div className="favorite-container">
            <div className="favorite-list">
                {favoriteMovies && favoriteMovies.map((item, index) => (
                    <div key={index} className="favorite-item">
                        {item.Title}
                        <button className="remove-btn" onClick={() => onRemoveFromFavorite(item.imdbID)}>✕</button>
                    </div>
                ))}
            </div>

            <input
                className="favorite-input"
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
            />

            <button
                className={`add-btn ${listName ? "active" : ""}`}
                disabled={!listName}
                onClick={() => {
                    onCreateList(listName);
                    setListName("");
                }}
            >
                Add To Favorite List
            </button>

            
            <button
                className={`look-btn ${!isLookDisabled ? "active" : ""}`}
                onClick={onShowLists}
                disabled={isLookDisabled}
            >
                Look At Favorite List
            </button>
        </div>
    );
}

export default Favorite;
>>>>>>> 361a417 (style: convert hardcoded px units to fluid vw and vh for responsiveness)
