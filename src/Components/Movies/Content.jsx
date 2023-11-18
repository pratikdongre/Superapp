import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Content = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const apiKey = '7919cbbb356453ff220fdebdada5f05e';
    const genreMap = {
      action: 28,
      adventure: 12,
      animation: 16,
      comedy: 35,
      crime: 80,
      documentary: 99,
      drama: 18,
      family: 10751,
      fantasy: 14,
      history: 36,
      horror: 27,
      music: 10402,
      mystery: 9648,
      romance: 10749,
      fiction: 878,
      thriller: 53,
      war: 10752,
      western: 37,
    };
    
    const genreId = genreMap[genre.toLowerCase()];

    if (!genreId) {
      console.error(`Genre "${genre}" not found in the genreMap.`);
      return;
    }

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results.splice(4, 4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [genre]);

  const handleClick = () => {
    navigate('/genre');
  };

  return (
    <>
      <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: '1.6rem', marginLeft: '3vw', color: 'white' }}>
        {genre}
      </p>
      <div style={{ gap: '0.2px', display: "flex", marginLeft: "3vw" }}>
        {movies.map((movie, id) => {
          return (
            <div key={id} style={{ width: "22vw", margin: "1rem" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                style={{ width: "18vw", height: "22vh", objectFit: "cover", borderRadius: "14px" }}
                alt={`Movie ${id}`}
              />
              <p style={{fontFamily: "'Roboto', sans-serif", fontWeight: 400, textAlign: "left", marginTop: "0.5rem", fontSize: "1.2  rem", color: "white" }}>
                {movie.title}
              </p>
            </div>
          );
        })}
      </div>
      
      <button
          style={{
            position:"fixed",
            fontSize:"22px",
            bottom: "0.2rem",
            right: "5.2rem",
            background: "green",
            border: "none",
            color: "white",
            padding: "10px 1.6rem",
            borderRadius: "20px"
          }}
          onClick={handleClick}
        >
          Category
        </button>
    </>
  );
};

export default Content;
