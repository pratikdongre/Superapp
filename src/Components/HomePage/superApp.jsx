import React from 'react';
import BgImage from '../../assets/bg.png';

const SuperApp = () => {
  const containerStyle = {
    width: '50vw',
    height: '100vh',
    position: 'relative',
  };

  const bgImageStyle = {
    width: '100%',
    height: '100%',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '38vw',
    left: '6vw',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontWeight: 900,
    fontSize: '2.5rem',
  };

  return (
    <div style={containerStyle}>
      <img src={BgImage} alt="Background" style={bgImageStyle} />
      <div style={textOverlayStyle}>
        <p>Discover new things on <br />SuperApp</p>
      </div>
    </div>
  );
};

export default SuperApp;
