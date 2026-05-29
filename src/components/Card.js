import React from "react";
import "./Card.css";

<<<<<<< HEAD
function Card({ movie }) {
=======
function Card({ movie, onAddToFavorite, favoriteMovies }) {
  const isFavorite = favoriteMovies?.find((fav) => fav.imdbID === movie.imdbID);
  
  const defaultImage = "https://placehold.co/300x450/ffffff/7a007a?text=No+Poster";



>>>>>>> 361a417 (style: convert hardcoded px units to fluid vw and vh for responsiveness)
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
