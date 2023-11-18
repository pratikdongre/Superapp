import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faCompress } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const strTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
    setTime(strTime);

    const yyyy = currentDate.getFullYear();
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const formattedToday = dd + '-' + mm + '-' + yyyy;
    setDate(formattedToday);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "1dedfc0f2d3644c3ae2171611230109";
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`);
        if (response.ok) {
          const data = await response.json();
          setWeather(data);
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, width: "34vw", minHeight: "20vh", background: '#101744', borderRadius: "12px", marginTop: "15px" }}>
      <div style={{ height: "7vh", background: "#FF4ADE", borderRadius: "12px", color: "white", display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize: "2rem" }}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div>
        {weather ? (
          <div style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400, display: "flex", color: "white", alignItems: "center", justifyContent: "space-evenly" }}>
            <div>
              <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
              <p>{weather.current.condition.text}</p>
            </div>
            <div>
              <p style={{ fontSize: "24px", marginTop: "30px" }}><span>{weather.current.temp_c}</span>°C</p>
              <p> <FontAwesomeIcon icon={faCompress} /> {weather.current.pressure_mb} mbar pressure</p>
            </div>
            <div>
              <p style={{ marginBottom: "12px", fontSize: "24px", marginTop: "20px" }}><FontAwesomeIcon icon={faWind} />  {weather.current.wind_kph} km/h wind</p>
              <p> <FontAwesomeIcon icon={faTint} />  {weather.current.humidity}  % humidity</p>
            </div>
          </div>
        ) : <></>}
      </div>
    </div>
  );
};

export default Weather;
