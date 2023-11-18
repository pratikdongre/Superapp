import { useState } from "react";

const Notes = () => {
  const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")));

  const handleChange = (e) => {
    setText(e.target.value);
    window.localStorage.setItem("text", JSON.stringify(text));
  };

  return (
    <div style={{ position: 'absolute', background: "#F1C75B", height: "60.6vh", width: "24vw", borderRadius: "18px", padding: "4px " }}>
      <p style={{ color: "black", fontSize: "3rem", fontFamily: "'Roboto', sans-serif", fontWeight: 600, margin: '1rem 2rem' }}>All notes</p>
      <textarea style={{ width: "23.5vw", height: "48vh", margin: "0.1rem ", border: "none", background: "transparent", fontFamily: "'Roboto', sans-serif", fontWeight: 400 }} value={text} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Notes;
