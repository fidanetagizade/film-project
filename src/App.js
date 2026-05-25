import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Card from "./components/Card";
import "./App.css"

function App() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "29819e62";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=harry+potter&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((err) => console.log("Xəta baş verdi:", err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Filter />
      <div className="movies-container">
        {movies.map((item, index) => (
          <Card key={index} movie={item} />
        ))}
      </div>
    </div>
  );
}

export default App;

