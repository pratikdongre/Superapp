import Profile from '../../assets/profileBig.png';

const Info = () => {
  const userData = JSON.parse(window.localStorage.getItem("registrationData")) ?? {};
  const genre = JSON.parse(window.localStorage.getItem("genres")) ?? [];

  return (
    <div style={{ width: "34vw", background: '#5746EA', borderRadius: "12px", padding: "4px 2px", display: "flex", gap: "0.6rem" }}>
      <div>
        <img src={Profile} style={{ height: "34vh", width: "8vw", margin: "1.4rem 1.4rem 0.6rem" }} alt='profile' />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ color: 'white', fontSize: "1.6rem", marginTop: '2rem', fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>{userData.Name}</p>
        <p style={{ color: 'white', fontSize: "1.6rem", marginTop: '0.2rem', lineHeight: "1.2%", fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}>{userData.email}</p>
        <p style={{ color: 'white', fontSize: "2.3rem", marginTop: '1.4rem', lineHeight: "1.5%", fontFamily: "'Roboto', sans-serif", fontWeight: 500 }}>{userData.UserName}</p>
        <Chips categories={genre} color={"#9F94FF"} />
      </div>
    </div>
  );
}

const Chips = ({ color, categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <button style={{ background: `${color}`, height: "46px", width: "8.2vw", color: "white", border: "none", borderRadius: "13px", margin: "10px 0.3rem" }}>{category}</button>
      ))}
    </div>
  );
}

export default Info;
