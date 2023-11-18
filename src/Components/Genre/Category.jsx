import React, { useState, useEffect } from 'react';
import styles from './select.module.css';
import { useNavigate } from 'react-router-dom';
import warning from '../../assets/warning.svg';

import action from '../../assets/action.png';
import drama from '../../assets/drama.png';
import fantasy from '../../assets/fantasy.png';
import fiction from '../../assets/fiction.png';
import horror from '../../assets/horror.png';
import music from '../../assets/music.png';
import romance from '../../assets/romance.png';
import thriller from '../../assets/thriller.png';
import western from '../../assets/western.png';

const genres = [
  { id: "Action", color: "#FF5209", image: action },
  { id: "Drama", color: "#D7A4FF", image: drama },
  { id: "Fantasy", color: "#FF4ADE", image: fantasy },
  { id: "Fiction", color: "#6CD061", image: fiction },
  { id: "Horror", color: "#7358FF", image: horror },
  { id: "Music", color: "#E61E32", image: music },
  { id: "Romance", color: "#11B800", image: romance },
  { id: "Thriller", color: "#84C2FF", image: thriller },
  { id: "Western", color: "#912500", image: western }
];

const CategoryComponent = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (selectedGenres.length < 3) {
      setLengthError(true);
      return;
    }
    setLengthError(false);
    window.localStorage.setItem("genres", JSON.stringify(selectedGenres));
    navigate("/browse");
  };

  const removeCategory = (category) => {
    setSelectedGenres(selectedGenres.filter(cat => cat !== category));
  };

  const getColor = (category) => {
    const genre = genres.find(genre => genre.id === category);
    return genre ? genre.color : "#4caf50"; 
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.title}>Super app</p>
        <p className={styles.heading}>Choose your entertainment category</p>
        <div className={styles.chipsContainer}>
          {selectedGenres.map((category, index) => (
            <div key={index} className={`${styles.chip}`} style={{ backgroundColor: getColor(category) }}>
              {category}
              <span className={styles.closeIcon} onClick={() => removeCategory(category)}>
                &times;
              </span>
            </div>
          ))}
        </div>
        {lengthError && (
          <div className={styles.error}>
            <img src={warning} alt="Warning" />
            <p>Minimum 3 categories required</p>
          </div>
        )}
      </div>
      <div className={styles.right}>
        {genres.map((data, id) => (
          <GenreBlock key={id} data={data} selectedGenres={selectedGenres} setGenres={setSelectedGenres} />
        ))}
      </div>
      <button className={styles.nextButton} onClick={handleSignUp}>Next Page</button>
    </div>
  );
};

const GenreBlock = ({ data, selectedGenres, setGenres }) => {
  const [isSelected, setIsSelected] = useState(selectedGenres.includes(data.id));

  const handleClick = () => {
    if (isSelected) {
      setGenres(selectedGenres.filter(genre => genre !== data.id));
    } else {
      setGenres([...selectedGenres, data.id]);
    }
    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(selectedGenres.includes(data.id));
  }, [data.id, selectedGenres]);

  return (
    <div
      onClick={handleClick}
      className={`${styles.genreBlock} ${isSelected ? styles.selected : ''}`}
      style={{ background: data.color }}
    >
      <p className={styles.id}>{data.id}</p>
      <img className={styles.img} src={data.image} alt={data.id} />
    </div>
  );
};

export default CategoryComponent;
