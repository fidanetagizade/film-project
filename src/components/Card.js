import React from "react";
import "./Card.css";

function Card({ movie }) {
  return (
    
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-img" />

      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year"><strong>Year:</strong> {movie.Year}</p>
        <button className="fav-btn">+ Favorite</button>
      </div>
    </div>
  );
}

export default Card;
