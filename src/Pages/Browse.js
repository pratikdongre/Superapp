import React from 'react';
import Profile from '../Components/Browse/Profile';
import Weather from '../Components/Browse/Weather';
import Notes from '../Components/Browse/Notes';
import News from '../Components/Browse/News';
import Timer from '../Components/Browse/Timer';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/movies');
  };

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "3vh 3vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 1 }}>
          <Profile />
          <Weather />
          <Timer />
        </div>
        <div style={{ flex: 1 }}>
          <Notes />
          <News />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "1vh",
          right: "8vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "12px 2.5rem",
          borderRadius: "18px"
        }}
        onClick={handleClick}
      >
        Browse
      </button>
    </div>
  );
}

export default Browse;
