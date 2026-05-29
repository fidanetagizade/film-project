import React , {useState} from "react";
import "./ListPage.css";

function ListPage({ lists, onBack, onDeleteList }) {
    return (
        <div className="lists-page-container">

            <div className="movie-header-banner">Movie</div>

            

            <div className="lists-wrapper">

  
    {!lists || lists.length === 0 ? (
        <div className="empty-list-notice">
            <p className="notice-text">No favorite lists found yet.</p>
            <p className="notice-text">
                To create a list, click the <strong>"Movies"</strong> button below to go back to the home page and add your favorite movies.

            </p>
        </div>
    ) : (
     
        lists.map((box, index) => (
            <div key={index} className="list-card-box">
                <h2 className="list-card-title">{box.title}</h2>
                <button className="delete-list-btn" onClick={() => onDeleteList(index)}>✕</button>

                <div className="list-card-movies">
                    {box.movies && box.movies.map((film, fIndex) => (
                        <div key={fIndex} className="list-movie-row">
                            <span>{film.Title}</span>
                            <a 
                                href={`https://www.imdb.com/title/${film.imdbID}/`} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <button className="imdb-btn">IMDB</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        ))
    )}

</div>

            <button className="movies-back-btn" onClick={onBack}>
                Movies
            </button>
        </div>
    );
}

export default ListPage;