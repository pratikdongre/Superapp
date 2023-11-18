import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual News API key
        const apiKey = "dc7c99e4f31349ec88b6b09ec3b48820";
        const apiUrl = `http://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setNews(data.articles[0]);
        } else {
          setNews(null);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    const date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    setTime(strTime);
  }, []);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const formattedToday = dd + "-" + mm + "-" + yyyy;
    setDate(formattedToday);
  }, []);

  if (!news) {
    return null;
  }

  return (
    <div style={{ borderRadius: "12px", padding: "0.1rem 25rem" }}>
      {news.urlToImage && (
        <img src={news.urlToImage} style={{ height: "60vh", borderRadius: "12px", width: "25vw" }} alt={news.title} />
      )}
      <div style={{ height: "25vh", borderRadius: "12px", width: "24.5vw", background: "white", fontSize: "1.4rem", fontFamily: "'Roboto', sans-serif", fontWeight: 400, padding: "6px" }}>
        {news.description}
      </div>
      <div style={{ position: "absolute", width: "25vw", height: "18vh", background: "rgba(0, 0, 0, 0.74)", top: "45.2vh", padding: "24px", fontFamily: "'Roboto', sans-serif", fontWeight: 500, boxSizing: "border-box" }}>
        <p style={{ color: "white", fontSize: "1rem", marginBottom: "10px" }}>{news.title}</p>
        <span style={{ color: "white", fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: "1.2rem", marginRight: "10px" }}>{date}</span>
        <span style={{ color: "white", fontSize: "1.2rem", fontFamily: "'Roboto', sans-serif", fontWeight: 600, marginRight: "10px" }}>{time}</span>
      </div>
    </div>
  );
};

export default News;
