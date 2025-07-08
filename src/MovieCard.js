import React, { useState } from "react";

function MovieCard({ title, poster, rating }) {
  const [showDesc, setShowDesc] = useState(false);

  return (
    <div style={styles.card}>
      <img src={poster} alt={title} style={styles.img} />
      <h2>{title}</h2>
      <p>⭐ {rating}</p>

      <button onClick={() => setShowDesc(!showDesc)}>
        {showDesc ? "Hide" : "Show"} Description
      </button>

      {showDesc && <p>This is a cool movie about amazing things 🎬</p>}
    </div>
  );
}
const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    width: "200px",
    margin: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
  img: {
    width: "100%",
    borderRadius: "6px",
  },
};

export default MovieCard;
