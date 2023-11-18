import React from "react";
import Content from "../Components/Movies/Content";
import Logo from "../assets/profileSmall.png";

const Movies = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));

  return (
    <>
      <img
        src={Logo}
        alt={Logo}
        style={{
          position: "absolute",
          height: "5rem",
          width: "5rem",
          top: "3vh",
          right: "4vw",
          
        }}
      />
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
        }}
      >
        <p style={{ color: "green", fontSize: "4rem", margin: "1vw 3rem" }}>
          Super app
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            fontWeight: 400,
            fontSize: "2rem",
            margin: "3vw 5rem",
          }}
        >
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <Content genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
