import { useState } from 'react';
import './App.css';

function App() {
  const INITIAL_MOVIES = [
    {
      name: "Interstellar",
      pic: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      name: "RRR",
      pic: "https://stat1.bollywoodhungama.in/wp-content/uploads/2021/07/RRR.jpeg",
      description:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments. The film stars N. T. Rama Rao Jr., Ram Charan, Ajay Devgn, Alia Bhatt and Olivia Morris while Samuthirakani, Ray Stevenson and Alison Doody play supporting roles.",
    },
    {
      name: "3 idiots",
      pic: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description:
        "In college, Farhan and Raju form a great bond with Rancho due to his refreshing outlook. Years later, a bet gives them a chance to look for their long-lost friend whose existence seems rather elusive.",
    },
    {
      name: "Spider man far from home",
      pic: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg",
      description:
        "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
    },
  ];
  const [movies, setMovies] = useState(INITIAL_MOVIES);
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
