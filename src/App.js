import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://node-bbr.herokuapp.com/movies")
      .then(data => data.json())
      .then((mv) => setMovies(mv));
  }, []);

  return (
    <div className="App">
      {movies.map((movie) => {
        return (
          <div className="movie-container">
            <img height="250px" className="poster" src={movie.pic} alt={movie.name} />
            <h2>{movie.name}</h2>
            <p>{movie.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
