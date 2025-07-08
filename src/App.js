import React from "react";
import MovieCard from "./MovieCard";
import CounterApp from "./CounterApp";
function App() {
  const movies = [
    {
      title: "Inception",
      poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY450_.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
      rating: 8.6,
    },
    {
      title: "The Dark Knight",
      poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_SY450_.jpg",
      rating: 9.0,
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CounterApp />;
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          poster={movie.poster}
          rating={movie.rating}
        />
      ))}
      
    </div>
  );
}

export default App;
